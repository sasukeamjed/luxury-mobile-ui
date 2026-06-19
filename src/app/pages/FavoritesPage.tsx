import { useState } from 'react';
import { ChevronLeft, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { MobileShell } from '../components/MobileShell';
import { FAVORITE_PRODUCT_IDS, getFavoriteProducts } from '../data/favorites';
import type { Product } from '../data/products';

function FavoriteItem({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex items-center gap-3 rounded-2xl border border-[#eadfd7] bg-white p-3 shadow-[0_6px_16px_rgba(154,71,38,0.08)] transition hover:shadow-[0_10px_20px_rgba(154,71,38,0.14)]"
    >
      <img src={product.imageUrl} alt={product.name} className="h-16 w-16 rounded-xl object-cover" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#1a1a1a]">{product.name}</p>
        <p className="mt-1 text-xs text-[#8b817a]">{product.category}</p>
        <p className="mt-1 text-sm font-medium text-[#9a4726]">{product.price}</p>
      </div>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-[0_6px_14px_rgba(0,0,0,0.24)]">
        <ShoppingCart className="h-4 w-4" />
      </div>
    </Link>
  );
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(getFavoriteProducts());

  const removeFavorite = (productId: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <MobileShell>
      <div className="flex h-12 items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-2 text-sm font-medium text-[#9a4726]"
        >
          <ChevronLeft className="h-4 w-4" />
          Home
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white p-5 shadow-[0_12px_34px_rgba(61,29,22,0.08)]">
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9a4726] to-[#b85a32] text-white shadow-[0_4px_12px_rgba(154,71,38,0.24)]">
            <Heart className="h-6 w-6 fill-white" />
            {favorites.length > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1a1a1a] px-1 text-[10px] font-semibold text-white">
                {favorites.length}
              </span>
            ) : null}
          </div>
          <div>
            <h1 className="text-[#1a1a1a]">Favorites</h1>
            <p className="text-xs text-[#737373]">
              {favorites.length > 0
                ? `${favorites.length} saved item${favorites.length === 1 ? '' : 's'}`
                : 'No saved items yet'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <div key={product.id} className="relative">
              <FavoriteItem product={product} />
              <button
                type="button"
                onClick={() => removeFavorite(product.id)}
                className="absolute right-14 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl border border-[rgba(154,71,38,0.14)] bg-white text-[#9a4726] shadow-[0_4px_12px_rgba(154,71,38,0.08)]"
                aria-label={`Remove ${product.name} from favorites`}
              >
                <Heart className="h-4 w-4 fill-[#9a4726]" />
              </button>
            </div>
          ))
        ) : (
          <div className="rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white px-6 py-10 text-center shadow-[0_12px_34px_rgba(61,29,22,0.06)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fee0cf]/45 text-[#9a4726]">
              <Heart className="h-7 w-7" />
            </div>
            <p className="mt-4 text-sm font-medium text-[#1a1a1a]">Your favorites list is empty</p>
            <p className="mt-1 text-xs text-[#8a8a8a]">
              Tap the heart on any product to save it here.
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex rounded-2xl bg-gradient-to-br from-[#b05a34] via-[#9a4726] to-[#7f331d] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(154,71,38,0.34)]"
            >
              Browse gifts
            </Link>
          </div>
        )}
      </div>
    </MobileShell>
  );
}
