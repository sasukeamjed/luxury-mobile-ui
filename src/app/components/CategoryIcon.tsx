import { LucideIcon } from 'lucide-react';

import { cn } from './ui/utils';

interface CategoryIconProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function CategoryIcon({ icon: Icon, label, active, onClick }: CategoryIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex shrink-0 min-w-[72px] flex-col items-center gap-2 rounded-2xl px-1 py-1 transition-all duration-200',
        active && 'bg-[#FEE0CF]/25 ring-2 ring-[#9a4726]/30 ring-offset-2 ring-offset-[#fbf8f5]',
      )}
    >
      <div
        className={cn(
          'flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FEE0CF]/40 to-[#FEE0CF]/20 transition-all',
          active
            ? 'from-[#9a4726]/20 to-[#b85a32]/15 shadow-[0_4px_16px_rgba(154,71,38,0.2)]'
            : 'hover:from-[#FEE0CF]/60 hover:to-[#FEE0CF]/40',
        )}
      >
        <Icon className={cn('h-7 w-7', active ? 'text-[#9a4726]' : 'text-[#9a4726]')} />
      </div>
      <span className={cn('text-xs', active ? 'font-semibold text-[#9a4726]' : 'text-[#737373]')}>
        {label}
      </span>
    </button>
  );
}
