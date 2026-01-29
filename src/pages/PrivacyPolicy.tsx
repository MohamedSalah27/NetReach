import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
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
            <Shield className="w-3 h-3" />
            Privacy & Security
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: January 2, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you use NetReach services, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li><strong className="text-white">Email Address:</strong> Required for product delivery</li>
              <li><strong className="text-white">Payment Information:</strong> Processed securely through our authorized payment partners (we do not store payment details)</li>
              <li><strong className="text-white">Order Details:</strong> Product type, quantity, and order ID</li>
              <li><strong className="text-white">Technical Data:</strong> IP address, browser type, and device information for security purposes</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Process and deliver your orders</li>
              <li>Send order confirmation and delivery emails</li>
              <li>Prevent fraud and ensure security</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Data Storage and Security</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Secure payment processing through Cryptomus</li>
              <li>Limited data retention (only what's necessary for order fulfillment)</li>
              <li>Regular security audits and updates</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              Your payment information is never stored on our servers. All transactions are processed directly by our authorized payment partners.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Email Communications</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We will send you emails for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Order confirmation and delivery</li>
              <li>Important service updates</li>
              <li>Security alerts (if necessary)</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              We do not send marketing emails or sell your email address to third parties.
            </p>
          </div>

        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
  <h2 className="text-2xl font-bold mb-4 text-white">5. Third-Party Services</h2>
  <p className="text-slate-300 leading-relaxed mb-4">
    We use the following third-party services:
  </p>
  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
    <li><strong className="text-white">Payment Processors:</strong> Secure payment processing via Credit/Debit Cards, PayPal, and Cryptocurrencies.</li>
    <li><strong className="text-white">Email Service:</strong> Reliable product delivery via automated email infrastructure.</li>
  </ul>
  <p className="text-slate-300 leading-relaxed mt-4">
    These services have their own privacy policies and we recommend reviewing them.
  </p>
</div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Data Sharing</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>With payment processors to complete transactions</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Cookies and Tracking</h2>
            <p className="text-slate-300 leading-relaxed">
              We use minimal cookies and tracking technologies to ensure proper website functionality and security. We do not use advertising or analytics cookies that track your behavior across other websites.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Data Retention</h2>
            <p className="text-slate-300 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. Order records are kept for legal and accounting purposes, but your email may be removed from our systems after successful delivery.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Your Rights</h2>
            <p className="text-slate-300 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal obligations)</li>
              <li>Object to processing of your data</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              To exercise these rights, please contact us through our official support channels.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">10. Children's Privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete such information.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">11. International Users</h2>
            <p className="text-slate-300 leading-relaxed">
              Our services are accessible globally. By using NetReach, you consent to the transfer and processing of your information in jurisdictions where our servers and service providers are located.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">12. Changes to Privacy Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30 text-center">
          <p className="text-sm text-slate-400">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </div>
    </div>
  );
};