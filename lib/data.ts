import { Game, Rating, OnboardingStep, Guide, User } from './types';

// Mock data for demonstration
export const mockGames: Game[] = [
  {
    gameId: '1',
    name: 'CryptoKitties',
    description: 'Collect, breed, and trade unique digital cats on the blockchain.',
    genre: 'Simulation',
    blockchain: 'Ethereum',
    p2eMechanics: 'NFT Trading',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://cryptokitties.co',
    averageRating: 4.2,
    totalRatings: 156
  },
  {
    gameId: '2',
    name: 'Axie Infinity',
    description: 'Battle, collect, and raise fantasy creatures called Axies.',
    genre: 'RPG',
    blockchain: 'Ethereum',
    p2eMechanics: 'Battle Rewards',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://axieinfinity.com',
    averageRating: 4.5,
    totalRatings: 342
  },
  {
    gameId: '3',
    name: 'The Sandbox',
    description: 'Create, own, and monetize your gaming experiences.',
    genre: 'Simulation',
    blockchain: 'Ethereum',
    p2eMechanics: 'Land Ownership',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://sandbox.game',
    averageRating: 4.0,
    totalRatings: 89
  },
  {
    gameId: '4',
    name: 'Gods Unchained',
    description: 'Strategic trading card game where you truly own your cards.',
    genre: 'Card',
    blockchain: 'Ethereum',
    p2eMechanics: 'Card Trading',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://godsunchained.com',
    averageRating: 4.3,
    totalRatings: 234
  },
  {
    gameId: '5',
    name: 'Decentraland',
    description: 'Explore, create, and trade in a virtual world owned by its users.',
    genre: 'Simulation',
    blockchain: 'Ethereum',
    p2eMechanics: 'Virtual Real Estate',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://decentraland.org',
    averageRating: 3.8,
    totalRatings: 167
  },
  {
    gameId: '6',
    name: 'Splinterlands',
    description: 'Fast-paced trading card game with true ownership.',
    genre: 'Card',
    blockchain: 'Hive',
    p2eMechanics: 'Tournament Rewards',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://splinterlands.com',
    averageRating: 4.1,
    totalRatings: 298
  }
];

export const mockUsers: User[] = [
  {
    userId: '1',
    farcasterId: 'gamer123',
    walletAddress: '0x1234...5678',
    displayName: 'CryptoGamer'
  },
  {
    userId: '2',
    farcasterId: 'web3player',
    walletAddress: '0xabcd...efgh',
    displayName: 'Web3Player'
  }
];

export const mockRatings: Rating[] = [
  {
    ratingId: '1',
    gameId: '1',
    userId: '1',
    score: 4,
    reviewText: 'Great game for beginners! Easy to understand and fun to play.',
    createdAt: '2024-01-15T10:30:00Z',
    user: mockUsers[0]
  },
  {
    ratingId: '2',
    gameId: '2',
    userId: '2',
    score: 5,
    reviewText: 'Amazing gameplay and earning potential. Highly recommended!',
    createdAt: '2024-01-14T15:45:00Z',
    user: mockUsers[1]
  }
];

export const mockOnboardingSteps: OnboardingStep[] = [
  {
    stepId: '1',
    gameId: '1',
    order: 1,
    description: 'Set up MetaMask wallet',
    guideUrl: '/guides/metamask-setup',
    type: 'wallet'
  },
  {
    stepId: '2',
    gameId: '1',
    order: 2,
    description: 'Purchase ETH for gas fees',
    guideUrl: '/guides/buy-eth',
    type: 'asset'
  },
  {
    stepId: '3',
    gameId: '1',
    order: 3,
    description: 'Create your first CryptoKitty',
    guideUrl: '/guides/first-kitty',
    type: 'gameplay'
  }
];

export const mockGuides: Guide[] = [
  {
    guideId: '1',
    title: 'MetaMask Setup Guide',
    content: 'Step-by-step guide to setting up your MetaMask wallet...',
    type: 'wallet',
    relatedAsset: 'MetaMask'
  },
  {
    guideId: '2',
    title: 'Buying Your First ETH',
    content: 'Learn how to purchase Ethereum for Web3 gaming...',
    type: 'asset',
    relatedAsset: 'ETH'
  }
];
