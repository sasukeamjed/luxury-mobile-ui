import { ChevronRight, Settings, UserRound } from 'lucide-react';
import { Link } from 'react-router';
import appPatterns2 from '../../assets/app_patterns_2.png';
import { NavigationBar } from '../components/NavigationBar';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] flex items-center justify-center p-4">
      <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-[3rem] border border-[rgba(255,255,255,0.06)] bg-[#fbf8f5] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <img
            src={appPatterns2}
            alt=""
            aria-hidden
            className="absolute left-1/2 top-[-88px] w-[138%] max-w-none -translate-x-1/2 opacity-[0.44] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f5]/58 via-[#fbf8f5]/75 to-[#fbf8f5]/96" />
        </div>

        <div className="relative z-10 h-full overflow-y-auto px-6 pb-36 pt-6">
          <div className="flex h-12 items-center justify-between">
            <span className="text-sm text-[#1a1a1a]">9:41</span>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
              <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
              <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white/88 p-5 shadow-[0_12px_34px_rgba(61,29,22,0.08)] backdrop-blur-sm">
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

          <div className="mt-5 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white/92 p-2 shadow-[0_12px_34px_rgba(61,29,22,0.08)] backdrop-blur-sm">
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
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#fbf8f5] via-[#fbf8f5] to-transparent px-6 pb-8 pt-8">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}
