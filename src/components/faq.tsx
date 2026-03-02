"use client";

import { useState } from "react";
import { AnimateInView } from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const faqItems = [
  {
    question: "O site é meu?",
    answer:
      "Sim. Após a quitação e a entrega, o site e o código desenvolvido são de sua propriedade, em seu domínio e hospedagem. O contrato formaliza essa transferência.",
  },
  {
    question: "Posso atualizar o site depois?",
    answer:
      "Sim. Você pode contratar manutenção conosco ou, em projetos com CMS, atualizar textos e imagens você mesmo. Orientamos na entrega e oferecemos pacotes de suporte contínuo.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "Landing page: 2 a 4 semanas. Site institucional: 6 a 10 semanas. Projeto completo: conforme escopo. Definimos o prazo no diagnóstico, sem surpresas.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Trabalhamos com aprovações em cada etapa (briefing, layout, conteúdo). Incluímos rodadas de revisão até sua aprovação. Nosso compromisso é entregar o acordado e realizar os ajustes necessários para sua satisfação.",
  },
  {
    question: "Tem contrato?",
    answer:
      "Sim. Utilizamos contrato escrito com escopo, prazos, valor e condições. Assim, fica claro o que está sendo contratado e o que pode ser esperado de ambas as partes.",
  },
  {
    question: "Como funciona o diagnóstico gratuito?",
    answer:
      "Uma conversa (chamada ou vídeo) para entendermos seu negócio e seu objetivo. Em seguida, enviamos um resumo com recomendações e, se fizer sentido, uma proposta. Sem compromisso e sem custo.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-medium text-white transition-colors hover:text-white/90 sm:py-6 sm:text-lg"
        aria-expanded={isOpen}
      >
        {question}
        <span
          className={`shrink-0 text-2xl text-neutral-500 transition-transform ${isOpen ? "rotate-45" : ""}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="pb-5 text-sm leading-relaxed text-neutral-400 sm:pb-6 sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={sectionClass} aria-labelledby="heading-faq">
      <div className="mx-auto max-w-3xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-faq" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            Respostas às dúvidas mais frequentes sobre prazos, contrato e processo.
          </p>
        </AnimateInView>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-8 sm:mt-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-2 sm:px-6">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((i) => (i === index ? null : index))
                }
              />
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
