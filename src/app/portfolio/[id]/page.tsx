import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchPost } from "@/lib/api";
import { ScrollToButton } from "@/components/scroll-to-section";
import { ProjectGallery } from "@/components/project-gallery";
import { Footer } from "@/components/footer";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = await fetchPost(id);
  if (!post) return { title: "Projeto não encontrado" };
  return {
    title: post.titulo,
    description: [post.subtitulo, post.desafio, post.resultado]
      .filter(Boolean)
      .join(". "),
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { id } = await params;
  const post = await fetchPost(id);
  if (!post) notFound();

  const ctaTexto = post.ctaTexto || "Quero um resultado como esse";
  const ctaLinkTexto = post.ctaLinkTexto || "Ver outros projetos";

  const allImages = [
    post.imagemPrincipal,
    ...(post.imagensAdicionais ?? []),
  ].filter((src): src is string => Boolean(src));

  return (
    <main className="min-h-screen">
      <section className={sectionClass}>
        <div className="mx-auto min-w-0 max-w-4xl overflow-x-hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ← Voltar ao portfólio
          </Link>

          <header className="mt-6 sm:mt-8">
            <span className="text-xs font-medium uppercase tracking-wider text-sky-400/90">
              Estudo de caso
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {post.titulo}
            </h1>
            {post.subtitulo && (
              <p className="mt-2 text-lg text-neutral-400">{post.subtitulo}</p>
            )}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="mt-8">
            <ProjectGallery images={allImages} title={post.titulo} />
          </div>

          <div className="mt-10 min-w-0 space-y-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10">
            {post.desafio && (
              <div className="min-w-0">
                <h2 className="text-base font-semibold uppercase tracking-wider text-sky-400/90 sm:text-lg">
                  Desafio
                </h2>
                <p className="mt-2 break-words leading-relaxed text-neutral-300">
                  {post.desafio}
                </p>
              </div>
            )}
            {post.resultado && (
              <div className="min-w-0">
                <h2 className="text-base font-semibold uppercase tracking-wider text-sky-400/90 sm:text-lg">
                  Resultado
                </h2>
                <p className="mt-2 break-words leading-relaxed text-neutral-300">
                  {post.resultado}
                </p>
              </div>
            )}
            {post.descricao && (
              <div className="min-w-0">
                <h2 className="text-base font-semibold uppercase tracking-wider text-sky-400/90 sm:text-lg">
                  Sobre o projeto
                </h2>
                <p className="mt-2 break-words leading-relaxed text-neutral-300">
                  {post.descricao}
                </p>
              </div>
            )}
            {post.oQueFoiFeito && post.oQueFoiFeito.length > 0 && (
              <div className="min-w-0">
                <h2 className="text-base font-semibold uppercase tracking-wider text-sky-400/90 sm:text-lg">
                  O que foi feito
                </h2>
                <ul className="mt-4 space-y-3">
                  {post.oQueFoiFeito.map((item, i) => (
                    <li
                      key={i}
                      className="flex min-w-0 items-start gap-3 text-neutral-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      <span className="min-w-0 break-words leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {post.tecnologiasUsadas && post.tecnologiasUsadas.length > 0 && (
              <div>
                <h2 className="text-base font-semibold uppercase tracking-wider text-sky-400/90 sm:text-lg">
                  Tecnologias utilizadas
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tecnologiasUsadas.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {post.linkProjeto && (
              <div>
                <a
                  href={post.linkProjeto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition-colors hover:text-sky-300"
                >
                  Visitar projeto
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <ScrollToButton sectionId="contato" variant="primary">
              {ctaTexto}
            </ScrollToButton>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              {ctaLinkTexto}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
