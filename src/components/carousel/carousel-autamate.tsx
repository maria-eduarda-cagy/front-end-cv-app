import { CarouselAutoTrack, CarouselAutoWrapper } from "./styles";
import { skills } from "../utils/utils";
export function CarouselAuto() {
  return (
    <CarouselAutoWrapper>
      <CarouselAutoTrack>
        {[...skills, ...skills].map((skill, index) => (
          <img
            key={`${skill.name}-${index}`}
            src={skill.src}
            alt={skill.alt}
            className="skill-icon"
          />
        ))}
      </CarouselAutoTrack>
    </CarouselAutoWrapper>
  );
}
