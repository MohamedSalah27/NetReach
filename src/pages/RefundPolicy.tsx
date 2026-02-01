import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw, ShieldCheck, AlertCircle } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* زر العودة */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        {/* الهيدر */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-widest font-bold mb-4">
            <RefreshCw className="w-3 h-3" />
            Refunds & Cancellations
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-white">
            Refund Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: February 1, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          
          {/* ١. بند الـ 14 يوماً الإلزامي */}
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 mb-8 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0 text-white">14-Day Right of Withdrawal</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              As a Consumer, you have the right to cancel this Agreement and return the Product within <strong className="text-white font-bold">14 days</strong> without giving any reason. This cancellation period will expire 14 days from the day after the completion of the Transaction.
            </p>
          </div>

          {/* ٢. استثناء المحتوى الرقمي الفوري */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-3 mb-4 text-white">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold m-0 text-white">Immediate Performance Exception</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Your right to cancel does not apply to the supply of <strong className="text-white font-bold">Digital Content</strong> that is immediately made available. 
            </p>
            <p className="text-slate-300 leading-relaxed">
              By acquiring the Product, you explicitly <strong className="text-white font-medium">consent to the immediate performance</strong> of this Agreement and acknowledge that you lose your right of withdrawal once the digital transmission has begun.
            </p>
          </div>

          {/* ٣. توضيح دور Paddle */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Merchant of Record</h2>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white font-bold">Paddle</strong> is our authorized Merchant of Record and the authorized reseller of the Product. This ensures all transactions are secure and compliant with international tax and consumer laws.
            </p>
          </div>

          {/* الدعم الفني */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <p className="text-slate-400 mb-6 italic">
              Need help with a technical issue?
            </p>
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