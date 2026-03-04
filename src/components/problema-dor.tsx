"use client";

import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";
import { ScrollToButton } from "@/components/scroll-to-section";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const problemas = [
  {
    title: "Site lento",
    description: "Tempo de carregamento elevado aumenta a taxa de abandono e prejudica o posicionamento em mecanismos de busca.",
  },
  {
    title: "Baixa visibilidade no Google",
    description: "Sites pouco otimizados ficam em desvantagem em relação à concorrência nas buscas.",
  },
  {
    title: "Poucos contatos ou vendas",
    description: "Visitantes não convertem quando a estrutura e as chamadas à ação não estão alinhadas aos objetivos do negócio.",
  },
  {
    title: "Aparência desatualizada",
    description: "Um visual pouco profissional pode transmitir desconfiança e afastar potenciais clientes.",
  },
];

const consequencias = [
  {
    title: "Orçamentos que seriam seus viram venda do concorrente",
    detail: "Quem aparece primeiro na busca leva a ligação. Enquanto seu site não ranqueia, alguém está fechando o cliente que poderia ser seu.",
  },
  {
    title: "Marca que não justifica preço nem fideliza",
    detail: "Site genérico ou desatualizado faz o visitante comparar só pelo valor. Quem confia em você pelo conteúdo e pelo visual paga mais e volta.",
  },
  {
    title: "Dinheiro em anúncio e rede social indo para um funil quebrado",
    detail: "Tráfego pago ou orgânico que cai em página lenta ou sem chamada clara à ação vira gasto, não retorno.",
  },
];

export function ProblemaDor() {
  return (
    <section id="problema" className={sectionClass} aria-labelledby="heading-problema">
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-problema" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Desafios comuns na presença digital
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            Reconhecer esses pontos é o primeiro passo para melhorar seus resultados. Estamos aqui para ajudar.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {problemas.map((item, index) => (
            <StaggerItem key={index} variant="up" className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-white/20 hover:bg-white/10 sm:p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Fique de olho
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-10 sm:mt-14">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-neutral-400">
              O que isso custa na prática
            </p>
            <p className="mx-auto mt-2 max-w-xl text-center text-base text-neutral-400 sm:text-lg">
              Quando o site não entrega, quem paga é você. Estes são os impactos mais comuns:
            </p>
            <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {consequencias.map((c, i) => (
                <li key={i} className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left sm:flex-row sm:items-start sm:gap-4 sm:px-5 sm:py-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white sm:mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-white">{c.title}</span>
                    <p className="mt-1 text-sm text-neutral-400">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </AnimateInView>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-10 text-center sm:mt-14">
          <p className="text-xl font-semibold text-white sm:text-2xl">
            Como podemos ajudar
          </p>
          <p className="mx-auto mt-2 max-w-xl text-base text-neutral-400">
            Desenvolvemos sites estratégicos, com foco em performance, conversão e um processo transparente do início ao fim.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ScrollToButton sectionId="servicos" variant="primary" className="w-full cursor-pointer sm:w-auto px-6 py-3">
              Veja os nossos serviços
            </ScrollToButton>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
