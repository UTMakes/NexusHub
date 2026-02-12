import React from 'react';
import { Zap, Search, ArrowDownUp } from 'lucide-react';

const Hero = ({ searchQuery, setSearchQuery, sortBy, setSortBy }) => (
  <div className="relative pt-24 pb-16 z-10 text-center">
    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
      <Zap className="w-3 h-3 fill-emerald-400" />
      <span>v4.0 Protocol Active</span>
    </div>
    
    <h1 className="text-6xl md:text-8xl font-black tracking-tightest text-white mb-8 leading-[0.9]">
      ENGINEERED <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 italic">
        EFFICIENCY.
      </span>
    </h1>

    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 p-2 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-2xl mt-12">
      <div className="relative group flex-grow">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-emerald-400" />
        <input
          type="text"
          className="block w-full pl-14 pr-4 py-4 bg-transparent border-none text-white focus:ring-0 text-lg font-medium"
          placeholder="Query repository..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="relative min-w-[180px] bg-[#0a101d] rounded-[1.5rem] border border-white/5">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="block w-full px-6 py-4 bg-transparent border-none text-emerald-400 text-sm font-bold uppercase tracking-widest focus:ring-0 cursor-pointer appearance-none"
        >
          <option value="popular">Popularity</option>
          <option value="alphabetical">A - Z</option>
        </select>
        <ArrowDownUp className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
      </div>
    </div>
  </div>
);

export default Hero;
