"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { TypingWords } from "@/components/ui/typing-words";

const SpotlightNew = dynamic(
  () => import("@/components/ui/spotlight-new").then((m) => ({ default: m.SpotlightNew })),
  { ssr: false }
);

/** Spotlight decorativo — carrega após o primeiro paint para não atrasar LCP */
export function HeroSpotlight() {
  return (
    <div aria-hidden="true">
      <SpotlightNew
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
      />
    </div>
  );
}

/** Mostra "clientes" no HTML inicial (SSR + primeiro paint); após hydration ativa o typing para não bloquear LCP no mobile */
export function HeroTyping() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="inline-block min-w-[8ch] align-baseline" style={{ minHeight: "1em" }}>
        clientes
      </span>
    );
  }

  return (
    <TypingWords
      words={["clientes", "leads", "vendas", "contatos"]}
      className="text-white"
    />
  );
}
