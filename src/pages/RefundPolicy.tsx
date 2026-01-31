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
            Returns & Refund Policy
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Refund Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: February 1, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          
          {/* 1. Mandatory 14-Day Right of Withdrawal */}
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 mb-8">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0 text-white">14-Day Right of Withdrawal</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              In accordance with legal consumer protections, customers have the right to cancel their purchase within <strong className="text-white font-bold">14 days</strong> without providing a reason, subject to the conditions of digital delivery.
            </p>
          </div>

          {/* 2. Exception for Digital Content */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-3 mb-4 text-white">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold m-0 text-white">Digital Delivery Exception</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our assets are <strong className="text-white font-bold">Digital Content</strong> delivered immediately upon purchase. By completing your order, you explicitly agree to the following:
            </p>
            <ul className="space-y-4 text-slate-300 ml-4">
              <li className="flex gap-3 leading-relaxed">
                <span className="text-purple-400 font-bold">•</span>
                <span>You consent to immediate delivery of the product.</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-purple-400 font-bold">•</span>
                <span>You acknowledge that you <strong className="text-white font-bold">lose your right of withdrawal</strong> once the digital transmission has begun.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Technical Issues</h2>
            <p className="text-slate-300 leading-relaxed">
              Refunds or replacements will only be considered if the digital resource is proven to be faulty or non-functional. You must contact our support within 48 hours of purchase with valid proof.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Merchant of Record</h2>
            <p className="text-slate-300 leading-relaxed">
              Paddle is our authorized <strong className="text-white font-bold">Merchant of Record</strong> and handles all financial compliance and tax requirements for your transaction.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <p className="text-slate-400 mb-6 italic">
              Need assistance with your order?
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