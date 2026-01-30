import { useNavigate } from 'react-router-dom';
import { Target, MessageCircle, Server, Globe, ArrowRight, Crown, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 selection:bg-purple-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. Hero Section - Optimized Spacing */}
        <div className="text-center mb-24">
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

        {/* 2. Timeline Story Section - Fixed Line Visibility */}
        <div className="relative mb-28">
            
            {/* Title - Compact and Branded */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black mb-3 italic uppercase tracking-tighter">How We Started</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            </div>

            {/* Vertical Line - Neon Glow Effect */}
            <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-[2px] md:-translate-x-1/2 z-0">
                <div className="h-full w-full bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 opacity-40 shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
            </div>

            {/* Stage 1: Early 2024 */}
            <div className="relative z-10 mb-16 md:flex justify-between items-center group">
                <div className="md:w-[45%] mb-6 md:mb-0 md:text-right order-1 transition-transform group-hover:-translate-y-1">
                    <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400 mb-3 border border-purple-500/20">
                        <MessageCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-1">Early 2024: The Telegram Era</h3>
                    <p className="text-slate-400 leading-relaxed text-xs">
                        NetReach began as a reputation, not a website. We operated exclusively on <strong>Telegram & Discord</strong>, manually vetting high-trust accounts for elite marketers.
                    </p>
                </div>
                
                {/* Glowing Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#050508] border-2 border-purple-500 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-20 shadow-[0_0_12px_#a855f7]"></div>
                <div className="md:w-[45%] order-2"></div>
            </div>

            {/* Stage 2: Mid 2024 */}
            <div className="relative z-10 mb-16 md:flex justify-between items-center group">
                <div className="md:w-[45%] order-1 md:order-2 pl-12 md:pl-0 text-left transition-transform group-hover:-translate-y-1">
                    <div className="inline-flex p-3 rounded-2xl bg-pink-500/10 text-pink-400 mb-3 border border-pink-500/20">
                        <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-1">Mid 2024: The Expansion</h3>
                    <p className="text-slate-400 leading-relaxed text-xs">
                        Demand exploded beyond what we could handle manually. We expanded to private forums and digital marketplaces, becoming top-rated vendors.
                    </p>
                </div>

                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#050508] border-2 border-pink-500/50 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(236,72,153,0.3)]"></div>
                <div className="md:w-[45%] order-2 md:order-1"></div>
            </div>

            {/* Stage 3: Late 2025 */}
            <div className="relative z-10 md:flex justify-between items-center group">
                <div className="md:w-[45%] mb-6 md:mb-0 md:text-right order-1 transition-transform group-hover:-translate-y-1">
                    <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400 mb-3 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                        <Server className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-1">Late 2025: The Platform Launch</h3>
                    <p className="text-slate-400 leading-relaxed text-xs">
                        We launched <strong>NetReach.site</strong>. A fully automated, API-driven infrastructure that delivers the same "hand-verified" quality instantly.
                    </p>
                </div>

                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -translate-x-[7px] md:-translate-x-1/2 z-20 shadow-[0_0_20px_#a855f7]"></div>
                <div className="md:w-[45%] order-2"></div>
            </div>
        </div>

        {/* 3. Stats Strip - Brand Colors */}
        <div className="mb-24 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-wrap justify-between items-center gap-8 text-center divide-x divide-white/5">
            <div className="flex-1">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-600 mb-1">2024</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Established</div>
            </div>
            <div className="flex-1 pl-8">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-600 mb-1">10K+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Assets Sold</div>
            </div>
            <div className="flex-1 pl-8">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-600 mb-1">40+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Countries</div>
            </div>
        </div>

        {/* 4. VIP Partnership Section */}
        <div className="group mb-20 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-r from-[#1a1500] to-transparent border border-yellow-500/20 relative overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:scale-[1.01] shadow-xl">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all group-hover:scale-110 duration-700 pointer-events-none">
                <Crown className="w-32 h-32 text-yellow-500" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left md:w-3/4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] uppercase tracking-widest font-black mb-4">
                        <Crown className="w-3 h-3" /> VIP Partnership
                    </div>
                    <h2 className="text-3xl font-black mb-4 text-white uppercase italic tracking-tighter leading-none">Focus on Sales. <br/> Let Us Handle Ops.</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        For high-volume agencies: You handle the clients; our specialized team runs the entire technical operation.
                    </p>
                </div>
                <button onClick={() => navigate('/contact')} className="bg-yellow-500/10 p-5 rounded-full border border-yellow-500/20 hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
                    <ArrowRight className="w-6 h-6 text-yellow-500 group-hover:text-black" />
                </button>
            </div>
        </div>

        {/* 5. Upgrade Infrastructure Section */}
        <div className="group mb-12 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20 relative overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:scale-[1.01]">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all group-hover:scale-110 duration-700 pointer-events-none">
                <Zap className="w-32 h-32 text-purple-500" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left md:w-3/4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-widest font-black mb-4">
                        <Zap className="w-3 h-3" /> SCALING READY
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-white uppercase italic tracking-tighter leading-none">Upgrade Your <br /> Infrastructure.</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Premium assets for agencies demanding zero-failure infrastructure. Experience peak operational performance.
                    </p>
                </div>
                <button onClick={() => navigate('/store')} className="bg-purple-500/10 px-8 py-5 rounded-full border border-purple-500/20 hover:bg-purple-500 hover:text-black transition-all flex items-center gap-4 cursor-pointer">
                    <span className="text-[10px] font-black uppercase tracking-widest">Go to Store</span>
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};