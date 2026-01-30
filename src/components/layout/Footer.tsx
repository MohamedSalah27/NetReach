import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050508] py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-row items-center justify-center gap-x-8 mb-10 flex-wrap gap-y-4">
          
          {/* Logo */}
          <div className="text-lg font-bold tracking-tighter text-white">
            Net<span className="text-purple-500">Reach</span>
          </div>

          <span className="h-1 w-1 rounded-full bg-slate-700" />

          {/* Terms */}
          <Link
            to="/terms"
            className="flex items-center gap-1.5 text-slate-500 hover:text-purple-400 transition-colors text-[10px] uppercase tracking-widest font-bold group"
          >
            <FileText className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            Terms & Conditions
          </Link>

          <span className="h-1 w-1 rounded-full bg-slate-700" />

          {/* Privacy */}
          <Link
            to="/privacy"
            className="flex items-center gap-1.5 text-slate-500 hover:text-purple-400 transition-colors text-[10px] uppercase tracking-widest font-bold group"
          >
            <Shield className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            Privacy Policy
          </Link>

          <span className="h-1 w-1 rounded-full bg-slate-700" />

          {/* Refund */}
          <Link
            to="/refund"
            className="flex items-center gap-1.5 text-slate-500 hover:text-purple-400 transition-colors text-[10px] uppercase tracking-widest font-bold group"
          >
            <RefreshCw className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                        Refund Policy

          </Link>

          <span className="h-1 w-1 rounded-full bg-slate-700" />

          {/* Copyright */}
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            © 2026 NetReach. All rights reserved.
          </p>
        </div>

        <div className="max-w-4xl mx-auto border-t border-white/5 pt-8">
          <p className="text-[10px] text-slate-700 text-center leading-relaxed font-medium">
            <span className="text-slate-500 mr-1">Compliance Protocol:</span>
            All outreach activities are executed through a decentralized node
            network within platform safety parameters. We do not utilize
            automated credential harvesting, API bypasses, or prohibited evasion
            assets. Our methodology prioritizes human-first communication
            patterns to maximize account longevity and maintain the highest
            standards of ethical engagement.
          </p>
        </div>
      </div>
    </footer>
  );
};
