'use client';

import { GameGenre, Blockchain } from '@/lib/types';
import { Filter } from 'lucide-react';

interface GameFiltersProps {
  selectedGenre: string;
  selectedBlockchain: string;
  onGenreChange: (genre: string) => void;
  onBlockchainChange: (blockchain: string) => void;
}

const genres: (GameGenre | 'All')[] = ['All', 'RPG', 'Strategy', 'Action', 'Puzzle', 'Racing', 'Card', 'Simulation'];
const blockchains: (Blockchain | 'All')[] = ['All', 'Ethereum', 'Polygon', 'Base', 'Arbitrum', 'Optimism'];

export function GameFilters({ 
  selectedGenre, 
  selectedBlockchain, 
  onGenreChange, 
  onBlockchainChange 
}: GameFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-text">
        <Filter className="w-4 h-4" />
        <span className="font-medium">Filters</span>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Genre
          </label>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => onGenreChange(genre)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedGenre === genre
                    ? 'bg-primary text-white'
                    : 'bg-surface text-gray-400 hover:bg-gray-700'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Blockchain
          </label>
          <div className="flex flex-wrap gap-2">
            {blockchains.map((blockchain) => (
              <button
                key={blockchain}
                onClick={() => onBlockchainChange(blockchain)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedBlockchain === blockchain
                    ? 'bg-accent text-white'
                    : 'bg-surface text-gray-400 hover:bg-gray-700'
                }`}
              >
                {blockchain}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
