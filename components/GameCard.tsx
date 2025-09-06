'use client';

import { Game } from '@/lib/types';
import { RatingStars } from './RatingStars';
import { ExternalLink, Users, Zap, Calendar, DollarSign, Bookmark, BookMarked, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
  variant?: 'default' | 'compact';
  isSaved?: boolean;
  onSave?: (gameId: string) => void;
  showProgress?: boolean;
  progress?: number;
}

export function GameCard({ 
  game, 
  onClick, 
  variant = 'default', 
  isSaved = false, 
  onSave,
  showProgress = false,
  progress = 0
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick(game);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave?.(game.gameId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  if (variant === 'compact') {
    return (
      <div 
        className="game-card hover:scale-105 transform transition-all duration-200 animate-fade-in"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {game.name.charAt(0)}
              </span>
            </div>
            {!game.isActive && (
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center">
                <span className="text-xs text-white font-medium">Inactive</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-text truncate">{game.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="px-2 py-1 bg-primary bg-opacity-20 text-primary rounded text-xs">
                {game.blockchain}
              </span>
              <RatingStars rating={game.averageRating} size="sm" />
              <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(game.difficulty)}`}>
                {game.difficulty}
              </span>
            </div>
          </div>
          {onSave && (
            <button
              onClick={handleSave}
              className="p-1 hover:bg-surface rounded transition-colors"
            >
              {isSaved ? (
                <BookMarked className="w-4 h-4 text-accent" />
              ) : (
                <Bookmark className="w-4 h-4 text-gray-400 hover:text-accent" />
              )}
            </button>
          )}
        </div>
        {showProgress && progress > 0 && (
          <div className="mt-2">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div 
                className="bg-accent h-1 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="game-card hover:scale-105 transform transition-all duration-200 relative overflow-hidden animate-slide-up"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-2xl">
            {game.name.charAt(0)}
          </span>
        </div>
        <div className="absolute top-2 left-2 flex gap-1">
          <span className="px-2 py-1 bg-primary bg-opacity-90 text-white rounded text-xs font-medium">
            {game.blockchain}
          </span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
            {game.difficulty}
          </span>
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          {onSave && (
            <button
              onClick={handleSave}
              className="p-1 bg-black bg-opacity-50 hover:bg-opacity-70 rounded transition-colors"
            >
              {isSaved ? (
                <BookMarked className="w-4 h-4 text-accent" />
              ) : (
                <Bookmark className="w-4 h-4 text-white hover:text-accent" />
              )}
            </button>
          )}
        </div>
        {!game.isActive && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center">
            <span className="text-sm text-white font-medium">Inactive</span>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-semibold text-text text-lg flex-1">{game.name}</h3>
            {game.tags.includes('New') && (
              <span className="px-2 py-1 bg-accent bg-opacity-20 text-accent rounded text-xs font-medium ml-2">
                New
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 line-clamp-2">{game.description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RatingStars rating={game.averageRating} size="sm" />
            <span className="text-xs text-gray-500">({game.totalRatings})</span>
          </div>
          <span className="text-xs text-accent font-medium">{game.genre}</span>
        </div>

        {/* Investment & Earnings Info */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3" />
            <span>Min: {game.minInvestment}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Max: {game.maxEarnings}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-700">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Zap className="w-3 h-3" />
            <span>{game.p2eMechanics}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(game.launchDate)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {game.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-surface text-gray-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
          {game.tags.length > 3 && (
            <span className="px-2 py-1 bg-surface text-gray-400 rounded text-xs">
              +{game.tags.length - 3}
            </span>
          )}
        </div>

        {showProgress && progress > 0 && (
          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Your Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Hover overlay with quick actions */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-primary text-white rounded text-sm font-medium hover:bg-blue-600 transition-colors">
              View Details
            </button>
            {game.websiteUrl && (
              <a
                href={game.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-3 py-1 bg-surface text-text rounded text-sm font-medium hover:bg-gray-600 transition-colors flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                Visit
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
