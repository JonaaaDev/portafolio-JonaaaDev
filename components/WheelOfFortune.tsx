import React, { useState, useMemo } from 'react';
import ResultModal from './ResultModal';

const SEGMENT_COLORS = {
  WIN: ['#10B981', '#059669'], // Emerald
  LOSE_DARK: ['#334155', '#1E293B'], // Slate
  LOSE_LIGHT: ['#475569', '#334155'], // Slate
};

const segments = [
  { text: 'HIRED', type: 'WIN' },
  { text: "Don't Hire", type: 'LOSE_DARK' },
  { text: "Don't Hire", type: 'LOSE_LIGHT' },
  { text: "Don't Hire", type: 'LOSE_DARK' },
  { text: "Don't Hire", type: 'LOSE_LIGHT' },
];

const WheelOfFortune: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const spinDuration = 8000; // 8 seconds for a dramatic spin
  const angleOffset = -90; // Sets the left of the wheel (9 o'clock) as the 0-degree starting point for the gradient.

  const conicGradient = useMemo(() => {
    const segmentDegree = 360 / segments.length;
    const gradientParts = segments.map((segment, index) => {
      const [color1, color2] = SEGMENT_COLORS[segment.type as keyof typeof SEGMENT_COLORS];
      const startAngle = index * segmentDegree;
      const endAngle = (index + 1) * segmentDegree;
      return `${color1} ${startAngle}deg ${endAngle}deg, ${color2} ${endAngle}deg`;
    });
    return `conic-gradient(from ${angleOffset}deg, ${gradientParts.join(', ')})`;
  }, []);
  
  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const fullSpins = Math.floor(Math.random() * 5) + 8;
    const segmentAngle = 360 / segments.length;

    // The winning segment is at index 0. The conic-gradient starts at -90deg (9 o'clock).
    // So the winning segment visually spans from -90deg to (-90 + segmentAngle)deg.
    // We want the pointer (at 0deg, 12 o'clock) to land somewhere in this segment.
    const targetAngleInSegment = (Math.random() * 0.7 + 0.15) * segmentAngle; // Point between 15% and 85% of the segment width

    // The angle on the static wheel we want to land on is -90deg (start of segment) + targetAngleInSegment.
    // The final rotation `R` must be such that the point at `-R` on the static wheel is our target angle.
    // So, -R = 90 - targetAngleInSegment  =>  R = 90 - targetAngleInSegment.
    const finalAngle = 90 - targetAngleInSegment;

    const currentRotation = rotation % 360;
    const newRotation = rotation - currentRotation + (fullSpins * 360) + finalAngle;
    
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setShowModal(true);
    }, spinDuration);
  };
  
  const resetWheel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
        {/* Pointer */}
        <div className="absolute -top-4 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-teal-300 z-20 drop-shadow-lg"></div>

        {/* Wheel */}
        <div 
          className="relative w-full h-full rounded-full border-8 border-slate-700 shadow-2xl transition-transform duration-[8000ms] ease-out"
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: conicGradient,
          }}
        >
          {/* Text labels container */}
          <div className="absolute inset-0 w-full h-full rounded-full">
            {segments.map((segment, index) => {
              const segmentAngle = 360 / segments.length;
              const angle = angleOffset + segmentAngle * index + segmentAngle / 2;
              const isUpsideDown = angle > 90 && angle < 270;

              return (
                <div
                  key={index}
                  className="absolute top-0 left-1/2 h-1/2 w-px" // "Spoke" from center to top edge
                  style={{
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'bottom center',
                  }}
                >
                  <div
                    className="absolute top-10 w-max" // Position text container along the spoke
                    style={{
                      transform: `translateX(-50%) ${isUpsideDown ? 'rotate(180deg)' : ''}`,
                    }}
                  >
                    <span
                      className={`font-bold uppercase text-base tracking-wider ${segment.type === 'WIN' ? 'text-white' : 'text-slate-300'}`}
                      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                    >
                      {segment.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Spin Button */}
        <div className="absolute w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-600 shadow-inner">
           <button 
            onClick={handleSpin}
            disabled={isSpinning}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-sky-500 text-white font-bold text-xl uppercase tracking-wider shadow-lg transform transition-transform active:scale-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 hover:from-teal-300 hover:to-sky-400"
          >
            {isSpinning ? '...' : 'Spin'}
          </button>
        </div>
      </div>
      {showModal && <ResultModal onClose={resetWheel} />}
    </>
  );
};

export default WheelOfFortune;