import React from 'react';
import { FeatureCard } from './FeatureCard';
import { FEATURES } from '../../lib/constants';

export const FeaturesSection: React.FC = () => {
  return (
    <section
      className="py-32 bg-[#050508] relative overflow-hidden"
      id="features"
    >
      <div className="absolute top-1/2 left-0 w-150 h-150 bg-purple-600/5 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight text-white mb-6">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-700">
              Outreach Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            High-fidelity engagement systems designed to bridge the gap between
            social discovery and revenue.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
