import { CareerItem } from "./my-career";
import type { MyCareerProps } from "../utils/utils";
import { CarouselManual } from "../carousel/carousel-manual";

export function MyCareerCarousel({ careerData }: MyCareerProps) {
  return (
    <CarouselManual
      items={careerData}
      getKey={(experience) => experience.title}
      ariaLabelPrev="Previous experience"
      ariaLabelNext="Next experience"
      ariaLabelDot={(i) => `Go to experience ${i + 1}`}
      renderItem={(experience) => <CareerItem experience={experience} />}
    />
  );
}
