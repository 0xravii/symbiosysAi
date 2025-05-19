'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Service } from '@/types/service';
import Link from 'next/link';

// Define services array to be used in the UI
const services: Service[] = [
  {
    title: 'AI Consulting',
    description: 'Strategic AI implementation and business transformation',
    path: '/services/ai-consulting',
    icon: '🤖'
  },
  {
    title: 'Machine Learning',
    description: 'Custom ML models to solve complex business problems',
    path: '/services/machine-learning',
    icon: '🧠'
  },
  {
    title: 'Data Analytics',
    description: 'Turn your data into actionable business insights',
    path: '/services/data-analytics',
    icon: '📊'
  },
  {
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation',
    path: '/services/process-automation',
    icon: '⚙️'
  }
];

// Testimonials
const testimonials = [
  {
    quote: "Implementing their AI solutions increased our operational efficiency by 45% within three months.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Inc.",
    avatar: "/testimonial-1.jpg"
  },
  {
    quote: "Their team quickly understood our unique challenges and delivered a tailored solution that exceeded our expectations.",
    author: "Michael Chen",
    position: "VP of Innovation, GlobalCorp",
    avatar: "/testimonial-2.jpg"
  },
  {
    quote: "The ROI we&apos;ve seen from their machine learning implementation has been remarkable. Highly recommend.",
    author: "Elena Rodriguez",
    position: "Director of Analytics, DataDrive",
    avatar: "/testimonial-3.jpg"
  }
];

// Stats
const stats = [
  { value: '97%', label: 'Client Satisfaction' },
  { value: '350+', label: 'Projects Completed' },
  { value: '40%', label: 'Average Efficiency Gain' },
  { value: '24/7', label: 'Support Available' }
];


export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Staggered animation for services
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Symbiosis AI</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                  <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  <Link href="#clients" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Clients</Link>
                  <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                Get Started
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/ai-pattern.svg')] opacity-20 bg-repeat"></div>
          {/* Add floating elements */}
          <div className="absolute hidden sm:block h-32 w-32 rounded-full bg-blue-500/20 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute hidden sm:block h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl bottom-1/4 right-1/4 animate-pulse"></div>
          <div className="absolute hidden sm:block h-24 w-24 rounded-full bg-purple-500/20 blur-3xl top-1/3 right-1/3 animate-pulse"></div>
        </div>
                
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 text-transparent bg-clip-text">AI-Powered Solutions</span>
              <span className="block mt-2">For Your Business</span>
            </h1>
            <p className="text-xl text-gray-300">
              Leverage cutting-edge artificial intelligence to transform your operations,
              boost efficiency, and unlock new opportunities for growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-lg font-medium">
                Get Started
              </button>
              <button className="bg-gray-800/60 hover:bg-gray-700/60 backdrop-blur-sm border border-gray-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden border border-gray-700/50 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 filter blur-3xl opacity-20 animate-spin-slow"></div>
              </div>
              <div className="relative z-10 bg-gray-900/50 p-8 rounded-xl backdrop-blur-md border border-gray-700/50">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-2">Next-Gen AI</h3>
                <p className="text-gray-300">Transforming businesses with intelligent automation and predictive analytics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Services</span>
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive AI solutions tailored to your specific business needs
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.path}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 group hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link href={service.path} className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                    Learn more
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Transforming Businesses with <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Intelligent AI</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                At Symbiosys Ai, we harness the power of artificial intelligence to solve complex business problems and drive growth. Our team of experts combines deep technical knowledge with business acumen to deliver solutions that create real value.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                With a focus on practical applications and measurable outcomes, we help businesses of all sizes implement AI strategies that enhance decision-making, automate processes, and uncover valuable insights from data.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-lg font-medium">
                About Our Team
              </button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="clients" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Clients Say</span>
            </motion.h2>
          </div>

          <motion.div 
            className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <div className="text-5xl text-blue-400 mb-6">&quot;</div>
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl text-gray-200 italic mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <div className="font-medium text-white">{testimonials[currentTestimonial].author}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].position}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentTestimonial === index ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 h-20 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="text-gray-400 font-medium">{company}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">AI?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our AI solutions can address your specific challenges and drive growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-medium">
                Schedule a Consultation
              </button>
              <button className="bg-gray-700/60 hover:bg-gray-600/60 backdrop-blur-sm border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-950 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-4">Symbiosys Ai</div>
              <p className="mb-4">Transforming businesses with intelligent AI solutions.</p>
              <div className="flex space-x-4">
                <a href="https://x.com/SymbiosysTechn1" className="text-gray-400 hover:text-blue-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/symbiosys-technologies/" className="text-gray-400 hover:text-blue-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link href={service.path} className="hover:text-blue-400 transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>IT Park, Hill No: 2 </li>
                <li>Rushikonda, Visakhapatnam, A.P, India.</li>
                <li>info@symbiosystech.com</li>
                <li>+91 9398611592</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Ai Symbiosys. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </main>
  );
}

