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

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rootbits.com.br",
  ),
  title: {
    default: "Rootbits",
    template: "%s | Rootbits",
  },
  description:
    "Rootbits: sites estratégicos que transformam visitantes em clientes. Performance, conversão e metodologia transparente. Diagnóstico gratuito, sem compromisso.",
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
  ],
  authors: [{ name: "Rootbits", url: "https://rootbits.com.br" }],
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
    title: "Rootbits | Sites Estratégicos que Transformam Visitantes em Clientes",
    description:
      "Sites com performance e foco em conversão. Diagnóstico gratuito, sem compromisso.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rootbits - Criação de Sites e Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rootbits | Sites Estratégicos que Transformam Visitantes em Clientes",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${poppins.className} antialiased bg-[#0a0a0a] text-white`}>
        <ScrollToSectionEffect />
        <Header />
        <div className="min-w-0 w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
