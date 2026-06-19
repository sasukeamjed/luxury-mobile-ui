import { ChevronRight, LogIn, Package, Settings, UserRound } from 'lucide-react';
import { Link } from 'react-router';
import { MobileShell } from '../components/MobileShell';

export default function ProfilePage() {
  return (
    <MobileShell>
      <div className="flex h-12 items-center justify-between">
        <span className="text-sm text-[#1a1a1a]">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white p-5 shadow-[0_12px_34px_rgba(61,29,22,0.08)]">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9a4726] to-[#b85a32] text-white">
            <UserRound className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-[#1a1a1a]">My Profile</h1>
            <p className="text-xs text-[#737373]">Personalization and account preferences</p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white p-2 shadow-[0_12px_34px_rgba(61,29,22,0.08)]">
        <Link
          to="/orders"
          className="flex items-center justify-between rounded-2xl px-4 py-4 text-[#1a1a1a] transition hover:bg-[#fdf6f0]"
        >
          <span className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fee0cf]/45 text-[#9a4726]">
              <Package className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-medium">Order History</span>
              <span className="block text-xs text-[#8a8a8a]">View past orders and delivery status</span>
            </span>
          </span>
          <ChevronRight className="h-5 w-5 text-[#9a4726]" />
        </Link>
        <Link
          to="/login"
          className="flex items-center justify-between rounded-2xl px-4 py-4 text-[#1a1a1a] transition hover:bg-[#fdf6f0]"
        >
          <span className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fee0cf]/45 text-[#9a4726]">
              <LogIn className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-medium">Sign In</span>
              <span className="block text-xs text-[#8a8a8a]">Access your luxury account</span>
            </span>
          </span>
          <ChevronRight className="h-5 w-5 text-[#9a4726]" />
        </Link>
        <Link
          to="/settings"
          className="flex items-center justify-between rounded-2xl px-4 py-4 text-[#1a1a1a] transition hover:bg-[#fdf6f0]"
        >
          <span className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fee0cf]/45 text-[#9a4726]">
              <Settings className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-medium">Settings</span>
              <span className="block text-xs text-[#8a8a8a]">Open app preferences and splash tester</span>
            </span>
          </span>
          <ChevronRight className="h-5 w-5 text-[#9a4726]" />
        </Link>
      </div>
    </MobileShell>
  );
}
