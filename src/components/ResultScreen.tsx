import { recommendationsByArea } from '@/lib/recommendations';
import { getLevelDescription } from '@/lib/scoring';
import LeadCaptureForm from './LeadCaptureForm';

type Props = {
  score: number;
  level: string;
  answers: Record<string, number>;
};

export default function ResultScreen({ score, level, answers }: Props) {
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

      <LeadCaptureForm answers={answers} score={score} level={level} />
    </div>
  );
}
