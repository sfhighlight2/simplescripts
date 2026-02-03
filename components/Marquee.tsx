
import React from 'react';
import { USPS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="py-12 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        {[...USPS, ...USPS, ...USPS].map((usp, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 px-12">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-lg font-medium text-zinc-800 tracking-tight">{usp}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default Marquee;
