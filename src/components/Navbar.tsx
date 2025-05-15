'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: 'AI Consulting', href: '/services/ai-consulting' },
    { name: 'Machine Learning', href: '/services/machine-learning' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'NLP Solutions', href: '/services/nlp' },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/globe.svg" alt="Symbiosys AI Logo" width={32} height={32} />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Symbiosys <span className="text-sky-400">AI</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Services
                  <FiChevronDown className={`ml-1 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-1">
                        {services.map((service) => (
                          <Link 
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-gray-700 hover:text-sky-400 dark:hover:text-sky-400 transition-colors duration-200"
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          // Replace the theme toggle button section with:
          <div className="flex items-center">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 rounded-lg transition-colors duration-200"
            >
              {mounted && (theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />)}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 rounded-lg transition-colors duration-200"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link 
                  href="/" 
                  className="block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Services Dropdown */}
                <div className="block px-3 py-2">
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center w-full text-left text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 text-base font-medium transition-colors duration-200"
                  >
                    Services
                    <FiChevronDown className={`ml-1 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 pl-4 border-l-2 border-sky-100 dark:border-gray-700"
                      >
                        {services.map((service) => (
                          <Link 
                            key={service.href}
                            href={service.href}
                            className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition-colors duration-200"
                            onClick={() => {
                              setServicesOpen(false);
                              setIsOpen(false);
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link 
                  href="/about" 
                  className="block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}