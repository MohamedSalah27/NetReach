import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Scale } from 'lucide-react';

export const Terms: React.FC = () => {
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
            <Scale className="w-3 h-3" />
            Terms & Conditions
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-400">Last Updated: February 2026</p>
        </div>

        <div className="space-y-8">

          {/* Overview */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <p className="text-slate-300 leading-relaxed">
              These Terms & Conditions govern your use of the NetReach website
              and any products purchased through it. By accessing this website
              or completing a purchase, you agree to be bound by these terms.
            </p>
          </section>

          {/* Merchant of Record */}
          <section className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Merchant of Record
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Payments for products sold on NetReach are processed by
              <strong className="text-white"> Lemon Squeezy </strong>
              as the Merchant of Record. Lemon Squeezy is responsible for
              payment processing, tax handling, and transaction compliance.
            </p>
          </section>

          {/* Products */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Digital Products
            </h2>
            <p className="text-slate-300 leading-relaxed">
              NetReach provides digital products and services delivered
              electronically. Access details or credentials are provided
              after payment confirmation.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              User Responsibilities
            </h2>
            <ul className="space-y-3 text-slate-300">
              <li>• You agree to provide accurate information during checkout.</li>
              <li>• You will not use our products for unlawful purposes.</li>
              <li>• You are responsible for maintaining the confidentiality of delivered assets.</li>
            </ul>
          </section>

          {/* Limitation */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Limitation of Liability
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Products are provided on an “as-is” basis. NetReach shall not be
              liable for indirect or consequential damages arising from the
              use of our services.
            </p>
          </section>

          {/* Contact */}
          <section className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <p className="text-slate-400 mb-6">
              Questions about these terms?
            </p>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 rounded-full bg-purple-500 text-white font-black uppercase tracking-widest text-xs hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)]"
            >
              Contact Us
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};
