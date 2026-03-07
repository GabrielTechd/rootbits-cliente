import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { ScrollToSectionEffect } from "@/components/scroll-to-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";
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
    default: "Rootbits",
    template: "%s · Rootbits",
  },
  description:
    "Sites que transformam visitantes em clientes e leads. Criação de sites, identidade visual e consultoria digital para PMEs e profissionais liberais. Processo do briefing ao lançamento, diagnóstico gratuito. Rootbits — Brasília.",
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
    url: siteUrl,
    siteName: "Rootbits",
    title: "Rootbits",
    description:
      "Sites com performance e foco em conversão. Diagnóstico gratuito, metodologia transparente. Identidade visual, landing page e sites institucionais.",
    // Imagem gerada por app/opengraph-image.tsx (WhatsApp, Facebook, etc.)
  },
  twitter: {
    card: "summary_large_image",
    title: "Rootbits",
    description:
      "Sites com performance e foco em conversão. Diagnóstico gratuito, sem compromisso.",
    // twitter:image vem do opengraph-image.tsx
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
    google: "3FjXvoW4dpoHlseUliBdtGIzVa7k5j6PQyVHwt1QdOU",
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
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Rootbits",
      description: "Criação de sites estratégicos, rápidos e focados em conversão. Diagnóstico gratuito, metodologia transparente.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "pt-BR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleTagId = "AW-17998661829";

  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${poppins.className} antialiased bg-[#0a0a0a] text-white`}>
        {/* Google tag (gtag.js) - Google Ads conversões - carrega no head via beforeInteractive */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="beforeInteractive"
        />
        <Script id="google-ads-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <ScrollToSectionEffect />
        <Header />
        <div className="min-w-0 w-full overflow-x-hidden">
          {children}
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
