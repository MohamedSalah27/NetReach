import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          window.scrollTo({
            top: elementRect - bodyRect - offset,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [location]);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(id === 'home' ? '/' : `/#${id}`);
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState({}, '', '/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState({}, '', `/#${id}`);
      }
    }
  };

  const navItems = ['Home', 'Features', 'Infrastructure', 'FAQ', 'Contact Us'];
  const idMap: { [key: string]: string } = {
    Home: 'home',
    Features: 'features',
    Infrastructure: 'infrastructure',
    FAQ: 'faq',
    'Contact Us': 'contact',
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative w-full bg-linear-to-r from-purple-600 to-indigo-700 py-2.5 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full -top-10 left-1/2 -translate-x-1/2 w-full h-20 pointer-events-none" />
        <div className="flex animate-scroll whitespace-nowrap relative z-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">
                ⚡ FLASH SALE: 25% OFF on all Tools
              </span>
              <span className="text-white/40 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#050508]/90 backdrop-blur-md border-b border-white/10 py-5">
        <nav className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-white select-none hover:opacity-80 transition-opacity"
          >
            NET<span className="text-purple-500">REACH</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
            {['Features', 'Infrastructure', 'FAQ', 'Contact Us'].map((item) => (
              <button
                key={item}
                onClick={(e) => handleScroll(e, idMap[item])}
                className="hover:text-purple-400 transition-colors cursor-pointer bg-transparent border-none"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => navigate('/store')}
            className="cursor-pointer hidden md:flex items-center gap-2 px-6 py-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 font-bold uppercase tracking-wider active:scale-95 shadow-lg shadow-purple-500/10 text-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Store
          </button>

       <div className="flex md:hidden items-center gap-3">
  {/* زرار الستور الجديد في الموبايل */}
  <button
    onClick={() => navigate('/store')}
    className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-full active:scale-95 transition-all shadow-lg shadow-purple-500/10"
  >
    <span className="text-[10px] font-black uppercase tracking-wider">Store</span>
    <ShoppingBag className="w-4 h-4" />
  </button>

  {/* زرار المنيو (الثلاث شرط) */}
  <button
    className="text-white cursor-pointer p-2 active:scale-90 transition-transform"
    onClick={() => setMobileMenuOpen(true)}
  >
    <Menu className="w-6 h-6" />
  </button>
</div>
        </nav>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-100 flex w-full h-screen transition-all duration-300 ${
          mobileMenuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Overlay - BLUR REMOVED */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="w-[30%] h-full"
        />

        {/* Drawer */}
        <div
          className={`w-[70%] h-full bg-[#050508] border-l border-white/10 shadow-2xl flex flex-col p-6 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white/5 rounded-full text-white active:scale-90 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col h-full overflow-y-auto pr-2">
            <div className="flex flex-col space-y-1 mb-10">
              <p className="text-purple-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-6 pl-2 opacity-50">
                Menu
              </p>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={(e) => handleScroll(e, idMap[item])}
                  className="text-left text-xl font-bold text-slate-300 py-4 px-2 border-b border-white/5 hover:text-purple-400 transition-colors cursor-pointer w-full"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="pb-10">
              <button
                onClick={() => {
                  navigate('/store');
                  setMobileMenuOpen(false);
                }}
                className="cursor-pointer w-full flex items-center justify-center gap-3 px-6 py-5 bg-purple-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-purple-600/20 active:scale-95 transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
