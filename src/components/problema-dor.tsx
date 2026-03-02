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
    description: "Visitantes não convertem quando a estrutura e as chamadas à ação não estão alinhadas aos objetivos.",
  },
  {
    title: "Aparência desatualizada",
    description: "Um visual pouco profissional pode transmitir desconfiança e afastar potenciais clientes.",
  },
];

const consequencias = [
  "Perda de oportunidades para concorrentes com presença digital mais sólida",
  "Dificuldade em construir autoridade e confiança da marca",
  "Investimento em tráfego ou divulgação sem o retorno esperado",
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
            Identificar e corrigir esses pontos é o primeiro passo para melhorar seus resultados.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {problemas.map((item, index) => (
            <StaggerItem key={index} variant="up" className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-slate-500/20 bg-slate-500/5 p-5 transition-colors hover:border-slate-400/25 sm:p-6">
                <span className="text-sm font-medium uppercase tracking-wider text-slate-400">
                  Atenção
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
          <div className="rounded-2xl border border-slate-500/15 bg-slate-500/5 p-6 sm:p-8">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-400">
              Impactos frequentes
            </p>
            <ul className="mt-4 space-y-2 text-center text-base text-neutral-300 sm:text-lg">
              {consequencias.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </div>
        </AnimateInView>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-10 text-center sm:mt-14">
          <p className="text-xl font-semibold text-white sm:text-2xl">
            Como a Rootbits pode ajudar
          </p>
          <p className="mx-auto mt-2 max-w-xl text-base text-neutral-400">
            Desenvolvemos sites estratégicos, com foco em performance, conversão e metodologia transparente.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ScrollToButton sectionId="servicos" variant="primary" className="w-full cursor-pointer sm:w-auto px-6 py-3">
              Ver como podemos ajudar
            </ScrollToButton>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
