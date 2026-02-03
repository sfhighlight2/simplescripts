
import React from 'react';

const HealthAssistant: React.FC = () => {
  // Support feature placeholder.
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        className="bg-zinc-900 text-white p-5 rounded-full shadow-2xl transition-transform flex items-center justify-center border-4 border-white cursor-default opacity-80"
        title="Support - Coming Soon"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default HealthAssistant;
