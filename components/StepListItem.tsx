'use client';

import { OnboardingStep } from '@/lib/types';
import { CheckCircle, Circle, ExternalLink, Clock, AlertCircle, Play, BookOpen, Zap } from 'lucide-react';

interface StepListItemProps {
  step: OnboardingStep;
  variant?: 'completed' | 'pending';
  onClick?: (step: OnboardingStep) => void;
  onToggleComplete?: (stepId: string) => void;
  showPrerequisites?: boolean;
  canStart?: boolean;
}

export function StepListItem({ 
  step, 
  variant = 'pending', 
  onClick,
  onToggleComplete,
  showPrerequisites = false,
  canStart = true
}: StepListItemProps) {
  const isCompleted = variant === 'completed' || step.completed;

  const getStepIcon = () => {
    switch (step.type) {
      case 'wallet':
        return '🔐';
      case 'asset':
        return '💰';
      case 'gameplay':
        return '🎮';
      case 'setup':
        return '⚙️';
      default:
        return '📋';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const handleClick = () => {
    if (onClick && canStart) {
      onClick(step);
    }
  };

  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(step.stepId);
    }
  };

  const hasPrerequisites = step.prerequisites && step.prerequisites.length > 0;

  return (
    <div 
      className={`step-item ${isCompleted ? 'completed' : ''} ${
        !canStart ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-opacity-80'
      } transition-all duration-200 group`}
      onClick={handleClick}
    >
      <div className="flex items-start gap-3 flex-1">
        <div className="flex-shrink-0 mt-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            className="transition-colors duration-200"
          >
            {isCompleted ? (
              <CheckCircle className="w-5 h-5 text-accent" />
            ) : !canStart ? (
              <AlertCircle className="w-5 h-5 text-yellow-500" />
            ) : (
              <Circle className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
            )}
          </button>
        </div>
        
        <div className="flex items-center gap-2 text-lg flex-shrink-0">
          <span>{getStepIcon()}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <h4 className={`text-sm font-semibold ${isCompleted ? 'text-accent' : 'text-text'}`}>
              {step.title || `Step ${step.order}`}
            </h4>
            <div className="flex items-center gap-1 ml-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(step.difficulty)}`}>
                {step.difficulty}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mb-2 line-clamp-2">
            {step.description}
          </p>
          
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span className="capitalize font-medium">{step.type}</span>
              <span>•</span>
              <span>Step {step.order}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{step.estimatedTime}</span>
            </div>
            
            {step.guideUrl && (
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>Guide available</span>
              </div>
            )}
          </div>

          {showPrerequisites && hasPrerequisites && (
            <div className="mt-2 p-2 bg-surface rounded text-xs">
              <div className="flex items-center gap-1 text-yellow-400 mb-1">
                <AlertCircle className="w-3 h-3" />
                <span className="font-medium">Prerequisites required</span>
              </div>
              <p className="text-gray-400">
                Complete steps {step.prerequisites?.join(', ')} first
              </p>
            </div>
          )}

          {!canStart && !isCompleted && (
            <div className="mt-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs">
              <div className="flex items-center gap-1 text-yellow-400">
                <AlertCircle className="w-3 h-3" />
                <span className="font-medium">Prerequisites not met</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          {canStart && !isCompleted && (
            <button className="p-1 hover:bg-primary hover:text-white rounded transition-colors">
              <Play className="w-4 h-4" />
            </button>
          )}
          
          {step.guideUrl && (
            <a
              href={step.guideUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 hover:bg-surface rounded transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-gray-500 hover:text-primary" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
