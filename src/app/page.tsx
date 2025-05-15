
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
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 text-transparent bg-clip-text animate-gradient">AI-Powered Solutions</span>
              <span className="block mt-2">For Your Business</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl animate-slide-up">
              Symbiosys AI transforms how businesses operate through innovative artificial intelligence solutions and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
              <button className="group relative px-6 py-3 text-white font-medium overflow-hidden rounded-md transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 group-hover:scale-110"></div>
                <span className="relative">Get Started</span>
              </button>
              <button className="group relative px-6 py-3 text-white font-medium overflow-hidden rounded-md border border-gray-400 hover:border-white transition-all duration-300">
                <span className="relative">View Demo</span>
              </button>
            </div>
          </div>
          
          {/* Enhanced Code Editor Visual */}
          <div className="rounded-lg bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/20">
            <div className="bg-gray-800/50 px-4 py-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">symbiosys-ai-demo.tsx</div>
            </div>
            <div className="p-4 font-mono text-sm text-gray-300 overflow-x-auto">
              <pre className="space-y-2 animate-typing">
                <code><span className="text-blue-400">import</span> <span className="text-green-400">{'{ SymbiosysAI }'}</span> <span className="text-blue-400">from</span> <span className="text-yellow-300">&apos;symbiosys-ai&apos;</span>;</code>
                <code></code>
                <code><span className="text-purple-400">function</span> <span className="text-yellow-300">analyzeBusinessData</span>() {'{'}</code>
                <code>  <span className="text-purple-400">const</span> ai = <span className="text-blue-400">new</span> <span className="text-yellow-300">{'SymbiosysAI'}</span>();</code>
                <code>  <span className="text-purple-400">const</span> data = <span className="text-yellow-300">fetchBusinessMetrics</span>();</code>
                <code></code>
                <code>  <span className="text-gray-500">// AI-powered analysis</span></code>
                <code>  <span className="text-purple-400">const</span> insights = ai.<span className="text-yellow-300">analyze</span>(data);</code>
                <code>  <span className="text-purple-400">const</span> recommendations = ai.<span className="text-yellow-300">recommend</span>(insights);</code>
                <code></code>
                <code>  <span className="text-blue-400">return</span> {'{'} insights, recommendations {'}'};</code>
                <code>{'}'}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-300 text-transparent bg-clip-text">
              How Symbiosys AI Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI solutions seamlessly integrate with your existing systems to deliver immediate value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards with enhanced hover effects */}
            <div className="group p-6 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-xl rounded-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">AI Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300">Expert guidance on implementing AI solutions for your business needs</p>
            </div>
            
            <div className="group p-6 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-xl rounded-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">Custom ML models tailored to your specific requirements</p>
            </div>
            
            <div className="group p-6 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-xl rounded-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">Data Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform your data into actionable insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add a new Demo Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-300 text-transparent bg-clip-text">
              See Symbiosys AI in Action
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience how our AI solutions can transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <svg className="w-16 h-16 mx-auto text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg">Demo Video - Click to Play</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Powerful AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Watch how Symbiosys AI processes complex data sets in real-time, identifying patterns and generating actionable insights that would take traditional methods days or weeks to produce.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Real-time data processing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Advanced pattern recognition</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Actionable business recommendations</span>
                </li>
              </ul>
              <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
