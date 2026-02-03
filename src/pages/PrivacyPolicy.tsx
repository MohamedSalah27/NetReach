import React from 'react';
import { useNavigate } from 'react-router-dom';
// ✅ استخدمنا كل الأيقونات المستدعاة عشان ميبقاش فيه Warnings
import { Shield, Lock, Eye, FileText, ChevronLeft } from 'lucide-react'; 

export const PrivacyPolicy: React.FC = () => {
  // ✅ المتغير ده دلوقتى مستخدم في زرار الـ Back
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* زرار الرجوع - استخدامه بيحل مشكلة الـ navigate والـ ChevronLeft */}
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
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: February 3, 2026
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">

          {/* 1. الإفصاح عن التاجر المسجل - Lemon Squeezy */}
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 mb-8 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <Lock className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0 text-white">Payment Processing</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our order process is conducted by our online reseller <strong className="text-white font-bold">Lemon Squeezy, LLC</strong>. 
              Lemon Squeezy is the Merchant of Record for all our orders. 
            </p>
            <p className="text-slate-300 leading-relaxed">
              They handle all customer service inquiries and returns. 
              Your personal data will be processed by Lemon Squeezy in accordance with their own <a href="https://www.lemonsqueezy.com/privacy" className="text-purple-400 underline hover:text-purple-300 transition-colors">Privacy Policy</a>. 
              They also maintain PCI-DSS compliance to ensure the security of your payment data.
            </p>
          </div>

          {/* Section 1: Information Collection */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-3 mb-4 text-white">
              <Eye className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold m-0 text-white">1. Information We Collect</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you use NetReach services, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-300 ml-4">
              <li><strong className="text-white">Email Address:</strong> Required for automated product delivery and support.</li>
              <li><strong className="text-white">Transaction History:</strong> Details regarding your outreach infrastructure purchases.</li>
              <li><strong className="text-white">Usage & Technical Data:</strong> IP address and browser information used strictly for fraud prevention and security.</li>
            </ul>
          </div>

          {/* Section 2: Data Usage */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-3 mb-4 text-white">
              <FileText className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold m-0 text-white">2. How We Use Data</h2>
            </div>
            <p className="text-slate-300">
              We use your information strictly to fulfill orders, prevent fraudulent transactions, and comply with the legal requirements of our Merchant of Record.
            </p>
          </div>

        </div>

        <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            © 2026 NetReach — Secured by Lemon Squeezy
          </p>
        </div>
      </div>
    </div>
  );
};