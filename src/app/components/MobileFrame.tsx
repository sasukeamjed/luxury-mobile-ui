import type { ReactNode } from 'react';
import { cn } from './ui/utils';

export const PHONE_FRAME_CLASS =
  'relative isolate w-full max-w-[390px] shrink-0 overflow-hidden rounded-[3rem] border border-[rgba(255,255,255,0.06)] bg-[#fbf8f5] shadow-[0_24px_80px_rgba(0,0,0,0.38)] h-[844px] min-h-[844px]';

export const PHONE_STAGE_CLASS =
  'flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] p-4';

type MobileStageProps = {
  children: ReactNode;
  className?: string;
  fill?: boolean;
};

export function MobileStage({ children, className, fill = false }: MobileStageProps) {
  return (
    <div className={cn(PHONE_STAGE_CLASS, fill && 'min-h-full h-full', className)}>{children}</div>
  );
}

type MobileFrameProps = {
  children: ReactNode;
  className?: string;
};

export function MobileFrame({ children, className }: MobileFrameProps) {
  return <div className={cn(PHONE_FRAME_CLASS, 'flex flex-col', className)}>{children}</div>;
}
