import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site e dos serviços da Rootbits. Regras e condições de utilização.",
  alternates: { canonical: "/termos-de-uso" },
  openGraph: {
    title: "Termos de Uso | Rootbits",
    description:
      "Termos de Uso do site e dos serviços da Rootbits. Regras e condições de utilização.",
    url: "/termos-de-uso",
    type: "website",
  },
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="mx-auto max-w-3xl px-3 py-16 sm:px-4 sm:py-20 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-block cursor-pointer text-sm text-neutral-400 transition-colors hover:text-white"
        >
          ← Voltar ao início
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Termos de Uso
        </h1>
        <p className="mt-4 text-neutral-500">
          Última atualização: Fevereiro de 2025
        </p>

        <div className="prose prose-invert mt-12 space-y-8 text-sm leading-relaxed text-neutral-400 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Aceitação</h2>
            <p className="mt-2">
              Ao acessar e utilizar o site e os serviços da Rootbits, você declara ter lido, entendido e concordado com estes Termos de Uso. Se não concordar, não utilize o site nem nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">2. Objeto e serviços</h2>
            <p className="mt-2">
              O site da Rootbits tem caráter informativo e comercial, apresentando nossos serviços de criação de sites, design, identidade visual e consultoria digital. A contratação de serviços está sujeita a proposta, contrato e condições específicas acordadas com o cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Uso adequado</h2>
            <p className="mt-2">
              Você se compromete a utilizar o site e quaisquer canais de contato de forma lícita, sem violar direitos de terceiros nem praticar atos que possam prejudicar o funcionamento do site ou a imagem da Rootbits. É vedado o uso para fins fraudulentos, spam ou disseminação de conteúdo ilegal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">4. Propriedade intelectual</h2>
            <p className="mt-2">
              Todo o conteúdo do site (textos, imagens, logotipos, layout) é de propriedade da Rootbits ou de licenciadores. É proibida a reprodução, distribuição ou uso comercial sem autorização prévia. Projetos desenvolvidos para clientes seguem os termos de cessão de direitos acordados em contrato.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">5. Links externos</h2>
            <p className="mt-2">
              O site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses sites. O acesso a eles é por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">6. Limitação de responsabilidade</h2>
            <p className="mt-2">
              A Rootbits empenha-se em manter o site disponível e atualizado, mas não garante disponibilidade ininterrupta nem ausência de erros. Na medida permitida pela lei, não nos responsabilizamos por danos indiretos decorrentes do uso do site. A responsabilidade em projetos contratados é regida pelo contrato de prestação de serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">7. Alterações</h2>
            <p className="mt-2">
              Estes Termos de Uso podem ser alterados a qualquer momento. A versão vigente estará disponível nesta página, com indicação da data da última atualização. O uso continuado do site após alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">8. Contato e lei aplicável</h2>
            <p className="mt-2">
              Dúvidas sobre estes Termos devem ser encaminhadas pelo formulário de contato ou e-mail disponível no site. Estes Termos são regidos pelas leis da República Federativa do Brasil.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="cursor-pointer text-sm text-neutral-400 underline transition-colors hover:text-white"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
