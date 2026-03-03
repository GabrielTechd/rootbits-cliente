# Rootbits — Site institucional

Site da **Rootbits**: criação de sites estratégicos, identidade visual e consultoria digital. Landing page institucional com foco em conversão, SEO e desempenho.

**URL:** [https://www.rootbits.com.br](https://www.rootbits.com.br)

---

## O que é este projeto

- **Home** — Hero, serviços, portfólio (resumo), metodologia, diferenciais, preços, FAQ, garantia, tecnologias, sobre, formulário de diagnóstico gratuito e CTAs.
- **Portfólio** (`/portfolio`) — Página que lista todos os estudos de caso e projetos.
- **Projeto** (`/portfolio/[id]`) — Página de detalhe de cada estudo de caso (desafio, resultado, tecnologias, galeria de imagens).
- **Política de Privacidade** e **Termos de Uso** — Páginas estáticas.

O conteúdo dos projetos (estudos de caso) vem de uma **API externa**; o formulário de contato também envia dados para essa API.

---

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router) — React, SSR, rotas, metadata e otimizações.
- **[React 19](https://react.dev)** — UI e componentes.
- **[Tailwind CSS 4](https://tailwindcss.com)** — Estilos e responsividade.
- **[Framer Motion](https://www.framer.com/motion/)** e **[Motion](https://motion.dev)** — Animações (hero, seções, spotlight).
- **[Lucide React](https://lucide.dev)** — Ícones.
- **TypeScript** — Tipagem em todo o projeto.

---

## Estrutura principal

```
src/
├── app/
│   ├── layout.tsx          # Layout global (fontes, metadata, Header, skip link)
│   ├── page.tsx            # Home (seções em dynamic import)
│   ├── globals.css         # Estilos globais, a11y, animações typing
│   ├── opengraph-image.tsx # Geração da imagem de compartilhamento (WhatsApp, etc.)
│   ├── portfolio/
│   │   ├── page.tsx        # Lista de todos os projetos (/portfolio)
│   │   └── [id]/page.tsx   # Detalhe do projeto (/portfolio/:id)
│   ├── politica-de-privacidade/
│   └── termos-de-uso/
├── components/
│   ├── header.tsx          # Navegação (desktop + mobile)
│   ├── footer.tsx
│   ├── hero.tsx             # Hero (Server Component) + hero-client.tsx
│   ├── portfolio.tsx       # Seção/cards de portfólio (home e /portfolio)
│   ├── servicos.tsx, precos.tsx, faq.tsx, etc.
│   ├── diagnostico.tsx     # Formulário de contato
│   └── ui/
│       ├── animate-in-view.tsx
│       ├── typing-words.tsx
│       └── spotlight-new.tsx
└── lib/
    └── api.ts              # fetchPosts, fetchPost, sendContato (API Rootbits)
```

---

## API e variáveis de ambiente

O site consome a **API Rootbits** para:

- **Posts (portfólio):** `GET /api/posts?publicado=true` — lista de estudos de caso.
- **Post (detalhe):** `GET /api/posts/:id` — detalhe de um projeto.
- **Contato:** `POST /api/contatos` — envio do formulário de diagnóstico/contato.

Configure no `.env.local` (e no ambiente de deploy):

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `NEXT_PUBLIC_API_BASE` | URL base da API | `https://rootbits-api.vercel.app/api` |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (metadata, canonical, OG) | `https://www.rootbits.com.br` |

Arquivo de exemplo: `.env.example` (copie para `.env.local` e preencha).

---

## Scripts

```bash
npm run dev    # Desenvolvimento (http://localhost:3000)
npm run build  # Build de produção
npm run start  # Servidor de produção (após build)
```

---

## SEO e acessibilidade

- **Metadata:** título, descrição, keywords, Open Graph e Twitter Cards no `layout.tsx` e por página.
- **Verificação Google:** meta tag no `layout` (`metadata.verification.google`).
- **Imagem de compartilhamento:** gerada em `app/opengraph-image.tsx` (preview no WhatsApp, redes sociais).
- **Estrutura semântica:** `<main>`, seções com `aria-labelledby`, headings em ordem, skip link “Pular para o conteúdo”.
- **Contraste e foco:** estilos para `focus-visible` e `prefers-reduced-motion` em `globals.css`.
- **JSON-LD:** Organization, WebSite e WebPage no layout para buscas.

---

## Deploy

O projeto está preparado para deploy na **Vercel** (ou outro host que suporte Next.js). Configure as variáveis de ambiente no painel e faça o deploy a partir do repositório (por exemplo, GitHub).

Após o deploy, a home fica em `https://www.rootbits.com.br`, o portfólio em `https://www.rootbits.com.br/portfolio` e cada projeto em `https://www.rootbits.com.br/portfolio/[id]`.

---

## Licença e uso

Projeto privado da Rootbits. Uso interno e em produção conforme combinado.
