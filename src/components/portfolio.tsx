"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimateInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animate-in-view";
import { ScrollToButton } from "@/components/scroll-to-section";
import type { PostApi } from "@/lib/api";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

function PostImage({ post }: { post: PostApi }) {
  const src = post.imagemPrincipal;
  const alt = `${post.titulo}, ${post.subtitulo || ""}`.trim();
  if (!src) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-white/5 text-neutral-500">
        Sem imagem
      </div>
    );
  }
  const isBase64 = src.startsWith("data:");
  if (isBase64) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

export function Portfolio({ posts }: { posts: PostApi[] }) {
  return (
    <section id="portfolio" className={sectionClass} aria-labelledby="heading-portfolio">
      <div className="mx-auto max-w-6xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <h2 id="heading-portfolio" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Portfólio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl">
            Alguns dos projetos que entregamos: contexto, solução e resultados.
          </p>
        </AnimateInView>

        {posts.length === 0 ? (
          <p className="mt-10 text-center text-neutral-500 sm:mt-12">
            Nenhum estudo de caso publicado no momento. Em breve novidades por aqui.
          </p>
        ) : (
        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <StaggerItem
              key={post._id}
              variant={index % 2 === 0 ? "up" : "scale"}
              className="h-full"
            >
              <Link
                href={`/portfolio/${post._id}`}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-sky-500/20 hover:bg-white/10"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                  <PostImage post={post} />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Estudo de caso
                  </span>
                  <h3 className="mt-1.5 line-clamp-2 text-lg font-semibold leading-snug text-white group-hover:text-sky-200 sm:text-xl">
                    {post.titulo}
                  </h3>
                  {post.subtitulo && (
                    <p className="mt-1 line-clamp-1 text-sm text-neutral-500">
                      {post.subtitulo}
                    </p>
                  )}
                  <span className="mt-auto pt-4 inline-flex items-center text-sm font-medium text-sky-400 group-hover:text-sky-300">
                    Ver estudo de caso →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        )}

        <AnimateInView
          variant="fadeUp"
          duration={0.6}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
        >
          <Link
            href="/projeto"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Ver todos os projetos
          </Link>
          <ScrollToButton sectionId="contato" variant="secondary">
            Solicitar diagnóstico gratuito
          </ScrollToButton>
        </AnimateInView>
      </div>
    </section>
  );
}
