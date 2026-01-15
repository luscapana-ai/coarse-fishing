import React, { useState } from 'react';
import { generateTactic } from '../services/geminiService';
import { Compass, Target, Waves, CloudSun, Calendar, ArrowRight, Loader2, RefreshCw, Layers } from 'lucide-react';

const AIGuide: React.FC = () => {
  const [formData, setFormData] = useState({
    species: 'Common Carp',
    waterType: 'Commercial Lake',
    season: 'Autumn',
    conditions: 'Overcast & Mild',
    availableBaits: ''
  });
  
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    const response = await generateTactic(
      formData.species, 
      formData.waterType, 
      formData.season, 
      formData.conditions,
      formData.availableBaits
    );
    setResult(response);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-screen bg-slate-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-slate-900 p-6 shadow-md">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-500 rounded-lg">
                <Compass className="text-white" size={24} />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-white">Tactics Planner</h1>
                <p className="text-sm text-emerald-400">Expert strategies for any venue.</p>
            </div>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Input Form */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
               <Target size={20} className="text-emerald-600"/>
               Session Details
             </h2>
             <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Target Species</label>
                   <select 
                     className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                     value={formData.species}
                     onChange={e => setFormData({...formData, species: e.target.value})}
                   >
                     {['Common Carp', 'Mirror Carp', 'F1 Carp', 'Tench', 'Bream', 'Roach', 'Rudd', 'Perch', 'Pike', 'Barbel', 'Chub'].map(s => (
                       <option key={s} value={s}>{s}</option>
                     ))}
                   </select>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Venue Type</label>
                   <div className="relative">
                     <Waves size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                     <select 
                       className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                       value={formData.waterType}
                       onChange={e => setFormData({...formData, waterType: e.target.value})}
                     >
                       <option>Commercial Lake</option>
                       <option>Specimen Lake (Gravel Pit)</option>
                       <option>Estate Lake</option>
                       <option>Canal</option>
                       <option>Slow River</option>
                       <option>Fast River</option>
                     </select>
                   </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Season</label>
                   <div className="relative">
                     <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                     <select 
                       className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                       value={formData.season}
                       onChange={e => setFormData({...formData, season: e.target.value})}
                     >
                       <option>Spring</option>
                       <option>Summer</option>
                       <option>Autumn</option>
                       <option>Winter</option>
                     </select>
                   </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Conditions</label>
                   <div className="relative">
                     <CloudSun size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                     <select 
                       className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                       value={formData.conditions}
                       onChange={e => setFormData({...formData, conditions: e.target.value})}
                     >
                       <option>Sunny & Hot</option>
                       <option>Overcast & Mild</option>
                       <option>Rainy & Low Pressure</option>
                       <option>Cold & Frosty</option>
                       <option>Windy</option>
                     </select>
                   </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Available Bait (Optional)</label>
                   <div className="relative">
                     <Layers size={16} className="absolute left-3 top-3 text-slate-400" />
                     <textarea 
                       className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                       rows={2}
                       placeholder="e.g. Corn, Bread, 2mm Pellets..."
                       value={formData.availableBaits}
                       onChange={e => setFormData({...formData, availableBaits: e.target.value})}
                     />
                   </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Compass size={20} />}
                  Generate Plan
                </button>
             </form>
           </div>
        </div>

        {/* Result Area */}
        <div className="lg:col-span-8">
           {isLoading && (
             <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center animate-pulse">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Compass className="text-emerald-600 animate-spin" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Analyzing Conditions...</h3>
                <p className="text-slate-500 max-w-sm">RiverKeeper is formulating the best approach for {formData.species} in {formData.season.toLowerCase()}.</p>
             </div>
           )}

           {!isLoading && !result && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white/50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
                 <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                    <ArrowRight size={32} />
                 </div>
                 <h3 className="text-lg font-bold text-slate-700">Ready to Plan</h3>
                 <p className="text-slate-500">Select your session details on the left to generate a bespoke tactical guide.</p>
              </div>
           )}

           {!isLoading && result && (
             <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
               <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
                 <div className="flex items-center gap-2">
                   <Target size={20} className="text-emerald-200"/>
                   <span className="font-bold tracking-wide">MISSION PROFILE: {formData.species.toUpperCase()}</span>
                 </div>
                 <button onClick={handleSubmit} className="text-emerald-100 hover:text-white transition-colors" title="Regenerate">
                    <RefreshCw size={18} />
                 </button>
               </div>
               <div className="p-8 prose prose-slate prose-headings:text-emerald-800 prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600 max-w-none">
                  {/* Simple Markdown Rendering */}
                  {result.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return <h2 key={i} className="text-xl mt-6 mb-3 pb-2 border-b border-slate-100">{line.replace('## ', '')}</h2>
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={i} className="text-lg mt-4 mb-2">{line.replace('### ', '')}</h3>
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                       return <p key={i} className="font-bold my-2">{line.replace(/\*\*/g, '')}</p>
                    }
                    if (line.startsWith('- ')) {
                      return <li key={i} className="ml-4 list-disc marker:text-emerald-500">{line.replace('- ', '')}</li>
                    }
                    if (line.trim() === '') {
                      return <br key={i}/>
                    }
                    // Handle bolding within text simply
                    const parts = line.split('**');
                    if (parts.length > 1) {
                        return (
                            <p key={i} className="my-2 leading-relaxed">
                                {parts.map((part, index) => 
                                    index % 2 === 1 ? <span key={index} className="font-bold text-slate-800">{part}</span> : part
                                )}
                            </p>
                        )
                    }
                    return <p key={i} className="my-2 leading-relaxed">{line}</p>
                  })}
               </div>
               <div className="bg-slate-50 p-4 border-t border-slate-100 text-center text-xs text-slate-400">
                  Generated by RiverKeeper AI based on provided conditions. Always adapt to the day.
               </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default AIGuide;