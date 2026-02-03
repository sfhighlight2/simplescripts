
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const words = ["Weight loss", "Muscle growth", "Healthy aging", "Mental health", "Hair regrowth"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 2000 : 150, 50));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="pt-40 pb-24 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tight text-primary-navy mb-8 leading-[1.1] min-h-[120px] md:min-h-0">
            <span className="text-primary-teal block md:inline">{words[index].substring(0, subIndex)}</span>
            <br className="md:hidden" />
            <span className="block md:inline ml-0 md:ml-4">tailored to you</span>
          </h1>
          <p className="text-[18px] text-secondary-text max-w-2xl mx-auto mb-10 font-secondary">
            Look, feel and perform your best every day. High-quality prescription wellness delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-primary-teal text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl active:scale-95">
              Get Started
            </button>
            <button className="bg-transparent text-primary-navy border-2 border-primary-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-navy hover:text-white transition-all">
              Browse Protocols
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-zinc-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13zM7 13a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13z" clipRule="evenodd" /></svg>
              127,000+ members
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" /></svg>
              Free expedited shipping
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
