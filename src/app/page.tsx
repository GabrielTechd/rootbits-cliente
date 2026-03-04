import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { ProblemaDor } from "@/components/problema-dor";
import { CtaStrip } from "@/components/cta-strip";
import { fetchPosts } from "@/lib/api";

const Servicos = dynamic(() => import("@/components/servicos").then((m) => ({ default: m.Servicos })));
const Portfolio = dynamic(() => import("@/components/portfolio").then((m) => ({ default: m.Portfolio })));
const Metodologia = dynamic(() => import("@/components/metodologia").then((m) => ({ default: m.Metodologia })));
const Diferenciais = dynamic(() => import("@/components/diferenciais").then((m) => ({ default: m.Diferenciais })));
const Precos = dynamic(() => import("@/components/precos").then((m) => ({ default: m.Precos })));
const Faq = dynamic(() => import("@/components/faq").then((m) => ({ default: m.Faq })));
const Garantia = dynamic(() => import("@/components/garantia").then((m) => ({ default: m.Garantia })));
const Tecnologias = dynamic(() => import("@/components/tecnologias").then((m) => ({ default: m.Tecnologias })));
const Sobre = dynamic(() => import("@/components/sobre").then((m) => ({ default: m.Sobre })));
const Diagnostico = dynamic(() => import("@/components/diagnostico").then((m) => ({ default: m.Diagnostico })));
const AfterContato = dynamic(() => import("@/components/after-contato").then((m) => ({ default: m.AfterContato })));
const Footer = dynamic(() => import("@/components/footer").then((m) => ({ default: m.Footer })));

export default async function Home() {
  const posts = await fetchPosts(true);
  return (
    <main id="main-content" className="min-h-screen" tabIndex={-1} role="main">
      <Hero />
      <ProblemaDor />
      <CtaStrip
        id="cta-servicos"
        title="Do conceito ao lançamento, cuidamos da sua presença digital de ponta a ponta"
        subtitle="Sites estratégicos, rápidos e focados em conversão. Oferecemos diagnóstico gratuito para indicar a melhor solução para o seu negócio."
        primaryLabel="Fale com um especialista"
        primarySectionId="contato"
        secondaryLabel="Veja os nossos serviços"
        secondarySectionId="servicos"
        variant="compact"
      />
      <Servicos />
      <Portfolio posts={posts} />
      <Metodologia />
      <Diferenciais />
      <Precos />
      <Faq />
      <Garantia />
      <Tecnologias />
      <Sobre />
      <CtaStrip
        id="cta-final"
        title="Você precisa de ajuda para criar sua presença digital?"
        subtitle="A Rootbits é uma empresa especializada em sites e identidade visual. Apoiamos negócios na entrega de projetos dentro do prazo e do orçamento. Venha conversar com a gente!"
        primaryLabel="Contate-nos"
        primarySectionId="contato"
        secondaryLabel="Ver planos"
        secondarySectionId="precos"
      />
      <div id="contato">
        <Diagnostico />
      </div>
      <AfterContato />
      <Footer />
    </main>
  );
}
