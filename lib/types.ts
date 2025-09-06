export interface Game {
  gameId: string;
  name: string;
  description: string;
  genre: string;
  blockchain: string;
  p2eMechanics: string;
  thumbnailUrl: string;
  websiteUrl: string;
  averageRating: number;
  totalRatings: number;
}

export interface User {
  userId: string;
  farcasterId?: string;
  walletAddress?: string;
  displayName: string;
}

export interface Rating {
  ratingId: string;
  gameId: string;
  userId: string;
  score: number;
  reviewText: string;
  createdAt: string;
  user: User;
}

export interface OnboardingStep {
  stepId: string;
  gameId: string;
  order: number;
  description: string;
  guideUrl?: string;
  type: 'wallet' | 'asset' | 'gameplay' | 'setup';
  completed?: boolean;
}

export interface Guide {
  guideId: string;
  title: string;
  content: string;
  type: 'wallet' | 'asset' | 'general';
  relatedGameId?: string;
  relatedAsset?: string;
}

export type GameGenre = 'RPG' | 'Strategy' | 'Action' | 'Puzzle' | 'Racing' | 'Card' | 'Simulation';
export type Blockchain = 'Ethereum' | 'Polygon' | 'Base' | 'Arbitrum' | 'Optimism';
