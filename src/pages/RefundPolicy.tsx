import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw, ShieldCheck, AlertCircle } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-widest font-bold mb-4">
            <RefreshCw className="w-3 h-3" />
            Refund Policy
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Refund Policy
          </h1>
          <p className="text-slate-400">Last Updated: February 2026</p>
        </div>

        <div className="space-y-8">

          {/* Overview */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-slate-300 leading-relaxed">
              This Refund Policy explains how refunds are handled for purchases
              made through our platform. Payments are processed by
              <strong className="text-white"> Lemon Squeezy </strong>
              as the Merchant of Record.
            </p>
          </div>

          {/* Digital Products */}
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">
                Digital Products & Delivery
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              All products sold on NetReach are digital goods delivered
              electronically. Delivery typically occurs instantly or within a
              short period after payment confirmation.
            </p>
          </div>

          {/* Refund Conditions */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">
                Refund Requests
              </h2>
            </div>

            <ul className="space-y-4 text-slate-300">
              <li>
                • Refund requests are reviewed on a
                <strong className="text-white"> case-by-case basis</strong>.
              </li>
              <li>
                • Refunds may be considered in cases of technical failure or
                non-delivery.
              </li>
              <li>
                • Once digital delivery has occurred, refunds are not guaranteed
                due to the nature of digital content.
              </li>
              <li>
                • Lemon Squeezy reserves the right to issue refunds at its
                discretion to prevent fraud or chargebacks.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <p className="text-slate-400 mb-6">
              Need help with an order or delivery?
            </p>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 rounded-full bg-purple-500 text-white font-black uppercase tracking-widest text-xs hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)]"
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
