import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw, AlertCircle, ShieldAlert } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
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
            <RefreshCw className="w-3 h-3" />
            Compliance & Refunds
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-white">
            Refund Policy
          </h1>
          <p className="text-slate-400">Last Updated: February 3, 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          {/* Section: No Right of Withdrawal */}
          <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
            <div className="flex items-center gap-3 mb-4 text-red-400">
              <ShieldAlert className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0 text-white">Digital Content Exception</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              NetReach products are classified as <strong className="text-white">Digital Content</strong> made immediately available upon purchase. 
              By acquiring our products, you <strong className="text-white">expressly consent to immediate performance</strong>. 
            </p>
            <p className="text-slate-300 leading-relaxed font-bold border-t border-red-500/20 pt-4">
              You explicitly acknowledge that you lose your right of withdrawal once the digital transmission or download has begun.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">Refund Discretion</h2>
            <p className="text-slate-300 leading-relaxed">
              Refunds are provided at the <strong className="text-purple-400">sole discretion of Lemon Squeezy</strong> on a case-by-case basis. 
              Requests may be refused if we find evidence of fraud, refund abuse, or other manipulative behavior.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Contacting Support</h2>
            <p className="text-slate-300 mb-6">
              If you have technical issues, contact our support team first. Most issues can be resolved without a refund.
            </p>
            <a 
              href="/#contact" 
              className="inline-block px-10 py-4 rounded-full bg-purple-500 text-white font-black uppercase tracking-widest text-xs hover:bg-purple-600 transition-all"
            >
              Request Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};