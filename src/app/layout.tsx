import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Readiness Test',
  description: 'Zistite AI potenciál vašej firmy za 3 minúty.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
