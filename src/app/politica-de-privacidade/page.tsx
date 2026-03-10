import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Rootbits. Como coletamos, usamos e protegemos seus dados em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: "Política de Privacidade | Rootbits",
    description:
      "Política de Privacidade da Rootbits. Como coletamos, usamos e protegemos seus dados em conformidade com a LGPD.",
    url: "/politica-de-privacidade",
    type: "website",
  },
};

export default function PoliticaDePrivacidade() {
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
          Política de Privacidade
        </h1>
        <p className="mt-4 text-neutral-500">
          Última atualização: Fevereiro de 2025
        </p>

        <div className="prose prose-invert mt-12 space-y-8 text-sm leading-relaxed text-neutral-400 sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-white">1. Introdução</h2>
            <p className="mt-2">
              A Rootbits (“nós”, “nosso”) respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018). Esta política descreve como coletamos, usamos, armazenamos e protegemos as informações que você nos fornece ao utilizar nosso site e serviços.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">2. Dados que coletamos</h2>
            <p className="mt-2">
              Podemos coletar: (a) dados de identificação e contato (nome, e-mail, telefone, empresa), quando você preenche formulários ou entra em contato; (b) dados de uso do site (endereço IP, páginas visitadas, tempo de permanência), por meio de ferramentas de análise; (c) cookies e tecnologias similares, para melhorar a experiência e o funcionamento do site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">3. Finalidade do tratamento</h2>
            <p className="mt-2">
              Utilizamos os dados para: responder ao seu contato e enviar propostas; prestar e melhorar nossos serviços; cumprir obrigações legais; e, quando autorizado, enviar comunicações sobre novidades e conteúdos. Não vendemos seus dados pessoais a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">4. Base legal e seus direitos</h2>
            <p className="mt-2">
              O tratamento pode ter como base o consentimento, a execução de contrato, o legítimo interesse ou o cumprimento de obrigação legal. Você tem direito de acesso, correção, exclusão, portabilidade, revogação do consentimento e de solicitar informações sobre o tratamento. Para exercer esses direitos, entre em contato conosco pelo e-mail ou formulário disponível no site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">5. Segurança e retenção</h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Mantemos os dados pelo tempo necessário para as finalidades descritas ou para cumprimento legal, após o que serão eliminados ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">6. Alterações</h2>
            <p className="mt-2">
              Esta política pode ser atualizada. Alterações relevantes serão comunicadas por meio do site ou contato. Recomendamos a leitura periódica desta página.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">7. Contato</h2>
            <p className="mt-2">
              Dúvidas ou solicitações relativas a esta política e aos seus dados pessoais podem ser enviadas pelo formulário de contato ou pelos canais abaixo:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-neutral-400">
              <li>
                <strong className="text-neutral-300">Rootbits</strong>
              </li>
              <li>
                E-mail:{" "}
                <a href="mailto:rootbitsdev@gmail.com" className="text-white underline hover:no-underline">
                  rootbitsdev@gmail.com
                </a>
              </li>
              <li>
                Telefone:{" "}
                <a href="tel:+5561981336977" className="text-white underline hover:no-underline">
                  61 98133-6977
                </a>
              </li>
            </ul>
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
