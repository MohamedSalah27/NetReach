import { useNavigate } from 'react-router-dom';
// ✅ أضفنا ChevronLeft هنا عشان نستخدمها في زرار الـ Back
import { Shield, Lock, Eye, ChevronLeft } from 'lucide-react'; 

export const PrivacyPolicy: React.FC = () => {
  // ✅ المتغير ده دلوقتى مستخدم تحت في الـ onClick
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* 1️⃣ زرار الرجوع (Back Button): ده اللي هيشيل تحذير الـ navigate والـ ChevronLeft */}
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
          <p className="text-slate-400">Last Updated: February 3, 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          {/* 2️⃣ قسم معالجة البيانات: التزاماً بشروط ليمون سكويزي كـ Merchant of Record */}
          <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <Lock className="w-6 h-6" />
              <h2 className="text-2xl font-bold m-0 text-white">Payment & Data Processing</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              All payment data is handled by our Merchant of Record, <strong className="text-white">Lemon Squeezy, LLC</strong>. 
              They process your information according to their own privacy standards, which you can review at 
              <a href="https://www.lemonsqueezy.com/privacy" className="text-purple-400 underline ml-1">Lemon Squeezy Privacy Policy</a>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We do not store your credit card details on our servers. Lemon Squeezy maintains PCI-DSS compliance to ensure your data is safe.
            </p>
          </div>

          {/* 3️⃣ قسم جمع المعلومات: لتوضيح البيانات المطلوبة لتسليم الأوردر */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-white">
              <Eye className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold m-0 text-white">Information Collection</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-slate-300">
              <li><strong className="text-white">Email Address:</strong> Necessary for automated product delivery.</li>
              <li><strong className="text-white">Transaction History:</strong> To provide support and manage your outreach assets.</li>
              <li><strong className="text-white">IP Data:</strong> Used strictly for fraud prevention and security monitoring.</li>
            </ul>
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