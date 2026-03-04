"use client";

const sectionClass =
  "relative border-t border-white/5 bg-[#0a0a0a] px-3 py-8 sm:py-10";

export function AfterContato() {
  return (
    <section className={sectionClass} aria-hidden="true">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm text-neutral-500">
          Respondemos em até 1 dia útil. <span className="text-white font-bold">RootBits</span> — até breve.
        </p>
      </div>
    </section>
  );
}
