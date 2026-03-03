import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6"
      role="main"
      aria-labelledby="not-found-heading"
    >
      {/* Fundo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-sky-500/5 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Número 404 com estilo */}
        <p
          id="not-found-heading"
          className="font-bold tracking-tighter text-white/90 select-none"
          style={{
            fontSize: "clamp(6rem, 20vw, 12rem)",
            lineHeight: 0.9,
            textShadow: "0 0 80px rgba(56, 189, 248, 0.15)",
          }}
        >
          404
        </p>
        <span className="mt-2 block text-sm font-medium uppercase tracking-[0.35em] text-sky-400/80">
          Página não encontrada
        </span>

        <p className="mx-auto mt-6 max-w-md text-base text-neutral-400 sm:text-lg">
          O link que você acessou não existe ou foi movido. Que tal voltar ao início e seguir em frente?
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-black transition-colors hover:bg-neutral-200"
          >
            Voltar ao início
          </Link>
          <Link
            href="/#contato"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Falar com a Rootbits
          </Link>
        </div>

        {/* Detalhe decorativo */}
        <div className="mt-16 flex items-center gap-2 text-xs text-neutral-500">
          <span className="h-px w-8 bg-white/10" />
          <span>Rootbits</span>
          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </main>
  );
}
