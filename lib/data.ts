import { Game, Rating, OnboardingStep, Guide, User, SavedGame, UserProgress, Notification, GameStats } from './types';

// Mock data for demonstration
export const mockGames: Game[] = [
  {
    gameId: '1',
    name: 'CryptoKitties',
    description: 'Collect, breed, and trade unique digital cats on the blockchain. Each CryptoKitty is unique and owned by you; it cannot be replicated, taken away, or destroyed.',
    genre: 'Simulation',
    blockchain: 'Ethereum',
    p2eMechanics: 'NFT Trading',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://cryptokitties.co',
    averageRating: 4.2,
    totalRatings: 156,
    isActive: true,
    launchDate: '2017-11-28',
    minInvestment: '0.01 ETH',
    maxEarnings: '50 ETH',
    difficulty: 'Beginner',
    tags: ['NFT', 'Collectibles', 'Breeding', 'Trading'],
    socialLinks: {
      discord: 'https://discord.gg/cryptokitties',
      twitter: 'https://twitter.com/cryptokitties'
    }
  },
  {
    gameId: '2',
    name: 'Axie Infinity',
    description: 'Battle, collect, and raise fantasy creatures called Axies. Build up a collection and use them across an ever expanding universe of games.',
    genre: 'RPG',
    blockchain: 'Ethereum',
    p2eMechanics: 'Battle Rewards',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://axieinfinity.com',
    averageRating: 4.5,
    totalRatings: 342,
    isActive: true,
    launchDate: '2018-03-01',
    minInvestment: '0.1 ETH',
    maxEarnings: '500 SLP/day',
    difficulty: 'Intermediate',
    tags: ['P2E', 'Strategy', 'Breeding', 'PvP'],
    socialLinks: {
      discord: 'https://discord.gg/axie',
      twitter: 'https://twitter.com/axieinfinity'
    }
  },
  {
    gameId: '3',
    name: 'The Sandbox',
    description: 'Create, own, and monetize your gaming experiences in this virtual world where players can build, own, and monetize their gaming experiences.',
    genre: 'Metaverse',
    blockchain: 'Ethereum',
    p2eMechanics: 'Land Ownership',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://sandbox.game',
    averageRating: 4.0,
    totalRatings: 89,
    isActive: true,
    launchDate: '2020-08-14',
    minInvestment: '1 ETH',
    maxEarnings: 'Variable',
    difficulty: 'Advanced',
    tags: ['Metaverse', 'Creation', 'Land', 'NFT'],
    socialLinks: {
      discord: 'https://discord.gg/sandbox',
      twitter: 'https://twitter.com/thesandboxgame'
    }
  },
  {
    gameId: '4',
    name: 'Gods Unchained',
    description: 'Strategic trading card game where you truly own your cards. Competitive gameplay with real ownership and trading.',
    genre: 'Card',
    blockchain: 'Ethereum',
    p2eMechanics: 'Card Trading',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://godsunchained.com',
    averageRating: 4.3,
    totalRatings: 234,
    isActive: true,
    launchDate: '2019-10-10',
    minInvestment: 'Free to start',
    maxEarnings: '100 GODS/week',
    difficulty: 'Intermediate',
    tags: ['TCG', 'Strategy', 'Competitive', 'Free-to-Play'],
    socialLinks: {
      discord: 'https://discord.gg/godsunchained',
      twitter: 'https://twitter.com/godsunchained'
    }
  },
  {
    gameId: '5',
    name: 'Decentraland',
    description: 'Explore, create, and trade in a virtual world owned by its users. A decentralized virtual reality platform.',
    genre: 'Metaverse',
    blockchain: 'Ethereum',
    p2eMechanics: 'Virtual Real Estate',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://decentraland.org',
    averageRating: 3.8,
    totalRatings: 167,
    isActive: true,
    launchDate: '2020-02-20',
    minInvestment: '2 ETH',
    maxEarnings: 'Variable',
    difficulty: 'Advanced',
    tags: ['VR', 'Metaverse', 'Social', 'Creation'],
    socialLinks: {
      discord: 'https://discord.gg/decentraland',
      twitter: 'https://twitter.com/decentraland'
    }
  },
  {
    gameId: '6',
    name: 'Splinterlands',
    description: 'Fast-paced trading card game with true ownership. Battle other players in ranked matches and tournaments.',
    genre: 'Card',
    blockchain: 'Hive',
    p2eMechanics: 'Tournament Rewards',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://splinterlands.com',
    averageRating: 4.1,
    totalRatings: 298,
    isActive: true,
    launchDate: '2018-05-01',
    minInvestment: '$10',
    maxEarnings: '$50/day',
    difficulty: 'Beginner',
    tags: ['TCG', 'Fast-paced', 'Tournaments', 'Low-cost'],
    socialLinks: {
      discord: 'https://discord.gg/splinterlands',
      twitter: 'https://twitter.com/splinterlands'
    }
  },
  {
    gameId: '7',
    name: 'Base Quest',
    description: 'Adventure through the Base ecosystem while earning rewards. Complete quests, discover DeFi protocols, and build your on-chain reputation.',
    genre: 'DeFi',
    blockchain: 'Base',
    p2eMechanics: 'Quest Rewards',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://basequest.xyz',
    averageRating: 4.6,
    totalRatings: 89,
    isActive: true,
    launchDate: '2023-08-01',
    minInvestment: '0.001 ETH',
    maxEarnings: '100 QUEST/day',
    difficulty: 'Beginner',
    tags: ['DeFi', 'Quests', 'Base', 'Educational'],
    socialLinks: {
      discord: 'https://discord.gg/basequest',
      twitter: 'https://twitter.com/basequest'
    }
  },
  {
    gameId: '8',
    name: 'Parallel',
    description: 'Sci-fi trading card game with stunning artwork and deep strategy. Build your deck and compete in the Parallel universe.',
    genre: 'Card',
    blockchain: 'Ethereum',
    p2eMechanics: 'Card Trading',
    thumbnailUrl: '/api/placeholder/200/200',
    websiteUrl: 'https://parallel.life',
    averageRating: 4.4,
    totalRatings: 156,
    isActive: true,
    launchDate: '2021-09-15',
    minInvestment: '0.05 ETH',
    maxEarnings: '200 PRIME/week',
    difficulty: 'Advanced',
    tags: ['Sci-fi', 'Strategy', 'High-quality', 'Competitive'],
    socialLinks: {
      discord: 'https://discord.gg/parallel',
      twitter: 'https://twitter.com/parallelNFT'
    }
  }
];

export const mockUsers: User[] = [
  {
    userId: '1',
    farcasterId: 'gamer123',
    walletAddress: '0x1234...5678',
    displayName: 'CryptoGamer',
    avatar: '/api/placeholder/40/40',
    joinedAt: '2023-01-15T10:30:00Z',
    totalReviews: 12,
    reputation: 85
  },
  {
    userId: '2',
    farcasterId: 'web3player',
    walletAddress: '0xabcd...efgh',
    displayName: 'Web3Player',
    avatar: '/api/placeholder/40/40',
    joinedAt: '2023-03-22T14:20:00Z',
    totalReviews: 8,
    reputation: 72
  },
  {
    userId: '3',
    farcasterId: 'defi_master',
    walletAddress: '0x9876...1234',
    displayName: 'DeFi Master',
    avatar: '/api/placeholder/40/40',
    joinedAt: '2023-02-10T09:15:00Z',
    totalReviews: 25,
    reputation: 94
  },
  {
    userId: '4',
    farcasterId: 'nft_collector',
    walletAddress: '0x5555...9999',
    displayName: 'NFT Collector',
    avatar: '/api/placeholder/40/40',
    joinedAt: '2023-04-05T16:45:00Z',
    totalReviews: 6,
    reputation: 68
  }
];

export const mockRatings: Rating[] = [
  {
    ratingId: '1',
    gameId: '1',
    userId: '1',
    score: 4,
    reviewText: 'Great game for beginners! Easy to understand and fun to play. The breeding mechanics are intuitive and the marketplace is active.',
    createdAt: '2024-01-15T10:30:00Z',
    user: mockUsers[0],
    helpful: 12,
    reported: false,
    pros: ['Beginner-friendly', 'Active marketplace', 'Unique NFTs'],
    cons: ['High gas fees', 'Limited gameplay']
  },
  {
    ratingId: '2',
    gameId: '2',
    userId: '2',
    score: 5,
    reviewText: 'Amazing gameplay and earning potential. Highly recommended! The strategy depth is incredible and the community is very supportive.',
    createdAt: '2024-01-14T15:45:00Z',
    user: mockUsers[1],
    helpful: 18,
    reported: false,
    pros: ['High earning potential', 'Strategic depth', 'Great community'],
    cons: ['High initial investment', 'Complex for beginners']
  },
  {
    ratingId: '3',
    gameId: '7',
    userId: '3',
    score: 5,
    reviewText: 'Perfect introduction to Base ecosystem! Low fees and educational content make this a must-play for anyone new to Web3.',
    createdAt: '2024-01-10T12:20:00Z',
    user: mockUsers[2],
    helpful: 25,
    reported: false,
    pros: ['Low fees', 'Educational', 'Base ecosystem', 'Beginner-friendly'],
    cons: ['Limited earning potential']
  },
  {
    ratingId: '4',
    gameId: '4',
    userId: '4',
    score: 4,
    reviewText: 'Solid TCG with true ownership. The art is beautiful and gameplay is strategic. Free-to-play model is generous.',
    createdAt: '2024-01-08T09:15:00Z',
    user: mockUsers[3],
    helpful: 8,
    reported: false,
    pros: ['Free-to-play', 'Beautiful art', 'True ownership', 'Strategic'],
    cons: ['Steep learning curve', 'RNG dependent']
  },
  {
    ratingId: '5',
    gameId: '8',
    userId: '1',
    score: 5,
    reviewText: 'Incredible production value and deep strategy. The sci-fi theme is executed perfectly. Worth the investment!',
    createdAt: '2024-01-05T14:30:00Z',
    user: mockUsers[0],
    helpful: 15,
    reported: false,
    pros: ['High production value', 'Deep strategy', 'Amazing art', 'Active development'],
    cons: ['Expensive cards', 'Complex mechanics']
  },
  {
    ratingId: '6',
    gameId: '6',
    userId: '2',
    score: 4,
    reviewText: 'Fast-paced and affordable entry into Web3 gaming. Great for daily play and tournaments are exciting.',
    createdAt: '2024-01-03T11:45:00Z',
    user: mockUsers[1],
    helpful: 10,
    reported: false,
    pros: ['Low cost', 'Fast gameplay', 'Daily rewards', 'Active tournaments'],
    cons: ['Simple graphics', 'Limited strategy depth']
  }
];

export const mockOnboardingSteps: OnboardingStep[] = [
  // CryptoKitties steps
  {
    stepId: '1',
    gameId: '1',
    order: 1,
    title: 'Set up MetaMask Wallet',
    description: 'Install and configure MetaMask browser extension to interact with Ethereum blockchain',
    guideUrl: '/guides/metamask-setup',
    type: 'wallet',
    estimatedTime: '10 minutes',
    difficulty: 'Easy',
    prerequisites: []
  },
  {
    stepId: '2',
    gameId: '1',
    order: 2,
    title: 'Purchase ETH for Gas Fees',
    description: 'Buy Ethereum to pay for transaction fees when breeding and trading CryptoKitties',
    guideUrl: '/guides/buy-eth',
    type: 'asset',
    estimatedTime: '15 minutes',
    difficulty: 'Easy',
    prerequisites: ['1']
  },
  {
    stepId: '3',
    gameId: '1',
    order: 3,
    title: 'Create Your First CryptoKitty',
    description: 'Learn how to purchase or breed your first unique digital cat',
    guideUrl: '/guides/first-kitty',
    type: 'gameplay',
    estimatedTime: '20 minutes',
    difficulty: 'Medium',
    prerequisites: ['1', '2']
  },
  // Base Quest steps
  {
    stepId: '4',
    gameId: '7',
    order: 1,
    title: 'Connect to Base Network',
    description: 'Add Base network to your wallet and bridge ETH from Ethereum mainnet',
    guideUrl: '/guides/base-setup',
    type: 'setup',
    estimatedTime: '5 minutes',
    difficulty: 'Easy',
    prerequisites: []
  },
  {
    stepId: '5',
    gameId: '7',
    order: 2,
    title: 'Complete First Quest',
    description: 'Start your Base journey by completing your first educational quest',
    guideUrl: '/guides/first-quest',
    type: 'gameplay',
    estimatedTime: '10 minutes',
    difficulty: 'Easy',
    prerequisites: ['4']
  },
  {
    stepId: '6',
    gameId: '7',
    order: 3,
    title: 'Explore DeFi Protocols',
    description: 'Learn about and interact with various DeFi protocols on Base',
    guideUrl: '/guides/base-defi',
    type: 'gameplay',
    estimatedTime: '30 minutes',
    difficulty: 'Medium',
    prerequisites: ['4', '5']
  },
  // Axie Infinity steps
  {
    stepId: '7',
    gameId: '2',
    order: 1,
    title: 'Purchase Your First Axies',
    description: 'Buy a team of 3 Axies from the marketplace to start playing',
    guideUrl: '/guides/buy-axies',
    type: 'asset',
    estimatedTime: '45 minutes',
    difficulty: 'Hard',
    prerequisites: []
  },
  {
    stepId: '8',
    gameId: '2',
    order: 2,
    title: 'Learn Battle Mechanics',
    description: 'Understand turn-based combat, card abilities, and team synergies',
    guideUrl: '/guides/axie-battle',
    type: 'gameplay',
    estimatedTime: '60 minutes',
    difficulty: 'Hard',
    prerequisites: ['7']
  },
  {
    stepId: '9',
    gameId: '2',
    order: 3,
    title: 'Start Earning SLP',
    description: 'Begin daily quests and PvP battles to earn Smooth Love Potion tokens',
    guideUrl: '/guides/earn-slp',
    type: 'gameplay',
    estimatedTime: '30 minutes',
    difficulty: 'Medium',
    prerequisites: ['7', '8']
  }
];

export const mockGuides: Guide[] = [
  {
    guideId: '1',
    title: 'MetaMask Setup Guide',
    content: 'Complete step-by-step guide to setting up your MetaMask wallet for Web3 gaming. Includes security best practices and network configuration.',
    type: 'wallet',
    relatedAsset: 'MetaMask',
    author: 'Web3 Game Hub Team',
    lastUpdated: '2024-01-15T10:00:00Z',
    readTime: '8 minutes',
    difficulty: 'Beginner',
    tags: ['MetaMask', 'Wallet', 'Security', 'Setup'],
    views: 1250,
    likes: 89
  },
  {
    guideId: '2',
    title: 'Buying Your First ETH',
    content: 'Learn how to purchase Ethereum for Web3 gaming. Covers different exchanges, payment methods, and security considerations.',
    type: 'asset',
    relatedAsset: 'ETH',
    author: 'CryptoGamer',
    lastUpdated: '2024-01-12T14:30:00Z',
    readTime: '12 minutes',
    difficulty: 'Beginner',
    tags: ['Ethereum', 'Purchasing', 'Exchanges', 'Fiat'],
    views: 980,
    likes: 67
  },
  {
    guideId: '3',
    title: 'Base Network Complete Guide',
    content: 'Everything you need to know about Base network - from setup to advanced DeFi interactions. Perfect for beginners and experienced users.',
    type: 'general',
    relatedAsset: 'Base',
    author: 'DeFi Master',
    lastUpdated: '2024-01-10T09:15:00Z',
    readTime: '15 minutes',
    difficulty: 'Intermediate',
    tags: ['Base', 'Layer 2', 'DeFi', 'Bridging'],
    views: 2100,
    likes: 156
  },
  {
    guideId: '4',
    title: 'NFT Trading Strategies',
    content: 'Advanced strategies for trading NFTs in Web3 games. Learn about market analysis, timing, and risk management.',
    type: 'general',
    author: 'NFT Collector',
    lastUpdated: '2024-01-08T16:20:00Z',
    readTime: '20 minutes',
    difficulty: 'Advanced',
    tags: ['NFT', 'Trading', 'Strategy', 'Market Analysis'],
    views: 750,
    likes: 45
  },
  {
    guideId: '5',
    title: 'Web3 Gaming Security Best Practices',
    content: 'Essential security practices for Web3 gamers. Protect your assets and avoid common scams and pitfalls.',
    type: 'general',
    author: 'Web3 Game Hub Team',
    lastUpdated: '2024-01-05T11:45:00Z',
    readTime: '10 minutes',
    difficulty: 'Beginner',
    tags: ['Security', 'Scams', 'Best Practices', 'Safety'],
    views: 1800,
    likes: 134
  }
];

// Additional mock data for new features
export const mockSavedGames: SavedGame[] = [
  {
    userId: '1',
    gameId: '1',
    savedAt: '2024-01-15T10:30:00Z',
    notes: 'Interested in breeding mechanics'
  },
  {
    userId: '1',
    gameId: '7',
    savedAt: '2024-01-14T15:45:00Z',
    notes: 'Great for learning Base ecosystem'
  },
  {
    userId: '2',
    gameId: '2',
    savedAt: '2024-01-13T09:20:00Z',
    notes: 'High earning potential'
  }
];

export const mockUserProgress: UserProgress[] = [
  {
    userId: '1',
    gameId: '1',
    completedSteps: ['1', '2'],
    lastActivity: '2024-01-15T10:30:00Z',
    progressPercentage: 67
  },
  {
    userId: '1',
    gameId: '7',
    completedSteps: ['4', '5', '6'],
    lastActivity: '2024-01-14T15:45:00Z',
    progressPercentage: 100
  },
  {
    userId: '2',
    gameId: '2',
    completedSteps: ['7'],
    lastActivity: '2024-01-13T09:20:00Z',
    progressPercentage: 33
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    type: 'new_game',
    title: 'New Game Added!',
    message: 'Base Quest has been added to the platform. Check it out!',
    createdAt: '2024-01-15T10:00:00Z',
    read: false,
    actionUrl: '/games/7'
  },
  {
    id: '2',
    userId: '1',
    type: 'guide_update',
    title: 'Guide Updated',
    message: 'MetaMask Setup Guide has been updated with new security features.',
    createdAt: '2024-01-14T14:30:00Z',
    read: true,
    actionUrl: '/guides/1'
  }
];

export const mockGameStats: GameStats = {
  totalGames: mockGames.length,
  totalUsers: mockUsers.length,
  totalReviews: mockRatings.length,
  averageRating: 4.2,
  activeGames: mockGames.filter(g => g.isActive).length,
  newGamesThisMonth: 2
};
