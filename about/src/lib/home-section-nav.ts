import { getScrollBehavior } from "@/lib/utils";

/**
 * Home sections whose deep links need the layout-settling correction pass in `pages/home.tsx`.
 * `#mailing-list` is deliberately absent: it is routed through `lib/mailing-list-nav.ts`, and
 * registering it here would run two competing scroll loops against the same target.
 */
export const HOME_SECTION_HASHES = new Set([
  "#problem",
  "#core-features",
  "#browser-peer",
  "#decentralized",
  "#arbitrary-challenges",
  "#text-only-protocol",
  "#adoption-thesis",
  "#master-plan",
  "#faq",
]);

export function scrollToHomeSectionHash(hash: string) {
  const sectionId = hash.slice(1);
  if (!sectionId) return;

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: getScrollBehavior(),
    block: "start",
  });
}
