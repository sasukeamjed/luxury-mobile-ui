import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import appbarLogo from '../../assets/logo/appbar_logo.png';

type SplashScreenLightPageProps = {
  onFinish?: () => void;
  autoCloseMs?: number;
};

export default function SplashScreenLightPage({
  onFinish,
  autoCloseMs = 5000,
}: SplashScreenLightPageProps = {}) {
  const navigate = useNavigate();

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      if (onFinish) {
        onFinish();
        return;
      }
      navigate('/', { replace: true });
    }, autoCloseMs);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, [autoCloseMs, navigate, onFinish]);

  const orbitLogoSlots = [0, 1, 2, 3, 4];

  return (
    <div className="min-h-screen bg-[#f6f0eb] flex items-center justify-center p-4">
      <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-[3rem] border border-[#d6c4b9] bg-[#fffaf6] shadow-[0_24px_80px_rgba(82,38,20,0.18)]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f1] via-[#f8e6d9] to-[#f1d8c8]" />
          <div className="absolute inset-y-0 left-1/2 w-[160px] -translate-x-1/2 overflow-hidden border-x border-[#9a4726]/10 bg-gradient-to-b from-[#fff2e9]/70 via-[#f7dfcf]/72 to-[#fff2e9]/70">
            <div className="splash-logo-track absolute inset-0">
              <div className="splash-logo-stack">
                {orbitLogoSlots.map((slot) => (
                  <img key={`logo-top-${slot}`} src={appbarLogo} alt="" className="h-[120px] w-[120px] object-contain opacity-[0.22]" />
                ))}
              </div>
              <div className="splash-logo-stack">
                {orbitLogoSlots.map((slot) => (
                  <img key={`logo-bottom-${slot}`} src={appbarLogo} alt="" className="h-[120px] w-[120px] object-contain opacity-[0.22]" />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0),rgba(255,247,241,0.58)_46%,rgba(255,247,241,0.94)_100%)]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(154,71,38,0.18),rgba(255,255,255,0)_62%)]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative mb-12">
            <div className="absolute inset-[-28px] rounded-[2.6rem] border border-[#9a4726]/26 bg-white/78 shadow-[0_28px_80px_rgba(95,39,18,0.25)]" />
            <div className="absolute inset-[-42px] rounded-[3rem] border border-[#9a4726]/34 animate-[pulse_2.2s_ease-in-out_infinite]" />
            <div className="absolute inset-[-70px] rounded-[3.4rem] bg-[#c77349]/22 blur-3xl" />
            <img
              src={appbarLogo}
              alt="DO Chocolates and Flowers"
              className="relative z-10 w-[216px] max-w-[68vw] drop-shadow-[0_16px_30px_rgba(88,34,16,0.4)]"
            />
          </div>

          <div className="rounded-full border border-[#9a4726]/20 bg-white/88 px-6 py-2 shadow-[0_10px_24px_rgba(119,53,27,0.16)]">
            <p className="text-[#8b3e20] text-[11px] tracking-[0.34em] uppercase">Chocolates and Flowers</p>
          </div>
        </div>
        <style>{`
          .splash-logo-track {
            height: 200%;
            animation: splash-logo-rise 13s linear infinite;
          }

          .splash-logo-stack {
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            padding: 28px 0;
          }

          @keyframes splash-logo-rise {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
