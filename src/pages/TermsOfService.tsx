import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldCheck } from 'lucide-react';

export const TermsOfService: React.FC = () => {
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
            <ShieldCheck className="w-3 h-3" />
            Legal Documentation
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-400">
            Last Updated: January 2, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          {/* Company Information - Required by Paddle */}
          <div className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Company Information</h2>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">Business Name:</strong> NetReach<br />
              <strong className="text-white">Operating as:</strong> NetReach Digital Services<br />
              <strong className="text-white">Website:</strong> https://netreach.site<br />
              <strong className="text-white">Contact:</strong> Available via our <a href="/#contact" className="text-purple-400 underline">Contact Page</a>
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using NetReach services, you agree to these Terms. If you do not agree, please discontinue use of our services immediately.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Services Description</h2>
            <p className="text-slate-300 leading-relaxed">
              NetReach provides digital products including social media accounts, proxies, and automation-related software tools delivered electronically via email or secure download.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Refund Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              For detailed information about our refund policy, please visit our dedicated <a href="/refund" className="text-purple-400 underline">Refund Policy page</a>.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Product Delivery</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Products are delivered digitally within 1-30 minutes after successful payment confirmation to the email address provided during checkout.
            </p>
            <p className="text-slate-300 leading-relaxed">
              It is your responsibility to provide a valid email address. We are not responsible for delivery failures due to incorrect email addresses or spam filters.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Payment Processing</h2>
            <p className="text-slate-300 leading-relaxed">
              Payments are securely processed through licensed third-party payment gateways. We accept Credit/Debit Cards, PayPal, and various cryptocurrencies (Bitcoin, USDT, USDC).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">6. User Responsibilities</h2>
            <p className="text-slate-300 leading-relaxed">
              You agree to use purchased products in compliance with applicable laws and the terms of service of third-party platforms. NetReach is not responsible for account suspensions or restrictions imposed by third parties.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              NetReach shall not be liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount you paid for the product in question.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed">
              For questions or support, visit our <a href="/#contact" className="text-purple-400 underline">Contact Page</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30 text-center">
          <p className="text-sm text-slate-400">
            By using NetReach services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};