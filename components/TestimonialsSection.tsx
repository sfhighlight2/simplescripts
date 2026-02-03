
import React from 'react';
import { TESTIMONIALS } from '../constants';

// Use React.FC to properly handle standard React props like 'key' and provide a more robust type signature for the component
const TestimonialCard: React.FC<{ img: string; quote: string; author: string; role: string }> = ({ img, quote, author, role }) => (
  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl bg-primary-navy">
    <img
      src={img}
      alt={author}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
    <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <p className="text-white text-lg font-secondary leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 italic">
        "{quote}"
      </p>
      <div className="flex flex-col gap-1 border-t border-white/20 pt-6">
        <p className="text-white font-bold text-base tracking-tight">— {author}</p>
        <p className="text-primary-teal text-[10px] font-black uppercase tracking-[0.25em]">
          {role}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Verified outcomes. <br className="md:hidden" /> Real members.</h2>
          <p className="text-secondary-text max-w-2xl mx-auto font-secondary">Experience the results of our clinical-grade protocols through the voices of our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
