import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { ScrollToSectionEffect } from "@/components/scroll-to-section";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rootbits.com.br";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rootbits | Criação de Sites Estratégicos que Convertem Visitantes em Clientes",
    template: "%s | Rootbits",
  },
  description:
    "Criação de sites estratégicos, rápidos e focados em conversão. Diagnóstico gratuito, metodologia transparente e resultados mensuráveis. Identidade visual, landing page e sites institucionais. Rootbits.",
  keywords: [
    "criação de sites",
    "site que converte",
    "site estratégico",
    "performance web",
    "conversão digital",
    "identidade visual",
    "consultoria digital",
    "landing page",
    "sites institucionais",
    "rootbits",
    "desenvolvimento de sites",
    "site profissional",
    "SEO",
    "presença digital",
    "PME",
  ],
  authors: [{ name: "Rootbits", url: siteUrl }],
  creator: "Rootbits",
  publisher: "Rootbits",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Rootbits",
    title: "Rootbits | Criação de Sites Estratégicos que Convertem Visitantes em Clientes",
    description:
      "Sites com performance e foco em conversão. Diagnóstico gratuito, metodologia transparente. Identidade visual, landing page e sites institucionais.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rootbits - Criação de Sites Estratégicos e Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rootbits | Sites Estratégicos que Convertem Visitantes em Clientes",
    description:
      "Sites com performance e foco em conversão. Diagnóstico gratuito, sem compromisso.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Descomente e preencha quando tiver os códigos:
    // google: "seu-codigo-google",
    // yandex: "seu-codigo-yandex",
  },
  category: "technology",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Rootbits",
      url: siteUrl,
      description: "Criação de sites estratégicos que transformam visitantes em clientes. Performance, conversão e metodologia transparente.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Rootbits",
      description: "Sites estratégicos, identidade visual e consultoria digital. Diagnóstico gratuito.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "pt-BR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${poppins.className} antialiased bg-[#0a0a0a] text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToSectionEffect />
        <Header />
        <div className="min-w-0 w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
