import { useNavigate } from 'react-router-dom';
import { Target, MessageCircle, Server, Globe, ArrowRight, Crown, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 selection:bg-purple-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. Hero Section */}
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6">
            <Target className="w-3 h-3" />
            Our Legacy
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8">
            Forged in the 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Underground.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            We didn't start as a shiny tech company. We started in the trenches—where reliability meant everything.
          </p>
        </div>

        {/* 2. Timeline Story Section */}
        <div className="relative mb-32">
            
            {/* Title */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-black mb-4">How We Started</h2>
                <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full opacity-50"></div>
            </div>

{/* Vertical Line - Updated for better visibility */}
<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent md:-translate-x-1/2 z-0"></div>

            {/* Stage 1: Early 2024 */}
            <div className="relative z-10 mb-24 md:flex justify-between items-center group">
                <div className="md:w-[45%] mb-8 md:mb-0 md:text-right order-1">
                    <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Early 2024: The Telegram Era</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        NetReach began as a reputation, not a website. We operated exclusively on <strong>Telegram & Discord</strong>, manually vetting high-trust accounts for elite marketers. We built our name on speed and trust in the underground market.
                    </p>
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#050508] border-2 border-purple-500 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-20 shadow-[0_0_15px_purple]"></div>

                <div className="md:w-[45%] pl-12 md:pl-0 order-2"></div>
            </div>

            {/* Stage 2: Mid 2024 */}
            <div className="relative z-10 mb-24 md:flex justify-between items-center">
                <div className="md:w-[45%] order-1 md:order-2 pl-12 md:pl-0 text-left">
                    <div className="inline-flex p-3 rounded-2xl bg-orange-500/10 text-orange-400 mb-4 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                        <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Mid 2024: The Expansion</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Demand exploded beyond what we could handle manually. We expanded to private forums and digital marketplaces, becoming top-rated vendors in record time. But manual delivery was still a bottleneck for our biggest clients.
                    </p>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#050508] border-2 border-white/20 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-20"></div>

                <div className="md:w-[45%] order-2 md:order-1"></div>
            </div>

            {/* Stage 3: Late 2025 */}
            <div className="relative z-10 md:flex justify-between items-center">
                <div className="md:w-[45%] mb-8 md:mb-0 md:text-right order-1">
                    <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400 mb-4 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                        <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Late 2025: The Platform Launch</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        We launched <strong>NetReach.site</strong> to solve the scale problem. A fully automated, API-driven infrastructure that delivers the same "hand-verified" quality instantly. Now serving 40+ countries with 24/7 deployment.
                    </p>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-20 shadow-[0_0_20px_purple]"></div>

                <div className="md:w-[45%] pl-12 md:pl-0 order-2"></div>
            </div>
        </div>

       {/* 3. Stats Strip - Updated with Brand Gradient */}
        <div className="mb-24 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-wrap justify-between items-center gap-8 text-center divide-x divide-white/5">
            <div className="flex-1">
                {/* الأرقام الآن تأخذ تدرج ألوان البراند */}
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 mb-1">
                  2024
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Established</div>
            </div>
            <div className="flex-1">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 mb-1">
                  10K+
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Assets Sold</div>
            </div>
            <div className="flex-1">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 mb-1">
                  40+
                </div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Countries</div>
            </div>
        </div>

{/* 4. VIP Partnership Section - Full Visual Interaction */}
        <div className="group mb-24 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-r from-[#1a1500] to-transparent border border-yellow-500/20 relative overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:scale-[1.02] shadow-xl hover:shadow-yellow-500/10">
            {/* Background Icon Animation - Triggers anywhere in the card */}
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all group-hover:scale-110 duration-700">
                <Crown className="w-40 h-40 text-yellow-500" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left md:w-3/4">
                    {/* Tag Interaction */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] uppercase tracking-widest font-black mb-4 group-hover:bg-yellow-500/30 transition-colors">
                        <Crown className="w-3 h-3" /> VIP Partnership
                    </div>
                    {/* Text Interaction */}
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-white group-hover:text-yellow-400 transition-colors leading-tight">
                      Focus on Sales. Let Us Handle Ops.
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-200 transition-colors">
                        For high-volume agencies: You handle the clients and sales; our specialized team runs the entire technical operation for you.
                    </p>
                </div>

                {/* The only clickable part */}
                <button 
                    onClick={() => navigate('/contact')}
                    className="bg-yellow-500/10 p-5 rounded-full border border-yellow-500/20 hover:bg-yellow-500 hover:text-black transition-all flex-shrink-0 cursor-pointer shadow-2xl active:scale-95 group/btn z-20"
                >
                     <ArrowRight className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors" />
                </button>
            </div>
        </div>

{/* 5. Upgrade Infrastructure Section - Full Visual Interaction */}
        <div className="group mb-24 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20 relative overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:scale-[1.02] shadow-xl hover:shadow-purple-500/10">
            {/* Background Zap Icon Animation */}
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all group-hover:scale-110 duration-700">
                <Zap className="w-40 h-40 text-purple-500" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left md:w-3/4">
                    {/* Tag Interaction */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-widest font-black mb-4 group-hover:bg-purple-500/30 transition-colors">
                        <Zap className="w-3 h-3" /> SCALING READY
                    </div>
                    {/* Title with Site Gradient */}
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white group-hover:text-purple-400 transition-colors tracking-tighter uppercase italic leading-none">
                        Upgrade Your <br /> Infrastructure.
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                        Premium assets for agencies demanding zero-failure infrastructure. Experience the peak of operational performance.
                    </p>
                </div>

                {/* Updated Button Label & Interaction */}
                <button 
                    onClick={() => navigate('/store')}
                    className="bg-purple-500/10 px-8 py-5 rounded-full border border-purple-500/20 hover:bg-purple-500 hover:text-black transition-all flex-shrink-0 cursor-pointer shadow-2xl active:scale-95 flex items-center gap-4 group/btn z-20"
                >
                     <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 group-hover/btn:text-black transition-colors">
                        Go to Store
                     </span>
                     <ArrowRight className="w-6 h-6 text-purple-400 group-hover/btn:text-black transition-colors" />
                </button>
            </div>
        </div>
      </div>

      </div>

  );
};