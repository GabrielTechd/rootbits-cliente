"use client";

import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const services = [
  {
    title: "Criação de sites",
    description:
      "Sites institucionais, landing pages e e-commerce com foco em performance, SEO e experiência do usuário.",
  },
  {
    title: "Design & identidade visual",
    description:
      "Logo, manual de marca, paleta de cores e peças gráficas para sua marca ser reconhecida.",
  },
  {
    title: "Consultoria digital",
    description:
      "Estratégia e planejamento para sua presença online, do diagnóstico à implementação.",
  },
  {
    title: "Branding",
    description:
      "Desenvolvimento de marcas sólidas que transmitem valor e se conectam ao seu público.",
  },
];

export function Servicos() {
  return (
    <section
      id="servicos"
      className="relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            O que fazemos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            Do primeiro contato ao lançamento, com foco em conversão e em resultados mensuráveis.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">
            Ideal para gestores de PMEs, profissionais liberais e negócios que priorizam presença digital com resultado mensurável, não apenas um site, mas um canal que trabalha a seu favor.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <StaggerItem
              key={index}
              variant={index % 2 === 0 ? "up" : "scale"}
              className="h-full"
            >
              <article
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04] sm:p-6 lg:p-7"
              >
                <span className="text-2xl font-bold text-white/20 transition-colors group-hover:text-white/40 sm:text-3xl">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                  {service.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
