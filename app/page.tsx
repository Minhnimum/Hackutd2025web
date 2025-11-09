'use client'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Section with Gradient */}
      <header 
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 px-6 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bookdrawing.png')" }}
      >
        {/* Optional overlay to dim the background if needed */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/70 via-pink-500/70 to-purple-600/70"></div>
        
        <div className="text-center relative z-10">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin text-white mb-8 tracking-wide">
            Study with <span className="font-normal bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">Kori</span>
          </h1>
          <p className="text-2xl md:text-3xl font-thin text-white mb-4">
            at Kori.study
          </p>
          <button className="mt-8 px-10 py-4 bg-white text-pink-600 font-semibold text-lg rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-300 shadow-xl">
            Download Now
          </button>
        </div>
      </header>

      {/* Content Section with 4 Cards */}
      <section 
        className="py-44 px-6 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/info-section-bg.png')" }}
        onMouseMove={(e) => {
          const section = e.currentTarget;
          const rect = section.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          section.style.setProperty('--mouse-x', `${x}px`);
          section.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        {/* Dimming overlay with spotlight */}
        <div 
          className="absolute inset-0 bg-black/40 pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.1), rgba(0,0,0,0.6))'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Moods Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div 
                className="w-full h-48 rounded-xl mb-6 bg-cover bg-center transition-all duration-300 hover:scale-110"
                style={{ backgroundImage: "url('/sleepcat.gif')" }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Moods</h3>
              <p className="text-gray-600">
                Smart AI integration analyzes your moods and emotions through sound and images for personalized study experiences.
              </p>
            </div>

            {/* Environment Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div 
                className="w-full h-48 rounded-xl mb-6 bg-cover bg-center transition-all duration-300 hover:scale-110"
                style={{ backgroundImage: "url('/normalcat.gif')" }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Environment</h3>
              <p className="text-gray-600">
                Sensors monitor your room&apos;s humidity, air quality, and temperature to optimize your study environment.
              </p>
            </div>

            {/* Data Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div 
                className="w-full h-48 rounded-xl mb-6 bg-cover bg-center transition-all duration-300 hover:scale-110"
                style={{ backgroundImage: "url('/shakeheadcat.gif')" }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Data</h3>
              <p className="text-gray-600">
                All your data stays local on your device. No cloud storage, no external servers - complete control.
              </p>
            </div>

            {/* Secure Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div 
                className="w-full h-48 rounded-xl mb-6 bg-cover bg-center transition-all duration-300 hover:scale-110"
                style={{ backgroundImage: "url('/fightcat.gif')" }}
              ></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Secure</h3>
              <p className="text-gray-600">
                Your privacy is our priority. All data is protected and secured with industry-leading encryption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Kori
              </h4>
              <p className="text-gray-400">
                Your intelligent study companion for better learning outcomes.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://devpost.com/software/kori" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Devpost</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Kori. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
