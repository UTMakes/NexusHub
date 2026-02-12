import React from 'react';
import { Box, Github } from 'lucide-react';

const Navbar = ({ onHome }) => (
  <nav className="sticky top-0 z-40 bg-[#080c14]/70 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
      <div className="flex items-center space-x-3 cursor-pointer group" onClick={onHome}>
        <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:rotate-6 transition-transform">
          <Box className="w-5 h-5 text-[#080c14]" />
        </div>
        <span className="text-xl font-black tracking-tighter text-white uppercase italic">
          Nexus<span className="text-emerald-400">Hub</span>
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-400">Library</a>
        <a href="#" className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-5 py-2.5 rounded-full">
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
