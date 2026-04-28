import { type ReactNode, useRef } from 'react';

import { cn } from './ui/utils';

type DraggableScrollRowProps = {
  className?: string;
  children: ReactNode;
};

export function DraggableScrollRow({ className, children }: DraggableScrollRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    active: false,
    moved: false,
    startX: 0,
    startScrollLeft: 0,
  });

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (event.pointerType !== 'mouse') return;

    const target = event.target as HTMLElement | null;
    // Don't hijack drags/clicks that belong to links or buttons (product cards, category chips, etc.)
    if (target?.closest('a[href]') || target?.closest('button')) {
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    dragState.current.active = true;
    dragState.current.moved = false;
    dragState.current.startX = event.clientX;
    dragState.current.startScrollLeft = el.scrollLeft;
    el.setPointerCapture(event.pointerId);
  };

  const DRAG_THRESHOLD = 10;

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const el = containerRef.current;
    if (!el || !dragState.current.active) return;

    const deltaX = event.clientX - dragState.current.startX;
    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      dragState.current.moved = true;
    }

    el.scrollLeft = dragState.current.startScrollLeft - deltaX;
    // Only prevent default when we're clearly dragging — otherwise clicks get cancelled.
    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      event.preventDefault();
    }
  };

  const onPointerUpOrCancel: React.PointerEventHandler<HTMLDivElement> = () => {
    dragState.current.active = false;
  };

  const onClickCapture: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (dragState.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragState.current.moved = false;
    }
  };

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scrollbar-hide overflow-x-auto cursor-grab active:cursor-grabbing select-none',
        className,
      )}
      style={{ touchAction: 'pan-x' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUpOrCancel}
      onPointerCancel={onPointerUpOrCancel}
      onClickCapture={onClickCapture}
      onDragStart={onDragStart}
    >
      {children}
    </div>
  );
}
