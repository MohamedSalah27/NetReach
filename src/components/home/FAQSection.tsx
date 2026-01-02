import { useState } from 'react';
import { FAQItem } from './FAQItem';
import { FAQ_DATA } from '../../lib/constants';

export const FAQSection: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#050508] py-32 lg:py-48 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-100 h-100 bg-purple-500/4 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.02)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
            Operational <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-700">
              Insights
            </span>
          </h2>
          <p className="mt-8 text-lg text-slate-500 font-medium italic tracking-wide">
            "Transparency on network safety, deployment logic, and performance
            benchmarks."
          </p>
        </div>
        <div className="relative">
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isExpanded={expandedFaq === index}
              onToggle={() =>
                setExpandedFaq(expandedFaq === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
