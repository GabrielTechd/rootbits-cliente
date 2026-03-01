const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "https://rootbits-api.vercel.app/api";

export type PostApi = {
  _id: string;
  titulo: string;
  subtitulo?: string;
  descricao?: string;
  imagemPrincipal?: string;
  imagensAdicionais?: string[];
  tags?: string[];
  desafio?: string;
  resultado?: string;
  oQueFoiFeito?: string[];
  ctaTexto?: string;
  ctaLinkTexto?: string;
  ordem?: number;
  createdAt?: string;
};

export type PostsResponse = {
  dados: PostApi[];
  total: number;
  page: number;
  limit: number;
};

export async function fetchPosts(publicado = true): Promise<PostApi[]> {
  const url = `${API_BASE}/posts?publicado=${String(publicado)}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const json = (await res.json()) as PostsResponse;
  return json.dados ?? [];
}

export async function fetchPost(id: string): Promise<PostApi | null> {
  const res = await fetch(`${API_BASE}/posts/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return (await res.json()) as PostApi;
}

export type ContatoPayload = {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
};

export type ContatoError = {
  erro?: string;
};

export async function sendContato(
  data: ContatoPayload
): Promise<{ ok: true } | { ok: false; erro: string }> {
  const res = await fetch(`${API_BASE}/contatos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone || undefined,
      mensagem: data.mensagem,
    }),
  });
  if (res.ok) return { ok: true };
  const body = (await res.json().catch(() => ({}))) as ContatoError;
  return { ok: false, erro: body.erro || "Erro ao enviar mensagem." };
}
