import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw } from 'lucide-react';

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
            Refund Policy
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Refund Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: January 2, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/30 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">No Refund Policy</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">ALL SALES ARE FINAL.</strong> Due to the instant digital nature of our products, we do not offer refunds, exchanges, or chargebacks under any circumstances.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Once payment is confirmed and products are delivered to your email, the transaction is complete and irreversible.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Why No Refunds?</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our products are digital goods delivered instantly via email. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Social media account credentials</li>
              <li>Proxy access details</li>
              <li>Software licenses and activation keys</li>
              <li>Digital tools and automation scripts</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              Because these products are delivered and accessible immediately, they cannot be "returned" once received. This policy protects both our business and legitimate customers from fraud.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Before You Purchase</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Please ensure you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Understand the product you are purchasing</li>
              <li>Read the product description and specifications carefully</li>
              <li>Provide a valid and accessible email address</li>
              <li>Accept that no refunds will be issued after purchase</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Delivery Issues</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you experience delivery issues (product not received within 30 minutes):
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Check your spam/junk folder</li>
              <li>Verify you provided the correct email address</li>
              <li>Contact our support team via the <a href="/#contact" className="text-purple-400 underline">Contact Page</a></li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              We will assist with delivery issues, but this does not constitute grounds for a refund.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Chargebacks</h2>
            <p className="text-slate-300 leading-relaxed">
              Initiating a chargeback or payment dispute after receiving your product is considered fraud. Accounts that file chargebacks will be permanently banned from using our services, and we reserve the right to pursue legal action.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-slate-300 leading-relaxed">
              For questions about this policy or technical support, please visit our <a href="/#contact" className="text-purple-400 underline">Contact Page</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-red-500/10 border border-red-500/30 text-center">
          <p className="text-sm text-red-300 font-bold">
            By completing a purchase, you acknowledge and accept this No Refund Policy.
          </p>
        </div>
      </div>
    </div>
  );
};