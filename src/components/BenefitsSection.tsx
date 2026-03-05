const benefits = ['AI pripravenosť (0–100)', 'prehľad 5 oblastí firmy', 'odporúčania', 'rýchle zlepšenia'];

export default function BenefitsSection() {
  return (
    <section className="section-space">
      <div className="container-main rounded-2xl bg-slate-900 p-6 text-white md:p-10">
        <h2 className="text-2xl font-bold md:text-3xl">Výsledok obsahuje:</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="rounded-xl bg-slate-800 p-4">{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
