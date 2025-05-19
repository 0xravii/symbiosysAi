'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// No metadata export here - it belongs in layout.tsx

export default function MachineLearning() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient mb-6">
              Machine Learning Solutions
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Leverage the power of advanced machine learning algorithms to extract insights, 
              make predictions, and automate complex decision-making processes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="w-full h-64 md:h-80 relative animate-float">
              <Image 
                src="/ai-pattern.svg" 
                alt="Machine Learning Visualization" 
                fill 
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Machine Learning Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Predictive Analytics',
                description: 'Forecast future trends and behaviors with advanced predictive models.',
                icon: '📈'
              },
              {
                title: 'Computer Vision',
                description: 'Extract meaningful information from images and videos using deep learning.',
                icon: '👁️'
              },
              {
                title: 'Recommendation Systems',
                description: 'Personalize user experiences with intelligent recommendation algorithms.',
                icon: '🎯'
              },
              {
                title: 'Anomaly Detection',
                description: 'Identify unusual patterns and outliers in your data automatically.',
                icon: '🔍'
              },
              {
                title: 'Time Series Analysis',
                description: 'Analyze time-dependent data to extract meaningful statistics and insights.',
                icon: '⏱️'
              },
              {
                title: 'Custom ML Models',
                description: 'Tailored machine learning solutions designed for your specific business needs.',
                icon: '🧩'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6">Let&apos;s discuss how our machine learning solutions can help you achieve your goals.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg shadow-lg transition-all duration-300 font-semibold"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}