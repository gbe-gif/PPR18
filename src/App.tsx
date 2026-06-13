import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Shield, Users } from 'lucide-react';
import Worldview from './components/Worldview';
import Headquarters from './components/Headquarters';
import Roster from './components/Roster';
import { TabState } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabState>('worldview');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,65,85,0.1)_0,rgba(2,6,23,1)_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-6 pt-12 pb-32">
        <AnimatePresence mode="wait">
          {activeTab === 'worldview' && <Worldview key="worldview" />}
          {activeTab === 'hq' && <Headquarters key="hq" />}
          {activeTab === 'roster' && <Roster key="roster" />}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe pt-2 bg-slate-950/80 backdrop-blur-md border-t border-slate-800">
        <div className="max-w-md mx-auto flex justify-between items-center px-2 pb-2">
          {/* Worldview Tab */}
          <button
            onClick={() => setActiveTab('worldview')}
            className={`flex flex-col items-center p-3 w-20 transition-colors ${
              activeTab === 'worldview' ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Globe size={24} className={activeTab === 'worldview' ? 'drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : ''} />
            <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">World</span>
          </button>

          {/* Roster Tab (Center Prominent) */}
          <button
            onClick={() => setActiveTab('roster')}
            className="relative flex flex-col items-center -mt-6"
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 border-slate-950 transition-all ${
              activeTab === 'roster' 
                ? 'bg-gradient-to-br from-red-500 to-purple-600 shadow-[0_0_20px_rgba(239,68,68,0.5)] text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}>
              <Users size={28} />
            </div>
            <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${
              activeTab === 'roster' ? 'text-white' : 'text-slate-500'
            }`}>
              Roster
            </span>
          </button>

          {/* HQ Tab */}
          <button
            onClick={() => setActiveTab('hq')}
            className={`flex flex-col items-center p-3 w-20 transition-colors ${
              activeTab === 'hq' ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Shield size={24} className={activeTab === 'hq' ? 'drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : ''} />
            <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">HQ</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
