'use client';

const faqs = [
  { q: 'Ako dlho trvá test?', a: 'Približne 2 až 3 minúty.' },
  { q: 'Musím sa registrovať?', a: 'Nie, výsledok uvidíte okamžite.' },
  { q: 'Čo získam po odoslaní kontaktu?', a: 'Detailný checklist a návrh ďalších krokov.' },
];

export default function FAQSection() {
  const trackFaqToggle = (question: string, isOpen: boolean) => {
    const payload = window as typeof window & { dataLayer?: unknown[] };
    payload.dataLayer = payload.dataLayer || [];
    payload.dataLayer.push({ event: 'faq_toggle', question, isOpen });
  };

  return (
    <section className="section-space">
      <div className="container-main">
        <h2 className="text-2xl font-bold md:text-3xl">FAQ</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-xl bg-white p-4 shadow-sm"
              onToggle={(event) => trackFaqToggle(faq.q, (event.currentTarget as HTMLDetailsElement).open)}
            >
              <summary className="cursor-pointer font-medium">{faq.q}</summary>
              <p className="mt-2 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
