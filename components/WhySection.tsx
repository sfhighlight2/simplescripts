
import React from 'react';

const WhySection: React.FC = () => {
  const features = [
    {
      title: 'Physician-Led Care',
      description: 'Your protocol is designed and monitored by board-certified clinicians specialized in performance medicine.',
      icon: '🩺'
    },
    {
      title: 'Discreet Delivery',
      description: 'Medical-grade treatments shipped directly to your door in unbranded, temperature-controlled packaging.',
      icon: '📦'
    },
    {
      title: 'Science-Backed',
      description: 'We only offer FDA-approved and clinically validated ingredients tailored to your unique physiology.',
      icon: '🔬'
    },
    {
      title: 'Seamless Progress',
      description: 'Track your labs, message your provider, and manage your refills all from one secure digital dashboard.',
      icon: '📱'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">Clinical excellence, <br/>made effortless.</h2>
          <p className="text-xl text-zinc-600">We've removed the friction from high-performance healthcare so you can focus on the results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-zinc-900 mb-4">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
