import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Store', path: '/store' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#050508]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold tracking-tighter">
              Net<span className="text-purple-500">Reach</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive(link.path) ? 'text-white' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-white hover:text-purple-500 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {/* Overlay - تغطية الخلفية عند فتح المنيو */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#050508] border-l border-white/10 z-[70] transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close Button */}
          <div className="flex justify-end mb-12">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-black uppercase tracking-tighter transition-all ${
                  isActive(link.path) 
                    ? 'text-purple-500 translate-x-2' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-auto pt-10 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">
              Operational Infrastructure <br /> v2.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
};