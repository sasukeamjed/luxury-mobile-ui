import { Bell, ChevronLeft, Gift, Package, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import appbarLogo from '../../assets/logo/appbar_logo.png';
import { MobileShell } from '../components/MobileShell';
import { requestNotificationPermission } from '../utils/notificationPrompt';

type NotificationPermissionPageProps = {
  onSkip?: () => void;
  onAccept?: () => void;
};

function NotificationIllustration() {
  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[300px]" aria-hidden>
      <div className="absolute inset-x-6 bottom-0 top-6 rounded-[2rem] border border-[#9a4726]/12 bg-gradient-to-b from-white via-[#fff8f3] to-[#fce9dc] shadow-[0_24px_60px_rgba(113,45,20,0.14)]">
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="h-2.5 w-10 rounded-full bg-[#eadfd7]" />
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-[#9a4726]/25" />
            <div className="h-2 w-2 rounded-full bg-[#9a4726]/25" />
            <div className="h-2 w-2 rounded-full bg-[#9a4726]/25" />
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="relative">
            <div className="absolute inset-[-16px] rounded-full bg-[#9a4726]/10 blur-xl" />
            <img
              src={appbarLogo}
              alt=""
              className="relative h-14 w-14 rounded-2xl object-cover shadow-[0_10px_24px_rgba(113,45,20,0.2)] ring-1 ring-[#9a4726]/20"
            />
          </div>
        </div>

        <div className="mt-3 space-y-2 px-4">
          <div className="rounded-2xl border border-[#9a4726]/10 bg-white/90 px-3 py-2.5 shadow-[0_8px_20px_rgba(113,45,20,0.08)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#fee0cf]/70 text-[#9a4726]">
                <Package className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-[#1a1a1a]">Order shipped</p>
                <p className="truncate text-[10px] text-[#8a817a]">Your bouquet is on its way</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#9a4726]/10 bg-white/90 px-3 py-2.5 shadow-[0_8px_20px_rgba(113,45,20,0.08)]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#fee0cf]/70 text-[#9a4726]">
                <Gift className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-[#1a1a1a]">New collection</p>
                <p className="truncate text-[10px] text-[#8a817a]">Limited Valentine&apos;s gifts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-1 top-8 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#9a4726]/15 bg-white shadow-[0_10px_24px_rgba(113,45,20,0.12)]">
        <Bell className="h-4 w-4 text-[#9a4726]" />
      </div>
      <div className="absolute -right-1 top-20 flex h-9 w-9 items-center justify-center rounded-xl border border-[#9a4726]/12 bg-[#fff4ec] shadow-[0_8px_20px_rgba(113,45,20,0.1)]">
        <Sparkles className="h-3.5 w-3.5 text-[#9a4726]" />
      </div>
    </div>
  );
}

export default function NotificationPermissionPage({
  onSkip,
  onAccept,
}: NotificationPermissionPageProps) {
  const navigate = useNavigate();
  const isStartupFlow = Boolean(onSkip || onAccept);

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
      return;
    }

    navigate(-1);
  };

  const handleAccept = async () => {
    if (onAccept) {
      await onAccept();
      return;
    }

    await requestNotificationPermission();
    navigate('/settings');
  };

  return (
    <MobileShell hideNav={isStartupFlow} fill={isStartupFlow}>
      <div className="flex h-12 shrink-0 items-center justify-between">
        {isStartupFlow ? (
          <span className="text-sm text-[#1a1a1a]">9:41</span>
        ) : (
          <Link
            to="/settings"
            className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-2 text-sm font-medium text-[#9a4726]"
          >
            <ChevronLeft className="h-4 w-4" />
            Settings
          </Link>
        )}
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="mt-6 flex shrink-0 flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-[-10px] rounded-[1.6rem] bg-gradient-to-br from-[#9a4726]/20 to-[#fee0cf]/40 blur-md" />
            <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#fff8f3] via-[#ffe7d8] to-[#ffd6bc] shadow-[0_14px_30px_rgba(113,45,20,0.24)] ring-1 ring-[#9a4726]/28">
              <Bell className="h-8 w-8 text-[#9a4726]" strokeWidth={1.75} />
            </div>
          </div>

          <h1 className="mt-5 text-[26px] font-semibold text-[#1a1a1a]">Get notified!</h1>
          <p className="mt-2 max-w-[280px] text-xs leading-relaxed text-[#8a817a]">
            We&apos;ll send you updates when your orders move, new gifts arrive, and exclusive offers are
            available. You can turn this off anytime in settings.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center py-6">
          <NotificationIllustration />
        </div>

        <div className="mt-auto flex shrink-0 items-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleSkip}
            className="flex-1 py-3 text-sm font-semibold text-[#9a4726] transition hover:text-[#7f331d]"
          >
            Skip
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-[1.4] rounded-2xl bg-gradient-to-br from-[#b05a34] via-[#9a4726] to-[#7f331d] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(154,71,38,0.34)] transition hover:shadow-[0_16px_34px_rgba(154,71,38,0.42)]"
          >
            I&apos;m in
          </button>
        </div>
      </div>
    </MobileShell>
  );
}
