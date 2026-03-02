"use client";

import { ScrollToButton } from "@/components/scroll-to-section";
import { AnimateInView } from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

type CtaStripProps = {
  id?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primarySectionId?: string;
  secondarySectionId?: string;
  variant?: "default" | "compact";
};

export function CtaStrip({
  id = "cta",
  title,
  subtitle,
  primaryLabel = "Entrar em contato",
  secondaryLabel = "Ver serviços",
  primarySectionId = "contato",
  secondarySectionId = "servicos",
  variant = "default",
}: CtaStripProps) {
  return (
    <section id={id} className={sectionClass}>
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
              {subtitle}
            </p>
          )}
          <div
            className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 ${variant === "compact" ? "sm:mt-6" : "sm:mt-10"}`}
          >
            <ScrollToButton
              sectionId={primarySectionId}
              variant="primary"
              className="w-full max-w-xs cursor-pointer px-6 py-3 text-base sm:max-w-none sm:w-auto"
            >
              {primaryLabel}
            </ScrollToButton>
            <ScrollToButton
              sectionId={secondarySectionId}
              variant="secondary"
              className="w-full max-w-xs cursor-pointer px-6 py-3 text-base sm:max-w-none sm:w-auto"
            >
              {secondaryLabel}
            </ScrollToButton>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
