import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export const PaymentResult: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const status = searchParams.get('status');
    const orderId = searchParams.get('order_id');

    console.log('[PaymentResult] Status:', status);
    console.log('[PaymentResult] Order ID:', orderId);

    const handleRedirect = () => {
      // ✅ If payment is successful
      if (status === 'paid' || status === 'paid_over') {
        navigate('/payment-success', { replace: true });
      } 
      // ✅ If payment failed/cancelled
      else if (['cancel', 'expired', 'wrong_amount', 'fail'].includes(status || '')) {
        navigate('/payment-cancel', { replace: true });
      } 
      // ✅ If user clicked back button (no status, just order_id)
      // This happens when user clicks back in Cryptomus iframe
      else if (!status && orderId) {
        console.log('[PaymentResult] User went back, redirecting to store');
        navigate('/store', { replace: true });
      }
      // ✅ Fallback - go to store
      else {
        navigate('/store', { replace: true });
      }
    };

    // Give it 500ms to show loading (reduced from 1.5s for better UX)
    const timeout = setTimeout(handleRedirect, 500);
    return () => clearTimeout(timeout);
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center relative z-10">
        <div className="relative inline-block mb-6">
          <Loader2 className="w-16 h-16 text-purple-500 animate-spin mx-auto" />
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
        </div>
        <h2 className="text-white text-2xl font-bold tracking-tight mb-2">
          Verifying Settlement
        </h2>
        <p className="text-slate-500 font-medium">
          Synchronizing with node network...
        </p>
      </div>
    </div>
  );
};

export default PaymentResult;