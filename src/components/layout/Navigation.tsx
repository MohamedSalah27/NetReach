import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* --- PURPLE ANNOUNCEMENT BAR --- */}
      <div className="relative w-full bg-linear-to-r from-purple-600 to-indigo-700 py-2.5 overflow-hidden border-b border-white/10">
        {/* Deep purple glow */}
        <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full -top-10 left-1/2 -translate-x-1/2 w-full h-20 pointer-events-none" />

        <div className="flex animate-scroll whitespace-nowrap relative z-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">
                ⚡ FLASH SALE: 25% OFF on all Tools
              </span>
              <span className="text-white/40 font-bold">•</span>
              <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">
                Limited Time Offer
              </span>
              <span className="text-white/40 font-bold">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="w-full bg-[#050508]/90 backdrop-blur-md border-b border-white/10 py-5">
        <nav className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-white select-none hover:opacity-80 transition-opacity"
          >
            NET<span className="text-purple-500">REACH</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
            <a
              href="/#features"
              className="hover:text-purple-400 transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="hover:text-purple-400 transition-colors"
            >
              Infrastructure
            </a>
            <a href="/#faq" className="hover:text-purple-400 transition-colors">
              FAQ
            </a>
            <a
              href="/#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Desktop Store button */}
          <button
            onClick={() => navigate('/store')}
            className="cursor-pointer hidden md:flex items-center gap-2 px-6 py-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 font-bold uppercase tracking-wider active:scale-95 shadow-lg shadow-purple-500/10 text-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Store
          </button>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => navigate('/store')}
              className="cursor-pointer flex items-center justify-center p-2 bg-purple-500/20 text-purple-400 rounded-full"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>

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
          mobileMenuOpen ? 'visible' : 'invisible delay-300'
        }`}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`w-[40%] h-full bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`w-[60%] h-full bg-[#050508] border-l border-white/10 shadow-2xl flex flex-col p-6 transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white/5 rounded-full text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            <p className="text-purple-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-4 pl-2">
              Menu
            </p>
            {['Home', 'Features', 'Infrastructure', 'FAQ', 'Contact Us'].map(
              (item) => (
                <Link
                  key={item}
                  to={
                    item === 'Home'
                      ? '/'
                      : `/#${item.toLowerCase().replace(' ', '-')}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-300 py-3 px-2 border-b border-white/5 hover:text-purple-400 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          <div className="mt-auto pt-8">
            <button
              onClick={() => {
                navigate('/store');
                setMobileMenuOpen(false);
              }}
              className="cursor-pointer w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-purple-600/20"
            >
              <ShoppingBag className="w-4 h-4" />
              Store
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
