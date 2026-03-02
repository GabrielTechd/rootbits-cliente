"use client";

import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const testimonials = [
  {
    quote:
      "Em três meses, o número de contatos pelo site subiu de uma média de 8 para 22 por mês. O processo foi transparente e o suporte pós-entrega fez a diferença.",
    author: "Ricardo Mendes",
    role: "Sócio, Mendes & Associados Consultoria",
    rating: 5,
  },
  {
    quote:
      "Precisávamos de site e identidade visual alinhados. Entregaram no prazo, com revisões até aprovação, e hoje a presença digital reflete o nível de seriedade que queremos passar.",
    author: "Fernanda Costa",
    role: "Diretora, Costa Soluções em RH",
    rating: 5,
  },
  {
    quote:
      "Comparei com freelancer e com agência grande. Aqui tive atendimento dedicado, escopo claro e resultado mensurável: aumento de cerca de 40% em leads no primeiro semestre após o lançamento.",
    author: "André Lima",
    role: "Gestor, Lima Serviços Técnicos",
    rating: 5,
  },
];

const clientLogos = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5",
];

export function ProvaSocial() {
  return (
    <section id="prova-social" className={sectionClass} aria-labelledby="heading-prova-social">
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-prova-social" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            O que dizem sobre nós
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            Depoimentos de clientes que já realizaram projetos conosco.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t, index) => (
            <StaggerItem key={index} variant="up" className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-white/20 hover:bg-white/4 sm:p-7">
                <div className="flex gap-0.5 text-white/60">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-lg" aria-hidden>★</span>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-medium text-white">{t.author}</p>
                <p className="text-xs text-neutral-500">{t.role}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-12 sm:mt-16">
          <p className="text-center text-sm text-neutral-500">
            Quem já confia na Rootbits
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {clientLogos.map((name, i) => (
              <div
                key={i}
                className="flex h-12 w-24 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-neutral-500"
              >
                {name}
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
