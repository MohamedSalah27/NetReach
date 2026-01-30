import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ShoppingCart, Package, Layers, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { StoreProduct } from '../lib/types/component.types';
import { STORE_PRODUCTS } from '../lib/constants/products';
import { useProductCountdown } from '../hooks/useProductCountdown';

type Category = 'all' | 'accounts' | 'proxy' | 'tools';
const CATEGORIES: Category[] = ['all', 'accounts', 'proxy', 'tools'];

const ProductCard: React.FC<{
  product: StoreProduct;
  onAcquire: (p: StoreProduct) => void;
}> = ({ product, onAcquire }) => {
  const isSaleCategory = product.category === 'tools';
  const [isResetting, setIsResetting] = useState(false);

  const [expiryDate] = useState(() => {
    const CYCLE_DURATION = 4 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const referenceTime = new Date('2026-01-03T21:00:00Z').getTime();

    const timeElapsedSinceRef = now - referenceTime;
    const currentCycleProgress = timeElapsedSinceRef % CYCLE_DURATION;
    const timeRemainingInCycle = CYCLE_DURATION - currentCycleProgress;

    return new Date(now + timeRemainingInCycle);
  });

  const { timeLeft, discountedPrice, hasDiscount } = useProductCountdown(
    {
      price: product.price,
      discountPercentage: isSaleCategory ? 25 : 0,
    },
    expiryDate
  );

  useEffect(() => {
    let timeoutId: number;

    if (timeLeft.isExpired) {
      requestAnimationFrame(() => {
        setIsResetting(true);
        timeoutId = window.setTimeout(() => {
          setIsResetting(false);
        }, 3000);
      });
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeLeft.isExpired]);

  return (
    <div
      className={`group p-8 rounded-[2.5rem] bg-[#0c0c12] border transition-all duration-500 flex flex-col relative ${
        hasDiscount
          ? 'border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_40px_-15px_rgba(16,185,129,0.1)]'
          : 'border-white/5 hover:border-purple-500/40'
      }`}
    >
      {hasDiscount && (
        <div
          className={`absolute top-10 left-10 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest backdrop-blur-md transition-all duration-500 ${
            isResetting
              ? 'bg-purple-500/20 border-purple-500/50 text-purple-400 scale-110'
              : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              isResetting ? 'bg-purple-400' : 'bg-emerald-400'
            }`}
          />
          {isResetting ? 'Offer Refreshed!' : '25% OFF'}
        </div>
      )}

      <div className="aspect-square bg-white/5 rounded-3xl mb-8 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500/5 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Package
            className={`w-12 h-12 opacity-40 ${
              hasDiscount ? 'text-emerald-400' : 'text-purple-400'
            }`}
          />
        )}
      </div>

      <div className="mb-2 flex justify-between items-start">
        <h3
          className={`text-2xl font-bold transition-colors ${
            hasDiscount
              ? 'text-white group-hover:text-emerald-400'
              : 'text-white group-hover:text-purple-400'
          }`}
        >
          {product.name}
        </h3>
        <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-500 uppercase font-bold tracking-tighter border border-white/5">
          {product.category}
        </span>
      </div>

      <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-4">
        {product.description}
      </p>

      {hasDiscount && (
        <div
          className={`mb-8 flex justify-between gap-3 px-4 py-3 rounded-2xl bg-white/5 border transition-colors duration-500 ${
            isResetting ? 'border-purple-500/30' : 'border-white/5'
          }`}
        >
          <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            <Clock
              className={`w-3.5 h-3.5 ${
                isResetting ? 'text-purple-400 animate-spin' : ''
              }`}
            />
            {isResetting ? 'Syncing...' : 'Ends In'}
          </div>
          <div className="flex gap-2 font-mono text-[11px] font-bold text-slate-300 whitespace-nowrap">
            <span className="text-emerald-400">{timeLeft.days}d</span>
            <span className="text-emerald-400">{timeLeft.hours}h</span>
            <span className="text-emerald-400">{timeLeft.minutes}m</span>
            <span className="text-emerald-400 w-6 text-right">
              {timeLeft.seconds}s
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-600 uppercase font-bold tracking-widest mb-1">
            Pricing
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`text-2xl font-black ${
                hasDiscount ? 'text-emerald-400' : 'text-white'
              }`}
            >
              ${hasDiscount ? discountedPrice : product.price}
            </span>
            {hasDiscount && (
              <span className="text-sm text-slate-600 line-through font-bold">
                ${product.price}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() =>
            onAcquire({
              ...product,
              price: hasDiscount ? discountedPrice : product.price,
            })
          }
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 cursor-pointer ${
            hasDiscount
              ? 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
              : 'bg-white text-black hover:bg-purple-400 shadow-lg shadow-white/5'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          Acquire
        </button>
      </div>
    </div>
  );
};

export const StorePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return STORE_PRODUCTS;
    },
  });

  const filteredProducts = data?.filter((product) =>
    activeCategory === 'all' ? true : product.category === activeCategory
  );

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500"></div>
      </div>
    );

  return (
    <div className="pt-0 pb-20 bg-[#050508] min-h-screen relative overflow-hidden">
      {/* ✅ FLASH SALE BANNER */}
      <div className="w-full bg-gradient-to-r from-emerald-500 via-purple-500 to-emerald-500 py-2.5 overflow-hidden sticky top-[88px] z-40 border-b border-white/10">
        <div className="flex animate-scroll-banner whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-8 text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <span>⚡</span>
              FLASH SALE: 25% OFF ON ALL TOOLS
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left pt-32">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            <Layers className="w-3 h-3" />
            Infrastructure Assets
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-4">
            NetReach <span className="text-purple-500">STORE</span>
          </h1>
          <div className="flex flex-wrap gap-3 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white shadow-lg shadow-white/5'
                    : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAcquire={(p) =>
                navigate('/store/checkout', { state: { product: p } })
              }
            />
          ))}
        </div>
      </div>

      {/* ✅ CSS Animation */}
      <style>{`
        @keyframes scroll-banner {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-banner {
          animation: scroll-banner 30s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
};
