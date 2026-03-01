"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const SCROLL_TO_KEY = "scrollToSection";

export function useScrollToSection() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(SCROLL_TO_KEY, sectionId);
      }
      router.push("/");
      return;
    }
    if (typeof window === "undefined") return;
    // "inicio" sempre leva ao topo absoluto da página (confiável com URL limpa ou com hash)
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return scrollToSection;
}

/** Roda na home: lê sessionStorage e rola para a seção sem alterar a URL */
export function ScrollToSectionEffect() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const sectionId = window.sessionStorage.getItem(SCROLL_TO_KEY);
    if (!sectionId) return;
    window.sessionStorage.removeItem(SCROLL_TO_KEY);
    requestAnimationFrame(() => {
      if (sectionId === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname]);

  return null;
}

const scrollButtonVariants: Record<"primary" | "secondary" | "dark" | "gradient", string> = {
  primary: "bg-white text-black hover:bg-neutral-200 font-semibold",
  secondary: "border border-white/20 text-white hover:bg-white/10",
  dark: "bg-neutral-900 text-white hover:bg-neutral-800",
  gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90",
};

/** Botão que rola até a seção sem alterar a URL (mesmo estilo do NavbarButton) */
export function ScrollToButton({
  sectionId,
  variant = "primary",
  className = "",
  children,
  ...props
}: {
  sectionId: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">) {
  const scrollToSection = useScrollToSection();
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm transition-colors " +
    scrollButtonVariants[variant];
  return (
    <button
      type="button"
      onClick={() => scrollToSection(sectionId)}
      className={`${base} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/** Link que rola até a seção sem alterar a URL */
export function ScrollToLink({
  sectionId,
  className = "",
  children,
  ...props
}: {
  sectionId: string;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">) {
  const scrollToSection = useScrollToSection();
  return (
    <button
      type="button"
      onClick={() => scrollToSection(sectionId)}
      className={`cursor-pointer ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
