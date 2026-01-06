import { CarouselTrack, CarouselWrapper } from "./styles";
import { skills } from "../utils/utils";
export function Carousel() {
  return (
    <CarouselWrapper>
      <CarouselTrack>
        {[...skills, ...skills].map((skill, index) => (
          <img
            key={`${skill.name}-${index}`}
            src={skill.src}
            alt={skill.alt}
            className="skill-icon"
          />
        ))}
      </CarouselTrack>
    </CarouselWrapper>
  );
}
