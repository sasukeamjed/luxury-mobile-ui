import { useState } from 'react';
import { ChevronLeft, Eye, EyeOff, Lock, Mail, User, UserPlus } from 'lucide-react';
import { Link } from 'react-router';
import appbarLogo from '../../assets/logo/appbar_logo.png';
import { MobileShell } from '../components/MobileShell';

const inputClassName =
  'h-14 w-full rounded-2xl border border-[rgba(154,71,38,0.14)] bg-white pl-12 pr-4 text-sm text-[#1a1a1a] shadow-[0_4px_18px_rgba(154,71,38,0.06)] outline-none placeholder:text-[#b0a59d] focus:border-[#9a4726]/40 focus:ring-2 focus:ring-[#9a4726]/15';

const labelClassName =
  'mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a4726]/80';

export default function CreateAccountPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MobileShell>
      <div className="flex h-12 items-center justify-between">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white px-3 py-2 text-sm font-medium text-[#9a4726]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-4 rounded-sm border border-[#1a1a1a]" />
          <div className="h-3 w-6 rounded-sm border border-[#1a1a1a] bg-[#1a1a1a]" />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-[-12px] rounded-[1.8rem] bg-gradient-to-br from-[#9a4726]/18 to-[#fee0cf]/35 blur-md" />
          <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fff8f3] via-[#ffe7d8] to-[#ffd6bc] shadow-[0_14px_30px_rgba(113,45,20,0.24)] ring-1 ring-[#9a4726]/28">
            <img src={appbarLogo} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a4726]">
          Chocolates and Flowers
        </p>
        <h1 className="mt-2 text-[24px] font-semibold text-[#1a1a1a]">Create Account</h1>
        <p className="mt-1 max-w-[280px] text-xs leading-relaxed text-[#8a817a]">
          Create an account to save favorites, track orders, and checkout faster.
        </p>
      </div>

      <form
        className="mt-7 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="signup-first-name" className={labelClassName}>
              First Name
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a4726]/70" />
              <input
                id="signup-first-name"
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                className={inputClassName}
              />
            </div>
          </div>
          <div>
            <label htmlFor="signup-last-name" className={labelClassName}>
              Last Name
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a4726]/70" />
              <input
                id="signup-last-name"
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                className={inputClassName}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className={labelClassName}>
            Email
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a4726]/70" />
            <input
              id="signup-email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-password" className={labelClassName}>
            Password
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9a4726]/70" />
            <input
              id="signup-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              autoComplete="new-password"
              className={`${inputClassName} pr-12`}
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

        <p className="pt-1 text-center text-xs text-[#8a817a]">
          By signing up, you agree to our{' '}
          <button type="button" className="font-semibold text-[#9a4726] underline underline-offset-2">
            Privacy and Terms
          </button>
        </p>

        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#b05a34] via-[#9a4726] to-[#7f331d] text-sm font-semibold text-white shadow-[0_12px_28px_rgba(154,71,38,0.34)] transition hover:shadow-[0_16px_34px_rgba(154,71,38,0.42)]"
        >
          <UserPlus className="h-5 w-5" />
          Create an account
        </button>
      </form>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#eadfd7]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b0a59d]">or</span>
        <div className="h-px flex-1 bg-[#eadfd7]" />
      </div>

      <p className="mt-5 text-center text-xs text-[#8a817a]">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-[#9a4726] underline underline-offset-2">
          Login to your account
        </Link>
      </p>
    </MobileShell>
  );
}
