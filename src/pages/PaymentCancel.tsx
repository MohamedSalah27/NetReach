import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, RefreshCcw, ShieldAlert } from 'lucide-react';

export const PaymentCancel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">
            <XCircle className="w-16 h-16 text-red-500" />
          </div>
        </div>

        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">
          Payment Failed
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          We couldn't finalize your settlement. This usually happens due to a
          session timeout or a gateway error. No funds were deducted.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 flex items-center gap-4 text-left">
          <ShieldAlert className="w-6 h-6 text-red-400 shrink-0" />
          <p className="text-sm text-slate-300">
            The transaction was not completed. Please check your wallet balance
            and
            <span className="text-white font-bold">
              {' '}
              attempt the initialization again.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/store')}
            className="w-full py-4 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-red-400 transition-colors cursor-pointer"
          >
            <RefreshCcw className="w-4 h-4" /> Start New Order
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full py-4 bg-transparent text-slate-500 rounded-2xl font-bold hover:text-white transition-colors cursor-pointer"
          >
            Cancel and Return Home
          </button>
        </div>
      </div>
    </div>
  );
};
