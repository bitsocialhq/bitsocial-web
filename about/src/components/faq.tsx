import { m, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToHomeSectionHash } from "@/lib/home-section-nav";
import { goToMailingListSection, MAILING_LIST_HASH } from "@/lib/mailing-list-nav";

type FaqId =
  | "problem"
  | "core-features"
  | "browser-peer"
  | "decentralized"
  | "arbitrary-challenges"
  | "text-only-protocol"
  | "adoption-thesis"
  | "master-plan"
  | "mailing-list";

/**
 * Static i18n keys (avoid dynamic `t(\`...\${id}\`)` for tooling). Ids are byte-identical to the
 * anchor ids they scroll to, and `sectionLabel` reuses the destination's own eyebrow string so the
 * row label matches what the reader lands on and no new label needs translating.
 */
const FAQ_I18N: Record<FaqId, { hint: string; question: string; sectionLabel: string }> = {
  problem: {
    hint: "faq.items.problem.hint",
    question: "faq.items.problem.question",
    sectionLabel: "problem.sectionLabel",
  },
  "core-features": {
    hint: "faq.items.core-features.hint",
    question: "faq.items.core-features.question",
    sectionLabel: "features.sectionLabel",
  },
  "browser-peer": {
    hint: "faq.items.browser-peer.hint",
    question: "faq.items.browser-peer.question",
    sectionLabel: "browserPeer.sectionLabel",
  },
  decentralized: {
    hint: "faq.items.decentralized.hint",
    question: "faq.items.decentralized.question",
    sectionLabel: "sanctuary.sectionLabel",
  },
  "arbitrary-challenges": {
    hint: "faq.items.arbitrary-challenges.hint",
    question: "faq.items.arbitrary-challenges.question",
    sectionLabel: "arbitraryChallenges.sectionLabel",
  },
  "text-only-protocol": {
    hint: "faq.items.text-only-protocol.hint",
    question: "faq.items.text-only-protocol.question",
    sectionLabel: "textOnlyProtocol.sectionLabel",
  },
  "adoption-thesis": {
    hint: "faq.items.adoption-thesis.hint",
    question: "faq.items.adoption-thesis.question",
    sectionLabel: "adoptionThesis.sectionLabel",
  },
  "master-plan": {
    hint: "faq.items.master-plan.hint",
    question: "faq.items.master-plan.question",
    sectionLabel: "masterPlan.sectionLabel",
  },
  "mailing-list": {
    hint: "faq.items.mailing-list.hint",
    question: "faq.items.mailing-list.question",
    // The newsletter section renders no eyebrow, so `mailingList` has no `sectionLabel` to reuse.
    sectionLabel: "nav.newsletter",
  },
};

const FAQ_IDS: FaqId[] = [
  "problem",
  "core-features",
  "browser-peer",
  "decentralized",
  "arbitrary-challenges",
  "text-only-protocol",
  "adoption-thesis",
  "master-plan",
  "mailing-list",
];

/**
 * `preventDefault()` suppresses the browser's native focus move, so without this a keyboard user is
 * scrolled back up the page while focus stays on the row and the next Tab yanks them down again.
 */
function restoreFocusTo(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
  target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
}

export default function Faq() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const reveal = (y: number, delay = 0, duration = 0.6) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration, delay },
        };
  // Cards reveal with translateY only. A backdrop-filter is suppressed while an
  // ancestor animates opacity, which would blank the glass surface mid-reveal.
  const revealCard = (y: number, delay = 0, duration = 0.6) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { y },
          whileInView: { y: 0 },
          viewport: { once: true },
          transition: { duration, delay },
        };

  const handleQuestionClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: FaqId) => {
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();

    const hash = `#${targetId}`;
    if (hash === MAILING_LIST_HASH) {
      goToMailingListSection(location.pathname, location.hash, navigate);
      restoreFocusTo(targetId);
      return;
    }

    // `pushState` + a direct scroll rather than `navigate()`: the settle effect in `pages/home.tsx`
    // is keyed on `location.hash`, so re-clicking the current row would not scroll at all, and a
    // hash change would run its correction pass on top of this scroll as a visible double jump.
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${hash}`,
    );
    scrollToHomeSectionHash(hash);
    restoreFocusTo(targetId);
  };

  return (
    // Reduced top pad: the mailing list above already carries `py-20 md:py-28`.
    <section className="px-6 pt-8 pb-16 md:pt-10 md:pb-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-6xl">
        <div id="faq" data-home-section-label className="scroll-mt-[99px] md:scroll-mt-[103px]">
          <m.div
            {...reveal(14, 0, 0.5)}
            className="mb-6 block text-center text-xs font-display uppercase tracking-[0.2em] text-muted-foreground/75 dark:text-muted-foreground/70 md:text-sm"
          >
            <a
              href="#faq"
              className="rounded-md transition-[color,box-shadow] duration-300 dark:hover:text-muted-foreground/82"
            >
              {t("faq.sectionLabel")}
            </a>
          </m.div>
        </div>

        <m.h2
          id="faq-title"
          {...reveal(20, 0.1)}
          className="mb-6 text-center text-4xl font-display font-semibold leading-[1.1] text-balance text-muted-foreground md:text-6xl lg:text-7xl"
        >
          {t("faq.title")}
        </m.h2>

        <m.p
          {...reveal(20, 0.2)}
          className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-balance text-muted-foreground md:text-lg"
        >
          {t("faq.supporting")}
        </m.p>

        <m.nav
          {...revealCard(20, 0.25)}
          aria-label={t("faq.navLabel")}
          className="mx-auto max-w-3xl"
        >
          {/* No `overflow-hidden`: the focus ring is an outset box-shadow and would be clipped. */}
          <ol className="glass-card divide-y divide-border/50 px-2 py-1 md:px-3 md:py-2">
            {FAQ_IDS.map((id, index) => {
              const keys = FAQ_I18N[id];

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(event) => handleQuestionClick(event, id)}
                    className="group flex items-start gap-4 rounded-2xl px-5 py-4 md:gap-5 md:px-7 md:py-5"
                  >
                    {/* Reading order comes from the <ol>, so the painted ordinal is decoration. */}
                    <span
                      aria-hidden="true"
                      className="shrink-0 pt-0.5 font-display text-xs font-semibold tabular-nums text-muted-foreground/45 transition-colors duration-300 group-hover:text-blue-glow group-focus-visible:text-blue-glow motion-reduce:transition-none md:pt-1 md:text-sm"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex min-w-0 flex-1 flex-col gap-2 md:flex-row md:items-start md:gap-6">
                      <span className="min-w-0 md:flex-1">
                        <span className="block font-display text-base font-semibold text-balance text-foreground/85 transition-colors duration-300 group-hover:text-foreground group-focus-visible:text-foreground motion-reduce:transition-none md:text-lg">
                          {t(keys.question)}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {t(keys.hint)}
                        </span>
                      </span>

                      <span className="flex shrink-0 items-center gap-1.5 font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/65 transition-colors duration-300 group-hover:text-blue-glow group-focus-visible:text-blue-glow motion-reduce:transition-none md:w-40 md:justify-end md:pt-1 md:text-end">
                        <ArrowUp
                          className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                          aria-hidden="true"
                        />
                        <span className="sr-only">{t("faq.answeredIn")} </span>
                        {t(keys.sectionLabel)}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </m.nav>
      </div>
    </section>
  );
}
