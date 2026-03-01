"use client";

import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const metrics = [
  { value: "+50", label: "Projetos entregues", suffix: "", context: "Desde o início das atividades." },
  { value: "98", label: "Satisfação dos clientes", suffix: "%", context: "Pesquisa pós-entrega (NPS)." },
  { value: "+40", label: "Crescimento médio em conversão", suffix: "%", context: "Comparando 6 meses antes e 6 meses após o lançamento do site, em projetos com base de tráfego estável." },
  { value: "100", label: "Projetos no prazo", suffix: "%", context: "Conforme cronograma acordado no planejamento." },
];

export function Metricas() {
  return (
    <section id="metricas" className={sectionClass}>
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Resultados em números
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            Números com contexto: assim você sabe o que estamos medindo e em que condições.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-8 grid grid-cols-2 gap-6 sm:mt-12 md:grid-cols-4 lg:gap-8 md:grid-rows-1 md:items-stretch">
          {metrics.map((m, index) => (
            <StaggerItem key={index} variant="scale" className="h-full text-center">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-sky-500/20 hover:bg-sky-500/5 sm:p-8">
                <p className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {m.value}
                  {m.suffix}
                </p>
                <p className="mt-2 text-sm text-neutral-400">{m.label}</p>
                {"context" in m && m.context && (
                  <p className="mt-1.5 flex-1 text-xs text-neutral-500">{m.context}</p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
