
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <a href="/" className="inline-block">
              <img src="/logo.png" alt="SimpleScripts" className="w-12 h-12 object-contain filter brightness-0 invert" />
            </a>
            <p className="text-white/60 text-sm leading-relaxed font-secondary">
              Sign up to receive health tips and early access to new treatments.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm flex-1 focus:ring-2 focus:ring-primary-teal outline-none"
              />
              <button className="bg-primary-teal text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all active:scale-95 shadow-lg">
                Join
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Popular</h4>
            <ul className="space-y-4 text-sm text-white/60 font-secondary font-medium">
              <li><a href="#" className="hover:text-primary-teal transition-colors">GLP-1 Treatments</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Ozempic®</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Sermorelin</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">NAD+</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Company</h4>
            <ul className="space-y-4 text-sm text-white/60 font-secondary font-medium">
              <li><a href="#" className="hover:text-primary-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Our Blog</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60 font-secondary font-medium">
              <li><a href="#" className="hover:text-primary-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-teal transition-colors">Safety Info</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-medium font-secondary">
            © 2024 SimpleScripts Wellness International Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['fb', 'ig', 'tw', 'li'].map(social => (
              <a key={social} href="#" className="text-white/40 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">
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
