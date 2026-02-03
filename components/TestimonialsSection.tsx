
import React from 'react';

// Use React.FC to properly handle standard React props like 'key' and provide a more robust type signature for the component
const TestimonialCard: React.FC<{ img: string; quote: string; author: string; role: string }> = ({ img, quote, author, role }) => (
  <div className="w-full bg-black text-white rounded-[2rem] overflow-hidden flex flex-col shadow-2xl transition-all duration-300 group text-left">
    <div className="relative overflow-hidden aspect-[4/5]">
      <img 
        src={img} 
        alt={author} 
        className="h-full w-full object-cover object-top group-hover:scale-105 transition-all duration-500" 
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
    </div>
    <div className="px-8 pb-10 -mt-12 relative z-10">
      <p className="text-[16px] font-medium leading-relaxed mb-8">
        “{quote}”
      </p>
      <div className="w-full h-px bg-zinc-800 mb-8 opacity-50"></div>
      <div className="flex flex-col">
        <p className="text-[15px] font-semibold text-white">— {author}</p>
        <p className="text-[12px] font-bold bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text mt-1 uppercase tracking-wider">
          {role}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
      quote: "SimpleScripts changed my metabolic approach. Down 22lbs in 3 months with zero stress. The platform is incredibly easy to use.",
      author: "Marcus J.",
      role: "Weight Loss Protocol"
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
      quote: "The NAD+ injections were a game changer for my morning energy levels. I feel 10 years younger and much more focused.",
      author: "David R.",
      role: "Energy & Longevity"
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
      quote: "Finally a telehealth company that treats performance with clinical seriousness and total simplicity. High-quality support.",
      author: "Robert T.",
      role: "Muscle Support"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6">Verified outcomes. <br/>Real members.</h2>
          <p className="text-zinc-600">Experience the results of our clinical-grade protocols through the voices of our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
