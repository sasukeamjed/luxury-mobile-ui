import type { ReactNode } from 'react';
import { NavigationBar } from './NavigationBar';

type MobileShellProps = {
  children: ReactNode;
};

export function MobileShell({ children }: MobileShellProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] p-4">
      <div className="relative isolate flex h-[844px] w-full max-w-[390px] flex-col overflow-hidden rounded-[3rem] border border-[rgba(255,255,255,0.06)] bg-[#fbf8f5] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="relative z-10 min-h-0 flex-1 overflow-y-auto bg-[#fbf8f5] px-6 pb-4 pt-6">
          {children}
        </div>
        <div className="relative z-20 shrink-0 bg-[#fbf8f5] px-6 pb-8 pt-2">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
}
