import { Question } from '@/lib/questions';

type Props = {
  question: Question;
  selected?: number;
  onSelect: (value: number) => void;
};

export default function QuizStep({ question, selected, onSelect }: Props) {
  return (
    <div className="animate-[fadeIn_0.25s_ease-in]">
      <h3 className="mb-4 text-xl font-semibold">{question.title}</h3>
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`min-h-12 w-full rounded-xl border px-4 py-3 text-left transition ${
                isSelected ? 'border-primary bg-teal-50' : 'border-slate-300 bg-white hover:border-primary'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
