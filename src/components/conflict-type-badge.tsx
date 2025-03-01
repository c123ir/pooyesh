import { cn } from '../lib/utils';
import { conflictTypes } from '../data/mock/trade-conflicts';

interface ConflictTypeBadgeProps {
  type: string;
  className?: string;
}

export function ConflictTypeBadge({ type, className }: ConflictTypeBadgeProps) {
  const typeInfo = conflictTypes.find(t => t.id === type);
  
  if (!typeInfo) return null;

  const Icon = typeInfo.icon;

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
      type === 'price-violation' && "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
      type === 'no-permit' && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
      type === 'trade-interference' && "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300",
      type === 'unethical-behavior' && "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
      className
    )}>
      <Icon className="h-3.5 w-3.5" />
      <span>{typeInfo.title}</span>
    </div>
  );
}