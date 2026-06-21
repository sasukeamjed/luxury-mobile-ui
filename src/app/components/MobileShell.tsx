import type { ReactNode } from 'react';
import { MobileFrame, MobileStage } from './MobileFrame';
import { NavigationBar } from './NavigationBar';

type MobileShellProps = {
  children: ReactNode;
  hideNav?: boolean;
  fill?: boolean;
};

export function MobileShell({ children, hideNav = false, fill = false }: MobileShellProps) {
  return (
    <MobileStage fill={fill}>
      <MobileFrame>
        <div
          data-scroll-root
          className={`relative z-10 min-h-0 h-0 flex-1 overflow-y-auto overscroll-y-contain bg-[#fbf8f5] px-6 touch-pan-y [-webkit-overflow-scrolling:touch] ${
            hideNav ? 'flex flex-col pb-8 pt-6' : 'pb-4 pt-6'
          }`}
        >
          {children}
        </div>
        {hideNav ? null : (
          <div className="relative z-20 shrink-0 bg-[#fbf8f5] px-6 pb-8 pt-2">
            <NavigationBar />
          </div>
        )}
      </MobileFrame>
    </MobileStage>
  );
}
