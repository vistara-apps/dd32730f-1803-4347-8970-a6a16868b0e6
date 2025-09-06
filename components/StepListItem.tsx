'use client';

import { OnboardingStep } from '@/lib/types';
import { CheckCircle, Circle, ExternalLink } from 'lucide-react';

interface StepListItemProps {
  step: OnboardingStep;
  variant?: 'completed' | 'pending';
  onToggleComplete?: (stepId: string) => void;
}

export function StepListItem({ step, variant = 'pending', onToggleComplete }: StepListItemProps) {
  const isCompleted = variant === 'completed' || step.completed;

  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(step.stepId);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
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

  return (
    <div className={`step-item ${isCompleted ? 'completed' : ''}`}>
      <button
        onClick={handleToggle}
        className="flex-shrink-0 transition-colors duration-200"
      >
        {isCompleted ? (
          <CheckCircle className="w-5 h-5 text-accent" />
        ) : (
          <Circle className="w-5 h-5 text-gray-500 hover:text-accent" />
        )}
      </button>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getTypeIcon(step.type)}</span>
          <span className={`font-medium ${isCompleted ? 'text-accent' : 'text-text'}`}>
            Step {step.order}
          </span>
        </div>
        <p className={`text-sm mt-1 ${isCompleted ? 'text-gray-300' : 'text-gray-400'}`}>
          {step.description}
        </p>
      </div>
      
      {step.guideUrl && (
        <button className="flex-shrink-0 p-2 hover:bg-gray-700 rounded-md transition-colors duration-200">
          <ExternalLink className="w-4 h-4 text-gray-500" />
        </button>
      )}
    </div>
  );
}
