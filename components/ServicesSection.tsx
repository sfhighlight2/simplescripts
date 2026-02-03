
import React from 'react';
import { PRODUCTS } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-4">Our Medical Protocols</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">High-performance wellness solutions tailored to your biology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-zinc-200 mb-6 shadow-md transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-3 bg-white text-zinc-900 rounded-full font-semibold text-sm shadow-xl">
                    Get Started
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">{product.title}</h3>
                <p className="text-zinc-500 text-sm font-medium">{product.subtitle}</p>
                <p className="text-emerald-600 font-bold text-sm mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
