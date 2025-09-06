'use client';

import { Game } from '@/lib/types';
import { Star, ExternalLink } from 'lucide-react';
import { RatingStars } from './RatingStars';

interface GameCardProps {
  game: Game;
  variant?: 'default' | 'compact';
  onClick?: (game: Game) => void;
}

export function GameCard({ game, variant = 'default', onClick }: GameCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(game);
    }
  };

  if (variant === 'compact') {
    return (
      <div 
        className="game-card animate-fade-in"
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {game.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text">{game.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{game.genre}</span>
              <span>•</span>
              <span>{game.blockchain}</span>
            </div>
          </div>
          <RatingStars rating={game.averageRating} size="sm" />
        </div>
      </div>
    );
  }

  return (
    <div 
      className="game-card animate-slide-up"
      onClick={handleClick}
    >
      <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-md mb-3 flex items-center justify-center">
        <span className="text-white font-bold text-2xl">
          {game.name.charAt(0)}
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-text text-lg">{game.name}</h3>
        
        <p className="text-sm text-gray-400 line-clamp-2">
          {game.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <span>{game.genre}</span>
            <span className="mx-1">•</span>
            <span>{game.blockchain}</span>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-500" />
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <RatingStars rating={game.averageRating} />
          <span className="text-xs text-gray-500">
            {game.totalRatings} reviews
          </span>
        </div>
        
        <div className="pt-2">
          <span className="inline-block bg-accent bg-opacity-20 text-accent text-xs px-2 py-1 rounded-full">
            {game.p2eMechanics}
          </span>
        </div>
      </div>
    </div>
  );
}
