import React, { useMemo } from 'react';

interface ResultModalProps {
  onClose: () => void;
}

const CONFETTI_COUNT = 150;
const COLORS = ['#0d9488', '#2dd4bf', '#0ea5e9', '#6366f1', '#a855f7'];

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-2 h-4 top-0 left-0 animate-fall"
    style={style}
  ></div>
);

const ResultModal: React.FC<ResultModalProps> = ({ onClose }) => {

  const confettiPieces = useMemo(() => {
    return Array.from({ length: CONFETTI_COUNT }).map((_, index) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      };
      return <ConfettiPiece key={index} style={style} />;
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {confettiPieces}
      </div>
      <div className="relative bg-slate-800 rounded-2xl shadow-xl border border-slate-700 text-center p-8 max-w-md w-full animate-jump-in">
        <img 
          src="https://images4.imagebam.com/bc/5d/c1/ME15NBR7_o.png" 
          alt="Celebration" 
          className="mx-auto mb-6 w-32 h-32" 
        />
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-400 mb-6">
          Let's Celebrate!
        </h2>
        <p className="text-5xl font-bold text-white mb-6 relative -translate-x-2">
          HIRED
        </p>
        <p className="text-slate-400 mb-8">
          Destiny has spoken. It looks like we have a bright future together.
        </p>
        <button 
          onClick={onClose}
          className="bg-gradient-to-br from-teal-400 to-sky-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 active:scale-95"
        >
          Spin Again
        </button>
      </div>
    </div>
  );
};

export default ResultModal;