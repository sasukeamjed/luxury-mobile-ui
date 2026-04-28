import { DraggableScrollRow } from './DraggableScrollRow';
import { cn } from './ui/utils';
import type { Subcategory } from '../data/subcategories';

type Props = {
  items: Subcategory[];
  activeId: string | null;
  onSelect: (id: string) => void;
};

export function SubcategoryChips({ items, activeId, onSelect }: Props) {
  if (items.length === 0) return null;

  return (
    <div className="mt-5">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a4726]/75">
        Refine
      </p>
      <DraggableScrollRow className="flex gap-2 pb-1 -mx-6 px-6">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={cn(
                'shrink-0 rounded-full px-4 py-2.5 text-xs font-medium transition-all duration-200',
                'border shadow-sm',
                isActive
                  ? 'border-transparent bg-gradient-to-br from-[#9a4726] to-[#b85a32] text-white shadow-[0_4px_14px_rgba(154,71,38,0.35)]'
                  : 'border-[rgba(154,71,38,0.12)] bg-white/90 text-[#5c4033] hover:border-[#9a4726]/35 hover:bg-[#fffdfb] hover:shadow-[0_2px_10px_rgba(154,71,38,0.08)]',
              )}
            >
              {item.label}
            </button>
          );
        })}
      </DraggableScrollRow>
    </div>
  );
}
