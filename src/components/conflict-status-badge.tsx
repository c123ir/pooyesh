import { cn } from '../lib/utils';
import { conflictStatuses } from '../data/mock/trade-conflicts';

interface ConflictStatusBadgeProps {
  status: string;
  className?: string;
}

export function ConflictStatusBadge({ status, className }: ConflictStatusBadgeProps) {
  const statusInfo = conflictStatuses.find(s => s.id === status);
  
  if (!statusInfo) return null;

  const Icon = statusInfo.icon;

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
      status === 'pending' && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
      status === 'investigating' && "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
      status === 'resolved' && "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
      status === 'rejected' && "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
      className
    )}>
      <Icon className="h-3.5 w-3.5" />
      <span>{statusInfo.title}</span>
    </div>
  );
}