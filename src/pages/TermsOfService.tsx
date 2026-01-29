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
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using NetReach services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Services Description</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              NetReach provides digital products and services including social media accounts, proxies, and automation tools. All products are delivered digitally via email to the address provided during purchase.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We strive to ensure all products are functional at the time of delivery. However, the nature of digital accounts means circumstances may change beyond our control.
            </p>
          </div>

<div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
  <h2 className="text-2xl font-bold mb-4 text-white">3. No Refund Policy</h2>
  <p className="text-slate-300 leading-relaxed mb-4">
    <strong className="text-white">ALL SALES ARE FINAL.</strong> Due to the digital nature of our products and immediate delivery upon payment confirmation, we do not offer refunds, exchanges, or chargebacks under any circumstances.
  </p>
  <p className="text-slate-300 leading-relaxed mb-4">
    By completing a purchase, you acknowledge and agree that:
  </p>
  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
    <li>You understand the product you are purchasing</li>
    <li>You accept the product "as-is" upon delivery</li>
    <li>No refunds will be issued for any reason</li>
    <li>Disputes or chargebacks may result in permanent account suspension</li>
  </ul>
</div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Product Delivery</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Products are delivered automatically to the email address provided during checkout. Delivery typically occurs within 1-30 minutes after payment confirmation.
            </p>
            <p className="text-slate-300 leading-relaxed">
              It is your responsibility to provide a valid email address. We are not responsible for failed deliveries due to incorrect email addresses or spam filters.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Account Usage</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You agree to use purchased accounts and services in compliance with the terms of service of their respective platforms (Twitter, Instagram, etc.).
            </p>
            <p className="text-slate-300 leading-relaxed">
              NetReach is not responsible for any account suspensions, bans, or restrictions imposed by third-party platforms.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Prohibited Activities</h2>
            <p className="text-slate-300 leading-relaxed mb-4">You may not use our services to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Engage in illegal activities</li>
              <li>Violate any third-party rights</li>
              <li>Distribute malware or harmful content</li>
              <li>Attempt to resell or redistribute our products without authorization</li>
              <li>Reverse engineer or attempt to access our systems unlawfully</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Payment Processing</h2>
            <p className="text-slate-300 leading-relaxed">
              Payment Processing All payments are processed securely through our authorized payment gateways. We accept various payment methods including Credit/Debit cards, PayPal, and Cryptocurrencies. Payment confirmation time may vary depending on the chosen method and gateway protocols.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              NetReach shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount you paid for the specific product in question.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Changes to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">10. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed">
              For questions about these Terms of Service, please contact us through our official support channels on the website.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30 text-center">
          <p className="text-sm text-slate-400">
            By using NetReach services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};