'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Symbiosys AI</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transforming businesses through innovative AI solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/ai-consulting" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">AI Consulting</Link></li>
              <li><Link href="/services/machine-learning" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Machine Learning</Link></li>
              <li><Link href="/services/data-analytics" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">Data Analytics</Link></li>
              <li><Link href="/services/nlp" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">NLP Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Symbiosys AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}