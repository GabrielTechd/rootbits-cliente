"use client";

import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, público e objetivos. Definimos em conjunto o escopo e as prioridades.",
  },
  {
    step: "02",
    title: "Planejamento",
    description:
      "Arquitetura da informação, conteúdo e cronograma. Você sabe exatamente o que vai receber e quando.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Criação visual alinhada à conversão e à sua marca. Cada etapa é apresentada para sua aprovação.",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description:
      "Construção do site com qualidade profissional, rápido e adaptado a celulares e tablets, conforme combinado no escopo.",
  },
  {
    step: "05",
    title: "Otimização",
    description:
      "Ajustes para visibilidade em buscas, velocidade de carregamento e formulários e chamadas que incentivam contato ou compra.",
  },
  {
    step: "06",
    title: "Lançamento",
    description:
      "Publicação, testes finais e suporte pós-entrega. Acompanhamento para que tudo funcione como planejado.",
  },
];

export function Metodologia() {
  return (
    <section id="metodologia" className={sectionClass}>
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Nossa metodologia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            Processo definido, com etapas claras e previsibilidade para você e para nós.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {steps.map((item, index) => (
            <StaggerItem
              key={index}
              variant={index % 2 === 0 ? "up" : "scale"}
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04] sm:p-7">
                <span className="text-2xl font-bold text-white/20 sm:text-3xl">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
