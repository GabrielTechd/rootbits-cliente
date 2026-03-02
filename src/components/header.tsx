"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { useScrollToSection } from "@/components/scroll-to-section";

const navItems = [
  { name: "Início", sectionId: "inicio" },
  { name: "Serviços", sectionId: "servicos" },
  { name: "Portfólio", sectionId: "portfolio" },
  { name: "Preços", sectionId: "precos" },
  { name: "Sobre", sectionId: "sobre" },
  { name: "Contato", sectionId: "contato" },
];

function NavLink({
  name,
  sectionId,
  onClick,
  className,
}: {
  name: string;
  sectionId: string;
  onClick: (sectionId: string) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(sectionId)}
      className={className}
    >
      {name}
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar className="sticky" mobileOpen={menuOpen} onMobileOpenChange={setMenuOpen}>
        <NavBody>
          <button
            type="button"
            onClick={() => scrollToSection("inicio")}
            className="cursor-pointer text-lg font-bold tracking-tight text-white sm:text-xl text-left"
            aria-label="Rootbits - Início"
          >
            Rootbits
          </button>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.sectionId}
                name={item.name}
                sectionId={item.sectionId}
                onClick={handleNavClick}
                className="cursor-pointer text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => scrollToSection("contato")}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
              >
                Solicitar diagnóstico
              </button>
            </div>
            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </NavBody>
      </Navbar>

      <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
        <MobileNavHeader>
          <button
            type="button"
            onClick={() => handleNavClick("inicio")}
            className="cursor-pointer text-xl font-bold text-white text-left"
            aria-label="Rootbits - Ir para o início"
          >
            Rootbits
          </button>
          <MobileNavToggle
            isOpen={menuOpen}
            onClick={() => setMenuOpen(false)}
          />
        </MobileNavHeader>
        <nav className="flex flex-col gap-1 p-4" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.sectionId}
              name={item.name}
              sectionId={item.sectionId}
              onClick={handleNavClick}
              className="cursor-pointer rounded-lg px-4 py-3 text-lg font-medium text-neutral-200 transition-colors hover:bg-white/10 hover:text-white text-left"
            />
          ))}
          <div className="mt-4 border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={() => handleNavClick("contato")}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-base font-medium text-black transition-colors hover:bg-neutral-200"
            >
              Solicitar diagnóstico
            </button>
          </div>
        </nav>
      </MobileNavMenu>
    </>
  );
}
