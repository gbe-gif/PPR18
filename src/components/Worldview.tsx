import { motion } from 'motion/react';
import { Shield, Sparkles, AlertTriangle } from 'lucide-react';
import { worldviewData } from '../data';

export default function Worldview() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8 pb-8"
    >
      <header className="text-center space-y-3 mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          PPR UNIVERSE
        </h1>
        <p className="text-slate-400 text-sm md:text-base">Polypeptide Ranger 세계관 안내</p>
      </header>

      {/* Background Section */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles size={64} />
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Sparkles className="text-blue-400" size={24} />
          </div>
          <h2 className="text-xl font-display font-semibold text-blue-100">{worldviewData.era.title}</h2>
        </div>
        <ul className="space-y-4">
          {worldviewData.era.items.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-slate-300 leading-relaxed">
              <span className="text-blue-500/50 mt-1">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Alien Rules Section */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <AlertTriangle size={64} />
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-yellow-500/10 rounded-lg">
            <AlertTriangle className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-xl font-display font-semibold text-yellow-100">{worldviewData.alienRules.title}</h2>
        </div>
        <ul className="space-y-4">
          {worldviewData.alienRules.items.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-slate-300 leading-relaxed">
              <span className="text-yellow-500/50 mt-1">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* PPR Rules Section */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Shield size={64} />
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <Shield className="text-purple-400" size={24} />
          </div>
          <h2 className="text-xl font-display font-semibold text-purple-100">{worldviewData.pprRules.title}</h2>
        </div>
        <ul className="space-y-4">
          {worldviewData.pprRules.items.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-slate-300 leading-relaxed">
              <span className="text-purple-500/50 mt-1">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}
