import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { z } from 'zod';

const leadSchema = z.object({
  answers: z.record(z.number().min(0).max(4)),
  score: z.number().min(0).max(100),
  level: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  company_size: z.string().min(1),
  timestamp: z.string(),
});

const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid payload', issues: parsed.error.issues });
  }

  const lead = parsed.data;
  const recipients = (process.env.LEADS_EMAILS || '').split(',').map((x) => x.trim()).filter(Boolean);

  console.log('LEAD_CAPTURED', lead);

  if (!resend || recipients.length === 0) {
    return res.status(200).json({ ok: true, mode: 'mock' });
  }

  await resend.emails.send({
    from: process.env.FROM_EMAIL || 'AI Test <onboarding@resend.dev>',
    to: recipients,
    subject: `Nový AI lead: ${lead.company} (${lead.score}/100)`,
    text: [
      `Skóre: ${lead.score}`,
      `Level: ${lead.level}`,
      `Meno: ${lead.name}`,
      `Email: ${lead.email}`,
      `Firma: ${lead.company}`,
      `Veľkosť: ${lead.company_size}`,
      `Timestamp: ${lead.timestamp}`,
      `Answers: ${JSON.stringify(lead.answers)}`,
    ].join('\n'),
  });

  return res.status(200).json({ ok: true });
}
