"use client";

import { ScrollToButton } from "@/components/scroll-to-section";
import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const plans = [
  {
    name: "Landing page",
    benefit: "Ideal para gerar leads rápidos.",
    description: "Campanhas, lançamentos e captação de leads com foco em conversão.",
    features: [
      "Domínio incluso (se você não tiver)",
      "SEO otimizado para Google",
      "Design único e responsivo",
      "Formulário de contato",
      "Site rápido e seguro (SSL)",
      "Suporte 30 dias",
    ],
    price: "A partir de",
    value: "R$ 1.500",
    highlighted: false,
  },
  {
    name: "Site institucional",
    benefit: "Ideal para consolidar autoridade.",
    description: "Presença profissional com várias páginas e gestão de conteúdo.",
    features: [
      "Domínio incluso (se você não tiver)",
      "SEO avançado + meta tags",
      "Até 8 páginas + CMS",
      "Analytics integrado",
      "SSL e suporte 30 dias",
    ],
    price: "A partir de",
    value: "R$ 2.500",
    highlighted: true,
  },
  {
    name: "Projeto completo",
    benefit: "Ideal para empresas que querem escalar.",
    description: "Site + identidade visual e estratégia digital integrados.",
    features: [
      "Domínio incluso (se você não tiver)",
      "SEO completo + estratégia",
      "Site sob medida + logo",
      "Identidade visual",
      "Consultoria digital",
      "Suporte 90 dias",
    ],
    price: "Sob consulta",
    value: "",
    highlighted: false,
  },
];

export function Precos() {
  return (
    <section
      id="precos"
      className="relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24"
      aria-labelledby="heading-precos"
    >
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="fadeScale" duration={0.7} className="text-center">
          <h2 id="heading-precos" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Preços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            Investimento transparente, com escopo e benefícios claros para cada tipo de projeto. Nossos clientes priorizam resultado e seriedade. O valor está na entrega e no acompanhamento, não apenas no preço inicial.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3 md:items-start">
          {plans.map((plan, index) => (
            <StaggerItem
              key={index}
              variant={index === 0 ? "left" : index === 1 ? "scale" : "right"}
            >
              <article
                className={`relative flex flex-col rounded-2xl border p-6 transition-colors sm:p-8 ${
                  plan.highlighted
                    ? "border-sky-500/25 bg-sky-500/5 md:h-[38rem]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] md:h-[34rem]"
                }`}
              >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-0.5 text-xs font-medium text-sky-200">
                  Mais escolhido
                </span>
              )}
              <p className="text-sm font-semibold text-white/90">
                {plan.benefit}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                {plan.description}
              </p>
              <div className="mt-6">
                {plan.value ? (
                  <>
                    <p className="text-sm text-neutral-500">{plan.price}</p>
                    <p className="text-2xl font-bold text-white sm:text-3xl">
                      {plan.value}
                    </p>
                  </>
                ) : (
                  <p className="text-xl font-semibold text-white">{plan.price}</p>
                )}
              </div>
              <ul className="mt-6 min-h-0 flex-1 space-y-3 border-t border-white/10 pt-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ScrollToButton
                  sectionId="contato"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full justify-center py-2.5 text-sm"
                >
                  Solicitar orçamento
                </ScrollToButton>
              </div>
            </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
