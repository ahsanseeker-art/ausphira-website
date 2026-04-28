import React from 'react';

export const Logo = ({ isDark = false, className = "" }: { isDark?: boolean, className?: string }) => {
  const textColor = isDark ? "text-white" : "text-navy-950";
  const lineColor = "bg-gold-500/60";
  const goldText = "text-gold-500";
  const mainColor = isDark ? "#ffffff" : "#020c3a";
  const uid = isDark ? 'dark' : 'light';
  
  return (
    <div className={`flex items-center gap-3 sm:gap-4 shrink-0 ${className}`}>
      <div className="relative w-12 h-12 md:w-[60px] md:h-[60px] flex items-center justify-center shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <defs>
            <mask id={`cutout-${uid}`}>
              <rect width="100" height="100" fill="white" />
              {/* Thicker black stroke to create the gap */}
              <path d="M 8 95 Q 50 51 93 51 Q 60 61 22 95 Z" fill="black" stroke="black" strokeWidth="6" strokeLinejoin="round" />
            </mask>
          </defs>
          
          {/* Left Leg (Uncut) */}
          <path d="M 50 5 L 10 95 L 35 95 L 50 61 Z" fill={mainColor} />
          
          {/* Right Leg (Cut by swoosh) */}
          <path d="M 50 5 L 90 95 L 65 95 L 50 61 Z" fill={mainColor} mask={`url(#cutout-${uid})`} />
          
          {/* Gold Swoosh */}
          <path d="M 8 95 Q 50 51 93 51 Q 60 61 22 95 Z" fill="#CB9936" />
        </svg>
      </div>
      <div className="flex flex-col justify-center pl-3 sm:pl-4 border-l-2 border-slate-300/50 py-0.5">
        <span className={`text-[18px] sm:text-[22px] md:text-[28px] font-black font-display ${textColor} tracking-[0.1em] leading-none mb-1.5 md:mb-2`}>
          AUSPHIRA
        </span>
        <div className="flex items-center w-full gap-2 mb-1.5 md:mb-2">
          <div className={`h-[1px] flex-grow ${lineColor}`}></div>
          <span className={`text-[8px] sm:text-[9.5px] md:text-[11px] font-bold tracking-[0.2em] ${goldText} uppercase leading-[0.8] whitespace-nowrap`}>
            (Private) Limited
          </span>
          <div className={`h-[1px] flex-grow ${lineColor}`}></div>
        </div>
        <span className={`text-[6px] sm:text-[7.5px] md:text-[9.5px] font-bold tracking-[0.15em] sm:tracking-[0.18em] ${textColor} uppercase leading-none whitespace-nowrap`}>
          Building Today, Growing Tomorrow
        </span>
      </div>
    </div>
  );
};
