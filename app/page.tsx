'use client';

import { useState, useEffect, useMemo } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';
import { GameCard } from '@/components/GameCard';
import { GameFilters } from '@/components/GameFilters';
import { GameDetail } from '@/components/GameDetail';
import { GuideCard } from '@/components/GuideCard';
import { UserProgress } from '@/components/UserProgress';
import { 
  mockGames, 
  mockRatings, 
  mockOnboardingSteps, 
  mockGuides,
  mockUserProgress,
  mockSavedGames,
  mockGameStats
} from '@/lib/data';
import { Game, FilterOptions } from '@/lib/types';
import { Search, Gamepad2, BookOpen, TrendingUp, Users, Star } from 'lucide-react';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState<'games' | 'guides' | 'progress'>('games');
  const [savedGameIds, setSavedGameIds] = useState<string[]>(
    mockSavedGames.map(sg => sg.gameId)
  );
  const [filters, setFilters] = useState<FilterOptions>({
    genre: 'All',
    blockchain: 'All',
    difficulty: 'All',
    minRating: 0,
    sortBy: 'rating',
    sortOrder: 'desc'
  });

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const filteredAndSortedGames = useMemo(() => {
    let filtered = mockGames.filter(game => {
      const genreMatch = filters.genre === 'All' || game.genre === filters.genre;
      const blockchainMatch = filters.blockchain === 'All' || game.blockchain === filters.blockchain;
      const difficultyMatch = filters.difficulty === 'All' || game.difficulty === filters.difficulty;
      const ratingMatch = game.averageRating >= filters.minRating;
      const searchMatch = searchQuery === '' || 
        game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return genreMatch && blockchainMatch && difficultyMatch && ratingMatch && searchMatch;
    });

    // Sort games
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'rating':
          comparison = b.averageRating - a.averageRating;
          break;
        case 'popularity':
          comparison = b.totalRatings - a.totalRatings;
          break;
        case 'newest':
          comparison = new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
          break;
        case 'alphabetical':
          comparison = a.name.localeCompare(b.name);
          break;
        default:
          comparison = 0;
      }
      
      return filters.sortOrder === 'asc' ? -comparison : comparison;
    });

    return filtered;
  }, [filters, searchQuery]);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleBackToList = () => {
    setSelectedGame(null);
  };

  const handleSaveGame = (gameId: string) => {
    setSavedGameIds(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  const getUserProgress = (gameId: string) => {
    const progress = mockUserProgress.find(p => p.gameId === gameId);
    return progress?.progressPercentage || 0;
  };

  if (selectedGame) {
    const gameRatings = mockRatings.filter(r => r.gameId === selectedGame.gameId);
    const gameSteps = mockOnboardingSteps.filter(s => s.gameId === selectedGame.gameId);
    
    return (
      <div className="min-h-screen bg-bg">
        <div className="w-full px-4 py-6">
          <GameDetail
            game={selectedGame}
            ratings={gameRatings}
            onboardingSteps={gameSteps}
            onBack={handleBackToList}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="w-full px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text mb-1">Web3 Game Hub</h1>
            <p className="text-gray-400 text-sm">Discover, Rate, and Master Web3 Games</p>
          </div>
          <Wallet>
            <ConnectWallet>
              <Name />
            </ConnectWallet>
          </Wallet>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="glass-card p-3 text-center">
            <Gamepad2 className="w-5 h-5 text-primary mx-auto mb-1" />
            <div className="text-sm font-bold text-text">{mockGameStats.totalGames}</div>
            <div className="text-xs text-gray-400">Games</div>
          </div>
          <div className="glass-card p-3 text-center">
            <Users className="w-5 h-5 text-accent mx-auto mb-1" />
            <div className="text-sm font-bold text-text">{mockGameStats.totalUsers}</div>
            <div className="text-xs text-gray-400">Users</div>
          </div>
          <div className="glass-card p-3 text-center">
            <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
            <div className="text-sm font-bold text-text">{mockGameStats.averageRating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="glass-card p-3 text-center">
            <BookOpen className="w-5 h-5 text-green-400 mx-auto mb-1" />
            <div className="text-sm font-bold text-text">{mockGuides.length}</div>
            <div className="text-xs text-gray-400">Guides</div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-1 mb-6 bg-surface rounded-lg p-1">
          <button
            onClick={() => setActiveView('games')}
            className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all duration-200 ${
              activeView === 'games'
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-text'
            }`}
          >
            Games
          </button>
          <button
            onClick={() => setActiveView('progress')}
            className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all duration-200 ${
              activeView === 'progress'
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-text'
            }`}
          >
            Progress
          </button>
          <button
            onClick={() => setActiveView('guides')}
            className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all duration-200 ${
              activeView === 'guides'
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-text'
            }`}
          >
            Guides
          </button>
        </div>

        {activeView === 'games' ? (
          <>
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface border border-gray-700 rounded-lg text-text placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-200"
              />
            </div>

            {/* Filters */}
            <div className="mb-4">
              <GameFilters
                filters={filters}
                onFiltersChange={setFilters}
                totalGames={mockGames.length}
                filteredCount={filteredAndSortedGames.length}
              />
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredAndSortedGames.map((game) => (
                <GameCard
                  key={game.gameId}
                  game={game}
                  onClick={handleGameClick}
                  variant="compact"
                  isSaved={savedGameIds.includes(game.gameId)}
                  onSave={handleSaveGame}
                  showProgress={getUserProgress(game.gameId) > 0}
                  progress={getUserProgress(game.gameId)}
                />
              ))}
            </div>

            {filteredAndSortedGames.length === 0 && (
              <div className="glass-card p-8 text-center">
                <Gamepad2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No games found matching your criteria.</p>
                <button
                  onClick={() => {
                    setFilters({
                      genre: 'All',
                      blockchain: 'All',
                      difficulty: 'All',
                      minRating: 0,
                      sortBy: 'rating',
                      sortOrder: 'desc'
                    });
                    setSearchQuery('');
                  }}
                  className="btn-secondary mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
        ) : activeView === 'progress' ? (
          <div className="space-y-4">
            <UserProgress
              progress={mockUserProgress}
              games={mockGames}
              onGameClick={(gameId) => {
                const game = mockGames.find(g => g.gameId === gameId);
                if (game) setSelectedGame(game);
              }}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-text mb-4">Setup Guides</h2>
            {mockGuides.map((guide) => (
              <GuideCard
                key={guide.guideId}
                guide={guide}
                variant={guide.type === 'wallet' ? 'walletSetup' : 'assetAcquisition'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
