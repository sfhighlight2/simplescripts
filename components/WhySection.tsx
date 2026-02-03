import React from 'react';

const WhySection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-8 leading-tight tracking-tight">
              Evidence-based care, <br />
              <span className="text-primary-teal">delivered seamlessly.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Clinical Excellence",
                  desc: "Protocols designed by world-class longevity experts and cardiologists."
                },
                {
                  title: "Personalized approach",
                  desc: "Treatments tailored to your specific biomarkers and health goals."
                },
                {
                  title: "Transparent & Simple",
                  desc: "Zero hidden fees. Upfront pricing. 100% online medication delivery."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-navy mb-2">{item.title}</h3>
                    <p className="text-secondary-text font-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/delivery.png"
                alt="Personalized Medical Care Delivery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl max-w-xs animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-teal/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-navy">4.9/5</p>
                  <p className="text-xs font-bold text-secondary-text uppercase tracking-widest leading-none">Rating</p>
                </div>
              </div>
              <p className="text-sm font-secondary text-secondary-text">"The simplest way to manage my metabolic health. Incredible experience."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
