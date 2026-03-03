"use client";

import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const diferencialList = [
  {
    title: "Sites rápidos e bem posicionados",
    description:
      "Desenvolvimento de sites leves, que carregam rápido em celular e computador e tendem a ranquear melhor em buscas.",
  },
  {
    title: "Experiência que converte",
    description:
      "Estrutura e conteúdo pensados para levar o visitante a contato, orçamento ou compra, conforme o objetivo do seu negócio.",
  },
  {
    title: "Entrega com clareza",
    description:
      "Design e funcionalidades alinhados ao que você precisa, com escopo definido e previsibilidade em prazos e etapas.",
  },
  {
    title: "Atenção dedicada",
    description:
      "Diferente de soluções genéricas ou de grandes estruturas que dispersam foco: seu projeto tem responsável definido e acompanhamento próximo.",
  },
  {
    title: "Suporte após o lançamento",
    description:
      "Acompanhamento pós-entrega e possibilidade de manutenção contínua conforme sua necessidade.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className={sectionClass} aria-labelledby="heading-diferenciais">
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-diferenciais" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Por que escolher a Rootbits
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            O que nos move em cada projeto: escopo claro, responsável dedicado e compromisso com prazo e resultado. Sem surpresas.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:mt-16 lg:gap-8">
          {diferencialList.map((item, index) => (
            <StaggerItem
              key={index}
              variant={index % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-sky-500/20 hover:bg-white/10 sm:flex-row sm:items-start sm:gap-6 sm:p-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500/20">
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
