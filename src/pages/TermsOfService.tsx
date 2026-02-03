import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-widest font-bold mb-4">
            <ShieldCheck className="w-3 h-3" />
            Legal Documentation
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-400">Last Updated: February 3, 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          {/* Section: Merchant of Record */}
          <div className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-400" /> Merchant of Record
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our order process is conducted by our online reseller <strong className="text-white">Lemon Squeezy, LLC</strong>. 
              Lemon Squeezy is the Merchant of Record for all our orders. They handle all payments, taxes, and provide 
              customer service related to your transaction. By purchasing, you enter into a binding legal contract with Lemon Squeezy.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Service Usage</h2>
            <p className="text-slate-300 leading-relaxed">
              NetReach provides digital outreach infrastructure, including proxies and social assets. 
              You agree to use these services in compliance with all international and local laws. 
              Abuse of our systems for illegal activities will result in immediate termination of service without refund.
            </p>
          </div>

          {/* Section: Chargebacks - THE 100$ PENALTY */}
          <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/30">
            <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Chargeback Penalty
            </h2>
            <p className="text-slate-300 leading-relaxed">
              You agree to contact NetReach support to resolve any issues before raising a dispute with your bank. 
              If you raise a meritless chargeback or fraudulent dispute, we reserve the right to 
              <strong className="text-white font-bold underline ml-1">charge a liquidated damage fee of $100 USD</strong> 
              and permanently prohibit you from purchasing further products.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Governing Law</h2>
            <p className="text-slate-300 leading-relaxed">
              For customers located in the USA, this Agreement is governed by the laws of the <strong className="text-white">State of Utah</strong>. 
              For non-USA consumers, the laws of England shall govern any transaction disputes.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm italic">
          By completing a purchase, you manifest your assent to these terms via a "Click-Wrap" agreement.
        </div>
      </div>
    </div>
  );
};