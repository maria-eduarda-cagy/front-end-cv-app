import { useEffect, useMemo, useRef, useState } from "react";
import { CareerItem } from "./my-career";
import { careerData } from "../utils/utils";
import {
  CarouselWrapper,
  CarouselRow,
  Track,
  Slide,
  ArrowButton,
} from "./styles";

export function MyCareerCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = useMemo(() => careerData.length, []);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(index, total - 1));
    const slideWidth = track.clientWidth;

    track.scrollTo({
      left: clamped * slideWidth,
      behavior: "smooth",
    });

    setActiveIndex(clamped);
  }

  // mobile scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const width = track.clientWidth || 1;
        const idx = Math.round(track.scrollLeft / width);
        setActiveIndex(idx);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // track ref resize
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onResize = () => goTo(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  return (
    <CarouselWrapper>
      <CarouselRow>
        {/* Left arrow */}
        <ArrowButton
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous experience"
        >
          ‹
        </ArrowButton>

        {/* Content */}
        <Track ref={trackRef}>
          {careerData.map((experience) => (
            <Slide key={experience.title}>
              <CareerItem experience={experience} />
            </Slide>
          ))}
        </Track>

        {/* Right arrow */}
        <ArrowButton
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === total - 1}
          aria-label="Next experience"
        >
          ›
        </ArrowButton>
      </CarouselRow>
    </CarouselWrapper>
  );
}
