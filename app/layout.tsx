import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'AI Developer Portfolio',
  description: 'Portfolio of an AI Product Engineer specializing in RAG, evals, and LLM applications.',
  openGraph: {
    title: 'AI Developer Portfolio',
    description: 'Portfolio of an AI Product Engineer specializing in RAG, evals, and LLM applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Developer Portfolio',
    description: 'Portfolio of an AI Product Engineer specializing in RAG, evals, and LLM applications.',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
