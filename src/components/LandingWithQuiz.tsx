'use client';

import { useEffect, useRef, useState } from 'react';
import BenefitsSection from './BenefitsSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import ProblemSection from './ProblemSection';
import QuizContainer from './QuizContainer';

export default function LandingWithQuiz() {
  const [started, setStarted] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const payload = window as typeof window & { dataLayer?: unknown[] };
    payload.dataLayer = payload.dataLayer || [];
    payload.dataLayer.push({ event: 'lp_view' });
  }, []);

  const handleStart = () => {
    setStarted(true);
    const payload = window as typeof window & { dataLayer?: unknown[] };
    payload.dataLayer = payload.dataLayer || [];
    payload.dataLayer.push({ event: 'quiz_start' });
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <>
      <HeroSection onStart={handleStart} />
      <ProblemSection />
      <HowItWorks />
      <BenefitsSection />
      <div ref={quizRef}>
        <QuizContainer started={started} />
      </div>
      <FAQSection />
      <Footer />
    </>
  );
}
