import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const SoftwareCard = ({ software, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative bg-[#0d1525]/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-emerald-500/40 transition-all duration-500 cursor-pointer overflow-hidden"
  >
    <div className="flex justify-between items-start mb-10">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all">
        {software.icon}
      </div>
      <div className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)] ${software.status === 'online' ? 'bg-emerald-400' : 'bg-teal-400'}`}></div>
    </div>
    
    <h3 className="text-xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors uppercase italic tracking-tighter">
      {software.name}
    </h3>
    
    <p className="text-slate-500 text-sm font-medium mb-8 line-clamp-2 leading-relaxed">
      {software.description}
    </p>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-500">
        <Star className="w-3.5 h-3.5" />
        <span>{software.stars}</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-[#080c14] transition-all">
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);

export default SoftwareCard;
