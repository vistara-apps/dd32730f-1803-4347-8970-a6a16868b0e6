'use client';

import { Guide } from '@/lib/types';
import { BookOpen, Wallet, DollarSign } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
  variant?: 'walletSetup' | 'assetAcquisition' | 'default';
}

export function GuideCard({ guide, variant = 'default' }: GuideCardProps) {
  const getIcon = () => {
    switch (variant) {
      case 'walletSetup':
        return <Wallet className="w-6 h-6 text-primary" />;
      case 'assetAcquisition':
        return <DollarSign className="w-6 h-6 text-accent" />;
      default:
        return <BookOpen className="w-6 h-6 text-gray-400" />;
    }
  };

  const getBorderColor = () => {
    switch (variant) {
      case 'walletSetup':
        return 'border-primary';
      case 'assetAcquisition':
        return 'border-accent';
      default:
        return 'border-gray-700';
    }
  };

  return (
    <div className={`glass-card p-4 hover:bg-opacity-90 transition-all duration-200 cursor-pointer ${getBorderColor()}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-text mb-2">{guide.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-3">
            {guide.content}
          </p>
          <div className="mt-3">
            <span className="inline-block bg-surface text-gray-300 text-xs px-2 py-1 rounded-full">
              {guide.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
