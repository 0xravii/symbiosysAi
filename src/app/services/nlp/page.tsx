'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Remove the Metadata import and export

// Remove the NLPLayout component

export default function NLPSolutions() {
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
                Natural Language Processing
              </span> Solutions
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our NLP solutions enable machines to understand, interpret, and generate human language. We develop cutting-edge applications that transform how your business interacts with text and speech data.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-3">Why Choose Our NLP Services?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>State-of-the-art language models and algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Multilingual support for global applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Customized solutions for your specific industry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span>Continuous improvement through feedback loops</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl animate-float-delay"
          >
            <Image 
              src="/window.svg" 
              alt="NLP Visualization" 
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
          <h2 className="text-3xl font-bold mb-8 text-center">Our NLP Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sentiment Analysis',
                description: 'Determine the emotional tone behind text to understand customer opinions',
                icon: '😊'
              },
              {
                title: 'Chatbots & Virtual Assistants',
                description: 'Create intelligent conversational interfaces for customer support',
                icon: '🤖'
              },
              {
                title: 'Text Classification',
                description: 'Automatically categorize documents and messages by topic or intent',
                icon: '📑'
              },
              {
                title: 'Named Entity Recognition',
                description: 'Extract and identify key information from unstructured text',
                icon: '🔍'
              },
              {
                title: 'Machine Translation',
                description: 'Break language barriers with accurate automated translation',
                icon: '🌐'
              },
              {
                title: 'Text Summarization',
                description: 'Generate concise summaries of long documents automatically',
                icon: '📝'
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