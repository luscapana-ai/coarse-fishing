import React, { useState, useMemo } from 'react';
import { Catch } from '../types';
import { Camera, MapPin, Scale, Calendar, Plus, X, User, Trophy, TrendingUp, Fish, Star } from 'lucide-react';
import { identifyFishFromImage } from '../services/geminiService';

const MOCK_CATCHES: Catch[] = [
  {
    id: '1',
    species: 'Common Carp',
    weightLb: 18,
    weightOz: 4,
    location: 'Willow Lake, Peg 7',
    date: '2023-09-15',
    notes: 'Caught on spicy sausage boilie, margins.',
    imageUrl: 'https://picsum.photos/400/300?random=10'
  },
  {
    id: '2',
    species: 'Tench',
    weightLb: 6,
    weightOz: 2,
    location: 'Grand Union Canal',
    date: '2023-08-10',
    notes: 'Classic float tactics with corn.',
    imageUrl: 'https://picsum.photos/400/300?random=11'
  },
  {
    id: '3',
    species: 'Barbel',
    weightLb: 9,
    weightOz: 11,
    location: 'River Trent',
    date: '2023-10-02',
    notes: 'Running ledger rig with halibut pellet.',
    imageUrl: 'https://picsum.photos/400/300?random=12'
  }
];

const CatchLog: React.FC = () => {
  const [catches, setCatches] = useState<Catch[]>(MOCK_CATCHES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCatch, setNewCatch] = useState<Partial<Catch>>({
    species: '',
    weightLb: 0,
    weightOz: 0,
    location: '',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });
  
  // Image handling
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isIdentifying, setIsIdentifying] = useState(false);

  // Stats Calculation
  const stats = useMemo(() => {
    if (catches.length === 0) return { total: 0, pb: null, favoriteSpecies: 'N/A', totalWeightOz: 0 };
    
    let maxWeightOz = -1;
    let pbCatch = null;
    let totalWeightOz = 0;
    const speciesCount: Record<string, number> = {};

    catches.forEach(c => {
        const wOz = (c.weightLb * 16) + c.weightOz;
        totalWeightOz += wOz;
        
        // Check PB
        if (wOz > maxWeightOz) {
            maxWeightOz = wOz;
            pbCatch = c;
        }

        // Count Species
        speciesCount[c.species] = (speciesCount[c.species] || 0) + 1;
    });

    const favoriteSpecies = Object.entries(speciesCount).sort((a,b) => b[1] - a[1])[0][0];

    return {
        total: catches.length,
        pb: pbCatch,
        favoriteSpecies,
        totalWeightOz
    };
  }, [catches]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        
        setIsIdentifying(true);
        const base64Data = base64String.split(',')[1];
        const identification = await identifyFishFromImage(base64Data);
        setNewCatch(prev => ({ 
             ...prev, 
             notes: (prev.notes ? prev.notes + '\n\n' : '') + `AI ID: ${identification}` 
        }));
        setIsIdentifying(false);
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const catchEntry: Catch = {
      id: Date.now().toString(),
      species: newCatch.species || 'Unknown',
      weightLb: newCatch.weightLb || 0,
      weightOz: newCatch.weightOz || 0,
      location: newCatch.location || 'Unknown',
      date: newCatch.date || '',
      notes: newCatch.notes || '',
      imageUrl: imagePreview || `https://picsum.photos/400/300?random=${Date.now()}`
    };
    setCatches([catchEntry, ...catches]);
    setShowAddModal(false);
    setNewCatch({ species: '', weightLb: 0, weightOz: 0, location: '', date: new Date().toISOString().split('T')[0], notes: '' });
    setImagePreview(null);
  };

  return (
    <div className="p-4 pb-24 md:pb-4 md:p-8 max-w-5xl mx-auto min-h-screen bg-slate-50">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Catch Logbook</h1>
          <p className="text-slate-500">Track your personal bests and memories.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm"
        >
          <Plus size={20} />
          Log Catch
        </button>
      </div>

      {/* Profile & Stats Dashboard */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8 relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* User Avatar Area */}
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-lg flex items-center justify-center text-slate-300 mb-3">
                    <User size={48} />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-900">John Fisher</h2>
                    <p className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full inline-block">Pro Member</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="flex justify-center text-emerald-600 mb-2"><Fish size={20} /></div>
                    <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Catches</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="flex justify-center text-amber-500 mb-2"><Trophy size={20} /></div>
                    <div className="text-2xl font-bold text-slate-900">
                        {stats.pb ? (
                            <span className="flex items-baseline justify-center gap-0.5">
                                {stats.pb.weightLb}<span className="text-xs font-normal text-slate-400">lb</span>
                                {stats.pb.weightOz}<span className="text-xs font-normal text-slate-400">oz</span>
                            </span>
                        ) : '-'}
                    </div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Best Catch</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 hover:border-emerald-200 transition-colors">
                     <div className="flex justify-center text-blue-500 mb-2"><TrendingUp size={20} /></div>
                    <div className="text-2xl font-bold text-slate-900">{stats.favoriteSpecies}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top Species</div>
                </div>

                 <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 hover:border-emerald-200 transition-colors">
                     <div className="flex justify-center text-purple-500 mb-2"><Star size={20} /></div>
                    <div className="text-2xl font-bold text-slate-900">
                        {Math.floor(stats.totalWeightOz / 16)}<span className="text-sm text-slate-400 font-normal">lb</span>
                    </div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Weight</div>
                </div>
            </div>
        </div>
      </div>

      {/* Catch List */}
      <div className="space-y-4">
        {catches.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
            <div className="w-full md:w-48 h-48 md:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 relative group">
              <img src={c.imageUrl} alt={c.species} className="w-full h-full object-cover" />
              {c === stats.pb && (
                  <div className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Trophy size={10} /> PB
                  </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-slate-800">{c.species}</h3>
                <span className="text-sm text-slate-400 flex items-center gap-1">
                  <Calendar size={14} />
                  {c.date}
                </span>
              </div>
              
              <div className="flex gap-4 mt-2 mb-3">
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full text-sm">
                  <Scale size={16} />
                  {c.weightLb}lb {c.weightOz}oz
                </span>
                <span className="inline-flex items-center gap-1 text-slate-600 text-sm">
                  <MapPin size={16} />
                  {c.location}
                </span>
              </div>
              
              <p className="text-slate-600 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                "{c.notes}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-slate-900">Log a New Catch</h2>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Image Upload Area */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">Photo</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors relative">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="h-48 w-full object-cover rounded-lg mx-auto" />
                  ) : (
                    <div className="flex flex-col items-center py-4 text-slate-400">
                       <Camera size={32} className="mb-2" />
                       <span className="text-sm">Tap to upload photo</span>
                    </div>
                  )}
                  {isIdentifying && (
                      <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <span className="text-emerald-600 font-bold animate-pulse">Analyzing Catch...</span>
                      </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Species</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={newCatch.species}
                  onChange={e => setNewCatch({...newCatch, species: e.target.value})}
                  placeholder="e.g. Mirror Carp"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Weight (lb)</label>
                  <input 
                    type="number" 
                    className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={newCatch.weightLb}
                    onChange={e => setNewCatch({...newCatch, weightLb: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Weight (oz)</label>
                  <input 
                    type="number" 
                    max="15"
                    className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={newCatch.weightOz}
                    onChange={e => setNewCatch({...newCatch, weightOz: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={newCatch.location}
                  onChange={e => setNewCatch({...newCatch, location: e.target.value})}
                  placeholder="e.g. Bluebell Lakes"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
                <textarea 
                  className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  rows={3}
                  value={newCatch.notes}
                  onChange={e => setNewCatch({...newCatch, notes: e.target.value})}
                  placeholder="Weather, bait, rig details..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-[0.98]"
              >
                Save Catch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatchLog;