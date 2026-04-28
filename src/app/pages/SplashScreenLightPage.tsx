import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { X } from 'lucide-react';
import appLogo from '../../assets/logo/app_logo.png';
import appPatterns3Left from '../../assets/app_patterns_3_left.png';
import appPatterns3Right from '../../assets/app_patterns_3_right.png';

export default function SplashScreenLightPage() {
  const navigate = useNavigate();
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowCloseButton(true);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleCloseSplash = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f6f0eb] flex items-center justify-center p-4">
      <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-[3rem] border border-[#d6c4b9] bg-[#fffaf6] shadow-[0_24px_80px_rgba(82,38,20,0.18)]">
        {showCloseButton ? (
          <button
            type="button"
            onClick={handleCloseSplash}
            aria-label="Close splash screen"
            className="absolute left-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#9a4726]/50 bg-white/90 text-[#9a4726] transition hover:bg-[#f8ebe2]"
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src={appPatterns3Left}
            alt=""
            className="absolute -left-[198px] -top-[22px] h-[644px] w-[503px] rotate-[15deg] origin-top-left object-contain opacity-[0.22] mix-blend-multiply"
          />
          <img
            src={appPatterns3Right}
            alt=""
            className="absolute -right-[198px] -bottom-[22px] h-[644px] w-[503px] -rotate-[15deg] origin-bottom-right object-contain opacity-[0.22] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#9a4726]/10 via-[#fff7f1]/50 to-[#9a4726]/10" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(154,71,38,0.18),rgba(255,255,255,0)_62%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(154,71,38,0.10),rgba(255,255,255,0)_74%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(199,115,73,0.16),rgba(255,255,255,0)_8%)] animate-ping" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative mb-10">
            <div className="absolute inset-x-[-44px] inset-y-[-24px] rounded-[999px] border border-[#9a4726]/35 animate-[pulse_2.8s_ease-in-out_infinite]" />
            <div className="absolute inset-x-[-28px] inset-y-[-14px] rounded-[999px] border border-[#9a4726]/45" />
            <div className="absolute inset-x-[-52px] inset-y-[-34px] rounded-[999px] bg-[#c77349]/10 blur-2xl" />
            <img
              src={appLogo}
              alt="DO Chocolates and Flowers"
              className="relative z-10 w-[236px] max-w-[74vw] animate-[pulse_2.6s_ease-in-out_infinite]"
            />
          </div>

          <p className="text-[#a85c39] text-xs tracking-[0.35em] uppercase animate-pulse">Chocolates and Flowers</p>
        </div>
      </div>
    </div>
  );
}
