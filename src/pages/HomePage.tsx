import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, Eye, Zap, Crown } from 'lucide-react';

// Telegram SVG Logo
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

// Discord SVG Logo
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// --- DATA POOL ---
const firstNames = ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas", "Charles", "Noah", "Oliver", "Liam", "Lucas", "Benjamin", "Henry", "Alexander", "Elijah", "Mason", "Logan", "Sebastian", "Jack", "Aiden", "Owen", "Samuel"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Anderson", "Taylor", "Thomas", "Moore", "Jackson", "Martin", "Lee", "Perez", "White", "Harris", "Clark", "Lewis", "Walker", "Hall", "Allen"];

const allFeedback = [
  // Regular buyers & consistency
  "vouch @NetReach been dealing with them for months quality never drops",
  "my go-to for aged accounts fourth time this month 💯",
  "ordered 5 times already same quality everytime",
  "been using netreach for like 6 months never had issues fr",
  "third bulk order quality holds up",
  "repeat customer accounts always work as expected",
  "ordered weekly for 2 months zero complaints",
  "running campaigns with their accs for 3 months reliable af",
  "switched to netreach 4 months ago never looked back",
  "sixth order this quarter quality never dips fr",
  "regular customer accounts always aged properly never fresh shells",
  "been ordering proxies monthly same quality",
  "ordered accounts for 5 different projects all worked",
  "repeat buyer trust the quality at this point ngl",
  "tested accounts from different vendors netreach wins everytime",
  "fifth order in 6 weeks quality control is solid",
  
  // Realistic orders with quantities
  "received 15 twitter accounts all working 🔥",
  "ordered 5 accs for testing email verification on point",
  "got 50 accounts delivered in like 10 minutes fast af",
  "grabbed 20 ig accounts original emails included",
  "ordered 10 twitter accs everything works",
  "bought 25 ig accounts running smooth",
  "got 30 accounts and 30 proxies everything synced",
  "ordered 8 twitter accounts all aged 2011-2015 verified",
  "received 40 accounts for campaign zero issues",
  "picked up 12 ig accounts profile pics look real",
  "ordered 60 twitter accs ready to use",
  "got 15 accounts everything good fr",
  "received 35 instagram accounts all have activity history",
  "ordered 20 proxies for scraping clean ips",
  "bought 45 twitter accounts delivery under 15 mins",
  "got 10 accounts works good",
  "ordered 70 accounts all delivered on time",
  "received 18 ig accounts perfect for testing",
  "grabbed 55 twitter accounts email + phone verified",
  "got 25 accounts worth it tbh",
  "ordered 90 accounts quality exceeded expectations ngl",
  "received 12 proxies fast response times",
  "bought 80 twitter accounts all aged properly",
  "got 30 ig accounts everything working",
  "ordered 65 accounts with proxies campaigns running smooth",
  "received 22 accounts for testing good variety",
  "grabbed 48 twitter accounts realistic follower counts",
  "got 35 accounts + 35 proxies solid setup",
  "ordered 100 accounts bulk largest order yet all working 💪",
  "received 42 ig accounts profiles look organic",
  "bought 28 accounts saved hours already",
  "got 15 proxies no blocks",
  "ordered 58 twitter accounts all passed verification",
  "received 20 accounts game changer",
  "grabbed 75 accounts everything worked",
  "got 14 proxies works with all platforms",
  "38 ig accounts running perfect",
  "received 95 twitter accounts quality consistent",
  "bought 26 accounts with proxies setup took 10 mins",
  "got 50 ig accounts all have engagement history",
  "32 accounts running perfect fr",
  
  // Account ages & quality
  "accounts from 2007-2012 crazy aged 🔥",
  "got some 2009 twitter accounts these are gold 💎",
  "ordered 2008-2013 aged accounts all legit ✅",
  "2007 accounts still working perfectly insane 😳",
  "picked up 2010-2014 twitter accs quality next level 💯",
  "2009 accounts with original emails rare find 🔑",
  "grabbed 2011-2015 aged accounts ready to go 🚀",
  "2007 accounts wtf these are ancient and working 😂",
  "got 2012-2018 twitter accs all have history 📊",
  "ordered 2008 accounts profile activity looks real af",
  "2009-2013 aged accounts best investment fr 💰",
  "2014-2020 twitter accs solid for campaigns 💪",
  "picked up 2007-2011 accounts passed every check ✅",
  "2015-2022 aged accs work better than new ones ngl",
  "ordered 2010 accounts email included 📧",
  "2008-2012 twitter accounts these hit different fr 🎯",
  "got 2007 accounts how tf are these still working lol 💀",
  "2013-2019 accounts all have realistic activity 📈",
  "picked up some 2009-2014 accs aged perfectly 👌",
  "2011 twitter accounts with original creation dates 🔥",
  
  // Support & replacements
  "had issue with one account support replaced it same day 🙏",
  "support replied in 2 mins fixed my issue fast ⚡",
  "got 2 dead accounts messaged support got replacements in hour ✅",
  "one account wasnt working support swapped it instantly 💨",
  "support always online replied at 3am lol 😴",
  "had 3 accounts with issues support replaced all same day 🔄",
  "email wasnt working on account support gave me new one fast 📧",
  "support helped me when proxy stopped working sent replacement 🔧",
  "account got suspended support sent another one no questions ✅",
  "payment issue support walked me through it patient af 🤝",
  "support actually responds unlike other vendors 💬",
  "got replacement account in 20 mins support is quick ⏱️",
  "support replaced 2 flagged accounts same day 💯",
  "messaged support at midnight they still replied fast 🌙",
  "had verification issue support sorted it out in minutes ⚙️",
  "support team actually helpful not just copy paste responses 👍",
  "got wrong account type support fixed it quick 🔀",
  "support replaced account after it got locked appreciate it 🙏",
  "needed help with setup support explained everything clear 📝",
  "support been helpful every single time ngl 🤙",
  
  // Tools & automation
  "x automation tool running stable no crashes fr 🖥️",
  "proxies clean not getting captchas 💪",
  "ig automation tool with warm accounts solid combo 🔥",
  "x automation handles rate limiting perfect ⚙️",
  "proxies integrate easy no setup needed 🔌",
  "x tool has scheduling set it forget it ⏰",
  "automation works good saves time tbh ⏱️",
  "tool updates actually useful not random changes 📈",
  "proxies work with both x and ig no issues ✅",
  "x automation never loses data failover works 💾",
  "tool simple to use no learning curve 👌",
  "latest update added features i actually needed fr 🎯",
  "proxies dont timeout during runs reliable 🔄",
  "x tool handles errors well doesnt just crash 🛡️",
  "automation speed improved with new update 🚀",
  "proxies work with custom scripts developer friendly 💻",
  "tool updates are regular dev team active 🔨",
  "x automation has webhook support integrates everywhere 🔗",
  "ig tool has safety features built in smart rate limiting ⚡",
  "proxies support both tools no configuration needed 🎮",
  
  // Emotional & casual
  "bro these accounts are fire fr fr 🔥🔥",
  "ngl didnt expect this quality for the price 😮",
  "finally found vendor that doesnt bs you 💯",
  "these accounts hit different 🎯",
  "was skeptical at first but damn these work 😳",
  "other vendors trash compared to this fr 🗑️",
  "accounts actually aged not fake shells thank god 🙏",
  "finally reliable source been looking forever 🔍",
  "quality speaks for itself no cap 💪",
  "tried 5 vendors before this waste of time shouldve started here 🤦",
  "accounts work better than expected ngl surprised 😲",
  "delivery fast af thought itd take hours ⚡",
  "no bs straight to point i like that 👌",
  "accounts fire been running campaigns smooth 🚀",
  "worth every penny no regrets tbh 💰",
  "exceeded expectations by far 📈",
  "finally someone who delivers what they promise ✅",
  "quality too good for this price not complaining tho 😂",
  "thought prices were too low to be real but everything works 🤔",
  "other vendors charging double for worse quality smh 💸",
  "accounts slap different when theyre actually aged fr 🎪",
  "been vouching for netreach to everyone quality insane 📢",
  "best decision switching to them months ago 🏆",
  "literally cant go back to other vendors now lol 🚫",
  "accounts so good i thought they were fake at first 💀",
  "finally vendor that actually delivers fr fr ✨",
];

// --- HELPERS ---
const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const generateName = () => `${getRandom(firstNames)} ${getRandom(lastNames)}`;
const generateViews = () => Math.floor(Math.random() * 95) + 5;
const generateTime = () => `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`;

const generateDiscordDate = () => {
  const start = new Date(2025, 0, 1).getTime();
  const end = new Date(2026, 0, 25).getTime(); 
  const randomDate = new Date(start + Math.random() * (end - start));
  return `${randomDate.getMonth() + 1}/${randomDate.getDate()}/${randomDate.getFullYear()}`;
};

const generateTelegramDate = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${getRandom(months)} ${Math.floor(Math.random() * 28) + 1}`;
};

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => {
      const platform = Math.random() > 0.5 ? 'telegram' : 'discord';
      const name = generateName();
      return {
        id: i,
        platform,
        name,
        username: name.replace(' ', '_').toLowerCase() + Math.floor(Math.random() * 99),
        text: getRandom(allFeedback),
        displayDate: platform === 'discord' ? generateDiscordDate() : generateTelegramDate(),
        time: generateTime(),
        views: platform === 'telegram' ? generateViews() : null,
        avatar: `https://i.pravatar.cc/150?u=${name}${i}`,
        forwarderImg: `https://i.pravatar.cc/150?u=${i}${name}`
      };
    });
    setReviews(generated);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-purple-500/30 overflow-x-hidden font-sans">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-[10px] uppercase font-black mb-8">
            <Activity className="w-3 h-3 animate-pulse" /> OPERATIONAL INFRASTRUCTURE V2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] uppercase italic text-white">SCALE YOUR <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600">OUTREACH.</span></h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-medium">Premium assets for agencies demanding <span className="text-white font-bold underline decoration-purple-500/50">zero-failure</span> infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button onClick={() => navigate('/store')} className="group px-10 py-5 rounded-2xl bg-purple-600 text-white font-black text-xs uppercase tracking-widest hover:bg-purple-500 transition-all flex items-center gap-3 active:scale-95 shadow-2xl cursor-pointer">
              EXPLORE Store <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => navigate('/about')} className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase hover:bg-white/10 transition-all cursor-pointer">OUR STORY</button>
          </div>
        </div>
      </section>

{/* 2. STATS - تحويل الأرقام للون الموقع */}
      <section className="py-12 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div>
             <div className="text-5xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600">2024</div>
             <div className="text-[10px] font-black uppercase text-slate-500">Established</div>
           </div>
           <div>
             <div className="text-5xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600">10K+</div>
             <div className="text-[10px] font-black uppercase text-slate-500">Assets Sold</div>
           </div>
           <div>
             <div className="text-5xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600">40+</div>
             <div className="text-[10px] font-black uppercase text-slate-500">Countries</div>
           </div>
        </div>
      </section>

      {/* 3. INVENTORY PREVIEW */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 px-4">
            {/* تم إصلاح حرف الـ w وجعل اللون متدرج */}
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600">
              Inventory Preview
            </h2>
            
            <button 
              onClick={() => navigate('/store')} 
              className="text-[10px] font-black uppercase tracking-widest text-purple-400 border-b border-purple-500/50 pb-1 hover:text-white transition-colors cursor-pointer"
            >
              View Entire Store
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              { 
                name: 'X / Twitter', 
                price: '$5', 
                tag: 'AGED 2007+',
                gradient: 'from-blue-500 via-blue-600 to-cyan-600',
                description: 'Email + Phone Verified'
              },
              { 
                name: 'Instagram', 
                price: '$5', 
                tag: 'HIGH TRUST',
                gradient: 'from-pink-500 via-purple-500 to-indigo-600',
                description: 'Original Email Included'
              },
              { 
                name: 'Proxies', 
                price: '$5', 
                tag: 'GLOBAL STATIC',
                gradient: 'from-green-500 via-emerald-500 to-teal-600',
                description: 'Rotating IPs · 99.9% Uptime'
              },
              { 
                name: 'Automation Tools', 
                price: '$200', 
                tag: 'UNLIMITED',
                gradient: 'from-orange-500 via-red-500 to-pink-600',
                description: 'Full License · Updates'
              }
            ].map((asset) => (
              <div 
                key={asset.name} 
                /* تم تعديل الـ Hover ليصبح بحدود أرجوانية متوهجة مثل الصورة الثانية */
                className="group p-8 rounded-[2rem] bg-gradient-to-br from-[#0c0c12] to-[#08080a] border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all relative overflow-hidden flex flex-col h-full"
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${asset.gradient} opacity-0 group-hover:opacity-10 blur-[60px] transition-all duration-500 rounded-full`} />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${asset.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all`}>
                    <Zap size={22} className="text-white" />
                  </div>
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-purple-500/50 group-hover:text-purple-400 transition-all">
                    {asset.tag}
                  </span>
                </div>
                
                {/* اسم المنتج يأخذ لون أرجواني عند الـ Hover */}
                <h3 className="text-2xl font-black mb-2 text-white uppercase italic relative z-10 group-hover:text-purple-400 transition-colors">
                  {asset.name}
                </h3>
                
                <p className="text-xs text-slate-500 mb-6 relative z-10 font-medium">
                  {asset.description}
                </p>
                
                <div className="mb-8 relative z-10 flex items-baseline gap-1.5">
                  <span className="text-5xl font-black tracking-tighter text-white">
                    {asset.price}
                  </span>
                  <span className="text-base font-bold text-white italic opacity-100">
                    /unit
                  </span>
                </div>
                
                <button 
                  onClick={() => navigate('/store')}
                  className="w-full py-4 mt-auto rounded-2xl bg-white/5 border border-white/5 text-white text-[10px] font-black hover:bg-purple-600 hover:border-purple-600 transition-all uppercase tracking-widest group-hover:shadow-lg group-hover:shadow-purple-500/20 cursor-pointer relative z-20"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MANAGED SERVICES SECTION - تم تفعيل التوهج الكامل */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Brand Title - Smaller size with site gradient */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600">
              Our Managed Services
            </h2>
          </div>

          {/* Card - Enhanced glowing and scaling effect on hover */}
          <div className="relative p-8 md:p-12 rounded-[3rem] bg-[#0f0f0a] border border-yellow-500/10 overflow-hidden hover:border-yellow-500/50 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(234,179,8,0.1)] transition-all duration-500 group">
            
            {/* Background Glow Effect - Increased intensity on group-hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-yellow-600/20 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-2xl">
                {/* VIP Tag with Crown */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] uppercase font-black mb-8 group-hover:bg-yellow-500/20 transition-colors">
                  <Crown size={12} className="text-yellow-500" /> VIP PARTNERSHIP
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight group-hover:text-yellow-50 transition-colors">
                  Don't Want to <br /> Run the Tech?
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl group-hover:text-slate-200 transition-colors">
                   Our engineering team can manage your entire infrastructure layout while you focus on scaling revenue.
                </p>
              </div>

              {/* Button Area with Glowing Background Crown */}
              <div className="relative shrink-0">
                {/* Large Crown Animation - Increased opacity and scale on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-600/10 pointer-events-none scale-[2.8] transition-all duration-700 group-hover:text-yellow-600/30 group-hover:scale-[3.2]">
                  <Crown size={100} strokeWidth={1} />
                </div>

                <button 
                  onClick={() => navigate('/contact')} 
                  className="relative z-10 px-8 py-5 rounded-full bg-yellow-500 text-black font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-yellow-400 transition-all active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.4)] cursor-pointer"
                >
                  LEARN ABOUT PARTNERSHIP <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 5. FEEDBACK MASONRY - تم تكبير الحجم وضبط الألوان */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header - Massive size with brand gradient */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 leading-none">
              Clients feedback
            </h2>
            <p className="text-slate-500 text-[11px] font-black uppercase mt-6 tracking-[0.4em] opacity-80">
              Live transmissions from active nodes.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 px-4">
            {reviews.map((proof) => (
              <div key={proof.id} className="break-inside-avoid flex flex-col">
                {proof.platform === 'discord' ? (
                  <div className="bg-[#313338] border border-[#2b2d31] p-4 rounded-2xl shadow-xl transition-all hover:scale-[1.01] hover:border-purple-500/30 relative">
                      <div className="absolute top-3 right-3 opacity-30">
                        <DiscordIcon />
                      </div>
                      <div className="flex gap-3">
                          <img src={proof.avatar} className="w-10 h-10 rounded-full flex-shrink-0" alt="u" />
                          <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-2 mb-1">
                                  <span className="text-white font-bold text-[15px] hover:underline cursor-pointer truncate">{proof.username}</span>
                                  <span className="text-[#949BA4] text-[10px] font-medium whitespace-nowrap">{proof.displayDate} {proof.time}</span>
                              </div>
                              <p className="text-[#dbdee1] text-[14px] leading-snug">{proof.text}</p>
                          </div>
                      </div>
                  </div>
                ) : (
                  <div className="flex flex-col bg-white/5 border border-white/5 p-4 rounded-2xl transition-all hover:border-purple-500/30 relative">
                      <div className="absolute top-3 right-3 opacity-30 text-[#64b5ef]">
                        <TelegramIcon />
                      </div>
                      <div className="mx-auto mb-4 bg-[#212d3b]/90 rounded-full px-4 py-0.5 backdrop-blur-md border border-white/10"><span className="text-white text-[10px] font-bold">{proof.displayDate}</span></div>
                      <div className="bg-[#182533] p-3 rounded-xl shadow-2xl flex flex-col h-auto border-b border-black/20">
                          <div className="text-[#ff8888] text-[10px] font-black mb-1.5 uppercase pl-[3px]">NetReach Vouches</div>
                          <div className="flex items-center gap-1 mb-2 border-l-[2px] border-[#64b5ef] pl-2 py-0.5">
                               <span className="text-[#64b5ef] text-[12px] font-semibold">Forwarded from</span>
                               <img src={proof.forwarderImg} className="w-[18px] h-[18px] rounded-full object-cover shadow-sm" alt="t" />
                               <span className="text-white text-[12px] font-bold">{proof.name.split(' ')[0]}</span>
                          </div>
                          <p className="text-white text-[14px] leading-snug px-1 mb-3">{proof.text.split(' ').map((w:string, idx:number) => w.startsWith('@') ? <span key={idx} className="text-[#64b5ef] hover:underline cursor-pointer">{w} </span> : w + ' ')}</p>
                          <div className="flex justify-end items-center gap-1 mt-auto px-1">
                              <Eye size={11} className="text-[#788995]" strokeWidth={2.5} /><span className="text-[#788995] text-[10px] font-bold">{proof.views}</span>
                              <span className="text-[#788995] text-[10px] font-bold ml-1">{proof.time}</span>
                          </div>
                      </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}; 