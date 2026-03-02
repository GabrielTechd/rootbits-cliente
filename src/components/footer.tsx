"use client";

import Link from "next/link";
import { useScrollToSection } from "@/components/scroll-to-section";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-12 sm:px-4 sm:py-16";

const navSections: Array<{
  title: string;
  links: Array<{ label: string; href?: string; sectionId?: string }>;
}> = [
  {
    title: "Navegação",
    links: [
      { label: "Início", sectionId: "inicio" },
      { label: "Serviços", sectionId: "servicos" },
      { label: "Portfólio", sectionId: "portfolio" },
      { label: "Preços", sectionId: "precos" },
      { label: "Sobre", sectionId: "sobre" },
      { label: "Contato", sectionId: "contato" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
    ],
  },
];

export function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className={sectionClass}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection("inicio")}
              className="cursor-pointer text-xl font-bold tracking-tight text-white text-left"
              aria-label="Rootbits - Ir para o início"
            >
              Rootbits
            </button>
            <p className="mt-2 max-w-xs text-sm text-neutral-500">
              Sites estratégicos, design e identidade visual. Presença digital com profissionalismo e resultados mensuráveis.
            </p>
          </div>
          <nav className="flex flex-wrap gap-10 sm:gap-16" aria-label="Links do rodapé">
            {navSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href ?? link.sectionId}>
                      {link.sectionId ? (
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.sectionId!)}
                          className="cursor-pointer text-sm text-neutral-400 transition-colors hover:text-white text-left"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link
                          href={link.href!}
                          className="cursor-pointer text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Rootbits. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
