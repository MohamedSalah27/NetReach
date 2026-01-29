import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldCheck } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
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
          <p className="text-slate-400">
            Last Updated: January 2, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using NetReach services, you agree to these Terms. If you do not agree, please discontinue use of our services immediately.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Services Description</h2>
            <p className="text-slate-300 leading-relaxed">
              NetReach provides digital products and automation-related software tools delivered electronically via email or secure download.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Refunds</h2>
            <p className="text-slate-300 leading-relaxed">
              Refund conditions are described in our dedicated Refund Policy page.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Product Delivery</h2>
            <p className="text-slate-300 leading-relaxed">
              Products are delivered digitally within minutes after successful payment confirmation.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Payment Processing</h2>
            <p className="text-slate-300 leading-relaxed">
              Payments are securely processed through licensed third-party gateways.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Contact</h2>
            <p className="text-slate-300 leading-relaxed">
              info@netreach.site
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
