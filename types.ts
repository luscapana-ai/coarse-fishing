export interface Catch {
  id: string;
  species: string;
  weightLb: number;
  weightOz: number;
  location: string;
  date: string;
  notes: string;
  imageUrl?: string;
}

export enum ItemCondition {
  New = 'New',
  LikeNew = 'Like New',
  Good = 'Good',
  Fair = 'Fair',
  ForParts = 'For Parts'
}

export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'Rods' | 'Reels' | 'Bait' | 'Accessories' | 'Clothing';
  condition: ItemCondition;
  sellerName: string;
  imageUrl: string;
  postedDate: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type ViewState = 'dashboard' | 'marketplace' | 'guide' | 'encyclopedia' | 'logbook';