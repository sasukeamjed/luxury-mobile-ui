import { Bell, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { MobileShell } from '../components/MobileShell';

export default function SettingsPage() {
  return (
    <MobileShell>
      <div className="flex h-12 items-center justify-between">
        <Link
          to="/profile"
          className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-2 text-sm font-medium text-[#9a4726]"
        >
          <ChevronLeft className="h-4 w-4" />
          Profile
        </Link>
      </div>

      <div className="mt-4">
        <h1 className="text-[#1a1a1a]">Settings</h1>
        <p className="mt-1 text-xs text-[#7f7f7f]">App behavior, experiments, and visual previews.</p>
      </div>

      <div className="mt-5 space-y-1 rounded-3xl border border-[rgba(154,71,38,0.12)] bg-white p-2 shadow-[0_12px_34px_rgba(61,29,22,0.08)]">
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
        <Link
          to="/notification-permission"
          className="flex items-center justify-between rounded-2xl px-4 py-4 text-[#1a1a1a] transition hover:bg-[#fdf6f0]"
        >
          <span className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fee0cf]/45 text-[#9a4726]">
              <Bell className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-medium">Notification Request</span>
              <span className="block text-xs text-[#8a8a8a]">Preview the post-splash permission screen</span>
            </span>
          </span>
          <ChevronRight className="h-5 w-5 text-[#9a4726]" />
        </Link>
      </div>
    </MobileShell>
  );
}
