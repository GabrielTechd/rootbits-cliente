"use client";

import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const categories = [
  {
    title: "Front-end e sites",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Design e prototipação",
    items: ["Figma", "Adobe XD", "Design systems"],
  },
  {
    title: "Back-end e infra",
    items: ["Node.js", "APIs REST", "Vercel", "Hospedagem e domínios"],
  },
  {
    title: "SEO e analytics",
    items: ["Google Analytics", "Search Console", "Meta Tags", "Otimização para buscas"],
  },
];

export function Tecnologias() {
  return (
    <section id="tecnologias" className={sectionClass} aria-labelledby="heading-tecnologias">
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-tecnologias" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tecnologias que utilizamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            Tecnologias que deixam seu site rápido, seguro e fácil de atualizar — você não precisa ser técnico para manter tudo em dia.
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {categories.map((cat, index) => (
            <StaggerItem
              key={index}
              variant={index % 2 === 0 ? "up" : "scale"}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-sky-500/25 hover:bg-white/10 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_20px_-5px_rgba(56,189,248,0.15)] sm:p-7">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sm font-semibold text-sky-300 transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-500/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {cat.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-neutral-300"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
