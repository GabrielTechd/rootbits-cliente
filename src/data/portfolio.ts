export type PortfolioCase = {
  slug: string;
  title: string;
  client: string;
  challenge: string;
  result: string;
  tags: string[];
  image: string;
  imageAlt: string;
  /** Conteúdo expandido para a página do projeto */
  fullDescription: string;
  whatWeDid: string[];
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "ecommerce-moda",
    title: "E-commerce de moda",
    client: "Marca de roupas",
    challenge: "Aumentar conversão e experiência mobile.",
    result: "+40% em vendas online no primeiro trimestre.",
    tags: ["E-commerce", "UX", "SEO"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    imageAlt: "E-commerce de moda, vitrine e experiência de compra",
    fullDescription:
      "Projeto de reformulação do e-commerce com foco em conversão e experiência mobile. O site anterior apresentava alto abandono no carrinho e baixa performance em dispositivos móveis. Desenvolvemos nova estrutura de páginas, fluxo de checkout simplificado e integração com meios de pagamento, além de otimização de imagens e performance.",
    whatWeDid: [
      "Redesign da vitrine e das páginas de produto",
      "Checkout responsivo e simplificado",
      "Otimização de performance (Core Web Vitals)",
      "SEO técnico e estrutura de dados",
      "Integração com analytics e métricas de conversão",
    ],
  },
  {
    slug: "site-institucional-identidade",
    title: "Site institucional + identidade",
    client: "Empresa de consultoria",
    challenge: "Posicionar a marca e gerar leads qualificados.",
    result: "Novo site e manual de marca; +60% em contatos pelo site.",
    tags: ["Site", "Branding", "Landing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    imageAlt: "Site institucional e identidade visual, consultoria",
    fullDescription:
      "Projeto completo de posicionamento digital: criação da identidade visual (logo, manual de marca, paleta) e desenvolvimento do site institucional com várias páginas e área de captação de leads. O objetivo era transmitir autoridade e facilitar o contato de potenciais clientes.",
    whatWeDid: [
      "Identidade visual (logo e manual de marca)",
      "Site institucional com CMS",
      "Landing pages para serviços",
      "Formulários e integração com e-mail",
      "SEO e estrutura de conteúdo",
    ],
  },
  {
    slug: "landing-page-lancamento",
    title: "Landing page para lançamento",
    client: "Produto digital",
    challenge: "Captar leads para pré-venda.",
    result: "Mais de 2.000 leads em 30 dias com tráfego pago.",
    tags: ["Landing", "Conversão", "Meta Ads"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    imageAlt: "Landing page para lançamento de produto digital",
    fullDescription:
      "Landing page focada em conversão para campanha de pré-venda de um produto digital. A página foi construída para trabalhar em conjunto com anúncios (Meta Ads e Google), com copy orientada à objeção e formulário enxuto para captação de leads.",
    whatWeDid: [
      "Landing page responsiva e rápida",
      "Copy e estrutura para conversão",
      "Formulário e integração com CRM",
      "Pixel e eventos para campanhas",
      "Testes A/B de headlines e CTA",
    ],
  },
];

export function getPortfolioBySlug(slug: string): PortfolioCase | undefined {
  return portfolioCases.find((c) => c.slug === slug);
}

export function getPortfolioSlugs(): string[] {
  return portfolioCases.map((c) => c.slug);
}
