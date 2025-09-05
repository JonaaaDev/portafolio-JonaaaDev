import React from 'react';
import WheelOfFortune from './components/WheelOfFortune';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center p-4 antialiased overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      
      <header className="text-center mb-8 z-10">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-sky-500 pb-2">
          JonaaaDev
        </h1>
        <p className="text-slate-400 mt-2 text-lg">Spin the Wheel and Decide My Fate</p>
      </header>
      
      <main className="z-10">
        <WheelOfFortune />
      </main>

      <footer className="mt-12 text-center text-slate-500 z-10">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a href="https://github.com/JonaaaDev/portafolio-JonaaaDev" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-500 hover:text-white transition-colors duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            <span className="ml-2 underline-offset-4 group-hover:underline">Source Code</span>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} JonaaaDev. All rights reserved.</p>
        <p className="text-sm">Spin the wheel to determine our collective future.</p>
      </footer>
    </div>
  );
}

export default App;
