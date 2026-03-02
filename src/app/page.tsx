import { Hero } from "@/components/hero";
import { ProblemaDor } from "@/components/problema-dor";
import { CtaStrip } from "@/components/cta-strip";
import { Servicos } from "@/components/servicos";
import { Portfolio } from "@/components/portfolio";
import { Metodologia } from "@/components/metodologia";
import { Diferenciais } from "@/components/diferenciais";
import { Precos } from "@/components/precos";
import { Faq } from "@/components/faq";
import { Diagnostico } from "@/components/diagnostico";
import { Garantia } from "@/components/garantia";
import { Tecnologias } from "@/components/tecnologias";
import { Sobre } from "@/components/sobre";
import { Footer } from "@/components/footer";
import { fetchPosts } from "@/lib/api";

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
