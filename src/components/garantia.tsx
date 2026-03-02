"use client";

import { AnimateInView } from "@/components/ui/animate-in-view";
import { ScrollToButton } from "@/components/scroll-to-section";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

export function Garantia() {
  return (
    <section id="garantia" className={sectionClass} aria-labelledby="heading-garantia">
      <div className="mx-auto max-w-3xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-garantia" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Garantia e compromisso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            Transparência no escopo, nas etapas e no que você pode esperar de nós.
          </p>
        </AnimateInView>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-8 sm:mt-12">
          <div className="space-y-6 rounded-2xl border border-white/20 bg-white/[0.04] p-6 sm:p-8">
            <div className="flex gap-4 rounded-xl border border-sky-500/20 bg-sky-500/10 p-4">
              <span className="text-2xl text-sky-400" aria-hidden>✓</span>
              <div>
                <h3 className="font-semibold text-white">Compromisso com performance</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Entregamos sites rápidos e otimizados para buscas, para que sua presença digital transmita confiança e seja encontrada quando importa.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-sky-500/20 bg-sky-500/10 p-4">
              <span className="text-2xl text-sky-400" aria-hidden>✓</span>
              <div>
                <h3 className="font-semibold text-white">Revisões até aprovação</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Incluímos rodadas de ajustes em cada etapa. Nosso objetivo é que o resultado atenda plenamente ao combinado.
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
              <li>
                <strong className="text-neutral-300">Escopo acordado:</strong>{" "}
                Briefing e aprovações em cada fase, com clareza sobre entregas e prazos.
              </li>
              <li>
                <strong className="text-neutral-300">Suporte pós-entrega:</strong>{" "}
                Período de suporte incluso; em seguida, pacotes de manutenção disponíveis conforme necessidade.
              </li>
              <li>
                <strong className="text-neutral-300">Transparência:</strong>{" "}
                Em caso de dúvida ou insatisfação, nossa prioridade é o diálogo e a solução. Valorizamos o relacionamento de longo prazo.
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <ScrollToButton sectionId="contato" variant="secondary">
              Falar com um especialista
            </ScrollToButton>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
