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
            <div className="w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-110">
              <img src="/logo.png" alt="SimpleScripts" className="w-full h-full object-contain filter brightness-0 invert" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Weight Loss', 'Strength', 'Anti-Aging', 'Mood'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-white/80 hover:text-primary-teal transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-sm font-medium text-white/80 hover:text-white transition-colors">
              Login
            </button>
            <button className="bg-primary-teal text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all shadow-md active:scale-95">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
