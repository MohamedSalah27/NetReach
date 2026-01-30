import { useState } from "react";
import { ChevronDown, HelpCircle, Zap, ShieldCheck, CreditCard, MessageSquare, Lock, Users } from "lucide-react";

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Instant. Most orders are delivered to your email within 15 minutes automatically.",
      icon: <Zap className="w-5 h-5 text-yellow-400" />
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept various payment methods for your convenience. Details are provided during checkout.",
      icon: <CreditCard className="w-5 h-5 text-green-400" />
    },
    {
      q: "What is your refund policy?",
      a: "Due to the digital nature of our products, all sales are final. We guarantee working credentials at the moment of purchase, but we do not offer refunds once assets are delivered.",
      icon: <ShieldCheck className="w-5 h-5 text-red-400" />
    },
    {
      q: "Are these real accounts?",
      a: "Yes. All accounts are aged (2007-2025) with authentic activity history and original emails included.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />
    },
    {
      q: "Do you offer replacements?",
      a: "Yes. If you receive a non-working account, we replace it same day. We guarantee working credentials at delivery.",
      icon: <HelpCircle className="w-5 h-5 text-purple-400" />
    },
    {
      q: "Is it safe to use these accounts?",
      a: "Our accounts are aged properly to minimize ban risks. For maximum safety, we strongly recommend using high-quality proxies during operation.",
      icon: <Lock className="w-5 h-5 text-emerald-400" />
    },
    {
      q: "Can I order in bulk?",
      a: "Absolutely. We specialize in scaling agency operations. Bulk discounts apply automatically at 30+ units, but for custom high-volume enterprise orders, reach out for a private VIP quote.",
      icon: <Users className="w-5 h-5 text-pink-400" />
    },
    {
      q: "Do you provide setup support?",
      a: "Yes, we provide basic technical support for setup. For full infrastructure management, ask about our Managed Services.",
      icon: <MessageSquare className="w-5 h-5 text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 font-sans selection:bg-purple-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6">
            <HelpCircle className="w-3 h-3" />
            FAQ & SUPPORT
          </div>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-6 leading-none text-white">
            Quick 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 italic ml-4">Answers.</span>
          </h1>
        </div>

        {/* FAQ Grid - Fixed with items-start to prevent stretching */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group p-6 rounded-3xl border transition-all duration-300 h-fit ${
                  isOpen 
                  ? "bg-white/10 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.1)]" 
                  : "bg-white/5 border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between text-left gap-4 cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className={`mt-1 transition-all duration-300 ${isOpen ? "scale-110 opacity-100" : "opacity-40"}`}>
                      {faq.icon}
                    </div>
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-200"}`}>
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-500 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-purple-400" : ""
                    }`}
                  />
                </button>
                
                {/* Fixed animation logic for smooth opening */}
                <div className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-slate-400 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA Box */}
        <div className="mt-20 p-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[2.5rem]">
          <div className="bg-[#050508] p-10 rounded-[2.3rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
            <div>
              <h2 className="text-3xl font-black mb-2 text-white">Still confused?</h2>
              <p className="text-slate-400 font-medium text-lg">Response time: ~4-12 hours.</p>
            </div>
            <a
              href="/contact"
              className="px-12 py-5 rounded-2xl bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all active:scale-95 shadow-2xl"
            >
              Contact Support
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};