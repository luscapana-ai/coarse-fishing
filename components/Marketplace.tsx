import React, { useState } from 'react';
import { MarketplaceItem, ItemCondition } from '../types';
import { generateMarketplaceDescription } from '../services/geminiService';
import { Plus, Search, Tag, Loader2, X, Shield, ShieldCheck, CreditCard, AlertCircle } from 'lucide-react';

const SELLING_FEE_PERCENT = 0.05;
const BUYING_FEE_FIXED = 1.00;

const MOCK_ITEMS: MarketplaceItem[] = [
  {
    id: '1',
    title: 'Daiwa Whisker Rod',
    description: 'Classic carbon rod, perfect for stalking carp in the margins. 12ft, 2.75lb test curve.',
    price: 85.00,
    category: 'Rods',
    condition: ItemCondition.Good,
    sellerName: 'JohnFisher',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    postedDate: '2023-10-24'
  },
  {
    id: '2',
    title: 'Shimano Baitrunner',
    description: 'Smooth drag, reliable baitrunner system. Includes spare spool loaded with 12lb line.',
    price: 60.00,
    category: 'Reels',
    condition: ItemCondition.LikeNew,
    sellerName: 'CarpQueen',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    postedDate: '2023-10-25'
  },
  {
    id: '3',
    title: 'Delkim Ev Plus Alarms (Set of 3)',
    description: 'Bulletproof bite indication. Used for two seasons but working perfectly.',
    price: 120.00,
    category: 'Accessories',
    condition: ItemCondition.Fair,
    sellerName: 'NightOwl',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    postedDate: '2023-10-26'
  }
];

const Marketplace: React.FC = () => {
  const [items, setItems] = useState<MarketplaceItem[]>(MOCK_ITEMS);
  const [showSellModal, setShowSellModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // New Item Form State
  const [newItem, setNewItem] = useState({
    title: '',
    price: '',
    category: 'Rods',
    condition: ItemCondition.Good,
    features: '',
    description: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDescription = async () => {
    if (!newItem.title || !newItem.features) return;
    setIsGenerating(true);
    const desc = await generateMarketplaceDescription(newItem.title, newItem.category, newItem.condition, newItem.features);
    setNewItem(prev => ({ ...prev, description: desc }));
    setIsGenerating(false);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const item: MarketplaceItem = {
      id: Date.now().toString(),
      title: newItem.title,
      price: parseFloat(newItem.price),
      category: newItem.category as any,
      condition: newItem.condition,
      description: newItem.description,
      sellerName: 'You',
      imageUrl: `https://picsum.photos/400/300?random=${Date.now()}`,
      postedDate: new Date().toISOString().split('T')[0]
    };
    setItems([item, ...items]);
    setShowSellModal(false);
    // Reset form
    setNewItem({ title: '', price: '', category: 'Rods', condition: ItemCondition.Good, features: '', description: '' });
  };

  const handleBuyClick = (item: MarketplaceItem) => {
    setSelectedItem(item);
    setShowBuyModal(true);
  };

  const handleConfirmPurchase = () => {
    // In a real app, this would process payment
    alert(`Purchase Confirmed! £${((selectedItem?.price || 0) + BUYING_FEE_FIXED).toFixed(2)} held in escrow.`);
    setShowBuyModal(false);
    setSelectedItem(null);
  };

  // Calculations for Sell Modal
  const sellPrice = parseFloat(newItem.price) || 0;
  const sellFee = sellPrice * SELLING_FEE_PERCENT;
  const sellEarnings = sellPrice - sellFee;

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 pb-24 md:pb-4 md:p-8 max-w-7xl mx-auto min-h-screen bg-slate-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Tackle Exchange</h1>
          <p className="text-slate-500">Secure marketplace with escrow protection.</p>
        </div>
        <button 
          onClick={() => setShowSellModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm transition-all"
        >
          <Plus size={20} />
          Sell Gear
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for rods, reels, etc..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {['All', 'Rods', 'Reels', 'Bait', 'Accessories'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-2 right-2 bg-slate-900/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {item.condition}
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{item.category}</span>
                <span className="text-slate-400 text-xs">{item.postedDate}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1 truncate">{item.title}</h3>
              <p className="text-lg font-bold text-emerald-600 mb-2">£{item.price.toFixed(2)}</p>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1">{item.description}</p>
              <button 
                onClick={() => handleBuyClick(item)}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buy Modal (Escrow) */}
      {showBuyModal && selectedItem && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
           <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
              <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-start">
                  <div>
                      <h2 className="text-xl font-bold text-slate-900">Secure Checkout</h2>
                      <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold mt-1 uppercase tracking-wide">
                          <ShieldCheck size={14} />
                          Escrow Protected
                      </div>
                  </div>
                  <button onClick={() => setShowBuyModal(false)} className="text-slate-400 hover:text-slate-600">
                    <X size={24} />
                  </button>
              </div>
              
              <div className="p-6">
                  {/* Item Summary */}
                  <div className="flex gap-4 mb-6">
                      <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={selectedItem.imageUrl} className="w-full h-full object-cover" />
                      </div>
                      <div>
                          <h3 className="font-bold text-slate-900">{selectedItem.title}</h3>
                          <p className="text-sm text-slate-500">{selectedItem.condition} • {selectedItem.category}</p>
                      </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex justify-between text-sm text-slate-600">
                          <span>Item Price</span>
                          <span>£{selectedItem.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-600">
                          <span className="flex items-center gap-1">Buyer Protection Fee <Shield size={12} className="text-emerald-500"/></span>
                          <span>£{BUYING_FEE_FIXED.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-lg text-slate-900">
                          <span>Total to Pay</span>
                          <span>£{(selectedItem.price + BUYING_FEE_FIXED).toFixed(2)}</span>
                      </div>
                  </div>

                  {/* Escrow Notice */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 mb-6 flex gap-3 items-start">
                      <ShieldCheck className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-xs text-emerald-800 leading-relaxed">
                          Your funds will be held securely in <strong>Escrow</strong>. The seller (<strong>{selectedItem.sellerName}</strong>) is only paid after you confirm you have received the item as described.
                      </p>
                  </div>

                  <button 
                    onClick={handleConfirmPurchase}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
                  >
                      <CreditCard size={18} />
                      Confirm & Pay
                  </button>
              </div>
           </div>
        </div>
      )}

      {/* Sell Modal */}
      {showSellModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-slate-900">List an Item</h2>
              <button onClick={() => setShowSellModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddItem} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Item Title</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  value={newItem.title}
                  onChange={e => setNewItem({...newItem, title: e.target.value})}
                  placeholder="e.g. Fox EOS 10000 Reel"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Price (£)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    step="0.01"
                    className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={newItem.price}
                    onChange={e => setNewItem({...newItem, price: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                  <select 
                    className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    value={newItem.category}
                    onChange={e => setNewItem({...newItem, category: e.target.value as any})}
                  >
                    <option>Rods</option>
                    <option>Reels</option>
                    <option>Bait</option>
                    <option>Accessories</option>
                    <option>Clothing</option>
                  </select>
                </div>
              </div>

              {/* Fee Calculator Display */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-1">
                  <div className="flex justify-between text-xs text-slate-500">
                      <span>Listing Price:</span>
                      <span>£{sellPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                      <span>Selling Fee (5%):</span>
                      <span className="text-red-500">-£{sellFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-emerald-700 border-t border-slate-200 pt-1 mt-1">
                      <span>You Receive (Est.):</span>
                      <span>£{sellEarnings.toFixed(2)}</span>
                  </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Condition</label>
                <div className="flex gap-2 flex-wrap">
                  {Object.values(ItemCondition).map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setNewItem({...newItem, condition: c})}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        newItem.condition === c 
                          ? 'bg-emerald-600 text-white border-emerald-600' 
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Key Features (for AI)</label>
                <textarea 
                  className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                  rows={2}
                  placeholder="e.g. 12ft, cork handle, used twice, minor scratch on reel seat."
                  value={newItem.features}
                  onChange={e => setNewItem({...newItem, features: e.target.value})}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-slate-700">Description</label>
                  <button 
                    type="button"
                    onClick={handleGenerateDescription}
                    disabled={!newItem.title || !newItem.features || isGenerating}
                    className="text-xs text-emerald-600 font-medium flex items-center gap-1 hover:text-emerald-700 disabled:opacity-50"
                  >
                    {isGenerating ? <Loader2 size={12} className="animate-spin" /> : <Tag size={12} />}
                    Auto-Generate
                  </button>
                </div>
                <textarea 
                  required
                  className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
                  rows={4}
                  value={newItem.description}
                  onChange={e => setNewItem({...newItem, description: e.target.value})}
                  placeholder="Click Auto-Generate to create a description using AI..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-[0.98]"
              >
                List Item
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;