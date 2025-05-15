'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIBackground from '@/components/AIBackground';

export default function RootLayoutClient({
  children,
  inter
}: {
  children: React.ReactNode;
  inter: any;
}) {
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
          <Footer />
        </div>
      </ThemeProvider>
    </body>
  );
}