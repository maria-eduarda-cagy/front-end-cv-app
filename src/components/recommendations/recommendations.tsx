import { CarouselManual } from "../carousel/carousel-manual";
import { Recommendation as RecommendationItem } from "./recommendation";
import { recommendations } from "../utils/references";


export function RecommendationCarousel() {
  return (
    <CarouselManual
      items={recommendations}
      getKey={(rec) => rec.id}
      ariaLabelPrev="Previous recommendation"
      ariaLabelNext="Next recommendation"
      ariaLabelDot={(i) => `Go to recommendation ${i + 1}`}
      renderItem={(rec) => <RecommendationItem recommendation={rec} />}
    />
  );
}
