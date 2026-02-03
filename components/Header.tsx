
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-bold tracking-tight text-zinc-900 font-heading">
            SimpleScripts<span className="text-emerald-500">.</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {['Weight Loss', 'Strength', 'Anti-Aging', 'Mood'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-zinc-700 hover:text-emerald-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 hidden sm:block">Login</a>
          <button className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-lg">
            Get Started
          </button>
          <button className="lg:hidden p-2 text-zinc-900">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
