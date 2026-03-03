"use client";

import {
  ClipboardList,
  CalendarDays,
  Palette,
  Code2,
  Sparkles,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const steps: Array<{
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, público e objetivos. Definimos em conjunto o escopo e as prioridades.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Planejamento",
    description:
      "Arquitetura da informação, conteúdo e cronograma. Você sabe exatamente o que vai receber e quando.",
    icon: CalendarDays,
  },
  {
    step: "03",
    title: "Design",
    description:
      "Criação visual alinhada à conversão e à sua marca. Cada etapa é apresentada para sua aprovação.",
    icon: Palette,
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description:
      "Construção do site com qualidade profissional, rápido e adaptado a celulares e tablets, conforme combinado no escopo.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Otimização",
    description:
      "Ajustes para visibilidade em buscas, velocidade de carregamento e formulários e chamadas que incentivam contato ou compra.",
    icon: Sparkles,
  },
  {
    step: "06",
    title: "Lançamento",
    description:
      "Publicação, testes finais e suporte pós-entrega. Acompanhamento para que tudo funcione como planejado.",
    icon: Rocket,
  },
];

export function Metodologia() {
  return (
    <section id="metodologia" className={sectionClass} aria-labelledby="heading-metodologia">
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-metodologia" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Nossa metodologia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            Um processo tranquilo, com etapas claras. Você sempre sabe em que pé está e o que vem a seguir.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={index}
                variant={index % 2 === 0 ? "up" : "scale"}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition-all duration-200 hover:border-sky-500/20 hover:bg-white/10 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold tabular-nums text-white/25">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                    {item.description}
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
