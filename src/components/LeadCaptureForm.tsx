'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  company_size: z.string().min(1),
});

type LeadData = z.infer<typeof schema>;

type Props = {
  answers: Record<string, number>;
  score: number;
  level: string;
};

export default function LeadCaptureForm({ answers, score, level }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors } } = useForm<LeadData>();

  const onSubmit = async (data: LeadData) => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) return;

    setStatus('loading');
    try {
      const body = {
        ...parsed.data,
        answers,
        score,
        level,
        timestamp: new Date().toISOString(),
      };

      const payload = window as typeof window & { dataLayer?: unknown[] };
      payload.dataLayer = payload.dataLayer || [];
      payload.dataLayer.push({ event: 'lead_submit', score, level });

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3 rounded-xl border border-slate-200 bg-white p-4">
      <h4 className="text-lg font-semibold">Pošlite mi detailný checklist</h4>
      <input {...register('name')} placeholder="Meno" className="min-h-12 w-full rounded-lg border px-3" />
      {errors.name && <p className="text-sm text-red-600">Zadajte meno.</p>}
      <input {...register('email')} placeholder="Email" className="min-h-12 w-full rounded-lg border px-3" />
      {errors.email && <p className="text-sm text-red-600">Zadajte platný email.</p>}
      <input {...register('company')} placeholder="Firma" className="min-h-12 w-full rounded-lg border px-3" />
      {errors.company && <p className="text-sm text-red-600">Zadajte firmu.</p>}
      <select {...register('company_size')} className="min-h-12 w-full rounded-lg border px-3">
        <option value="">Veľkosť firmy</option>
        <option value="1-10">1-10</option>
        <option value="11-50">11-50</option>
        <option value="51-250">51-250</option>
        <option value="250+">250+</option>
      </select>
      {errors.company_size && <p className="text-sm text-red-600">Vyberte veľkosť firmy.</p>}
      <button type="submit" className="min-h-12 w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white" disabled={status === 'loading'}>
        {status === 'loading' ? 'Odosielam...' : 'Pošlite mi detailný checklist'}
      </button>
      {status === 'success' && <p className="text-sm text-green-700">Ďakujeme, ozveme sa vám.</p>}
      {status === 'error' && <p className="text-sm text-red-700">Nepodarilo sa odoslať formulár.</p>}
    </form>
  );
}
