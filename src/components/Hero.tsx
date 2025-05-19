import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-secondary pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">Effortless Creativity,</span>
              <span className="block">Powered by <span className="text-primary-600">AI</span></span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover how our AI services can simplify and enhance your content creation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors duration-300">
                Get started
              </button>
              
              <button className="bg-transparent text-white hover:bg-white/10 px-8 py-3 rounded-full text-base font-medium transition-colors duration-300 border border-gray-600">
                Explore more
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-gray-300">
                <span className="block text-2xl font-bold">100K+</span>
                <span className="text-sm">Users</span>
              </div>
              
              <div className="h-8 w-px bg-gray-700"></div>
              
              <div className="text-gray-300">
                <span className="block text-2xl font-bold">5.0</span>
                <span className="text-sm">Reviews</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              {/* AI-themed image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image 
                    src="/ai-3d-background.svg" 
                    alt="AI Robot" 
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;