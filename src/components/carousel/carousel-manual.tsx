import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CarouselManualWrapper,
  CarouselManualRow,
  Track,
  Slide,
  ArrowButton,
  Pagination,
  Dot,
} from "./styles";

type CarouselManualProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey: (item: T, index: number) => React.Key;

  // acessibilidade / texto
  ariaLabelPrev?: string;
  ariaLabelNext?: string;
  ariaLabelDot?: (index: number) => string;

  // opcional: começar em outro index
  initialIndex?: number;

  // opcional: callback quando muda slide
  onIndexChange?: (index: number) => void;
};

export function CarouselManual<T>({
  items,
  renderItem,
  getKey,
  ariaLabelPrev = "Previous",
  ariaLabelNext = "Next",
  ariaLabelDot = (i) => `Go to slide ${i + 1}`,
  initialIndex = 0,
  onIndexChange,
}: CarouselManualProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const total = useMemo(() => items.length, [items.length]);

  const setIndex = useCallback(
    (index: number) => {
      setActiveIndex(index);
      onIndexChange?.(index);
    },
    [onIndexChange]
  );

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      if (total === 0) return;

      const clamped = Math.max(0, Math.min(index, total - 1));
      const target = track.children.item(clamped) as HTMLElement | null;
      if (!target) return;

      track.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });

      setIndex(clamped);
    },
    [total, setIndex]
  );

  // Mobile scroll -> sync activeIndex
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(track.children) as HTMLElement[];
        if (!children.length) return;

        const currentLeft = track.scrollLeft;
        let best = 0;
        let bestDist = Infinity;

        children.forEach((el, i) => {
          const dist = Math.abs(el.offsetLeft - currentLeft);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });

        setIndex(best);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, [setIndex]);

  // Keep slide aligned on resize
  useEffect(() => {
    const onResize = () => goTo(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex, goTo]);

  // If items change and activeIndex is out of range
  useEffect(() => {
    if (total === 0) return;
    if (activeIndex > total - 1) setIndex(total - 1);
  }, [total, activeIndex, setIndex]);

  if (!items.length) return null;

  return (
    <CarouselManualWrapper>
      <CarouselManualRow>
        {/* Controls */}
        <div className="controls">
          <ArrowButton
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label={ariaLabelPrev}
          >
            ‹
          </ArrowButton>

          <ArrowButton
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === total - 1}
            aria-label={ariaLabelNext}
          >
            ›
          </ArrowButton>
        </div>

        {/* Content */}
        <div className="pagination-container">
          <Track ref={trackRef}>
            {items.map((item, index) => (
              <Slide key={getKey(item, index)}>{renderItem(item, index)}</Slide>
            ))}
          </Track>

          {/* Pagination (uma vez só) */}
          <Pagination>
            {items.map((_, index) => (
              <Dot
                key={index}
                $active={index === activeIndex}
                onClick={() => goTo(index)}
                aria-label={ariaLabelDot(index)}
              />
            ))}
          </Pagination>
        </div>
      </CarouselManualRow>
    </CarouselManualWrapper>
  );
}
