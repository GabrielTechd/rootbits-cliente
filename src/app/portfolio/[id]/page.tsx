import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPost } from "@/lib/api";
import { ScrollToButton, ScrollToLink } from "@/components/scroll-to-section";
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
  const isBase64Image = post.imagemPrincipal?.startsWith("data:");

  return (
    <main className="min-h-screen">
      <section className={sectionClass}>
        <div className="mx-auto max-w-4xl">
          <ScrollToLink
            sectionId="portfolio"
            className="inline-flex cursor-pointer items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ← Voltar ao portfólio
          </ScrollToLink>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-video w-full">
              {post.imagemPrincipal ? (
                isBase64Image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.imagemPrincipal}
                    alt={post.titulo}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={post.imagemPrincipal}
                    alt={post.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                    priority
                  />
                )
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-white/5 text-neutral-500">
                  Sem imagem
                </div>
              )}
            </div>
          </div>

          <header className="mt-8">
            <span className="text-xs font-medium uppercase tracking-wider text-white/40">
              Estudo de caso
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {post.titulo}
            </h1>
            {post.subtitulo && (
              <p className="mt-2 text-lg text-neutral-500">{post.subtitulo}</p>
            )}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="mt-10 space-y-8 border-t border-white/10 pt-10">
            {post.desafio && (
              <div>
                <h2 className="text-lg font-semibold text-white">Desafio</h2>
                <p className="mt-2 text-neutral-400">{post.desafio}</p>
              </div>
            )}
            {post.resultado && (
              <div>
                <h2 className="text-lg font-semibold text-white">Resultado</h2>
                <p className="mt-2 text-neutral-400">{post.resultado}</p>
              </div>
            )}
            {post.descricao && (
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Sobre o projeto
                </h2>
                <p className="mt-2 leading-relaxed text-neutral-400">
                  {post.descricao}
                </p>
              </div>
            )}
            {post.oQueFoiFeito && post.oQueFoiFeito.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-white">
                  O que foi feito
                </h2>
                <ul className="mt-4 space-y-2">
                  {post.oQueFoiFeito.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-neutral-400"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {post.imagensAdicionais && post.imagensAdicionais.length > 0 && (
            <div className="mt-10 space-y-4">
              <h2 className="text-lg font-semibold text-white">Galeria</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {post.imagensAdicionais.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  >
                    {src.startsWith("data:") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={src}
                        alt={`${post.titulo} ${i + 1}`}
                        className="h-auto w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={src}
                        alt={`${post.titulo} ${i + 1}`}
                        width={600}
                        height={400}
                        className="h-auto w-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <ScrollToButton sectionId="contato" variant="primary">
              {ctaTexto}
            </ScrollToButton>
            <ScrollToLink
              sectionId="portfolio"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              {ctaLinkTexto}
            </ScrollToLink>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
