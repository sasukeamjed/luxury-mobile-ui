import { useState } from 'react';
import { ChevronLeft, Eye, EyeOff, Lock, LogIn, Mail } from 'lucide-react';
import { Link } from 'react-router';
import appbarLogo from '../../assets/logo/appbar_logo.png';
import { MobileShell } from '../components/MobileShell';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-[-10px] rounded-[1.6rem] bg-gradient-to-br from-[#9a4726]/20 to-[#fee0cf]/40 blur-md" />
          <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-[#fff8f3] via-[#ffe7d8] to-[#ffd6bc] shadow-[0_14px_30px_rgba(113,45,20,0.24)] ring-1 ring-[#9a4726]/28">
            <img src={appbarLogo} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <h1 className="mt-5 text-[26px] font-semibold text-[#1a1a1a]">Welcome back</h1>
        <p className="mt-1 max-w-[260px] text-xs leading-relaxed text-[#8a817a]">
          Sign in to access your orders, wishlist, and premium member perks.
        </p>
      </div>

      <form
        className="mt-8 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <label htmlFor="login-email" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a4726]/80">
            Email
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a4726]/70" />
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              className="h-14 w-full rounded-2xl border border-[rgba(154,71,38,0.14)] bg-white pl-12 pr-4 text-sm text-[#1a1a1a] shadow-[0_4px_18px_rgba(154,71,38,0.06)] outline-none placeholder:text-[#b0a59d] focus:border-[#9a4726]/40 focus:ring-2 focus:ring-[#9a4726]/15"
            />
          </div>
        </div>

        <div>
          <label htmlFor="login-password" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a4726]/80">
            Password
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a4726]/70" />
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="h-14 w-full rounded-2xl border border-[rgba(154,71,38,0.14)] bg-white pl-12 pr-12 text-sm text-[#1a1a1a] shadow-[0_4px_18px_rgba(154,71,38,0.06)] outline-none placeholder:text-[#b0a59d] focus:border-[#9a4726]/40 focus:ring-2 focus:ring-[#9a4726]/15"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-[#9a4726]/80 transition hover:bg-[#fdf0e6]"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 text-xs">
          <label className="inline-flex items-center gap-2 text-[#7a6c63]">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[#9a4726]/30 text-[#9a4726] focus:ring-[#9a4726]/25"
            />
            Remember me
          </label>
          <button type="button" className="font-medium text-[#9a4726]">
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#b05a34] via-[#9a4726] to-[#7f331d] text-sm font-semibold text-white shadow-[0_12px_28px_rgba(154,71,38,0.34)] transition hover:shadow-[0_16px_34px_rgba(154,71,38,0.42)]"
        >
          <LogIn className="h-5 w-5" />
          Sign In
        </button>
      </form>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#eadfd7]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b0a59d]">or continue with</span>
        <div className="h-px flex-1 bg-[#eadfd7]" />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="h-12 rounded-2xl border border-[rgba(154,71,38,0.14)] bg-white text-sm font-medium text-[#1a1a1a] shadow-[0_4px_14px_rgba(154,71,38,0.06)] transition hover:bg-[#fdf6f0]"
        >
          Apple
        </button>
        <button
          type="button"
          className="h-12 rounded-2xl border border-[rgba(154,71,38,0.14)] bg-white text-sm font-medium text-[#1a1a1a] shadow-[0_4px_14px_rgba(154,71,38,0.06)] transition hover:bg-[#fdf6f0]"
        >
          Google
        </button>
      </div>

      <p className="mt-6 text-center text-xs text-[#8a817a]">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="font-semibold text-[#9a4726]">
          Create one
        </Link>
      </p>
    </MobileShell>
  );
}
