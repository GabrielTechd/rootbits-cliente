import type { Metadata } from "next";
import Link from "next/link";
import { fetchPosts } from "@/lib/api";
import { Portfolio } from "@/components/portfolio";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Estudos de caso e projetos da Rootbits: sites estratégicos, landing pages e identidade visual. Contexto do cliente, solução entregue e resultados.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfólio | Rootbits",
    description:
      "Estudos de caso e projetos da Rootbits: sites estratégicos, landing pages e identidade visual.",
    url: "/portfolio",
    type: "website",
  },
};

export default async function PortfolioPage() {
  const posts = await fetchPosts(true);

  return (
    <main id="main-content" className="min-h-screen" tabIndex={-1} role="main">
      <div className="relative border-b border-white/5 bg-[#0a0a0a] px-3 py-6 sm:px-4 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
      <Portfolio posts={posts} />
      <Footer />
    </main>
  );
}
