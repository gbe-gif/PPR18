import { motion } from 'motion/react';
import { rosterData } from '../data';
import { User, Activity, Flame, Shield, Star, Zap, Home } from 'lucide-react';
import { RangerInfo } from '../types';

function CharacterCard({ ranger, index }: { ranger: RangerInfo; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className={`relative w-full rounded-2xl border bg-slate-900/80 backdrop-blur-sm overflow-hidden ${ranger.borderColor} shadow-lg ${ranger.shadowColor} mb-10 flex flex-col`}
    >
      {/* Glow highlight top line */}
      <div className={`absolute top-0 left-0 w-full h-1 z-10 ${ranger.bgColor}`} />
      
      {/* Top Profile Section: Image + Basic Info */}
      <div className="flex flex-col md:flex-row border-b border-slate-800/80 bg-slate-950/30">
        {/* Left Image Section */}
        {ranger.imageUrl && (
          <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-950/50 relative">
            <img 
              src={ranger.imageUrl} 
              alt={ranger.role} 
              className="w-full h-full aspect-[2/3] object-cover object-top" 
              referrerPolicy="no-referrer" 
            />
            {/* Gradient overlay on mobile for softer bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/90 to-transparent md:hidden pointer-events-none" />
          </div>
        )}

        {/* Right Content Section (Basic Info) */}
        <div className="p-6 md:p-8 space-y-6 flex-1 min-w-0">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <div className={`text-xs font-display font-medium tracking-[0.2em] mb-1 uppercase ${ranger.textColor}`}>
                PPR Agent
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-2">{ranger.role}</h2>
              <div className="inline-flex items-center px-2 py-1 rounded bg-slate-800 text-slate-300 text-sm border border-slate-700/50">
                <User size={14} className="mr-2 opacity-70" /> 본명: {ranger.realName}
              </div>
            </div>
            <div className={`hidden md:flex w-12 h-12 rounded-full border border-slate-700 items-center justify-center bg-slate-900/50 shadow-inner`}>
              <Star size={20} className={ranger.textColor} />
            </div>
          </div>

          {/* Basic Info Tags */}
          <div className="flex flex-wrap gap-2 text-sm">
            {ranger.basicInfo.split(' / ').map((info, idx) => (
              <span key={idx} className="bg-slate-800/60 px-3 py-1.5 rounded-md text-slate-200 border border-slate-700/50 shadow-sm">
                {info}
              </span>
            ))}
          </div>

          {/* Appearance */}
          <div className="space-y-4 pt-4 border-t border-slate-800/50">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
                <User size={16} className={ranger.textColor} /> 외형 및 복장
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line">{ranger.appearance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Main Content Section (Full-width text) */}
      <div className="p-6 md:p-8 space-y-6 divide-y divide-slate-800/50">
        
        {/* Personality */}
        <div className={`bg-slate-950/60 p-5 rounded-xl border border-slate-800/60`}>
          <h3 className="text-sm font-semibold text-pink-400/90 mb-2 flex items-center gap-2">
            <Flame size={16} /> 성격 및 성적 성향
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line">{ranger.personality}</p>
        </div>

        {/* Ability */}
        <div className={`pt-6`}>
          <div className={`p-5 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${ranger.bgColor} opacity-5 blur-2xl rounded-full`} />
            <h3 className={`text-lg font-display font-bold mb-3 flex items-center gap-2 ${ranger.textColor}`}>
              <Zap size={20} /> {ranger.ability.name}
            </h3>
            <p className="text-slate-300 mb-4 whitespace-pre-line">{ranger.ability.description}</p>
            
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="text-slate-500 font-medium flex-shrink-0">일상 활용:</span>
                <span className="text-slate-300 whitespace-pre-line">{ranger.ability.daily}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-slate-500 font-medium flex-shrink-0">전투 필살기:</span>
                <span className="text-slate-100 font-medium whitespace-pre-line">{ranger.ability.ultimate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Traits & Room */}
        <div className="space-y-5 pt-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
              <Activity size={16} className={ranger.textColor} /> 특징 및 취향
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">{ranger.traits}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
              <Home size={16} className={ranger.textColor} /> 개인실 구역
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">{ranger.room}</p>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

export default function Roster() {
  return (
    <div className="space-y-4 pb-8">
      <header className="text-center space-y-3 mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">
          PPR ROSTER
        </h1>
        <p className="text-slate-400 text-sm md:text-base">지구방위대 대원 명부</p>
      </header>

      <div className="flex flex-col items-center">
        {rosterData.map((ranger, idx) => (
          <CharacterCard key={ranger.id} ranger={ranger} index={idx} />
        ))}
      </div>
    </div>
  );
}
