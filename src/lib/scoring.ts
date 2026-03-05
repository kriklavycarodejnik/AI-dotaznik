import { questions } from './questions';

export type AnswersMap = Record<string, number>;

export const maxPoints = questions.length * 4;

export function computeScore(answers: AnswersMap): number {
  const points = questions.reduce((sum, question) => sum + (answers[question.id] ?? 0), 0);
  return Math.round((points / maxPoints) * 100);
}

export function getLevel(score: number): string {
  if (score <= 30) return 'AI ešte len objavujete';
  if (score <= 55) return 'Experimentujete s AI';
  if (score <= 75) return 'AI vám už pomáha';
  return 'AI je súčasť vášho biznisu';
}

export function getLevelDescription(score: number): string {
  if (score <= 30) {
    return 'Vo vašej firme sa väčšina práce robí manuálne a AI zatiaľ nie je súčasťou procesov. Najväčší potenciál máte v jednoduchých nástrojoch a automatizácii rutiny.';
  }
  if (score <= 55) {
    return 'Vo firme už niekto skúša AI nástroje, ale zatiaľ ide skôr o individuálne experimenty. Ďalším krokom je systematické využitie AI.';
  }
  if (score <= 75) {
    return 'AI nástroje už používate v niektorých oblastiach firmy. Najväčší potenciál máte v integráciách a dátach.';
  }
  return 'AI už hrá vo firme dôležitú rolu. Ďalší krok je škálovanie a pokročilé automatizácie.';
}
