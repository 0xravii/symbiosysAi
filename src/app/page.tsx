'use client';

import { motion } from 'framer-motion';
import type { Service } from '@/types/service';

// Define services array to be used in the UI
const services: Service[] = [
  {
    title: 'AI Consulting',
    description: 'Strategic AI implementation and business transformation',
    path: '/services/ai-consulting',
    icon: '🤖'
  }
  // ...other services
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Animation */}
      <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/ai-pattern.svg')] opacity-20 bg-repeat animate-pulse"></div>
          {/* Add floating elements */}
          <div className="absolute hidden sm:block h-32 w-32 rounded-full bg-blue-500/20 blur-3xl top-1/4 left-1/4 animate-float-slow"></div>
          <div className="absolute hidden sm:block h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl bottom-1/4 right-1/4 animate-float"></div>
          <div className="absolute hidden sm:block h-24 w-24 rounded-full bg-purple-500/20 blur-3xl top-1/3 right-1/3 animate-float-delay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 text-transparent bg-clip-text animate-gradient">AI-Powered Solutions</span>
              <span className="block mt-2">For Your Business</span>
            </h1>
            {/* Add services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {services.map((service) => (
                <motion.div
                  key={service.path}
                  className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
