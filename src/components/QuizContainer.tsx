'use client';

import { useMemo, useState } from 'react';
import { computeScore, getLevel } from '@/lib/scoring';
import { questions } from '@/lib/questions';
import ProgressBar from './ProgressBar';
import QuizStep from './QuizStep';
import ResultScreen from './ResultScreen';

type Props = { started: boolean };

export default function QuizContainer({ started }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const total = questions.length;
  const isComplete = step >= total;

  const score = useMemo(() => computeScore(answers), [answers]);
  const level = useMemo(() => getLevel(score), [score]);

  const trackEvent = (event: string, data?: Record<string, unknown>) => {
    const payload = window as typeof window & { dataLayer?: unknown[] };
    payload.dataLayer = payload.dataLayer || [];
    payload.dataLayer.push({ event, ...data });
  };

  const onSelect = (value: number) => {
    const question = questions[step];
    const nextAnswers = { ...answers, [question.id]: value };
    setAnswers(nextAnswers);
    trackEvent('quiz_step', { step: step + 1, questionId: question.id, value });

    if (step + 1 < total) {
      setTimeout(() => setStep(step + 1), 150);
    } else {
      setTimeout(() => {
        setStep(total);
        trackEvent('quiz_complete', { score: computeScore(nextAnswers) });
      }, 150);
    }
  };

  const back = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  if (!started) return null;

  return (
    <section id="quiz" className="section-space">
      <div className="container-main">
        {!isComplete ? (
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <ProgressBar current={step + 1} total={total} />
            <QuizStep question={questions[step]} selected={answers[questions[step].id]} onSelect={onSelect} />
            <div className="mt-6">
              <button type="button" onClick={back} className="min-h-12 rounded-xl border border-slate-300 px-4 py-2" disabled={step === 0}>
                Späť
              </button>
            </div>
          </div>
        ) : (
          <ResultScreen score={score} level={level} answers={answers} />
        )}
      </div>
    </section>
  );
}
