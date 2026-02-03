
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhySection from './components/WhySection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import ExpertSection from './components/ExpertSection';
import HealthAssistant from './components/HealthAssistant';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <Marquee />
        <WhySection />

        {/* Ad Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="bg-emerald-50 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
              <div className="relative z-10 lg:w-1/2">
                <h2 className="text-4xl lg:text-6xl font-semibold text-zinc-900 mb-8 tracking-tighter font-heading">Increased cellular energy is here.</h2>
                <p className="text-xl text-zinc-600 mb-12">Experience deeper energy, sharper focus, and healthy-aging benefits through the SimpleScripts NAD+ collection.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-semibold hover:bg-zinc-800 transition-all shadow-xl">
                    Get Started
                  </button>
                  <button className="px-8 py-4 bg-white text-zinc-900 rounded-2xl font-semibold border border-zinc-200 hover:bg-zinc-50 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
                  alt="Wellness Model"
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[600px] object-cover grayscale"
                />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-400 rounded-full blur-3xl opacity-30 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <ExpertSection />

        {/* Harmony Section */}
        <section className="py-24 border-t border-zinc-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-semibold text-zinc-900 mb-16 font-heading">The harmony of science and nature.</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: 'Cruelty Free', icon: '🐰' },
                { name: 'Eco Friendly', icon: '🌳' },
                { name: 'Paraben Free', icon: '🍃' },
                { name: 'Silicone Free', icon: '🧪' },
                { name: 'Sulphate Free', icon: '⚛️' },
                { name: 'Gluten Free', icon: '🌾' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-semibold text-zinc-700 font-heading">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <HealthAssistant />
      <ScrollToTop />
    </div>
  );
};

export default App;
