'use client';

import { UserProgress as UserProgressType, Game } from '@/lib/types';
import { Progress, Trophy, Clock, CheckCircle } from 'lucide-react';

interface UserProgressProps {
  progress: UserProgressType[];
  games: Game[];
  onGameClick?: (gameId: string) => void;
}

export function UserProgress({ progress, games, onGameClick }: UserProgressProps) {
  const getGameById = (gameId: string) => games.find(g => g.gameId === gameId);

  const formatLastActivity = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  const getProgressColor = (percentage: number) => {
    if (percentage === 100) return 'text-green-400 bg-green-400';
    if (percentage >= 75) return 'text-blue-400 bg-blue-400';
    if (percentage >= 50) return 'text-yellow-400 bg-yellow-400';
    return 'text-gray-400 bg-gray-400';
  };

  if (progress.length === 0) {
    return (
      <div className="glass-card p-6 text-center">
        <Progress className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text mb-2">No Progress Yet</h3>
        <p className="text-gray-400">Start playing games to track your onboarding progress!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text">Your Progress</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Trophy className="w-4 h-4" />
          <span>{progress.filter(p => p.progressPercentage === 100).length} completed</span>
        </div>
      </div>

      <div className="grid gap-4">
        {progress.map((userProgress) => {
          const game = getGameById(userProgress.gameId);
          if (!game) return null;

          const progressColor = getProgressColor(userProgress.progressPercentage);

          return (
            <div
              key={userProgress.gameId}
              className="glass-card p-4 hover:bg-opacity-90 transition-all duration-200 cursor-pointer"
              onClick={() => onGameClick?.(userProgress.gameId)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {game.name.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-text">{game.name}</h3>
                      <p className="text-sm text-gray-400">{game.genre} • {game.blockchain}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {userProgress.progressPercentage === 100 && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                      <span className={`text-sm font-medium ${progressColor.split(' ')[0]}`}>
                        {userProgress.progressPercentage}%
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${progressColor.split(' ')[1]}`}
                        style={{ width: `${userProgress.progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>{userProgress.completedSteps.length} steps completed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Last activity {formatLastActivity(userProgress.lastActivity)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
