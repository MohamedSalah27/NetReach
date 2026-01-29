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

          {/* Section 1 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you use NetReach services, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li><strong className="text-white">Email Address:</strong> Required for product delivery</li>
              <li><strong className="text-white">Payment Information:</strong> Processed securely through authorized partners</li>
              <li><strong className="text-white">Order Details:</strong> Product type and quantity</li>
              <li><strong className="text-white">Technical Data:</strong> IP & browser info</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Process orders</li>
              <li>Security & fraud prevention</li>
              <li>Legal compliance</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Data Security</h2>
            <p className="text-slate-300">
              We use HTTPS encryption and secure gateways. Payment data is never stored.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Email Communications</h2>
            <p className="text-slate-300">
              Only transactional emails. No marketing spam.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Third-Party Services</h2>
            <p className="text-slate-300">
              Payments & email services only.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Changes</h2>
            <p className="text-slate-300">
              We may update this policy anytime.
            </p>
          </div>

        </div>

        <div className="mt-12 p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30 text-center">
          <p className="text-sm text-slate-400">
            We are committed to protecting your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};
