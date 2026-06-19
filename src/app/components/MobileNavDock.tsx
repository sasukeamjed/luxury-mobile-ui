import { NavigationBar } from './NavigationBar';

type MobileNavDockProps = {
  withGradient?: boolean;
};

export function MobileNavDock({ withGradient = false }: MobileNavDockProps) {
  return (
    <>
      {withGradient ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[95] h-[112px] bg-gradient-to-t from-[#fbf8f5] from-40% to-transparent"
          aria-hidden
        />
      ) : null}
      <div className="absolute bottom-0 left-0 right-0 z-[100] px-6 pb-8 pt-6">
        <NavigationBar />
      </div>
    </>
  );
}
