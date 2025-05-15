import { Inter } from 'next/font/google';
import './globals.css';
import RootLayoutClient from '@/components/RootLayoutClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Symbiosys AI',
  description: 'Transforming businesses through innovative AI solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <RootLayoutClient inter={inter}>
        {children}
      </RootLayoutClient>
    </html>
  );
}
