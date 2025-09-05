import React, { useState, useMemo } from 'react';
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
        <p>&copy; {new Date().getFullYear()} JonaaaDev. All rights reserved.</p>
        <p className="text-sm">Spin the wheel to determine our collective future.</p>
      </footer>
    </div>
  );
}

export default App;