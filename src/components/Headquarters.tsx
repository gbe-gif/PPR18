import { motion } from 'motion/react';
import { hqData } from '../data';
import { Home, Layers, MapPin, AlertCircle } from 'lucide-react';

export default function Headquarters() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="space-y-8 pb-8"
    >
      <header className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-slate-800/50 rounded-full mb-2">
          <Home size={32} className="text-slate-300" />
        </div>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest">
          HQ <span className="text-slate-500 font-light">| 보안 구역</span>
        </h1>
        <p className="text-slate-400 text-sm">{hqData.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hqData.levels.map((level, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-slate-900 border border-slate-700/50 rounded-xl p-5 hover:border-slate-500 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg font-display font-bold text-slate-300">
                {level.floor}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-1 flex items-center gap-2">
                  <Layers size={16} className="text-slate-500" />
                  {level.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {level.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 bg-red-950/30 border border-red-900/50 rounded-xl p-4 flex gap-3 items-start">
        <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-red-400 font-semibold mb-1">보안 수칙</h4>
          <p className="text-sm text-red-200/70 leading-relaxed">
            {hqData.notice}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
