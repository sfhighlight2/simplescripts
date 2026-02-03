
import React from 'react';
import { PRODUCTS } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Our Medical Protocols</h2>
          <p className="text-secondary-text max-w-2xl mx-auto font-secondary">High-performance wellness solutions tailored to your biology.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-brand-light p-3 rounded-[3rem] border-2 border-transparent hover:border-primary-teal/20 transition-all shadow-sm hover:shadow-xl">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white mb-6 shadow-inner transition-transform duration-700 group-hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-full py-4 bg-primary-teal text-white rounded-full font-bold text-sm shadow-2xl active:scale-95">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold text-primary-navy group-hover:text-primary-teal transition-colors leading-tight mb-2">{product.title}</h3>
                <p className="text-secondary-text text-[10px] uppercase tracking-[0.2em] font-black">{product.subtitle}</p>
                <div className="mt-4 inline-block px-4 py-1.5 bg-primary-teal/10 rounded-full">
                  <p className="text-primary-teal font-black text-xs">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
