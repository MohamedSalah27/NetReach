import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw, ShieldCheck, AlertCircle } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
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
            <RefreshCw className="w-3 h-3" />
            Compliance & Refunds
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-white">
            Refund Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: February 1, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          
          {/* 1. بند الـ 14 يوماً (لإرضاء ستيفن) */}
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 mb-8">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0 text-white">14-Day Right of Withdrawal</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              In accordance with legal consumer protections, you have the right to cancel your purchase within <strong className="text-white font-bold">14 days</strong> without giving any reason.
            </p>
          </div>

          {/* 2. بند الاستثناء (لحمايتك من الاستغلال) */}
          <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 mb-8 shadow-[0_0_30px_rgba(239,68,68,0.05)]">
            <div className="flex items-center gap-3 mb-4 text-red-400">
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0">Instant Delivery Exception</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4 font-bold">
              PLEASE NOTE: All NetReach products are Digital Content made immediately available upon purchase.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By acquiring our products, you <strong className="text-white">consent to immediate performance</strong> of the agreement. You explicitly acknowledge that you <strong className="text-white font-black underline">lose your right of withdrawal</strong> once the digital transmission (delivery to email or dashboard) has begun.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Merchant of Record</h2>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">Paddle</strong> is our authorized Merchant of Record. By completing your purchase, you agree to Paddle’s Terms & Conditions.
            </p>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/#contact" 
              className="inline-block px-10 py-4 rounded-full bg-purple-500 text-white font-black uppercase tracking-widest text-xs hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};