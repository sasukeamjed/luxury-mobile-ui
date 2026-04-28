import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Candy, Flower2, Gift, Heart, ShoppingCart, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import appPatterns2 from '../../assets/app_patterns_2.png';
import appPatterns3Right from '../../assets/app_patterns_3_right.png';
import { DraggableScrollRow } from '../components/DraggableScrollRow';
import { NavigationBar } from '../components/NavigationBar';
import { SUBCATEGORIES_BY_MAIN, type Subcategory } from '../data/subcategories';
import { type MainCategoryId, getProductsForSubcategory } from '../data/products';

type MainCategoryConfig = {
  id: MainCategoryId;
  label: string;
  icon: ReactNode;
  accentClass: string;
};

const MAIN_CATEGORIES: MainCategoryConfig[] = [
  {
    id: 'gifts',
    label: 'Gifts',
    icon: <Gift className="h-5 w-5" />,
    accentClass: 'from-[#9a4726] to-[#b85a32]',
  },
  {
    id: 'flowers',
    label: 'Flowers',
    icon: <Flower2 className="h-5 w-5" />,
    accentClass: 'from-[#9f4e33] to-[#c36b45]',
  },
  {
    id: 'chocolate',
    label: 'Chocolate',
    icon: <Candy className="h-5 w-5" />,
    accentClass: 'from-[#8b3f22] to-[#ab5a35]',
  },
  {
    id: 'premium',
    label: 'Premium',
    icon: <Sparkles className="h-5 w-5" />,
    accentClass: 'from-[#7f331d] to-[#9a4726]',
  },
  {
    id: 'romance',
    label: 'Romance',
    icon: <Heart className="h-5 w-5" />,
    accentClass: 'from-[#a04a2d] to-[#c26a45]',
  },
];

function SubcategoryChip({ subcategory }: { subcategory: Subcategory }) {
  return (
    <span className="rounded-full border border-[#9a4726]/15 bg-[#fffdfa] px-3.5 py-2 text-xs font-medium text-[#5c4033] shadow-[0_2px_10px_rgba(154,71,38,0.06)]">
      {subcategory.label}
    </span>
  );
}

export default function CategoriesPage() {
  const [activeMainCategoryId, setActiveMainCategoryId] = useState<MainCategoryId>('gifts');
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<string | null>(SUBCATEGORIES_BY_MAIN.gifts?.[0]?.id ?? null);
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high'>('popular');

  const activeSubcategories = SUBCATEGORIES_BY_MAIN[activeMainCategoryId] ?? [];

  useEffect(() => {
    setActiveSubcategoryId(activeSubcategories[0]?.id ?? null);
  }, [activeMainCategoryId]);

  const products = useMemo(() => {
    const base = getProductsForSubcategory(activeSubcategoryId, activeMainCategoryId);
    const getPriceValue = (price: string) => Number(price.replace(/[^0-9.]/g, '')) || 0;

    if (sortBy === 'price-low') {
      return [...base].sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    }
    if (sortBy === 'price-high') {
      return [...base].sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));
    }
    return base;
  }, [activeMainCategoryId, activeSubcategoryId, sortBy]);

  const activeMainConfig = MAIN_CATEGORIES.find((item) => item.id === activeMainCategoryId) ?? MAIN_CATEGORIES[0];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] p-4">
      <div className="relative min-h-[844px] w-full max-w-[390px] overflow-hidden rounded-[3rem] border border-[rgba(255,255,255,0.06)] bg-[#fbf8f5] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src={appPatterns2}
            alt=""
            aria-hidden
            className="absolute left-1/2 top-[-100px] w-[138%] max-w-none -translate-x-1/2 opacity-[0.32] mix-blend-multiply"
          />
          <img
            src={appPatterns3Right}
            alt=""
            aria-hidden
            className="absolute -right-14 top-20 w-[66%] max-w-none opacity-[0.14] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f5]/48 via-[#fbf8f5]/86 to-[#fbf8f5]" />
        </div>

        <div className="relative z-10 h-[calc(844px-96px)] overflow-y-auto pb-32">
          <div className="relative h-[204px] overflow-hidden border-b border-[rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3e1b12]/75 via-[#6f341f]/58 to-[#9a4726]/46" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.24),rgba(255,255,255,0)_55%)]" />
            <img
              src={appPatterns2}
              alt=""
              aria-hidden
              className="absolute left-1/2 top-[-128px] w-[145%] max-w-none -translate-x-1/2 opacity-[0.3] invert mix-blend-screen"
            />
            <div className="relative z-10 px-6 pt-10 text-white">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/35 bg-white/10 backdrop-blur-sm"
                  aria-label="Back to home"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <span className="text-xs tracking-[0.18em] uppercase text-white/90">LUXE Categories</span>
                <div className="h-9 w-9 rounded-xl border border-white/20 bg-white/5" />
              </div>
              <h1 className="mt-6 text-[30px] font-semibold leading-none">Gifts, Flowers & Chocolate</h1>
              <p className="mt-2 text-xs text-white/85">Curated luxury selections for every occasion</p>
            </div>
          </div>

          <div className="px-6 pt-4">
            <DraggableScrollRow className="flex gap-2.5 pb-1">
              {MAIN_CATEGORIES.map((category) => {
                const active = category.id === activeMainCategoryId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveMainCategoryId(category.id)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                      active
                        ? 'border-transparent bg-gradient-to-br text-white shadow-[0_6px_18px_rgba(154,71,38,0.35)] ' + category.accentClass
                        : 'border-[#9a4726]/20 bg-[#fffdfa] text-[#6b4e3f]'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </DraggableScrollRow>
          </div>

          <div className="px-6 pt-3">
            <DraggableScrollRow className="flex gap-2 pb-1">
              {activeSubcategories.map((subcategory) => {
                const active = subcategory.id === activeSubcategoryId;
                return (
                  <button
                    key={subcategory.id}
                    type="button"
                    onClick={() => setActiveSubcategoryId(subcategory.id)}
                    className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                      active
                        ? 'border-[#9a4726]/60 bg-[#1a1a1a] text-white shadow-[0_4px_14px_rgba(26,26,26,0.2)]'
                        : 'border-[#9a4726]/20 bg-[#fffdfb] text-[#6b4e3f]'
                    }`}
                  >
                    {subcategory.label}
                  </button>
                );
              })}
            </DraggableScrollRow>
          </div>

          <div className="mt-4 border-y border-[rgba(154,71,38,0.08)] bg-white/72 px-6 py-3 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#7a6c63]">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as 'popular' | 'price-low' | 'price-high')}
                  className="rounded-md border border-[#9a4726]/20 bg-[#fffdfb] px-2 py-1 text-[11px] text-[#5c4033] outline-none"
                >
                  <option value="popular">Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              <span className="text-[#9a4726]/80">Total products ({products.length})</span>
            </div>
          </div>

          <div className="space-y-4 px-6 py-4">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex items-center gap-3 rounded-2xl border border-[#eadfd7] bg-white/90 p-3 shadow-[0_6px_16px_rgba(154,71,38,0.08)] backdrop-blur-sm transition hover:shadow-[0_10px_20px_rgba(154,71,38,0.14)]"
              >
                <img src={product.imageUrl} alt={product.name} className="h-16 w-16 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#1a1a1a]">{product.name}</p>
                  <p className="mt-1 text-xs text-[#8b817a]">{activeMainConfig.label}</p>
                  <p className="mt-1 text-sm font-medium text-[#9a4726]">{product.price}</p>
                </div>
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-[0_6px_14px_rgba(0,0,0,0.24)]"
                >
                  <ShoppingCart className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="px-6 pb-2 pt-1">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a4726]/72">
              All subcategories in this view
            </p>
            <div className="flex flex-wrap gap-2.5">
              {activeSubcategories.map((subcategory) => (
                <SubcategoryChip key={`all-${subcategory.id}`} subcategory={subcategory} />
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[18] h-[280px] bg-gradient-to-t from-[#fbf8f5] via-[#fbf8f5]/92 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-[22] px-6 pb-8 pt-6">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}
