"use client";

import { Globe, Palette, Lightbulb, BadgeCheck } from "lucide-react";
import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const services: Array<{
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    title: "Criação de sites",
    description:
      "Sites institucionais, landing pages e e-commerce com foco em performance, SEO e experiência do usuário. Rápidos, responsivos e pensados para conversão.",
    icon: Globe,
  },
  {
    title: "Design e identidade visual",
    description:
      "Abordagem centrada na sua marca: logo, manual de marca, paleta de cores e peças gráficas para que sua empresa seja reconhecida no mercado.",
    icon: Palette,
  },
  {
    title: "Consultoria digital",
    description:
      "Estratégia e planejamento para sua presença online, do diagnóstico à implementação. Ajudamos você a priorizar o que entrega mais valor.",
    icon: Lightbulb,
  },
  {
    title: "Branding",
    description:
      "Desenvolvimento de marcas sólidas que transmitem valor e se conectam ao seu público. Nome, história e visual alinhados ao seu posicionamento.",
    icon: BadgeCheck,
  },
];

export function Servicos() {
  return (
    <section
      id="servicos"
      className="relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24"
      aria-labelledby="heading-servicos"
    >
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-servicos" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Veja os nossos serviços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            Do conceito ao lançamento, cuidamos da sua solução de ponta a ponta. Para PMEs e negócios que buscam presença digital com resultados.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={index}
                variant={index % 2 === 0 ? "up" : "scale"}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-sky-500/20 hover:bg-white/10 sm:p-6 lg:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
