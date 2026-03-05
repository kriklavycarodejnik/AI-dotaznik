'use client';

type Props = { onStart: () => void };

export default function HeroSection({ onStart }: Props) {
  return (
    <section className="section-space">
      <div className="container-main">
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <p className="mb-3 inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-900">AI Readiness Test</p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">Zistite za 3 minúty, kde má vaša firma najväčší AI potenciál.</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Krátky test pre firmy, ktoré s AI len začínajú. Ukáže vám, kde dnes strácate čas manuálnou prácou a kde môže AI pomôcť ako prvá.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="min-h-12 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-700"
              onClick={onStart}
            >
              Spustiť AI test
            </button>
            <span className="text-sm text-slate-500">Bez registrácie. Výsledok uvidíte okamžite.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
