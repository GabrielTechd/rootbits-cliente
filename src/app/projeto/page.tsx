import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { fetchPosts } from "@/lib/api";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Estudos de caso e projetos da Rootbits: sites estratégicos, landing pages e identidade visual. Contexto do cliente, solução entregue e resultados.",
  alternates: { canonical: "/projeto" },
  openGraph: {
    title: "Projetos | Rootbits",
    description:
      "Estudos de caso e projetos da Rootbits: sites estratégicos, landing pages e identidade visual.",
    url: "/projeto",
    type: "website",
  },
};

export default async function ProjetoPage() {
  const posts = await fetchPosts(true);

  return (
    <main id="main-content" className="min-h-screen" tabIndex={-1} role="main">
      <div className="relative border-b border-white/5 bg-[#0a0a0a] px-3 py-6 sm:px-4 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Voltar ao início
          </Link>
        </div>
      </div>
      <Portfolio posts={posts} />
      <Footer />
    </main>
  );
}
