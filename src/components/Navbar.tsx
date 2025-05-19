'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-opacity-90 backdrop-blur-sm bg-secondary dark:bg-secondary-dark transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-xl">Pixel<span className="text-primary-600">Mind</span> AI</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                About
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                Pricing
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                Services
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                Contact
              </Link>
              
              <button 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                onClick={() => {}}
                suppressHydrationWarning
              >
                Sign in
              </button>
              
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="p-2 rounded-full text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {mounted && theme === 'dark' ? (
                  <FiSun className="h-5 w-5" />
                ) : (
                  <FiMoon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;