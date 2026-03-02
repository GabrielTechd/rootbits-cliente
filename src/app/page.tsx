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
const Footer = dynamic(() => import("@/components/footer").then((m) => ({ default: m.Footer })));

export default async function Home() {
  const posts = await fetchPosts(true);
  return (
    <main id="main-content" className="min-h-screen" tabIndex={-1} role="main">
      <Hero />
      <ProblemaDor />
      <CtaStrip
        id="cta-servicos"
        title="Invista em um site que trabalha a seu favor"
        subtitle="Cada mês sem uma presença digital alinhada aos seus objetivos é oportunidade perdida para quem já está na frente. Oferecemos diagnóstico gratuito para indicar a melhor solução."
        primaryLabel="Solicitar diagnóstico gratuito"
        primarySectionId="contato"
        secondaryLabel="Conhecer nossa metodologia"
        secondarySectionId="metodologia"
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
        title="Próximo passo: um diagnóstico sem compromisso"
        subtitle="Conte-nos sobre seu negócio e receba recomendações objetivas. Sem custo e sem obrigação."
        primaryLabel="Agendar diagnóstico gratuito"
        primarySectionId="contato"
        secondaryLabel="Ver planos e investimento"
        secondarySectionId="precos"
      />
      <div id="contato">
        <Diagnostico />
      </div>
      <Footer />
    </main>
  );
}
