import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

const DetailModal = ({ software, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(software.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#080c14]/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-[#0d1525] border border-white/10 rounded-[2.5rem] w-full max-w-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        <div className="p-10 border-b border-white/5">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">{software.name}</h2>
            <button onClick={onClose} className="p-3 bg-white/5 rounded-2xl"><X className="w-6 h-6" /></button>
          </div>
        </div>
        <div className="p-10 overflow-y-auto">
          <p className="text-slate-400 text-lg mb-10 italic">"{software.description}"</p>
          <div className="bg-black/40 border border-white/10 rounded-2xl p-5 flex items-center justify-between">
            <code className="text-emerald-400 font-mono text-sm"># {software.command}</code>
            <button 
              onClick={handleCopy}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${copied ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
