const items = ['Odpoviete na 15 otázok', 'Okamžite uvidíte svoje AI skóre', 'Dostanete odporúčania kde začať'];

export default function HowItWorks() {
  return (
    <section className="section-space">
      <div className="container-main">
        <h2 className="text-2xl font-bold md:text-3xl">Ako to funguje</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-sm font-semibold text-accent">Krok {index + 1}</span>
              <p className="mt-2 font-medium text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
