import { useNavigate } from 'react-router-dom';
import { XCircle, RefreshCcw, ShieldAlert } from 'lucide-react';

export const PaymentCancel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <XCircle className="w-16 h-16 text-red-500" />
          </div>
        </div>

        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">
          Payment Failed
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          We couldn't finalize your settlement. This usually happens due to a
          session timeout or a gateway error.{' '}
          <span className="text-white">No funds were deducted.</span>
        </p>

        <div className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 mb-8 flex items-center gap-4 text-left">
          <ShieldAlert className="w-6 h-6 text-red-400 shrink-0" />
          <p className="text-sm text-slate-300 leading-snug">
            Transaction incomplete. Please check your wallet balance and
            <span className="text-white font-bold ml-1">
              attempt the initialization again.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/store')}
            className="w-full py-4 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer shadow-xl"
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
