"use client";

import { motion } from "framer-motion";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import { TypingWords } from "@/components/ui/typing-words";
import { ScrollToButton } from "@/components/scroll-to-section";

export function Hero() {
  return (
    <section id="inicio" className="flex min-h-[65vh] flex-col items-center justify-center overflow-hidden px-3 pt-0 pb-12 sm:min-h-[70vh] sm:px-4 sm:pb-16 md:min-h-[72vh] md:pb-20">
      <SpotlightNew
        translateY={-350}
        width={560}
        height={1380}
        smallWidth={240}
        duration={7}
        xOffset={100}
      />
      <motion.div
        className="relative z-10 mx-auto w-full max-w-4xl flex-1 flex flex-col items-center justify-center px-1 pt-12 sm:pt-16 md:pt-20 text-center"
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Transformamos visitantes em
          <span className="text-white">{" "}<TypingWords words={["clientes", "leads", "vendas", "contatos"]} className="text-white" /></span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-neutral-400 sm:mt-8 sm:text-lg md:text-xl">
          Desenvolvemos sites rápidos, estratégicos e focados em conversão, com metodologia clara e compromisso com resultados.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <ScrollToButton
            sectionId="contato"
            variant="primary"
            className="w-full max-w-xs cursor-pointer px-6 py-3.5 text-base font-semibold sm:max-w-none sm:w-auto"
          >
            Solicitar diagnóstico gratuito
          </ScrollToButton>
          <ScrollToButton
            sectionId="problema"
            variant="secondary"
            className="w-full max-w-xs cursor-pointer px-6 py-3 text-base sm:max-w-none sm:w-auto"
          >
            Conhecer nossa abordagem
          </ScrollToButton>
        </div>
      </motion.div>
    </section>
  );
}
