'use client';

import { GameGenre, Blockchain, FilterOptions } from '@/lib/types';
import { ChevronDown, Filter, X, Star, TrendingUp, Calendar, AlphabeticalSort } from 'lucide-react';
import { useState } from 'react';

interface GameFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  totalGames: number;
  filteredCount: number;
}

const genres: (GameGenre | 'All')[] = ['All', 'RPG', 'Strategy', 'Action', 'Puzzle', 'Racing', 'Card', 'Simulation', 'DeFi', 'Metaverse'];
const blockchains: (Blockchain | 'All')[] = ['All', 'Ethereum', 'Polygon', 'Base', 'Arbitrum', 'Optimism', 'Solana', 'BNB Chain'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const sortOptions = [
  { value: 'rating', label: 'Rating', icon: Star },
  { value: 'popularity', label: 'Popularity', icon: TrendingUp },
  { value: 'newest', label: 'Newest', icon: Calendar },
  { value: 'alphabetical', label: 'A-Z', icon: AlphabeticalSort }
];

export function GameFilters({ 
  filters,
  onFiltersChange,
  totalGames,
  filteredCount
}: GameFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      genre: 'All',
      blockchain: 'All',
      difficulty: 'All',
      minRating: 0,
      sortBy: 'rating',
      sortOrder: 'desc'
    });
  };

  const hasActiveFilters = filters.genre !== 'All' || 
                          filters.blockchain !== 'All' || 
                          filters.difficulty !== 'All' || 
                          filters.minRating > 0;

  return (
    <div className="space-y-4">
      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing {filteredCount} of {totalGames} games
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1 px-3 py-1 bg-surface text-gray-400 hover:text-text rounded text-sm transition-colors"
          >
            <Filter className="w-4 h-4" />
            Advanced
            <ChevronDown className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded text-sm transition-colors"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Quick Filters */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-text mb-2">Genre</h3>
          <div className="flex flex-wrap gap-2">
            {genres.slice(0, 6).map((genre) => (
              <button
                key={genre}
                onClick={() => updateFilter('genre', genre)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  filters.genre === genre
                    ? 'bg-primary text-white'
                    : 'bg-surface text-gray-400 hover:text-text hover:bg-gray-600'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-text mb-2">Blockchain</h3>
          <div className="flex flex-wrap gap-2">
            {blockchains.slice(0, 4).map((blockchain) => (
              <button
                key={blockchain}
                onClick={() => updateFilter('blockchain', blockchain)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  filters.blockchain === blockchain
                    ? 'bg-primary text-white'
                    : 'bg-surface text-gray-400 hover:text-text hover:bg-gray-600'
                }`}
              >
                {blockchain}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <h3 className="text-sm font-medium text-text mb-2">Sort by</h3>
        <div className="flex flex-wrap gap-2">
          {sortOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => updateFilter('sortBy', option.value)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  filters.sortBy === option.value
                    ? 'bg-accent text-white'
                    : 'bg-surface text-gray-400 hover:text-text hover:bg-gray-600'
                }`}
              >
                <Icon className="w-3 h-3" />
                {option.label}
              </button>
            );
          })}
          <button
            onClick={() => updateFilter('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-3 py-1 bg-surface text-gray-400 hover:text-text rounded text-sm transition-colors"
          >
            {filters.sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="space-y-4 p-4 bg-surface rounded-lg border border-gray-700">
          <h3 className="text-sm font-medium text-text">Advanced Filters</h3>
          
          {/* All Genres */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 mb-2">All Genres</h4>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => updateFilter('genre', genre)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                    filters.genre === genre
                      ? 'bg-primary text-white'
                      : 'bg-gray-700 text-gray-400 hover:text-text hover:bg-gray-600'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* All Blockchains */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 mb-2">All Blockchains</h4>
            <div className="flex flex-wrap gap-2">
              {blockchains.map((blockchain) => (
                <button
                  key={blockchain}
                  onClick={() => updateFilter('blockchain', blockchain)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                    filters.blockchain === blockchain
                      ? 'bg-primary text-white'
                      : 'bg-gray-700 text-gray-400 hover:text-text hover:bg-gray-600'
                  }`}
                >
                  {blockchain}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 mb-2">Difficulty</h4>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => updateFilter('difficulty', difficulty)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                    filters.difficulty === difficulty
                      ? 'bg-primary text-white'
                      : 'bg-gray-700 text-gray-400 hover:text-text hover:bg-gray-600'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Minimum Rating */}
          <div>
            <h4 className="text-xs font-medium text-gray-400 mb-2">Minimum Rating</h4>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={filters.minRating}
                onChange={(e) => updateFilter('minRating', parseFloat(e.target.value))}
                className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-400 min-w-[3rem]">
                {filters.minRating > 0 ? `${filters.minRating}+` : 'Any'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
