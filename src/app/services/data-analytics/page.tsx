'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DataAnalytics() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text animate-gradient">
                Data Analytics
              </span> Services
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our data analytics services help you unlock the full potential of your data. We transform raw information into actionable insights that drive strategic decision-making and business growth.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-3">Why Choose Our Analytics Services?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Comprehensive data analysis and visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Custom dashboards and reporting solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Advanced statistical modeling and forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Data-driven strategy development</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl animate-float-slow"
          >
            <Image 
              src="/ai-3d-background.svg" 
              alt="Data Analytics Visualization" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Data Analytics Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Intelligence',
                description: 'Transform raw data into meaningful insights for strategic decision-making',
                icon: '📊'
              },
              {
                title: 'Data Visualization',
                description: 'Create interactive dashboards and reports for clear data interpretation',
                icon: '📈'
              },
              {
                title: 'Predictive Analytics',
                description: 'Forecast future trends and behaviors based on historical data',
                icon: '🔮'
              },
              {
                title: 'Big Data Processing',
                description: 'Handle and analyze large volumes of structured and unstructured data',
                icon: '🗄️'
              },
              {
                title: 'Customer Analytics',
                description: 'Gain deeper understanding of customer behavior and preferences',
                icon: '👥'
              },
              {
                title: 'Performance Metrics',
                description: 'Measure and track KPIs to optimize business performance',
                icon: '📏'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}