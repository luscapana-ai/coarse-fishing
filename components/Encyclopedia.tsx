import React, { useState } from 'react';
import { getEncyclopediaEntry } from '../services/geminiService';
import { STATIC_ARTICLES, StaticArticle, Category } from '../data/encyclopediaData';
import { Book, Search, ArrowRight, Loader2, Sparkles, Fish, Anchor, Layers, Map, ChevronLeft, Calendar, WifiOff, Library, Shield } from 'lucide-react';

const CATEGORIES: { name: Category; icon: any; color: string; query: string }[] = [
  { name: 'Guides & Care', icon: Shield, color: 'bg-indigo-100 text-indigo-600', query: 'Coarse Fishing Rules and Care Guide' },
  { name: 'Fish Species', icon: Fish, color: 'bg-blue-100 text-blue-600', query: 'Guide to UK Coarse Fish Species' },
  { name: 'Rigs & Knots', icon: Anchor, color: 'bg-orange-100 text-orange-600', query: 'Encyclopedia of Coarse Fishing Rigs and Knots' },
  { name: 'Bait Library', icon: Layers, color: 'bg-pink-100 text-pink-600', query: 'Comprehensive Guide to Coarse Fishing Baits' },
  { name: 'Watercraft', icon: Map, color: 'bg-emerald-100 text-emerald-600', query: 'Guide to Reading Water and Location Finding' },
];

const POPULAR_ARTICLES = [
    "Tench Fishing in Spring",
    "Method Feeder Tactics",
    "Float Fishing for Roach",
    "Pike Safety & Handling",
    "Barbel Fishing in Rivers",
    "Surface Fishing for Carp",
    "Winter Chub Tactics",
    "Perch Lure Fishing Guide",
    "Margin Fishing Secrets",
    "Canal Boat Traffic Tips",
    "Pre-baiting Campaigns",
    "River Flow & Watercraft",
    "Pole Fishing Basics",
    "Targeting Specimen Rudd",
    "Zig Rig Mechanics",
    "PVA Bag Tactics",
    "Spodding & Spombing",
    "Fishing in Silt",
    "River Feeder Skills",
    "Night Fishing Safety",
    "Catfish Introduction",
    "Winter Pike Deadbaiting",
    "Fishing Weedy Waters",
    "Match Fishing Primer"
];

type ViewMode = 'home' | 'list' | 'article';

const Encyclopedia: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Article State
  const [articleTitle, setArticleTitle] = useState<string | null>(null);
  const [articleContent, setArticleContent] = useState<string | null>(null);
  const [isAiContent, setIsAiContent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // List View State
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [filteredArticles, setFilteredArticles] = useState<StaticArticle[]>([]);

  // Search Helpers
  const searchResults = searchTerm.length > 2 
    ? STATIC_ARTICLES.filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.category.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  const handleAiSearch = async (term: string) => {
    if (!term.trim()) return;
    setIsLoading(true);
    setViewMode('article');
    setArticleTitle(term);
    setArticleContent(null);
    setIsAiContent(true);
    
    const content = await getEncyclopediaEntry(term);
    setArticleContent(content);
    setIsLoading(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
        // If there's an exact match in static data, open it
        const exact = searchResults.find(a => a.title.toLowerCase() === searchTerm.toLowerCase());
        if (exact) {
            openStaticArticle(exact);
            return;
        }
    }
    // Fallback to AI
    handleAiSearch(searchTerm);
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setFilteredArticles(STATIC_ARTICLES.filter(a => a.category === category));
    setViewMode('list');
  };

  const openStaticArticle = (article: StaticArticle) => {
    setArticleTitle(article.title);
    setArticleContent(article.content);
    setIsAiContent(false);
    setViewMode('article');
  };

  const goBack = () => {
    if (viewMode === 'article') {
        if (selectedCategory && !isAiContent) {
            setViewMode('list');
        } else {
            setViewMode('home');
            setSearchTerm('');
        }
        setArticleContent(null);
    } else if (viewMode === 'list') {
        setViewMode('home');
        setSelectedCategory(null);
    }
  };

  const renderMarkdown = (content: string) => {
     return content.split('\n').map((line, i) => {
        if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-slate-100">{line.replace('## ', '')}</h2>
        }
        if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-amber-800">{line.replace('### ', '')}</h3>
        }
        if (line.startsWith('**') && line.endsWith('**') && !line.includes(':')) {
            return <h4 key={i} className="text-lg font-bold mt-6 mb-2">{line.replace(/\*\*/g, '')}</h4>
        }
        if (line.startsWith('- ')) {
        return (
            <div key={i} className="flex gap-3 my-2 items-start pl-1">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                <p className="m-0">{line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
            </div>
        )
        }
        if (line.trim().startsWith('1. ')) {
            return (
                <div key={i} className="flex gap-3 my-3 items-start pl-1">
                    <span className="font-bold text-amber-600 font-serif min-w-[20px]">{line.split('.')[0]}.</span>
                    <p className="m-0">{line.substring(line.indexOf('.') + 1).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
                </div>
            )
        }
        const parts = line.split('**');
        if (parts.length > 1 && line.trim() !== '') {
            return (
                <p key={i} className="my-4 leading-relaxed">
                    {parts.map((part, index) => 
                        index % 2 === 1 ? <span key={index} className="font-bold text-slate-900 bg-amber-50/80 px-1 rounded">{part}</span> : part
                    )}
                </p>
            )
        }
        if (line.trim() === '') return <br key={i}/>;
        return <p key={i} className="my-4 leading-relaxed">{line}</p>
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-screen bg-slate-50 overflow-y-auto">
      {/* Hero Header */}
      <div className="bg-slate-900 px-4 py-8 md:p-10 shadow-lg relative overflow-hidden flex-shrink-0">
        <div className="absolute top-0 right-0 p-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
            {viewMode !== 'home' && (
                <button 
                  onClick={goBack}
                  className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                    <ChevronLeft size={16} />
                    Back
                </button>
            )}

            <div className="text-center">
                {viewMode === 'home' && (
                    <div className="inline-flex items-center justify-center p-3 bg-amber-500 rounded-xl mb-6 shadow-lg transform rotate-3">
                        <Book className="text-white" size={32} />
                    </div>
                )}
                {viewMode === 'home' && (
                    <>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">Angler's Almanac</h1>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                            Offline guide & AI expert.
                        </p>
                    </>
                )}
                
                {viewMode === 'home' && (
                    <div className="relative max-w-2xl mx-auto mt-6">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search library or ask AI..."
                                className="w-full py-4 pl-6 pr-14 rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/30 text-lg placeholder:text-slate-400 text-slate-900 border-none"
                            />
                            <button 
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors shadow-sm"
                            >
                                <Search size={22} />
                            </button>
                        </form>
                        
                        {/* Live Search Results Dropdown */}
                        {searchTerm.length > 2 && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-20 border border-slate-100">
                                {searchResults.length > 0 && (
                                    <div className="p-2">
                                        <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Library Matches</div>
                                        {searchResults.map(article => (
                                            <button
                                                key={article.id}
                                                onClick={() => {
                                                    openStaticArticle(article);
                                                    setSearchTerm('');
                                                }}
                                                className="w-full text-left px-3 py-3 hover:bg-amber-50 rounded-lg text-slate-700 font-medium flex justify-between items-center group"
                                            >
                                                <span>{article.title}</span>
                                                <span className="text-xs text-slate-400 group-hover:text-amber-600 bg-slate-100 group-hover:bg-amber-100 px-2 py-1 rounded-full">{article.category}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <div className="p-2 border-t border-slate-100 bg-slate-50">
                                    <button
                                        onClick={() => handleAiSearch(searchTerm)}
                                        className="w-full text-left px-3 py-3 hover:bg-emerald-50 rounded-lg text-emerald-700 font-medium flex items-center gap-2"
                                    >
                                        <Sparkles size={16} />
                                        Ask AI about "{searchTerm}"
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {viewMode === 'list' && (
                    <h1 className="text-3xl font-bold text-white mb-2">{selectedCategory}</h1>
                )}
            </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        
        {/* Loading State */}
        {isLoading && (
           <div className="flex flex-col items-center justify-center py-24 space-y-6">
             <div className="relative">
                <div className="absolute inset-0 bg-amber-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <Book className="text-amber-500 relative z-10 animate-bounce" size={56} />
             </div>
             <p className="text-slate-500 font-medium text-lg">Consulting the archives...</p>
           </div>
        )}

        {/* LIST VIEW (Categories) */}
        {viewMode === 'list' && !isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
                {filteredArticles.map(article => (
                    <button
                        key={article.id}
                        onClick={() => openStaticArticle(article)}
                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all text-left group"
                    >
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="text-lg font-bold text-slate-800 group-hover:text-amber-600 transition-colors">{article.title}</h3>
                             <ArrowRight size={20} className="text-slate-300 group-hover:text-amber-500" />
                        </div>
                        <p className="text-slate-500 text-sm line-clamp-2">{article.summary}</p>
                    </button>
                ))}
                
                {filteredArticles.length === 0 && (
                    <div className="col-span-full text-center py-10 text-slate-400">
                        No articles found in this category yet.
                    </div>
                )}
            </div>
        )}

        {/* ARTICLE VIEW */}
        {viewMode === 'article' && !isLoading && articleContent && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in-up">
             <div className={`${isAiContent ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'} p-6 md:p-10 border-b`}>
                <div className={`flex items-center gap-2 ${isAiContent ? 'text-emerald-600' : 'text-amber-600'} mb-3 font-bold text-xs md:text-sm uppercase tracking-wider`}>
                  {isAiContent ? <Sparkles size={16} /> : <Library size={16} />}
                  {isAiContent ? 'AI Generated Entry' : 'Offline Library Entry'}
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 capitalize leading-tight">
                  {articleTitle}
                </h2>
             </div>
             <div className="p-6 md:p-12 prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-amber-600 prose-strong:text-slate-900">
                {renderMarkdown(articleContent)}
             </div>
             <div className="bg-slate-50 p-8 border-t border-slate-100 text-center">
                <p className="text-slate-400 text-sm italic">
                    {isAiContent ? "Content generated by Angler's Almanac AI." : "Content from Angler's Almanac Offline Library."}
                </p>
             </div>
          </div>
        )}

        {/* HOME VIEW */}
        {viewMode === 'home' && !isLoading && (
           <div className="space-y-10 animate-fade-in">
             
             {/* Categories Grid */}
             <div>
                 <h3 className="text-slate-900 font-bold text-xl mb-6 flex items-center gap-2">
                    <Book size={20} className="text-amber-500" />
                    Offline Library
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => handleCategoryClick(cat.name)}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-left group relative overflow-hidden"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform relative z-10`}>
                                <cat.icon size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg group-hover:text-amber-600 transition-colors relative z-10">{cat.name}</h4>
                            <p className="text-slate-500 text-sm mt-1 relative z-10">Browse articles</p>
                            
                            {/* Offline Badge */}
                            <div className="absolute top-4 right-4 text-slate-200">
                                <WifiOff size={16} />
                            </div>
                        </button>
                    ))}
                 </div>
             </div>

             {/* Knowledge Base List (AI Shortcuts) */}
             <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-slate-900 font-bold text-xl flex items-center gap-2">
                        <Sparkles size={20} className="text-emerald-500" />
                        AI Insights
                    </h3>
                </div>
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {POPULAR_ARTICLES.map((topic, idx) => (
                        <button
                        key={topic}
                        onClick={() => handleAiSearch(topic)}
                        className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors group text-left"
                        >
                        <div className="flex items-center gap-4">
                            <span className="text-slate-300 font-serif font-bold text-xl">{(idx + 1).toString().padStart(2, '0')}</span>
                            <span className="font-medium text-slate-700 group-hover:text-slate-900">{topic}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                            <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-500" />
                        </div>
                        </button>
                    ))}
                </div>
             </div>

             {/* Did You Know / Fact Card */}
             <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg">
                 <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-amber-100 mb-2 text-sm font-bold uppercase tracking-wider">
                            <Calendar size={16} />
                            Angling Tip
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Seasonal Transitions</h3>
                        <p className="text-amber-100 max-w-xl">
                            As seasons change, fish behavior shifts dramatically. In spring, focus on shallows where water warms fastest.
                        </p>
                    </div>
                    <button 
                        onClick={() => openStaticArticle(STATIC_ARTICLES[5])} /* Opens Tench article usually, adjusted to index */
                        className="bg-white text-amber-600 px-6 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors shadow-sm whitespace-nowrap"
                    >
                        Read Tench Guide
                    </button>
                 </div>
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default Encyclopedia;