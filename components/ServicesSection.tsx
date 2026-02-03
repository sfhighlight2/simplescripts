
import React from 'react';
import { PRODUCTS } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Our Medical Protocols</h2>
          <p className="text-secondary-text max-w-2xl mx-auto font-secondary">High-performance wellness solutions tailored to your biology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white p-2 rounded-[2.5rem] border-2 border-transparent hover:border-primary-teal/20 transition-all">
              <div className="relative aspect-[3/4] rounded-[2.2rem] overflow-hidden bg-brand-light mb-6 shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-primary-teal text-white rounded-full font-bold text-sm shadow-xl active:scale-95">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-lg font-bold text-primary-navy group-hover:text-primary-teal transition-colors leading-tight">{product.title}</h3>
                <p className="text-secondary-text text-xs uppercase tracking-wider font-bold mt-1">{product.subtitle}</p>
                <p className="text-primary-teal font-bold text-sm mt-3">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
