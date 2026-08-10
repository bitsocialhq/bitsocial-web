#!/usr/bin/env python3
"""Structural validator for translated Docusaurus docs.

Compares each locale copy under docs/i18n/<locale>/docusaurus-plugin-content-docs/current/
against its English source in docs/ and reports structural drift: code blocks that were
translated, dropped links, mangled contract addresses, missing sections, and files that
were copied without being translated.

Usage:
  python3 scripts/check-docs-translations.py                      # every locale, every page
  python3 scripts/check-docs-translations.py --locales it de      # some locales
  python3 scripts/check-docs-translations.py --paths browser-p2p.md
  python3 scripts/check-docs-translations.py --json               # machine-readable
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
from collections import Counter
from difflib import SequenceMatcher
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
DOCS_ROOT = REPO_ROOT / "docs"
DOCS_I18N_ROOT = DOCS_ROOT / "i18n"
CURRENT_SUBPATH = Path("docusaurus-plugin-content-docs") / "current"

# Frontmatter keys whose values must survive translation byte-for-byte.
NON_TRANSLATABLE_FRONTMATTER = {"sidebar_position", "slug", "id", "tags", "draft", "hide_title"}
TRANSLATABLE_FRONTMATTER = {"title", "description", "sidebar_label"}

# Locales whose text should contain script outside the Latin range once translated.
NON_LATIN_SCRIPT_LOCALES = {
    "ar": "ARABIC",
    "bn": "BENGALI",
    "el": "GREEK",
    "fa": "ARABIC",
    "he": "HEBREW",
    "hi": "DEVANAGARI",
    "ja": "CJK",
    "ko": "HANGUL",
    "mr": "DEVANAGARI",
    "ru": "CYRILLIC",
    "te": "TELUGU",
    "th": "THAI",
    "uk": "CYRILLIC",
    "ur": "ARABIC",
    "zh": "CJK",
}

# Above this similarity to the English source, a Latin-script translation is almost
# certainly an untranslated copy.
COPY_SIMILARITY_THRESHOLD = 0.93

# Advisory only: these are frequently legitimate (brand names such as "Seedit" or
# "Mintpass" stay in English), so they are reported but do not fail the run.
WARNING_KINDS = {"frontmatter-untranslated"}

FENCE_RE = re.compile(r"^(\s*)(```|~~~)(.*)$")
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)\s]+)")
BARE_URL_RE = re.compile(r"(?<![(<])\bhttps?://[^\s)<>\]]+")
INLINE_CODE_RE = re.compile(r"`([^`\n]+)`")
HEX_RE = re.compile(r"\b0x[0-9a-fA-F]{6,}\b")
HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$")
ADMONITION_RE = re.compile(r"^:::")
MDX_IMPORT_RE = re.compile(r'^\s*import\s+.+?\s+from\s+["\'].+["\'];?\s*$')
MDX_COMPONENT_RE = re.compile(r"^\s*</?[A-Z][A-Za-z0-9_.]*(?:\s+[^>]*)?/?>\s*$")


def split_frontmatter(text: str) -> tuple[dict[str, str], str]:
    lines = text.splitlines()
    if lines[:1] != ["---"]:
        return {}, text
    try:
        end = lines.index("---", 1)
    except ValueError:
        return {}, text
    frontmatter: dict[str, str] = {}
    for line in lines[1:end]:
        match = re.match(r"^([A-Za-z_][A-Za-z0-9_]*):(.*)$", line)
        if match:
            frontmatter[match.group(1)] = match.group(2).strip()
    return frontmatter, "\n".join(lines[end + 1 :])


def strip_code_blocks(body: str) -> tuple[str, list[str]]:
    """Return (prose, code_block_bodies). Fence info strings stay with the prose."""
    prose_lines: list[str] = []
    blocks: list[str] = []
    current: list[str] | None = None
    closing: str | None = None

    for line in body.splitlines():
        match = FENCE_RE.match(line)
        if current is None:
            if match:
                closing = match.group(2)
                current = []
                prose_lines.append(line)
            else:
                prose_lines.append(line)
        else:
            if match and match.group(2) == closing and not match.group(3).strip():
                blocks.append("\n".join(current))
                current = None
                closing = None
                prose_lines.append(line)
            else:
                current.append(line)

    if current is not None:
        blocks.append("\n".join(current))

    return "\n".join(prose_lines), blocks


def dominant_script(text: str) -> set[str]:
    scripts: set[str] = set()
    for char in text:
        if not char.isalpha():
            continue
        try:
            name = unicodedata.name(char)
        except ValueError:
            continue
        for script in ("ARABIC", "BENGALI", "GREEK", "HEBREW", "DEVANAGARI", "HANGUL", "CYRILLIC", "TELUGU", "THAI"):
            if name.startswith(script):
                scripts.add(script)
        if name.startswith("CJK"):
            scripts.add("CJK")
    return scripts


def heading_signature(prose: str) -> list[int]:
    return [len(match.group(1)) for line in prose.splitlines() if (match := HEADING_RE.match(line))]


def translatable_prose(prose: str) -> str:
    """Remove MDX scaffolding that is intentionally identical in every locale."""
    return "\n".join(
        line
        for line in prose.splitlines()
        if not MDX_IMPORT_RE.match(line) and not MDX_COMPONENT_RE.match(line)
    ).strip()


def multiset_delta(expected: list[str], actual: list[str]) -> tuple[list[str], list[str]]:
    """Return missing and unexpected values while preserving duplicate counts."""
    return list((Counter(expected) - Counter(actual)).elements()), list(
        (Counter(actual) - Counter(expected)).elements()
    )


def check_pair(en_path: Path, tr_path: Path, locale: str, page: str) -> list[dict[str, str]]:
    issues: list[dict[str, str]] = []

    def add(kind: str, detail: str) -> None:
        issues.append({"locale": locale, "page": page, "kind": kind, "detail": detail})

    en_text = en_path.read_text()
    tr_text = tr_path.read_text()

    en_fm, en_body = split_frontmatter(en_text)
    tr_fm, tr_body = split_frontmatter(tr_text)

    if en_fm and not tr_fm:
        add("frontmatter-missing", "translated file has no frontmatter block")

    missing_frontmatter = set(en_fm) - set(tr_fm)
    # Docusaurus inherits the default locale's root slug for localized index pages.
    # Repeating it in every translation is optional and does not change the route.
    if page == "index.mdx" and en_fm.get("slug") == "/":
        missing_frontmatter.discard("slug")
    for key in sorted(missing_frontmatter):
        add("frontmatter-key-missing", f"missing key: {key}")

    for key in sorted(NON_TRANSLATABLE_FRONTMATTER & set(en_fm) & set(tr_fm)):
        if en_fm[key] != tr_fm[key]:
            add("frontmatter-value-changed", f"{key}: {en_fm[key]!r} -> {tr_fm[key]!r}")

    for key in sorted(TRANSLATABLE_FRONTMATTER & set(en_fm) & set(tr_fm)):
        if en_fm[key] and en_fm[key] == tr_fm[key] and locale != "en":
            add("frontmatter-untranslated", f"{key} identical to English: {en_fm[key]!r}")

    en_prose, en_blocks = strip_code_blocks(en_body)
    tr_prose, tr_blocks = strip_code_blocks(tr_body)

    if len(en_blocks) != len(tr_blocks):
        add("code-block-count", f"{len(en_blocks)} in English, {len(tr_blocks)} in translation")
    else:
        for index, (en_block, tr_block) in enumerate(zip(en_blocks, tr_blocks)):
            if en_block != tr_block:
                add("code-block-modified", f"fenced block #{index + 1} differs from English")

    # Compared as multisets: sentence reordering may legitimately move a link.
    en_links = sorted(LINK_RE.findall(en_prose))
    tr_links = sorted(LINK_RE.findall(tr_prose))
    if en_links != tr_links:
        missing, extra = multiset_delta(en_links, tr_links)
        detail = []
        if missing:
            detail.append(f"missing {missing}")
        if extra:
            detail.append(f"unexpected {extra}")
        add("link-targets", "; ".join(detail) or "link multiset drift")

    en_urls = sorted(BARE_URL_RE.findall(en_prose))
    tr_urls = sorted(BARE_URL_RE.findall(tr_prose))
    if en_urls != tr_urls:
        add("bare-urls", f"{en_urls} vs {tr_urls}")

    en_code = sorted(INLINE_CODE_RE.findall(en_prose))
    tr_code = sorted(INLINE_CODE_RE.findall(tr_prose))
    if en_code != tr_code:
        missing, extra = multiset_delta(en_code, tr_code)
        detail = []
        if missing:
            detail.append(f"missing {missing}")
        if extra:
            detail.append(f"unexpected {extra}")
        add("inline-code", "; ".join(detail) or "inline code drift")

    en_hex = sorted(HEX_RE.findall(en_text))
    tr_hex = sorted(HEX_RE.findall(tr_text))
    if en_hex != tr_hex:
        add("hex-address", f"{en_hex} vs {tr_hex}")

    en_headings = heading_signature(en_prose)
    tr_headings = heading_signature(tr_prose)
    if en_headings != tr_headings:
        add("heading-structure", f"levels {en_headings} vs {tr_headings}")

    en_rows = sum(1 for line in en_prose.splitlines() if line.lstrip().startswith("|"))
    tr_rows = sum(1 for line in tr_prose.splitlines() if line.lstrip().startswith("|"))
    if en_rows != tr_rows:
        add("table-rows", f"{en_rows} vs {tr_rows}")

    en_adm = sum(1 for line in en_prose.splitlines() if ADMONITION_RE.match(line.lstrip()))
    tr_adm = sum(1 for line in tr_prose.splitlines() if ADMONITION_RE.match(line.lstrip()))
    if en_adm != tr_adm:
        add("admonitions", f"{en_adm} vs {tr_adm}")

    # Untranslated-copy detection.
    en_translatable = translatable_prose(en_prose)
    tr_translatable = translatable_prose(tr_prose)
    expected_script = NON_LATIN_SCRIPT_LOCALES.get(locale)
    if not en_translatable and not tr_translatable:
        pass
    elif expected_script:
        if expected_script not in dominant_script(tr_translatable):
            add("untranslated", f"no {expected_script} script found in translated prose")
    else:
        ratio = SequenceMatcher(None, en_translatable, tr_translatable).ratio()
        if ratio >= COPY_SIMILARITY_THRESHOLD:
            add("untranslated", f"prose is {ratio:.0%} identical to English")

    return issues


def collect_pages(paths: list[str] | None) -> list[str]:
    if paths:
        return paths
    pages: list[str] = []
    for path in sorted(DOCS_ROOT.rglob("*")):
        if path.suffix not in {".md", ".mdx"} or not path.is_file():
            continue
        relative = path.relative_to(DOCS_ROOT)
        parts = relative.parts
        if parts[0] in {"i18n", "node_modules", "agent-runs"}:
            continue
        if relative.name in {"AGENTS.md", "README.md"}:
            continue
        pages.append(str(relative))
    return pages


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--locales", nargs="+", help="Locales to check (default: every locale directory).")
    parser.add_argument("--paths", nargs="+", help="Doc paths relative to docs/ (default: every page).")
    parser.add_argument("--json", action="store_true", help="Emit JSON instead of text.")
    parser.add_argument("--allow-missing", action="store_true", help="Do not report absent translations.")
    args = parser.parse_args()

    locales = args.locales or sorted(
        entry.name for entry in DOCS_I18N_ROOT.iterdir() if entry.is_dir() and entry.name != "en"
    )
    pages = collect_pages(args.paths)

    issues: list[dict[str, str]] = []
    checked = 0

    for locale in locales:
        for page in pages:
            en_path = DOCS_ROOT / page
            tr_path = DOCS_I18N_ROOT / locale / CURRENT_SUBPATH / page
            if not en_path.exists():
                issues.append({"locale": locale, "page": page, "kind": "source-missing", "detail": str(en_path)})
                continue
            if not tr_path.exists():
                if not args.allow_missing:
                    issues.append({"locale": locale, "page": page, "kind": "translation-missing", "detail": str(tr_path)})
                continue
            checked += 1
            issues.extend(check_pair(en_path, tr_path, locale, page))

    errors = [issue for issue in issues if issue["kind"] not in WARNING_KINDS]
    warnings = [issue for issue in issues if issue["kind"] in WARNING_KINDS]

    if args.json:
        print(json.dumps({"checked": checked, "errors": errors, "warnings": warnings}, ensure_ascii=False, indent=2))
    else:
        by_locale: dict[str, list[dict[str, str]]] = {}
        for issue in errors:
            by_locale.setdefault(issue["locale"], []).append(issue)
        for locale in sorted(by_locale):
            print(f"\n{locale}: {len(by_locale[locale])} error(s)")
            for issue in by_locale[locale]:
                print(f"  [{issue['kind']}] {issue['page']}: {issue['detail']}")
        print(
            f"\nChecked {checked} file(s); {len(errors)} error(s) across {len(by_locale)} locale(s), "
            f"{len(warnings)} advisory warning(s)."
        )

    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
