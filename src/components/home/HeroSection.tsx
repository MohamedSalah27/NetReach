import { PerformanceCard } from './PerformanceCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050508] py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
              NetReach — <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-700">
                Elite Outreach
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
              We’ve eliminated the noise. NetReach operates in the background,
              building compliant social funnels that convert. No dashboards. No
              friction. Just results.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] uppercase tracking-[0.2em] font-bold text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Not Affiliated with X or Meta
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Privacy-First Architecture
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
            <PerformanceCard />
          </div>
        </div>
      </div>
    </section>
  );
};
