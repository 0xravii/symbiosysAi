import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NLP Solutions | Symbiosis AI',
  description: 'Advanced natural language processing solutions for intelligent text and speech analysis',
};

export default function NLPLayout({ children }: { children: React.ReactNode }) {
  return children;
}