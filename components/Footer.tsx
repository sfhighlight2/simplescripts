
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <a href="/" className="text-3xl font-extrabold tracking-tight text-white font-heading">
              SimpleScripts<span className="text-emerald-500">.</span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sign up to receive health tips and early access to new treatments.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-800 border-none rounded-xl px-4 py-3 text-sm flex-1 focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 text-zinc-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-colors">
                Join
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-500">Popular</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">GLP-1 Treatments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ozempic®</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sermorelin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NAD+</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-500">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-500">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Info</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-medium">
            © 2024 SimpleScripts Wellness International Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['fb', 'ig', 'tw', 'li'].map(social => (
              <a key={social} href="#" className="text-zinc-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
