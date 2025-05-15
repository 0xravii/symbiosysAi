'use client';

import { motion } from 'framer-motion';

export default function AIConsulting() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h1>AI Consulting Services</h1>
          <p className="lead">
            Transform your business with our expert AI consulting services. We help organizations
            leverage artificial intelligence to drive innovation and achieve sustainable growth.
          </p>
          
          <h2>Our Approach</h2>
          <ul>
            <li>Strategic AI Assessment</li>
            <li>Custom Solution Design</li>
            <li>Implementation Support</li>
            <li>Training and Knowledge Transfer</li>
          </ul>
          
          <h2>Benefits</h2>
          <ul>
            <li>Improved Operational Efficiency</li>
            <li>Data-Driven Decision Making</li>
            <li>Competitive Advantage</li>
            <li>Scalable AI Solutions</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}