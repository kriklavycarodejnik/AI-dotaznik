type Props = { current: number; total: number };

export default function ProgressBar({ current, total }: Props) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="mb-4">
      <div className="mb-2 flex justify-between text-sm text-slate-600">
        <span>Otázka {current} z {total}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
