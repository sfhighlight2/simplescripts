import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-primary-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-primary-navy py-6'
        }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary-teal rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Simple<span className="text-primary-teal">Scripts</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Weight Loss', 'Strength', 'Anti-Aging', 'Mood'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-semibold text-white/80 hover:text-primary-teal transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-sm font-semibold text-white/80 hover:text-white transition-colors">
              Login
            </button>
            <button className="bg-primary-teal text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all shadow-md active:scale-95">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
