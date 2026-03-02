"use client";

import { useState } from "react";
import { AnimateInView } from "@/components/ui/animate-in-view";
import { sendContato } from "@/lib/api";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-16 sm:px-4 sm:py-20 md:py-24";

const benefits = [
  "Análise do seu negócio e dos seus objetivos",
  "Recomendações sob medida (site, identidade, estratégia)",
  "Resumo por escrito, sem compromisso",
  "Proposta comercial apenas quando fizer sentido para ambos",
];

const inputClass =
  "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-colors";

export function Diagnostico() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = (data.get("nome") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const telefone = (data.get("telefone") as string)?.trim() ?? "";
    const mensagem = (data.get("mensagem") as string)?.trim() ?? "";
    setStatus("sending");
    setErrorMessage("");
    const result = await sendContato({ nome, email, telefone, mensagem });
    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.erro);
    }
  }

  return (
    <section id="diagnostico" className={sectionClass} aria-labelledby="heading-diagnostico">
      <div className="mx-auto max-w-4xl">
        <AnimateInView variant="blurIn" duration={0.7} className="text-center">
          <span className="inline-block rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-sky-300">
            Sem compromisso
          </span>
          <h2 id="heading-diagnostico" className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Diagnóstico gratuito
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg md:text-xl">
            Uma conversa para entendermos sua necessidade. Em seguida, enviamos recomendações por escrito e, quando for o caso, uma proposta. Tudo sem custo e sem obrigação.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">
            Atendemos um número limitado de projetos por período para garantir acompanhamento próximo e qualidade de entrega.
          </p>
        </AnimateInView>

        <AnimateInView variant="fadeUp" duration={0.6} className="mt-10 sm:mt-12">
          <div className="rounded-2xl border border-white/20 bg-white/4 p-6 sm:p-8 md:p-10">
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-neutral-300 sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 id="form-contato-desc" className="text-lg font-semibold text-white sm:text-xl">
                Contato
              </h3>
              <p id="form-contato-hint" className="mt-1 text-sm text-neutral-400">
                Preencha o formulário e retornaremos em breve.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-6 grid gap-5 gap-x-6 sm:grid-cols-2 md:gap-6"
                aria-labelledby="form-contato-desc"
                aria-describedby="form-contato-hint"
              >
                <div className="sm:col-span-2">
                  <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className={inputClass}
                    disabled={status === "sending"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-300">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className={inputClass}
                    disabled={status === "sending"}
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className={inputClass}
                    disabled={status === "sending"}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    className={`${inputClass} min-h-[120px] resize-none`}
                    disabled={status === "sending"}
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-colors hover:bg-neutral-200 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                  >
                    {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                  </button>
                  {status === "success" && (
                    <p className="mt-3 text-sm text-emerald-400">
                      Mensagem enviada. Em breve entraremos em contato.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-sm text-red-400">
                      {errorMessage || "Erro ao enviar. Tente novamente."}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
