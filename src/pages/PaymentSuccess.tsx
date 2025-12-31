import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';

export const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-green-500/10 rounded-full border border-green-500/20">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">
          Payment Verified
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          The transaction was successful. Your infrastructure data is being
          processed and will arrive in your{' '}
          <span className="text-white font-medium">
            inbox within 5-10 minutes.
          </span>
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 flex items-center gap-4 text-left">
          <Mail className="w-6 h-6 text-purple-500 shrink-0" />
          <p className="text-sm text-slate-300">
            Check your <span className="text-purple-400">Spam/Junk</span> folder
            if you don't see the email shortly.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full py-4 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-purple-400 transition-colors cursor-pointer"
        >
          Return to Dashboard <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
