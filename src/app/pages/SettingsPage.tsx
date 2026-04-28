import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import appPatterns from '../../assets/app_patterns.png';
import { NavigationBar } from '../components/NavigationBar';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] flex items-center justify-center p-4">
      <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-[3rem] border border-[rgba(255,255,255,0.06)] bg-[#fbf8f5] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <img
            src={appPatterns}
            alt=""
            aria-hidden
            className="absolute -bottom-14 -left-10 w-[118%] max-w-none opacity-[0.18] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f5]/72 via-[#fbf8f5]/86 to-[#fbf8f5]/96" />
        </div>

        <div className="relative z-10 h-full overflow-y-auto px-6 pb-36 pt-6">
          <div className="flex h-12 items-center justify-between">
            <Link
              to="/profile"
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white/90 px-3 py-2 text-sm font-medium text-[#9a4726]"
            >
              <ChevronLeft className="h-4 w-4" />
              Profile
            </Link>
          </div>

          <div className="mt-4">
            <h1 className="text-[#1a1a1a]">Settings</h1>
            <p className="mt-1 text-xs text-[#7f7f7f]">App behavior, experiments, and visual previews.</p>
          </div>

          <div className="mt-5 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white/92 p-2 shadow-[0_12px_34px_rgba(61,29,22,0.08)] backdrop-blur-sm">
            <Link
              to="/splash"
              className="flex items-center justify-between rounded-2xl px-4 py-4 text-[#1a1a1a] transition hover:bg-[#fdf6f0]"
            >
              <span className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fee0cf]/45 text-[#9a4726]">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium">Splash Screen</span>
                  <span className="block text-xs text-[#8a8a8a]">Tap to preview startup animation</span>
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
