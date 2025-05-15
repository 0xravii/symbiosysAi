'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'AI Consulting',
    description: 'Strategic AI implementation and business transformation',
    path: '/services/ai-consulting',
    icon: '🤖'
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models and predictive analytics',
    path: '/services/machine-learning',
    icon: '🧠'
  },
  {
    title: 'Data Analytics',
    description: 'Advanced data analysis and visualization',
    path: '/services/data-analytics',
    icon: '📊'
  },
  {
    title: 'Natural Language Processing',
    description: 'Text analysis and language understanding solutions',
    path: '/services/nlp',
    icon: '💬'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Our Services
        </motion.h1>
        {/* Service grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={service.path}>
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}