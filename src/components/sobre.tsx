"use client";

import { AnimateInView } from "@/components/ui/animate-in-view";
import { ScrollToButton } from "@/components/scroll-to-section";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

export function Sobre() {
  return (
    <section id="sobre" className={sectionClass} aria-labelledby="heading-sobre">
      <div className="mx-auto max-w-4xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-sobre" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Sobre a Rootbits
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            Quem somos e no que acreditamos.
          </p>
        </AnimateInView>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-8 sm:mt-12">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8">
            <p className="text-center text-xl font-semibold text-white sm:text-2xl md:text-3xl">
              &ldquo;Criamos sites estratégicos que transformam visitantes em clientes.&rdquo;
            </p>
            <p className="mt-4 text-center text-sm text-neutral-500">
              Nosso posicionamento em uma frase.
            </p>
          </div>
          <div className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-neutral-400 sm:p-8 sm:text-base">
            <p>
              A <strong className="text-neutral-300">Rootbits</strong> nasceu da convicção de que negócios que investem em presença digital merecem parceiros que entregam com clareza e compromisso. Especializamo-nos em sites que geram resultados: rápidos, bem posicionados em buscas e pensados para converter visitantes em contatos ou vendas.
            </p>
            <p>
              Nossa <strong className="text-neutral-300">visão</strong> é ser referência em projetos com metodologia clara, entrega no prazo e suporte efetivo. Valorizamos a transparência em escopo, cronograma e investimento e o relacionamento de longo prazo com quem confia no nosso trabalho.
            </p>
            <p>
              Nosso <strong className="text-neutral-300">compromisso</strong> é com a entrega combinada: revisões até sua aprovação e acompanhamento pós-lançamento. Em caso de dúvida ou insatisfação, nossa prioridade é o diálogo e a solução.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <ScrollToButton sectionId="contato" variant="primary">
              Agendar conversa sem compromisso
            </ScrollToButton>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
