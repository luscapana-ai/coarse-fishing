import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Marketplace from './components/Marketplace';
import AIGuide from './components/AIGuide';
import Encyclopedia from './components/Encyclopedia';
import CatchLog from './components/CatchLog';
import ExpertChat from './components/ExpertChat';
import { ViewState } from './types';
import { Cloud, Sunrise, Wind, Map, ChevronRight, Droplets, Compass, Book, MessageCircle, HelpCircle, Trophy, CheckCircle2, XCircle, Newspaper, ExternalLink } from 'lucide-react';

// Trivia Data
const TRIVIA_QUESTIONS = [
    {
        question: "Which species is known as the 'Doctor Fish'?",
        options: ["Roach", "Tench", "Barbel", "Perch"],
        correct: 1, // Index
        explanation: "Tench are known as the Doctor Fish because their slime was historically believed to heal other fish."
    },
    {
        question: "What is the legal closed season for rivers in England?",
        options: ["Jan 1 - Mar 31", "Mar 15 - Jun 15", "Apr 1 - Jul 1", "No closed season"],
        correct: 1,
        explanation: "The closed season on rivers runs from March 15th to June 15th inclusive."
    },
    {
        question: "What is the best knot for tying a hair rig?",
        options: ["Blood Knot", "Grinner Knot", "Knotless Knot", "Palomar Knot"],
        correct: 2,
        explanation: "The Knotless Knot is designed specifically to align the hook perfectly for a hair rig."
    },
    {
        question: "Which of these is a surface fishing bait?",
        options: ["Boilie", "Sweetcorn", "Floating Dog Biscuit", "Hemp"],
        correct: 2,
        explanation: "Floating dog biscuits (mixers) are a classic bait for catching carp off the surface."
    }
];

const MOCK_NEWS = [
    {
        id: 1,
        title: "Record Breaking 68lb Carp Landed at Wraysbury",
        category: "Catch Report",
        date: "2h ago",
        image: "https://picsum.photos/100/100?random=20"
    },
    {
        id: 2,
        title: "EA Stocks 5,000 Barbel into River Trent",
        category: "Conservation",
        date: "1d ago",
        image: "https://picsum.photos/100/100?random=21"
    },
    {
        id: 3,
        title: "New 'Smart Float' Technology Hits Shelves",
        category: "Gear",
        date: "2d ago",
        image: "https://picsum.photos/100/100?random=22"
    },
    {
        id: 4,
        title: "Angling Trust Announces New Youth Initiative",
        category: "Community",
        date: "3d ago",
        image: "https://picsum.photos/100/100?random=23"
    }
];

const NewsWidget: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all md:col-span-1 lg:col-span-1 lg:row-span-2 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-2">
                    <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                        <Newspaper size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800">Bankside News</h3>
                </div>
                <button className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1">
                    View All <ExternalLink size={10} />
                </button>
            </div>
            <div className="space-y-6 flex-1 overflow-hidden">
                {MOCK_NEWS.map(news => (
                    <div key={news.id} className="flex gap-4 group cursor-pointer border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                        <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 relative">
                            <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={news.title} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full whitespace-nowrap">{news.category}</span>
                                <span className="text-[10px] text-slate-400 whitespace-nowrap">{news.date}</span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">{news.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                <button className="text-xs font-medium text-slate-400 hover:text-emerald-600 transition-colors w-full">
                    Subscribe to Daily Briefing
                </button>
            </div>
        </div>
    )
}

const TriviaWidget: React.FC = () => {
    const [qIndex, setQIndex] = useState(() => Math.floor(Math.random() * TRIVIA_QUESTIONS.length));
    const [selected, setSelected] = useState<number | null>(null);
    const [revealed, setRevealed] = useState(false);

    const question = TRIVIA_QUESTIONS[qIndex];

    const handleSelect = (idx: number) => {
        if (revealed) return;
        setSelected(idx);
        setRevealed(true);
    };

    const nextQuestion = (e: React.MouseEvent) => {
        e.stopPropagation();
        setRevealed(false);
        setSelected(null);
        setQIndex((prev) => (prev + 1) % TRIVIA_QUESTIONS.length);
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 bg-indigo-50 rounded-full -mr-10 -mt-10 group-hover:bg-indigo-100 transition-colors"></div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                        <HelpCircle size={20} />
                    </div>
                    <h3 className="font-bold text-slate-800">Daily Trivia</h3>
                </div>

                <p className="text-slate-700 font-medium mb-4 min-h-[3rem]">{question.question}</p>

                <div className="space-y-2">
                    {question.options.map((opt, idx) => {
                        let btnClass = "w-full text-left p-3 rounded-xl text-sm font-medium transition-all border ";
                        if (!revealed) {
                            btnClass += "bg-slate-50 border-slate-100 hover:bg-slate-100 text-slate-600";
                        } else {
                            if (idx === question.correct) {
                                btnClass += "bg-emerald-100 border-emerald-200 text-emerald-800";
                            } else if (idx === selected && idx !== question.correct) {
                                btnClass += "bg-red-50 border-red-200 text-red-800";
                            } else {
                                btnClass += "opacity-50 bg-slate-50 border-slate-100";
                            }
                        }

                        return (
                            <button 
                                key={idx}
                                onClick={() => handleSelect(idx)}
                                className={btnClass}
                            >
                                <div className="flex justify-between items-center">
                                    <span>{opt}</span>
                                    {revealed && idx === question.correct && <CheckCircle2 size={16} />}
                                    {revealed && idx === selected && idx !== question.correct && <XCircle size={16} />}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {revealed && (
                    <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
                        <p className="text-xs text-slate-500 mb-3">{question.explanation}</p>
                        <button 
                            onClick={nextQuestion}
                            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                        >
                            Next Question <ChevronRight size={12} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const Dashboard: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen pb-24 md:pb-8 bg-slate-50">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Good Morning, <span className="text-emerald-600">Angler</span>
        </h1>
        <p className="text-slate-500 mt-2">Conditions look prime for a bite today.</p>
      </header>

      {/* Weather Widget (Mock) */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-6 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-100 mb-1">
              <Map size={16} />
              <span className="text-sm font-medium">Local Waters (Mocked)</span>
            </div>
            <div className="text-5xl font-bold mb-2">14°C</div>
            <div className="flex items-center gap-2">
              <Cloud size={20} />
              <span className="font-medium">Overcast & Mild</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8 w-full md:w-auto bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <div className="text-center">
              <div className="flex justify-center mb-1 text-emerald-200"><Wind size={20} /></div>
              <div className="font-bold">8mph</div>
              <div className="text-xs text-emerald-200">SW</div>
            </div>
            <div className="text-center border-l border-white/10 border-r">
              <div className="flex justify-center mb-1 text-emerald-200"><Droplets size={20} /></div>
              <div className="font-bold">1008mb</div>
              <div className="text-xs text-emerald-200">Pressure</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-1 text-emerald-200"><Sunrise size={20} /></div>
              <div className="font-bold">06:12</div>
              <div className="text-xs text-emerald-200">Sunrise</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Tactics Guide Teaser */}
        <div 
           onClick={() => setView('guide')}
           className="bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden md:col-span-2 lg:col-span-1"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
           <div className="flex justify-between items-center mb-4 relative z-10">
            <h2 className="text-xl font-bold text-white">Tactics Guide</h2>
             <ChevronRight className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
          </div>
          <p className="text-slate-400 text-sm mb-4 relative z-10">
            Targeting a specific species? Get a bespoke tactical plan for your venue and conditions.
          </p>
          <button className="w-full py-2 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-500 transition-colors relative z-10 flex items-center justify-center gap-2">
            <Compass size={16} />
            Plan Session
          </button>
        </div>
        
        {/* News Widget - Added here */}
        <NewsWidget />

        {/* Catch Log Teaser */}
        <div 
          onClick={() => setView('logbook')}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-800">Your Logbook</h2>
            <ChevronRight className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
          </div>
          <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                  <Trophy size={24} />
              </div>
              <div>
                  <div className="text-sm text-slate-500">Recent Catch</div>
                  <div className="font-bold text-slate-900">18lb 4oz Common</div>
              </div>
          </div>
          <p className="text-slate-500 text-xs">Track your PBs and analyze success patterns.</p>
        </div>

        {/* Trivia Widget */}
        <TriviaWidget />

        {/* Encyclopedia Teaser */}
        <div 
          onClick={() => setView('encyclopedia')}
          className="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-amber-900">Almanac</h2>
            <ChevronRight className="text-amber-300 group-hover:text-amber-600 transition-colors" />
          </div>
          <p className="text-amber-800 text-sm mb-4">
            Browse the comprehensive guide to species, rigs, and techniques.
          </p>
          <div className="flex items-center gap-2 text-amber-700 font-medium text-sm">
             <Book size={16} />
             <span>Search Guide</span>
          </div>
        </div>

        {/* Marketplace Teaser */}
        <div 
          onClick={() => setView('marketplace')}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-800">Marketplace</h2>
            <ChevronRight className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
          </div>
          <div className="space-y-3">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden">
                    <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="font-medium text-slate-900">Daiwa Whisker Rod</div>
                    <div className="text-sm text-emerald-600 font-bold">£85.00</div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('dashboard');
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation currentView={view} setView={setView} />
      <main className="flex-1 overflow-y-auto h-screen md:ml-0 relative">
        {view === 'dashboard' && <Dashboard setView={setView} />}
        {view === 'logbook' && <CatchLog />}
        {view === 'marketplace' && <Marketplace />}
        {view === 'guide' && <AIGuide />}
        {view === 'encyclopedia' && <Encyclopedia />}

        {/* Global Chat Floating Action Button */}
        <button
            onClick={() => setShowChat(true)}
            className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-40 group animate-in zoom-in duration-300"
        >
            <MessageCircle size={28} />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Ask RiverKeeper
            </span>
        </button>

        {/* Chat Modal Overlay */}
        {showChat && (
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-0 md:p-6 animate-in fade-in duration-200">
                <div className="bg-white w-full h-full md:w-[500px] md:h-[700px] md:rounded-2xl shadow-2xl overflow-hidden relative">
                    <ExpertChat onClose={() => setShowChat(false)} />
                </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default App;