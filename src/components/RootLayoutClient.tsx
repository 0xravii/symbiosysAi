'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import AIBackground from '@/components/AIBackground';
import ScrollToTop from '@/components/ScrollToTop';
import type { Inter } from 'next/font/google';

interface RootLayoutClientProps {
  children: React.ReactNode;
  inter: ReturnType<typeof Inter>;
}

export default function RootLayoutClient({ children, inter }: RootLayoutClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body 
      className={`${inter.className} min-h-screen transition-all duration-300`}
      style={{
        opacity: mounted ? 1 : 0
      }}
    >
      <AIBackground />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </body>
  );
}