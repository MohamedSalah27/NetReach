import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 font-sans">
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
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-white">Terms & Conditions</h1>
          <p className="text-slate-400">Last Updated: February 3, 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <div className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-400" /> Merchant of Record
            </h2>
            <p className="text-slate-300 leading-relaxed text-white">
              Our order process is conducted by <strong className="text-white">Lemon Squeezy, LLC</strong>, our authorized reseller.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/30">
            <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Chargeback Penalty
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Filing a meritless chargeback will result in a <strong className="text-white font-bold underline">$100 USD penalty fee</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};