import { Home, Compass, Bell, User, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import appPatterns3Left from '../../assets/app_patterns_3_left.png';
import appPatterns3Right from '../../assets/app_patterns_3_right.png';

export function NavigationBar() {
  const { pathname } = useLocation();

  const isActive = (key: string) => {
    if (key === 'home') return pathname === '/' || pathname.startsWith('/product');
    if (key === 'categories') return pathname.startsWith('/categories');
    if (key === 'profile') {
      return pathname.startsWith('/profile') || pathname.startsWith('/settings') || pathname.startsWith('/splash');
    }
    return false;
  };

  const items = [
    { key: 'home', icon: Home, to: '/' },
    { key: 'categories', icon: Compass, to: '/categories' },
    { key: 'alerts', icon: Bell, to: null },
    { key: 'cart', icon: ShoppingCart, to: null },
    { key: 'profile', icon: User, to: '/profile' },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#e8ddd6] bg-gradient-to-b from-[#fffdfa] via-[#fffaf6] to-[#f8f1eb] p-4 shadow-[0_16px_34px_rgba(154,71,38,0.12)]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src={appPatterns3Left}
          alt=""
          className="absolute -left-8 -bottom-7 h-[122px] w-[122px] object-contain opacity-[0.14] mix-blend-multiply"
        />
        <img
          src={appPatterns3Right}
          alt=""
          className="absolute -right-7 -bottom-8 h-[136px] w-[136px] object-contain opacity-[0.16] mix-blend-multiply"
        />
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#ffffff] to-transparent opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#f1e7df]/65 to-transparent" />
      </div>
      <div className="relative z-10 flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.key);
          const content = (
            <>
              <Icon className="w-6 h-6" />
              {active && <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#f6d4bc]" />}
            </>
          );

          return (
            item.to ? (
              <Link
                key={item.key}
                to={item.to}
                className={`relative p-3 rounded-2xl transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-br from-[#b05a34] via-[#9a4726] to-[#7f331d] text-white shadow-[0_10px_22px_rgba(154,71,38,0.34)]'
                    : 'text-[#7b746f] hover:bg-[#f7ece4] hover:text-[#9a4726]'
                }`}
                aria-label={item.key}
              >
                {content}
              </Link>
            ) : (
              <button
                key={item.key}
                type="button"
                className="relative p-3 rounded-2xl text-[#7b746f] transition-all duration-300 hover:bg-[#f7ece4] hover:text-[#9a4726]"
                aria-label={item.key}
              >
                {content}
              </button>
            )
          );
        })}
      </div>
    </div>
  );
}
