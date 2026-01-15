import React from 'react';
import { Home, ShoppingBag, Compass, Fish, Book, Notebook } from 'lucide-react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'logbook', label: 'Logbook', icon: Notebook },
    { id: 'marketplace', label: 'Market', icon: ShoppingBag },
    { id: 'guide', label: 'Tactics', icon: Compass }, 
    { id: 'encyclopedia', label: 'Wiki', icon: Book },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-700 pb-safe z-40 md:sticky md:top-0 md:h-screen md:w-20 md:flex-col md:justify-start md:border-r md:border-t-0 md:bottom-auto">
      <div className="flex justify-around items-center h-16 md:flex-col md:h-full md:pt-8 md:gap-8">
        
        {/* Logo for Desktop */}
        <div className="hidden md:flex flex-col items-center mb-4 text-emerald-400">
           <Fish size={32} />
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id as ViewState)}
              className={`flex flex-col items-center justify-center w-full h-full md:h-auto md:w-full gap-1 transition-colors duration-200
                ${isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium md:text-xs">{item.label}</span>
              {isActive && (
                <div className="absolute top-0 h-0.5 w-8 bg-emerald-400 md:left-0 md:h-full md:w-1 md:top-0"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;