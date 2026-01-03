import { useState } from 'react';
import { CheckCircle2, Copy, Mail, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('@netreach_team');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="py-24 px-6 bg-[#050508] relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-200 h-100 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter">
              Contact <span className="text-purple-500">Us</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Reach out to our engineering team via your preferred channel for
              custom infrastructure setups.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:info@netreach.site"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    Email
                  </p>
                  <p className="text-white font-medium">info@netreach.site</p>
                </div>
              </a>

              <a
                href="tel:+13464875525"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                    Global Support
                  </p>
                  <p className="text-white font-medium">+1 (346) 487-5525</p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-[2.5rem] flex flex-col backdrop-blur-sm w-[calc(100%-1rem)] mx-auto sm:w-full max-w-md relative overflow-hidden">
            <div className="w-full flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_purple]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-black">
                  Link Active
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                COMM_ID: TG-SECURE
              </span>
            </div>

            <div className="space-y-10 w-full text-left">
              <div>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 font-bold">
                  Operational Hub
                </p>
                <div className="text-4xl font-mono font-black tracking-tighter text-white uppercase">
                  Telegram Center
                </div>
                <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                  Direct access to the deployment team for instant node
                  initialization.
                </p>
              </div>

              <div className="border-t border-white/10 pt-8 w-full flex flex-col gap-4">
                <a
                  href="https://t.me/netreach_team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-black font-black rounded-2xl transition-all hover:bg-purple-400 active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" /> Start Deployment
                </a>
                <button
                  onClick={handleCopy}
                  className="cursor-pointer w-full py-4 border border-white/10 hover:border-purple-500/50 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all bg-white/5 text-sm"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-purple-400" /> Copy ID
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
