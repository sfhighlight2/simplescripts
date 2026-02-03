
import React from 'react';
import { EXPERTS } from '../constants';

const ExpertSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-semibold text-zinc-900 mb-6 tracking-tight">Trusted by leading medical experts.</h2>
          <p className="text-zinc-600">Our medical advisory board ensures the highest standards of care and innovation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {EXPERTS.map((expert, idx) => (
            <div key={idx} className="group">
              <div className="aspect-square rounded-[3rem] overflow-hidden mb-8 shadow-lg">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-1">{expert.name}</h3>
              <p className="text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-4">{expert.role}</p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {expert.specialty}
              </p>
              <div className="flex flex-wrap gap-2">
                {expert.credentials.map((cred, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-semibold text-zinc-500 uppercase tracking-tighter">
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
