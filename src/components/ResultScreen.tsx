import { useState } from 'react';
import { recommendationsByArea } from '@/lib/recommendations';
import { getLevelDescription } from '@/lib/scoring';
import LeadCaptureForm from './LeadCaptureForm';

type Props = {
  score: number;
  level: string;
  answers: Record<string, number>;
};

export default function ResultScreen({ score, level, answers }: Props) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isUnlocked) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-semibold text-accent">Výsledok je pripravený</p>
        <h3 className="mt-2 text-2xl font-bold">Odomknite svoj AI profil</h3>
        <p className="mt-2 text-slate-700">
          Vyplňte email a zobrazíme vám výsledok v 4 úrovniach + odporúčania pre 5 oblastí.
        </p>
        <LeadCaptureForm
          answers={answers}
          score={score}
          level={level}
          title="Kam vám máme poslať výsledok?"
          submitLabel="Odomknúť výsledok"
          successMessage="Výsledok je odomknutý nižšie."
          onSuccess={() => {
            const payload = window as typeof window & { dataLayer?: unknown[] };
            payload.dataLayer = payload.dataLayer || [];
            payload.dataLayer.push({ event: 'result_unlock', score, level });
            setIsUnlocked(true);
          }}
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold text-accent">Váš výsledok</p>
      <h3 className="mt-2 text-2xl font-bold">{level}</h3>
      <p className="mt-2 text-slate-700">Skóre: <strong>{score}/100</strong></p>
      <p className="mt-3 text-slate-700">{getLevelDescription(score)}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {Object.entries(recommendationsByArea).map(([area, items]) => (
          <div key={area} className="rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold">{area}</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-slate-900 p-5 text-white">
        <p className="text-sm uppercase tracking-wide text-teal-200">Ďalší krok</p>
        <h4 className="mt-2 text-xl font-semibold">Chcete akčný AI plán pre vašu firmu?</h4>
        <p className="mt-2 text-slate-200">Objednajte si 30-min konzultáciu a prejdeme konkrétne priority podľa vášho výsledku.</p>
        <button
          type="button"
          onClick={() => {
            const payload = window as typeof window & { dataLayer?: unknown[] };
            payload.dataLayer = payload.dataLayer || [];
            payload.dataLayer.push({ event: 'cta_consultation_click', score, level });
          }}
          className="mt-4 min-h-12 rounded-lg bg-primary px-5 py-3 font-semibold text-white"
        >
          Chcem AI konzultáciu
        </button>
      </div>
    </div>
  );
}
