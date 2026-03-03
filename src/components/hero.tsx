import { HeroSpotlight } from "@/components/hero-client";
import { HeroTyping } from "@/components/hero-client";

const btnBase =
  "inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ";
const btnPrimary = "bg-white text-black hover:bg-neutral-200";
const btnSecondary = "border border-white/20 text-white hover:bg-white/10";

export function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[65vh] flex-col items-center justify-center overflow-hidden px-3 pt-0 pb-12 sm:min-h-[70vh] sm:px-4 sm:pb-16 md:min-h-[72vh] md:pb-20"
      aria-labelledby="hero-heading"
    >
      <HeroSpotlight />
      <div className="relative z-10 mx-auto w-full max-w-4xl flex-1 flex flex-col items-center justify-center px-1 pt-12 sm:pt-16 md:pt-20 text-center">
        <h1
          id="hero-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Transformamos visitantes em <span className="text-white"><HeroTyping /></span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-neutral-300 sm:mt-8 sm:text-lg md:text-xl">
          Desenvolvemos sites rápidos, estratégicos e focados em conversão, com metodologia clara e compromisso com resultados.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#contato"
            className={`w-full max-w-xs sm:max-w-none sm:w-auto ${btnBase} ${btnPrimary} px-6 py-3.5 text-base`}
          >
            Solicitar diagnóstico gratuito
          </a>
          <a
            href="#problema"
            className={`w-full max-w-xs sm:max-w-none sm:w-auto ${btnBase} ${btnSecondary} px-6 py-3 text-base`}
          >
            Conhecer nossa abordagem
          </a>
        </div>
      </div>
    </section>
  );
}
