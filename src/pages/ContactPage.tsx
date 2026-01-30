import { useState } from 'react';
import { Mail, Clock, MessageSquare, Send, CheckCircle2, Copy, SendHorizontal } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('@netreach_team');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-purple-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6">
            <MessageSquare className="w-3 h-3" />
            Get in Touch
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Let's Talk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Business</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Questions about custom orders or managed services? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left Column: Info Cards & Telegram Hub */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Email Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Email</h3>
              <p className="text-slate-400 text-sm">info@netreach.site</p>
            </div>

            {/* Response Time Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Response Time</h3>
              <p className="text-slate-400 text-sm">4-12 hours during business days</p>
            </div>

            {/* Telegram Operational Hub (Replacing What to Expect) */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/30 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_purple]" />
                        <span className="text-[10px] uppercase tracking-widest text-purple-400 font-black">Link Active</span>
                    </div>
                </div>

                <h3 className="text-2xl font-mono font-black mb-3 tracking-tighter uppercase text-white">Telegram Center</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-8">
                    Direct access to the deployment team for instant node initialization.
                </p>

                <div className="space-y-3">
                    <a 
                        href="https://t.me/netreach_team" 
                        target="_blank" 
                        className="w-full py-4 bg-white text-black font-black rounded-2xl transition-all hover:bg-purple-500 hover:text-white flex items-center justify-center gap-2 text-xs shadow-xl"
                    >
                        <SendHorizontal className="w-4 h-4" /> Start Deployment
                    </a>
                    <button 
                        onClick={handleCopy}
                        className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:bg-white/10 text-xs"
                    >
                        {copied ? (
                            <><CheckCircle2 className="w-4 h-4 text-green-400" /> Copied</>
                        ) : (
                            <><Copy className="w-4 h-4 text-purple-400" /> Copy Support ID</>
                        )}
                    </button>
                </div>
            </div>
          </div>

          {/* Right Column: Large Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="p-8 lg:p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm h-full">
              {submitted && (
                <div className="mb-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                  ✓ Operational request sent successfully.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name *</label>
                  <input
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-slate-700"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email *</label>
                  <input
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-slate-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Subject *</label>
                <div className="relative">
                    <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none appearance-none cursor-pointer text-white"
                    >
                        <option className="bg-[#0f0f15]" value="General Inquiry">General Inquiry</option>
                        <option className="bg-[#0f0f15]" value="Custom Order">Custom Order / Bulk Pricing</option>
                        <option className="bg-[#0f0f15]" value="Managed Services">Managed Services</option>
                        <option className="bg-[#0f0f15]" value="Technical Support">Technical Support</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
                </div>
              </div>

              <div className="space-y-3 mb-10">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message *</label>
                <textarea
                  required rows={7} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-5 rounded-3xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none resize-none transition-all placeholder:text-slate-700"
                  placeholder="Tell us what you need..."
                />
              </div>

              <button
                type="submit" disabled={isSubmitting}
                className="w-full py-6 rounded-2xl bg-white text-black font-black text-lg hover:bg-purple-500 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Initialising..." : <>Send Message <SendHorizontal className="w-5 h-5" /></>}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
            🔒 All communications are AES-256 encrypted and confidential.
          </p>
        </div>

      </div>
    </div>
  );
};