import { type UIEvent, useEffect, useMemo, useState } from 'react';
import { Candy, Flower2, Gift, Search, Sparkles, Heart } from 'lucide-react';
import appPatterns from '../../assets/app_patterns.png';
import appPatterns2 from '../../assets/app_patterns_2.png';
import { CategoryIcon } from '../components/CategoryIcon';
import { DraggableScrollRow } from '../components/DraggableScrollRow';
import { SubcategoryChips } from '../components/SubcategoryChips';
import { ProductCard } from '../components/ProductCard';
import { NavigationBar } from '../components/NavigationBar';
import { type MainCategoryId, getProductsForMainCategory, getProductsForSubcategory, PRODUCTS } from '../data/products';
import { SUBCATEGORIES_BY_MAIN } from '../data/subcategories';

export default function HomePage() {
  const [isAppBarCollapsed, setIsAppBarCollapsed] = useState(false);
  const [activeMainCategoryId, setActiveMainCategoryId] = useState<MainCategoryId>('gifts');
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<string | null>('hampers');

  const mainCategories = [
    { id: 'gifts', icon: Gift, label: 'Gifts' },
    { id: 'flowers', icon: Flower2, label: 'Flowers' },
    { id: 'chocolate', icon: Candy, label: 'Chocolate' },
    { id: 'premium', icon: Sparkles, label: 'Premium' },
    { id: 'romance', icon: Heart, label: 'Romance' },
  ];

  const subcategories = SUBCATEGORIES_BY_MAIN[activeMainCategoryId] ?? [];

  useEffect(() => {
    const subs = SUBCATEGORIES_BY_MAIN[activeMainCategoryId] ?? [];
    setActiveSubcategoryId(subs[0]?.id ?? null);
  }, [activeMainCategoryId]);

  const activeSubLabel = useMemo(
    () => subcategories.find((s) => s.id === activeSubcategoryId)?.label ?? '',
    [subcategories, activeSubcategoryId],
  );

  const relatedSubcategoryProducts = useMemo(
    () => getProductsForSubcategory(activeSubcategoryId, activeMainCategoryId),
    [activeSubcategoryId, activeMainCategoryId],
  );
  const activeMainProducts = useMemo(
    () => getProductsForMainCategory(activeMainCategoryId),
    [activeMainCategoryId],
  );
  const featuredProducts = useMemo(
    () => relatedSubcategoryProducts.slice(0, 8),
    [relatedSubcategoryProducts],
  );
  const occasionProducts = useMemo(() => {
    const base = activeMainProducts.filter(
      (product) => !featuredProducts.some((featured) => featured.id === product.id),
    );
    return [...base, ...featuredProducts].slice(0, 8);
  }, [activeMainProducts, featuredProducts]);
  const heroGiftImage = useMemo(
    () => PRODUCTS.find((product) => product.mainCategoryId === 'gifts')?.imageUrl ?? PRODUCTS[0]?.imageUrl ?? '',
    [],
  );

  const handleMainScroll = (event: UIEvent<HTMLDivElement>) => {
    const nextCollapsed = event.currentTarget.scrollTop > 28;
    if (nextCollapsed !== isAppBarCollapsed) {
      setIsAppBarCollapsed(nextCollapsed);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] min-h-[844px] bg-[#fbf8f5] rounded-[3rem] shadow-[0_24px_80px_rgba(0,0,0,0.38)] overflow-hidden relative border border-[rgba(255,255,255,0.06)]">
        <div
          className={`absolute left-0 right-0 top-0 z-30 overflow-hidden border-b border-[rgba(0,0,0,0.05)] bg-[#fbf8f5] shadow-[0_6px_18px_rgba(0,0,0,0.05)] transition-all duration-300 ${
            isAppBarCollapsed ? 'h-[116px]' : 'h-[210px]'
          }`}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src={appPatterns2}
              alt=""
              aria-hidden
              className={`absolute left-1/2 max-w-none -translate-x-1/2 transition-all duration-300 ${
                isAppBarCollapsed
                  ? 'top-[-118px] w-[128%] opacity-[0.4] mix-blend-multiply'
                  : 'top-[-86px] w-[138%] opacity-[0.58] mix-blend-multiply'
              }`}
            />
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                isAppBarCollapsed
                  ? 'bg-gradient-to-b from-[#fbf8f5]/38 via-[#fbf8f5]/64 to-[#fbf8f5]/92'
                  : 'bg-gradient-to-b from-[#fbf8f5]/8 via-[#fbf8f5]/45 to-[#fbf8f5]/90'
              }`}
            />
          </div>
          <div className="relative z-10 px-6">
            <div className="h-12 flex items-center justify-between px-2 pt-2">
              <span className="text-sm">9:41</span>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-3 border border-[#1a1a1a] rounded-sm"></div>
                <div className="w-4 h-3 border border-[#1a1a1a] rounded-sm"></div>
                <div className="w-6 h-3 border border-[#1a1a1a] rounded-sm bg-[#1a1a1a]"></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9a4726] to-[#b85a32] flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-lg"></div>
                </div>
                <div>
                  <h1 className="text-[#1a1a1a]">LUXE</h1>
                  <p className="text-xs text-[#737373]">Gifts, Flowers & Chocolate</p>
                </div>
              </div>
              <button className="w-11 h-11 rounded-xl bg-white/85 backdrop-blur-sm border border-[rgba(0,0,0,0.06)] shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center relative">
                <Heart className="w-5 h-5 text-[#9a4726]" />
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#9a4726] flex items-center justify-center">
                  <span className="text-[10px] text-white">3</span>
                </div>
              </button>
            </div>

            <div
              className={`relative transition-all duration-300 ${
                isAppBarCollapsed
                  ? 'mt-1 max-h-0 translate-y-[-8px] opacity-0 pointer-events-none'
                  : 'mt-4 max-h-20 translate-y-0 opacity-100'
              }`}
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#737373]" />
              <input
                type="text"
                placeholder="Search luxury products..."
                className="w-full h-14 pl-14 pr-5 rounded-2xl bg-white/90 backdrop-blur-md border border-[rgba(0,0,0,0.07)] placeholder:text-[#737373] shadow-[0_4px_18px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#9a4726]/20 focus:border-[#9a4726]/40 transition-all"
              />
            </div>
          </div>
        </div>

        <div
          className="h-[calc(844px-96px)] overflow-y-auto relative z-10"
          onScroll={handleMainScroll}
        >
          <div
            className={`px-6 pb-32 space-y-8 transition-all duration-300 ${
              isAppBarCollapsed ? 'pt-[126px]' : 'pt-[220px]'
            }`}
          >
            <div className="h-[208px] rounded-3xl p-5 shadow-[0_16px_50px_rgba(105,39,21,0.38)] relative overflow-hidden flex items-end">
              <img
                src={heroGiftImage}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7f331d]/46 via-[#9a4726]/38 to-[#bf6338]/44" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e170d]/58 via-[#6f2d18]/20 to-transparent" />
              <div className="absolute inset-0 opacity-16">
                <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <path d="M 0 150 Q 50 100 100 150 T 200 150 T 300 150 T 400 150" stroke="white" strokeWidth="3" fill="none" opacity="0.6"/>
                  <path d="M 0 160 Q 60 120 120 160 T 240 160 T 360 160" stroke="white" strokeWidth="2.5" fill="none" opacity="0.5"/>
                  <path d="M 0 140 Q 40 80 80 140 T 160 140 T 240 140 T 320 140 T 400 140" stroke="white" strokeWidth="3.5" fill="none" opacity="0.45"/>
                  <path d="M 0 170 Q 70 130 140 170 T 280 170 T 420 170" stroke="white" strokeWidth="2.8" fill="none" opacity="0.55"/>
                  <path d="M 0 130 Q 55 90 110 130 T 220 130 T 330 130 T 440 130" stroke="white" strokeWidth="3.2" fill="none" opacity="0.48"/>
                  <path d="M 0 180 Q 45 140 90 180 T 180 180 T 270 180 T 360 180" stroke="white" strokeWidth="2.6" fill="none" opacity="0.52"/>
                  <path d="M 0 120 Q 65 70 130 120 T 260 120 T 390 120" stroke="white" strokeWidth="3" fill="none" opacity="0.5"/>
                  <path d="M 0 110 Q 80 60 160 110 T 320 110" stroke="white" strokeWidth="2.5" fill="none" opacity="0.46"/>
                  <path d="M 0 190 Q 50 150 100 190 T 200 190 T 300 190 T 400 190" stroke="white" strokeWidth="2.8" fill="none" opacity="0.54"/>
                </svg>
              </div>
              <img
                src={appPatterns}
                alt=""
                aria-hidden
                className="absolute -left-8 -bottom-10 w-[72%] max-w-none opacity-[0.16] invert mix-blend-soft-light"
              />
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/8 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/8 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10 max-w-[72%]">
                <div className="inline-block px-3 py-1 rounded-full bg-white/24 text-white text-xs mb-2">
                  Curated Picks
                </div>
                <h2 className="text-white mb-1.5">Luxury Gifting Collection</h2>
                <p className="text-white/90 text-sm leading-relaxed mb-3">
                  Discover premium bouquets, handcrafted chocolate, and unforgettable gifts
                </p>
                <button className="bg-white text-[#9a4726] px-5 py-2.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)] transition-all">
                  Explore Gifts
                </button>
              </div>
            </div>

            <div className="space-y-5">
              <div className="mb-1 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-[#1a1a1a]">Categories</h3>
                  <p className="mt-1 text-xs text-[#737373]">Choose a focus, then refine below</p>
                </div>
              </div>
              <DraggableScrollRow className="flex gap-3 pb-1 pt-2 -mx-6 px-6">
                {mainCategories.map((category) => (
                  <CategoryIcon
                    key={category.id}
                    icon={category.icon}
                    label={category.label}
                    active={activeMainCategoryId === category.id}
                    onClick={() => setActiveMainCategoryId(category.id)}
                  />
                ))}
              </DraggableScrollRow>
              <div className="mt-2">
                <SubcategoryChips
                  items={subcategories}
                  activeId={activeSubcategoryId}
                  onSelect={setActiveSubcategoryId}
                />
              </div>

              {activeSubcategoryId && (
                <div className="mt-2">
                  <div className="mb-3 flex items-baseline justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a4726]/80">
                        Curated for you
                      </p>
                      <h4 className="mt-1 text-sm font-semibold text-[#1a1a1a]">
                        {activeSubLabel ? `Related to ${activeSubLabel}` : 'Related picks'}
                      </h4>
                    </div>
                    <span className="text-[11px] text-[#a3a3a3]">
                      {relatedSubcategoryProducts.length} items
                    </span>
                  </div>
                  {relatedSubcategoryProducts.length > 0 ? (
                    <DraggableScrollRow className="flex gap-3 -mx-6 px-6 pb-1">
                      {relatedSubcategoryProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          productId={product.id}
                          name={product.name}
                          price={product.price}
                          imageUrl={product.imageUrl}
                        />
                      ))}
                    </DraggableScrollRow>
                  ) : (
                    <p className="text-center text-xs text-[#737373] py-6">
                      No matches for this filter — try another subcategory.
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="relative -mx-6 overflow-hidden pt-1 pb-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-0 overflow-hidden">
                <img
                  src={appPatterns}
                  alt=""
                  aria-hidden
                  className="absolute -left-6 top-[42%] w-[92%] max-w-none -translate-y-1/2 opacity-[0.34]"
                />
                <img
                  src={appPatterns}
                  alt=""
                  aria-hidden
                  className="absolute -right-6 top-[42%] w-[92%] max-w-none -translate-y-1/2 rotate-180 opacity-[0.34]"
                />
                <img
                  src={appPatterns}
                  alt=""
                  aria-hidden
                  className="absolute left-1/2 top-[42%] w-[122%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.22]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f5]/0 via-[#fbf8f5]/22 to-[#fbf8f5]/76" />
              </div>
              <div className="relative z-10 mb-4 flex items-center justify-between px-6">
                <h3 className="text-[#1a1a1a]">Featured Products</h3>
                <button className="text-sm text-[#9a4726]">View All</button>
              </div>
              <DraggableScrollRow className="relative z-10 flex gap-4 pb-2 px-6">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                  />
                ))}
              </DraggableScrollRow>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#1a1a1a]">Occasion Favorites</h3>
                <button className="text-sm text-[#9a4726]">View All</button>
              </div>
              <DraggableScrollRow className="flex gap-4 pb-2 -mx-6 px-6">
                {occasionProducts.map((product) => (
                  <ProductCard
                    key={`fav-${product.id}`}
                    productId={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                  />
                ))}
              </DraggableScrollRow>
            </div>
          </div>
        </div>

        {/* Fade scroll behind nav — must sit *below* corner pattern or the cream covers it */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[18] h-[280px] bg-gradient-to-t from-[#fbf8f5] via-[#fbf8f5]/92 to-transparent"
          aria-hidden
        />

        <div className="absolute bottom-0 left-0 right-0 z-[22] px-6 pb-8 pt-6">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}

