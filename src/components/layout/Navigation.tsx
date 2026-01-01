import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050508]/80  border-b border-white/10 py-6">
      <nav className="flex items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto relative z-50">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-white select-none hover:opacity-80 transition-opacity"
        >
          NET<span className="text-purple-500">REACH</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
          <a href="/#features" className="hover:text-white transition-colors">Features</a>
          <a href="/#how-it-works" className="hover:text-white transition-colors">Infrastructure</a>
          <a href="/#faq" className="hover:text-white transition-colors">Operational FAQ</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact Us</a>
        </div>

        {/* Desktop Store button */}
        <button
          onClick={() => navigate('/store')}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer font-bold uppercase tracking-wider active:scale-95 shadow-lg shadow-white/5 text-xs"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Store
        </button>

        {/* Mobile buttons */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => navigate('/store')}
            className="flex items-center justify-center p-2 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-200"
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

      {/* --- MOBILE MENU OVERLAY --- */}
      {/* Container is fixed over the whole screen, z-index higher than header */}
      <div 
        className={`fixed inset-0 z-[100] flex w-full h-screen transition-all duration-300 ${
            mobileMenuOpen ? 'visible' : 'invisible delay-300'
        }`}
      >
        
        {/* LEFT SIDE: 40% Width - The Blurred "Click to Close" Area */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`w-[40%] h-full  bg-black/20 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* RIGHT SIDE: 60% Width - The Solid Menu Drawer */}
        <div 
          className={`w-[60%] h-full bg-[#050508] border-l border-white/10 shadow-2xl flex flex-col p-6 transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header inside the drawer */}
          <div className="flex items-center justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white/5 rounded-full text-white hover:bg-purple-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-1 overflow-y-auto">
            <p className="text-purple-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-4 pl-2">
              Menu
            </p>

            <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-lg font-bold text-white py-3 px-2 border-b border-white/5 hover:bg-white/5 rounded-lg transition-colors"
            >
                Home
            </Link>
            <a 
                href="/#features" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-lg font-bold text-slate-300 py-3 px-2 border-b border-white/5 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
                Features
            </a>
            <a 
                href="/#how-it-works" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-lg font-bold text-slate-300 py-3 px-2 border-b border-white/5 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
                Infrastructure
            </a>
            <a 
                href="/#faq" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-lg font-bold text-slate-300 py-3 px-2 border-b border-white/5 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
                Operational FAQ
            </a>
            <a 
                href="/#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-lg font-bold text-slate-300 py-3 px-2 border-b border-white/5 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
                Contact Us
            </a>
          </div>

          <div className="mt-auto pt-8">
             <button
               onClick={() => {
                   navigate('/store');
                   setMobileMenuOpen(false);
               }}
               className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-bold uppercase text-xs tracking-wider"
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