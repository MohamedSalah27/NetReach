import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-white mb-12">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-widest font-bold mb-4">
            <RefreshCw className="w-3 h-3" />
            Refund Information
          </div>
          <h1 className="text-5xl font-black mb-4">Refund Policy</h1>
          <p className="text-slate-400">Last Updated: January 2, 2026</p>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
          <p className="text-slate-300 leading-relaxed">
            Due to the digital nature of our products, most sales are final.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold mb-4">Refund Eligibility</h2>
          <ul className="list-disc ml-6 text-slate-300">
            <li>Product was not delivered</li>
            <li>Product is proven non-functional</li>
            <li>Duplicate payment</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Contact for Refunds</h2>
          <p>info@netreach.site</p>
        </div>

      </div>
    </div>
  );
};
