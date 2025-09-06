'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';
import { GameCard } from '@/components/GameCard';
import { GameFilters } from '@/components/GameFilters';
import { GameDetail } from '@/components/GameDetail';
import { GuideCard } from '@/components/GuideCard';
import { mockGames, mockRatings, mockOnboardingSteps, mockGuides } from '@/lib/data';
import { Game } from '@/lib/types';
import { Search, Gamepad2, BookOpen, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedBlockchain, setSelectedBlockchain] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeView, setActiveView] = useState<'games' | 'guides'>('games');

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const filteredGames = mockGames.filter(game => {
    const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
    const matchesBlockchain = selectedBlockchain === 'All' || game.blockchain === selectedBlockchain;
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesGenre && matchesBlockchain && matchesSearch;
  });

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleBackToList = () => {
    setSelectedGame(null);
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
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="glass-card p-3 text-center">
            <Gamepad2 className="w-6 h-6 text-primary mx-auto mb-1" />
            <div className="text-lg font-bold text-text">{mockGames.length}</div>
            <div className="text-xs text-gray-400">Games</div>
          </div>
          <div className="glass-card p-3 text-center">
            <TrendingUp className="w-6 h-6 text-accent mx-auto mb-1" />
            <div className="text-lg font-bold text-text">4.2</div>
            <div className="text-xs text-gray-400">Avg Rating</div>
          </div>
          <div className="glass-card p-3 text-center">
            <BookOpen className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
            <div className="text-lg font-bold text-text">{mockGuides.length}</div>
            <div className="text-xs text-gray-400">Guides</div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-1 mb-6 bg-surface rounded-lg p-1">
          <button
            onClick={() => setActiveView('games')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeView === 'games'
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-text'
            }`}
          >
            Games
          </button>
          <button
            onClick={() => setActiveView('guides')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
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
            <div className="mb-6">
              <GameFilters
                selectedGenre={selectedGenre}
                selectedBlockchain={selectedBlockchain}
                onGenreChange={setSelectedGenre}
                onBlockchainChange={setSelectedBlockchain}
              />
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredGames.map((game) => (
                <GameCard
                  key={game.gameId}
                  game={game}
                  onClick={handleGameClick}
                />
              ))}
            </div>

            {filteredGames.length === 0 && (
              <div className="glass-card p-8 text-center">
                <Gamepad2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No games found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedGenre('All');
                    setSelectedBlockchain('All');
                    setSearchQuery('');
                  }}
                  className="btn-secondary mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </>
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
