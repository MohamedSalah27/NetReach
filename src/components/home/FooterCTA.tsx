export const FooterCTA: React.FC = () => {
  return (
    <section className="py-32 lg:py-48 bg-[#050508] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight text-white mb-8">
          Ready to{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-600">
            Scale Velocity?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Deploy your autonomous outreach infrastructure today. Limited
          bandwidth available for high-intensity campaigns.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://t.me/netreach_team"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-5 bg-white text-black font-bold text-lg lg:text-xl rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">Secure Your Slot on Telegram</span>
            <div className="absolute inset-0 rounded-full bg-white group-hover:blur-md transition-all duration-300 opacity-50" />
          </a>
          <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.3em]">
            Average setup time: 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
};
