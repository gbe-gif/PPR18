import { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';

const characters = [
  { id: 'red', name: '레드 (R)', code: 'R', color: 'text-red-500', border: 'border-red-500', ring: 'ring-red-500' },
  { id: 'blue', name: '블루 (B)', code: 'B', color: 'text-blue-500', border: 'border-blue-500', ring: 'ring-blue-500' },
  { id: 'yellow', name: '옐로 (Y)', code: 'Y', color: 'text-yellow-400', border: 'border-yellow-400', ring: 'ring-yellow-400' },
  { id: 'green', name: '그린 (G)', code: 'G', color: 'text-green-500', border: 'border-green-500', ring: 'ring-green-500' },
  { id: 'black', name: '블랙 (K)', code: 'K', color: 'text-zinc-400', border: 'border-zinc-400', ring: 'ring-zinc-400' }
];

export default function Gallery() {
  const [activeChar, setActiveChar] = useState(characters[0]);
  const images = Array.from({ length: 19 }, (_, i) => i + 1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6 pb-8"
    >
      <header className="text-center space-y-3 mb-8">
        <h1 className="text-3xl font-display font-bold text-white tracking-widest">
          GALLERY
        </h1>
        <p className="text-slate-400 text-sm">기밀 수록 이미지 열람</p>
      </header>

      {/* Character Selector */}
      <div className="flex justify-center gap-2 flex-wrap mb-8">
        {characters.map(char => (
          <button
            key={char.id}
            onClick={() => setActiveChar(char)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
              activeChar.id === char.id 
                ? `bg-slate-800 ${char.color} ${char.border} ring-1 ${char.ring}` 
                : 'bg-slate-900/50 text-slate-500 border-slate-800 hover:text-slate-300'
            }`}
          >
            {char.name}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="columns-1 md:columns-2 gap-4">
        {images.map(num => (
          <div key={`${activeChar.code}-${num}`} className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group bg-slate-950/50 break-inside-avoid mb-4">
            <div className="absolute inset-0 flex items-center justify-center text-slate-800 pointer-events-none">
               <ImageIcon size={32} className="animate-pulse opacity-30" />
            </div>
            <img 
              src={`https://gbe88.uk/PPR/${activeChar.code}_${num}.webp`}
              alt={`${activeChar.name} ${num}`}
              className="w-full h-auto block relative z-10 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient overlay at bottom for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity z-20">
              #{num}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
