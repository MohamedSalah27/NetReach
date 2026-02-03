import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Shield } from 'lucide-react';

export const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-widest font-bold mb-4">
            <Shield className="w-3 h-3" />
            Privacy Policy
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400">Last Updated: February 2026</p>
        </div>

        <div className="space-y-8">

          {/* Overview */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-slate-300 leading-relaxed">
              This Privacy Policy explains how NetReach collects, uses, and
              protects your personal information when you use our website
              or purchase our products.
            </p>
          </section>

          {/* Data Collected */}
          <section className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Information We Collect
            </h2>
            <ul className="space-y-3 text-slate-300">
              <li>• Email address for delivery and communication</li>
              <li>• Transaction details processed by Lemon Squeezy</li>
              <li>• Basic technical data (IP, browser type)</li>
            </ul>
          </section>

          {/* Payments */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Payment Processing
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Payments are securely processed by
              <strong className="text-white"> Lemon Squeezy </strong>.
              NetReach does not store credit card or payment details.
            </p>
          </section>

          {/* Data Usage */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              How We Use Your Data
            </h2>
            <ul className="space-y-3 text-slate-300">
              <li>• To deliver purchased products</li>
              <li>• To provide customer support</li>
              <li>• To improve website performance</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Data Protection
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We implement reasonable technical and organizational measures
              to protect your information from unauthorized access.
            </p>
          </section>

          {/* Contact */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <p className="text-slate-400 mb-6">
              Questions about your privacy?
            </p>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 rounded-full bg-purple-500 text-white font-black uppercase tracking-widest text-xs hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)]"
            >
              Contact Support
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};
