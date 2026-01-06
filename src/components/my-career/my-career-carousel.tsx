import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CareerItem } from "./my-career";
import { type MyCareerProps } from "../utils/utils";
import {
  CarouselWrapper,
  CarouselRow,
  Track,
  Slide,
  ArrowButton,
  Pagination,
  Dot,
} from "./styles";

export function MyCareerCarousel({ careerData }: MyCareerProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = useMemo(() => careerData.length, [careerData.length]);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const clamped = Math.max(0, Math.min(index, total - 1));

      const target = track.children.item(clamped) as HTMLElement | null;
      if (!target) return;

      track.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });

      setActiveIndex(clamped);
    },
    [total]
  );

  // mobile scroll
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

        setActiveIndex(best);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => goTo(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex, goTo]);

  return (
    <CarouselWrapper>
      <CarouselRow>
        <div className="controls">
          <ArrowButton
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous experience"
          >
            ‹
          </ArrowButton>
          <ArrowButton
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === total - 1}
            aria-label="Next experience"
          >
            {" "}
            ›
          </ArrowButton>
        </div>
        {/* Content */}
        <div className="pagination-container">
          <Track ref={trackRef}>
            {careerData.map((experience) => (
              <Slide key={experience.title}>
                <CareerItem experience={experience} />
              </Slide>
            ))}
          </Track>
          <Pagination>
            {careerData.map((_, index) => (
              <Dot
                key={index}
                $active={index === activeIndex}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </Pagination>
        </div>
      </CarouselRow>
    </CarouselWrapper>
  );
}
