import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-white mb-12">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <h1 className="text-5xl font-black mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-12">Last Updated: January 2, 2026</p>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>Email, order data, and technical security data.</p>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Use Data</h2>
          <p>Order delivery, fraud prevention, and legal compliance.</p>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>info@netreach.site</p>
        </div>

      </div>
    </div>
  );
};
