import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, AlertTriangle, Home, Layers, AlertCircle, X, Sparkles as SparklesIcon, RefreshCw, Copy, Check } from 'lucide-react';
import { worldviewData, hqData } from '../data';
import { personaCategories, personaDB, PersonaCategory, randomPersonas } from '../personaData';

export default function Worldview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [lastSelectedCategory, setLastSelectedCategory] = useState<string | null>(null);
  const [hasCopied, setHasCopied] = useState(false);

  const handlePickPersona = (categoryId: string) => {
    let pool: string[] = [];
    
    if (categoryId === 'random') {
      pool = randomPersonas;
    } else {
      pool = personaDB[categoryId as PersonaCategory];
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    setSelectedPersona(pool[randomIndex]);
    setLastSelectedCategory(categoryId);
    setHasCopied(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPersona(null);
      setLastSelectedCategory(null);
      setHasCopied(false);
    }, 300);
  };

  const copyToClipboard = () => {
    if (selectedPersona) {
      navigator.clipboard.writeText(selectedPersona);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8 pb-8"
    >
      <header className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          PPR UNIVERSE
        </h1>

        {/* Persona Random Recommender Button */}
        <div className="relative group inline-block mx-auto mt-2">
          {/* Glowing/Blinking border effect via blurred pseudo-element */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-full blur-md opacity-70 group-hover:opacity-100 animate-pulse transition duration-500"></div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="relative px-6 py-2.5 bg-slate-950 rounded-full leading-none flex items-center justify-center border border-slate-700 hover:bg-slate-900 transition-colors"
          >
            <SparklesIcon size={16} className="text-yellow-300 mr-2 animate-pulse" />
            <span className="text-sm font-display font-bold text-slate-100 tracking-wide">
              [페르소나 랜덤 추천기]
            </span>
            <SparklesIcon size={16} className="text-cyan-300 ml-2 animate-pulse" />
          </button>
        </div>

        <p className="text-slate-400 text-sm md:text-base mt-4">Polypeptide Ranger 세계관 안내</p>
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

      {/* Headquarters Section */}
      <div className="pt-12 space-y-8">
        <header className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-slate-800/50 rounded-full mb-2">
            <Home size={32} className="text-slate-300" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest">
            HQ <span className="text-slate-500 font-light">| 보안 구역</span>
          </h2>
          <p className="text-slate-400 text-sm">{hqData.description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hqData.levels.map((level, idx) => (
            <div 
              key={idx}
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
            </div>
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
      </div>

      {/* Persona Recommender Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative flex flex-col"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50">
                <h3 className="text-lg font-display font-bold text-slate-100 flex items-center gap-2">
                  <SparklesIcon size={18} className="text-purple-400" />
                  페르소나 추천기
                </h3>
                <button onClick={closeModal} className="text-slate-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {!selectedPersona ? (
                  <div className="space-y-4">
                    <p className="text-slate-300 text-sm mb-6 text-center leading-relaxed">
                      원하는 테마를 선택하면<br/>시스템이 랜덤으로 페르소나를 추천합니다.
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {personaCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => handlePickPersona(cat.buttonId)}
                          className={`relative group overflow-hidden rounded-xl border border-slate-700 p-4 transition-all hover:border-slate-500`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${cat.colors} opacity-10 group-hover:opacity-20 transition-opacity`} />
                          <div className="relative flex justify-center items-center font-bold text-slate-50 text-base tracking-wide">
                            {cat.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-4"
                  >
                    <div className="mb-2 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-400 border border-slate-700">
                      {personaCategories.find(c => c.buttonId === lastSelectedCategory)?.label}
                    </div>
                    
                    <div className="bg-slate-950/80 border border-slate-700/50 rounded-xl p-6 w-full my-6 text-left shadow-inner relative overflow-hidden max-h-[60vh] overflow-y-auto">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
                      <p className="text-sm md:text-base text-white font-medium leading-relaxed whitespace-pre-line">
                        {selectedPersona}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                      <button 
                        onClick={copyToClipboard}
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-medium text-sm ${
                          hasCopied 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-purple-500/20'
                        }`}
                      >
                        {hasCopied ? <Check size={18} /> : <Copy size={18} />}
                        {hasCopied ? '복사 완료!' : '선택 (클립보드 복사)'}
                      </button>
                      <div className="flex gap-3 w-full">
                        <button 
                          onClick={() => handlePickPersona(lastSelectedCategory!)}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-medium text-sm"
                        >
                          <RefreshCw size={16} /> 다시 뽑기
                        </button>
                        <button 
                          onClick={() => setSelectedPersona(null)}
                          className="flex-1 py-2.5 bg-slate-950 border border-slate-700 hover:bg-slate-900 text-slate-300 rounded-xl transition-colors font-medium text-sm"
                        >
                          목록으로
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
