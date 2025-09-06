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
  isActive: boolean;
  launchDate: string;
  minInvestment?: string;
  maxEarnings?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  socialLinks: {
    discord?: string;
    twitter?: string;
    telegram?: string;
  };
}

export interface User {
  userId: string;
  farcasterId?: string;
  walletAddress?: string;
  displayName: string;
  avatar?: string;
  joinedAt: string;
  totalReviews: number;
  reputation: number;
}

export interface Rating {
  ratingId: string;
  gameId: string;
  userId: string;
  score: number;
  reviewText: string;
  createdAt: string;
  user: User;
  helpful: number;
  reported: boolean;
  pros: string[];
  cons: string[];
}

export interface OnboardingStep {
  stepId: string;
  gameId: string;
  order: number;
  title: string;
  description: string;
  guideUrl?: string;
  type: 'wallet' | 'asset' | 'gameplay' | 'setup';
  completed?: boolean;
  estimatedTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prerequisites?: string[];
}

export interface Guide {
  guideId: string;
  title: string;
  content: string;
  type: 'wallet' | 'asset' | 'general';
  relatedGameId?: string;
  relatedAsset?: string;
  author: string;
  lastUpdated: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  views: number;
  likes: number;
}

export interface SavedGame {
  userId: string;
  gameId: string;
  savedAt: string;
  notes?: string;
}

export interface UserProgress {
  userId: string;
  gameId: string;
  completedSteps: string[];
  lastActivity: string;
  progressPercentage: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'new_game' | 'rating_update' | 'guide_update' | 'achievement';
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
  actionUrl?: string;
}

export type GameGenre = 'RPG' | 'Strategy' | 'Action' | 'Puzzle' | 'Racing' | 'Card' | 'Simulation' | 'DeFi' | 'Metaverse';
export type Blockchain = 'Ethereum' | 'Polygon' | 'Base' | 'Arbitrum' | 'Optimism' | 'Solana' | 'BNB Chain';

export interface FilterOptions {
  genre: string;
  blockchain: string;
  difficulty: string;
  minRating: number;
  sortBy: 'rating' | 'popularity' | 'newest' | 'alphabetical';
  sortOrder: 'asc' | 'desc';
}

export interface GameStats {
  totalGames: number;
  totalUsers: number;
  totalReviews: number;
  averageRating: number;
  activeGames: number;
  newGamesThisMonth: number;
}
