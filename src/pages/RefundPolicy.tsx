import { useNavigate } from 'react-router-dom';
import { ChevronLeft, RefreshCw, ShieldCheck, AlertCircle } from 'lucide-react';

export const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-widest font-bold mb-4">
            <RefreshCw className="w-3 h-3" />
            Refund Policy
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Refund Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: February 1, 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none">

          {/* 1. 14 Day Right */}
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 mb-8">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0 text-white">
                14-Day Right of Withdrawal
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed">
              In accordance with applicable consumer protection laws, customers
              have the right to withdraw from a purchase within <strong>14 days</strong>
               without providing a reason, unless an exception applies.
            </p>
          </div>

          {/* 2. Digital Exception */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold m-0 text-white">
                Digital Content Exception
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              Our products are classified as <strong>digital content</strong> and
              are delivered immediately after payment confirmation.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              By completing a purchase, you expressly request immediate
              performance of the contract and acknowledge that once digital
              delivery begins, your statutory right of withdrawal is lost.
            </p>

            <p className="text-slate-300 leading-relaxed">
              As a result, refunds are not available after the digital product
              has been delivered.
            </p>
          </div>

          {/* 3. Delivery Issues */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Delivery Issues
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              If you do not receive your product within 30 minutes:
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Check your spam or junk folder</li>
              <li>Verify the email address provided during checkout</li>
              <li>Contact our support team via the Contact page</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mt-4">
              We will assist with delivery-related issues, but this does not
              automatically constitute grounds for a refund.
            </p>
          </div>

          {/* 4. Chargebacks */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Chargebacks & Disputes
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Customers are encouraged to contact our support team before
              initiating any payment disputes. Fraudulent or abusive chargeback
              activity may result in account restrictions in accordance with
              our Terms & Conditions.
            </p>
          </div>

          {/* 5. Contact */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Contact Us
            </h2>

            <p className="text-slate-300 leading-relaxed">
              For questions regarding this Refund Policy or for support,
              please visit our Contact page.
            </p>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 p-6 rounded-3xl bg-purple-500/10 border border-purple-500/20 text-center">
          <p className="text-sm text-slate-300 font-semibold">
            By completing a purchase, you confirm that you have read and agreed
            to this Refund Policy and expressly consent to the immediate delivery
            of digital content, acknowledging the loss of your right of withdrawal
            once delivery begins.
          </p>
        </div>
      </div>
    </div>
  );
};
