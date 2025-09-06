'use client';

import { Game, Rating, OnboardingStep } from '@/lib/types';
import { RatingStars } from './RatingStars';
import { StepListItem } from './StepListItem';
import { ArrowLeft, ExternalLink, Users, Star } from 'lucide-react';
import { useState } from 'react';

interface GameDetailProps {
  game: Game;
  ratings: Rating[];
  onboardingSteps: OnboardingStep[];
  onBack: () => void;
}

export function GameDetail({ game, ratings, onboardingSteps, onBack }: GameDetailProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'onboarding'>('overview');

  const handleToggleStep = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const completionPercentage = onboardingSteps.length > 0 
    ? (completedSteps.size / onboardingSteps.length) * 100 
    : 0;

  return (
    <div className="animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-surface rounded-md transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-xl font-semibold text-text">Game Details</h1>
      </div>

      {/* Game Header */}
      <div className="glass-card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {game.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-text mb-2">{game.name}</h2>
            <p className="text-gray-400 mb-3">{game.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-surface px-2 py-1 rounded text-gray-300">
                {game.genre}
              </span>
              <span className="bg-surface px-2 py-1 rounded text-gray-300">
                {game.blockchain}
              </span>
              <span className="bg-accent bg-opacity-20 text-accent px-2 py-1 rounded">
                {game.p2eMechanics}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center gap-4">
            <RatingStars rating={game.averageRating} size="lg" />
            <div className="text-sm text-gray-400">
              <Users className="w-4 h-4 inline mr-1" />
              {game.totalRatings} reviews
            </div>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Visit Game
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-surface rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'reviews', label: 'Reviews' },
          { id: 'onboarding', label: 'Get Started' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'text-gray-400 hover:text-text'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text mb-4">About {game.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              {game.description} This game offers unique {game.p2eMechanics.toLowerCase()} mechanics 
              on the {game.blockchain} blockchain, making it a great choice for {game.genre.toLowerCase()} 
              enthusiasts looking to earn while they play.
            </p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-text mb-4">Game Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{game.averageRating.toFixed(1)}</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{game.totalRatings}</div>
                <div className="text-sm text-gray-400">Total Reviews</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-4">
          {ratings.length > 0 ? (
            ratings.map((rating) => (
              <div key={rating.ratingId} className="glass-card p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {rating.user.displayName.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-text">{rating.user.displayName}</span>
                  </div>
                  <RatingStars rating={rating.score} size="sm" />
                </div>
                <p className="text-gray-400 text-sm">{rating.reviewText}</p>
                <div className="text-xs text-gray-500 mt-2">
                  {new Date(rating.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))
          ) : (
            <div className="glass-card p-8 text-center">
              <Star className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No reviews yet. Be the first to review this game!</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'onboarding' && (
        <div className="space-y-6">
          {/* Progress */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-text">Getting Started Progress</h3>
              <span className="text-sm text-gray-400">
                {completedSteps.size}/{onboardingSteps.length} completed
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {onboardingSteps.map((step) => (
              <StepListItem
                key={step.stepId}
                step={step}
                variant={completedSteps.has(step.stepId) ? 'completed' : 'pending'}
                onToggleComplete={handleToggleStep}
              />
            ))}
          </div>

          {completionPercentage === 100 && (
            <div className="glass-card p-6 bg-accent bg-opacity-10 border-accent">
              <div className="text-center">
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-lg font-semibold text-accent mb-2">
                  Congratulations!
                </h3>
                <p className="text-gray-300">
                  You&apos;re all set up and ready to start playing {game.name}!
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
