import React from 'react';

const ProcessSection: React.FC = () => {
    const steps = [
        {
            title: "Physician-Led Care",
            desc: "Your protocol is designed and monitored by board-certified clinicians specialized in performance medicine.",
            icon: (
                <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.423 15.621a11.205 11.205 0 01-1.63 1.63 11.32 11.32 0 01-3.39 1.511 11.321 11.321 0 01-3.39-1.511 11.205 11.205 0 01-1.63-1.63l2.454-2.455a3 3 0 014.242 0l2.454 2.455zM12 18s-9-3-9-10c0-4 3-7 7-7a7 7 0 015 2 7 7 0 015 5c0 7-9 10-9 10z" />
                </svg>
            )
        },
        {
            title: "Discreet Delivery",
            desc: "Medical-grade treatments shipped directly to your door in unbranded, temperature-controlled packaging.",
            icon: (
                <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            title: "Science-Backed",
            desc: "We only offer FDA-approved and clinically validated ingredients tailored to your unique physiology.",
            icon: (
                <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l2.387-2.387a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.022-.547l2.387-2.387a2 2 0 10-2.828-2.828l-2.387 2.387z" />
                </svg>
            )
        },
        {
            title: "Seamless Progress",
            desc: "Track your labs, message your provider, and manage your refills all from one secure digital dashboard.",
            icon: (
                <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6 tracking-tight leading-tight">
                        Clinical excellence, <br />
                        made effortless.
                    </h2>
                    <p className="text-xl text-secondary-text font-secondary leading-relaxed">
                        We've removed the friction from high-performance healthcare so you can focus on the results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-[#F9FAFB] p-10 rounded-[2.5rem] border border-transparent hover:border-primary-teal/10 hover:shadow-xl hover:shadow-primary-teal/5 transition-all duration-500 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-navy mb-4">{step.title}</h3>
                            <p className="text-secondary-text text-sm font-secondary font-medium leading-[1.6]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
