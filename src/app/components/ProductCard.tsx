import { type KeyboardEventHandler } from 'react';
import { Link } from 'react-router';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import { cn } from './ui/utils';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  productId?: string;
  onClick?: () => void;
}

const shellClass = 'relative min-w-[160px] shrink-0';

const linkClassName =
  'block bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.04)] overflow-hidden cursor-pointer text-left text-inherit no-underline';

export function ProductCard({ name, price, imageUrl, productId, onClick }: ProductCardProps) {
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (productId) return;
    if (!onClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  const mediaAndMeta = (
    <>
      <div className="relative h-[160px] bg-gradient-to-br from-[#fafafa] to-[#FEE0CF]/10">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-sm text-[#1a1a1a] mb-1">{name}</h4>
        <p className="text-[#9a4726]">{price}</p>
      </div>
    </>
  );

  if (productId) {
    return (
      <div className={shellClass}>
        <Link
          to={`/product/${productId}`}
          className={linkClassName}
          // Prevent parent DraggableScrollRow from capturing pointer + stealing navigation
          onPointerDown={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
        >
          {mediaAndMeta}
        </Link>
        <button
          type="button"
          className="absolute top-[14px] right-[14px] z-20 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-white transition-all"
          aria-label="Add to favorites"
          onClick={(event) => event.stopPropagation()}
        >
          <Heart className="w-4 h-4 text-[#9a4726]" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(shellClass, linkClassName, 'cursor-pointer')}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {mediaAndMeta}
      <button
        type="button"
        className="absolute top-[14px] right-[14px] z-20 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-white transition-all"
        aria-label="Add to favorites"
        onClick={(event) => event.stopPropagation()}
      >
        <Heart className="w-4 h-4 text-[#9a4726]" />
      </button>
    </div>
  );
}
