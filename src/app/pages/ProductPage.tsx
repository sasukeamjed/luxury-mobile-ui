import { useState, type UIEvent } from 'react';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import appPatterns from '../../assets/app_patterns.png';
import appPatterns2 from '../../assets/app_patterns_2.png';
import { ProductCard } from '../components/ProductCard';
import { NavigationBar } from '../components/NavigationBar';
import { DraggableScrollRow } from '../components/DraggableScrollRow';
import { getProductById, PRODUCTS } from '../data/products';

const APP_BAR_PAD_TOP = 116;

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [appBarScrolled, setAppBarScrolled] = useState(false);
  const product = productId ? getProductById(productId) : undefined;

  const handleMainScroll = (event: UIEvent<HTMLDivElement>) => {
    const next = event.currentTarget.scrollTop > 12;
    if (next !== appBarScrolled) setAppBarScrolled(next);
  };

  const related = product
    ? PRODUCTS.filter((p) => p.mainCategoryId === product.mainCategoryId && p.id !== product.id).slice(0, 6)
    : [];

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] flex items-center justify-center p-4">
      <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-[3rem] border border-[rgba(255,255,255,0.06)] bg-[#fbf8f5] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        {/* Full-frame pattern fill (same language as home) */}
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <img
            src={appPatterns2}
            alt=""
            aria-hidden
            className="absolute left-1/2 top-[-86px] w-[138%] max-w-none -translate-x-1/2 opacity-[0.52] mix-blend-multiply"
          />
          <img
            src={appPatterns}
            alt=""
            aria-hidden
            className="absolute -bottom-24 -left-10 w-[118%] max-w-none opacity-[0.18] mix-blend-multiply"
          />
          <img
            src={appPatterns}
            alt=""
            aria-hidden
            className="absolute -right-16 top-[38%] w-[72%] max-w-none rotate-180 opacity-[0.1] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f5]/55 via-[#fbf8f5]/75 to-[#fbf8f5]/95" />
        </div>

        {/* Top bar: overlays scroll; gradient + blur once content tucks underneath */}
        <div
          className={`absolute left-0 right-0 top-0 z-30 px-6 pt-2 transition-all duration-300 ${
            appBarScrolled
              ? 'border-b border-[rgba(0,0,0,0.06)] bg-gradient-to-b from-[#fbf8f5]/96 via-[#fbf8f5]/82 to-[#fbf8f5]/35 pb-3 shadow-[0_10px_28px_rgba(61,29,22,0.07)] backdrop-blur-md backdrop-saturate-150'
              : 'border-b border-transparent bg-transparent pb-2'
          }`}
        >
          <div className="flex h-12 items-center justify-between">
            <span className="text-sm text-[#1a1a1a]">9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
              <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
              <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/90 px-3 py-2.5 text-sm font-medium text-[#9a4726] shadow-[0_4px_16px_rgba(0,0,0,0.05)] backdrop-blur-sm transition hover:bg-white"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white/90 shadow-[0_4px_14px_rgba(0,0,0,0.05)] backdrop-blur-sm"
                aria-label="Share"
              >
                <Share2 className="h-[18px] w-[18px] text-[#9a4726]" />
              </button>
              <button
                type="button"
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white/90 shadow-[0_4px_14px_rgba(0,0,0,0.05)] backdrop-blur-sm"
                aria-label="Wishlist"
              >
                <Heart className="h-[18px] w-[18px] text-[#9a4726]" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 z-10 overflow-y-auto overscroll-y-contain px-6 pb-36"
          style={{ paddingTop: APP_BAR_PAD_TOP }}
          onScroll={handleMainScroll}
        >
          {/* Hero image — terracotta frame like home promo */}
          <div className="relative mt-5 overflow-hidden rounded-[1.75rem] shadow-[0_16px_48px_rgba(105,39,21,0.22)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7f331d]/90 via-[#9a4726]/50 to-[#bf6338]/40" />
            <div className="absolute inset-0 opacity-25">
              <svg viewBox="0 0 400 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                <path
                  d="M 0 100 Q 50 60 100 100 T 200 100 T 300 100 T 400 100"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
                <path
                  d="M 0 120 Q 60 80 120 120 T 240 120"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </div>
            <img
              src={appPatterns}
              alt=""
              aria-hidden
              className="absolute -bottom-8 -left-6 w-[65%] max-w-none opacity-[0.2] invert mix-blend-soft-light"
            />
            <img
              src={product.imageUrl}
              alt={product.name}
              className="relative z-[1] h-[300px] w-full object-cover"
            />
          </div>

          {/* Detail card */}
          <div className="relative -mt-6 rounded-3xl border border-[rgba(154,71,38,0.1)] bg-white/90 p-6 shadow-[0_12px_40px_rgba(61,29,22,0.08)] backdrop-blur-md">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#FEE0CF]/55 px-3 py-1 text-xs font-medium text-[#9a4726]">
                {product.category}
              </span>
              <span className="rounded-full border border-[rgba(154,71,38,0.15)] bg-[#faf8f5] px-3 py-1 text-[11px] text-[#737373]">
                LUXE
              </span>
            </div>
            <h1 className="text-xl font-semibold leading-snug text-[#1a1a1a]">{product.name}</h1>
            <p className="mt-2 text-2xl font-medium text-[#9a4726]">{product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#5f5f5f]">{product.description}</p>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[rgba(154,71,38,0.1)] pt-6 text-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#a3a3a3]">Gift wrap</p>
                <p className="mt-1 text-xs font-medium text-[#1a1a1a]">Complimentary</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#a3a3a3]">Delivery</p>
                <p className="mt-1 text-xs font-medium text-[#1a1a1a]">Same day*</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#a3a3a3]">Quality</p>
                <p className="mt-1 text-xs font-medium text-[#1a1a1a]">Handpicked</p>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-2xl bg-gradient-to-br from-[#9a4726] to-[#b85a32] py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(154,71,38,0.35)] transition hover:shadow-[0_10px_32px_rgba(154,71,38,0.42)]"
            >
              Add to Gift Cart
            </button>
            <p className="mt-3 text-center text-[10px] text-[#a3a3a3]">*Where available. Message at checkout.</p>
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-base font-semibold text-[#1a1a1a]">You may also like</h2>
                <Link to="/" className="text-sm text-[#9a4726]">
                  Shop all
                </Link>
              </div>
              <DraggableScrollRow className="flex gap-3 -mx-6 px-6 pb-2">
                {related.map((p) => (
                  <ProductCard
                    key={p.id}
                    productId={p.id}
                    name={p.name}
                    price={p.price}
                    imageUrl={p.imageUrl}
                  />
                ))}
              </DraggableScrollRow>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#fbf8f5] via-[#fbf8f5] to-transparent px-6 pb-8 pt-8">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}
