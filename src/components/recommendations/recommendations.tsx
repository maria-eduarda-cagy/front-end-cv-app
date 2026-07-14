import { useTranslation } from "react-i18next";
import { CarouselManual } from "../carousel/carousel-manual";
import { Recommendation as RecommendationItem } from "./recommendation";
import { recommendations } from "../utils/references";


export function RecommendationCarousel() {
  const { t } = useTranslation();
  return (
    <CarouselManual
      items={recommendations}
      getKey={(rec) => rec.id}
      ariaLabelPrev={t("recommendations.prevAria")}
      ariaLabelNext={t("recommendations.nextAria")}
      ariaLabelDot={(i) => t("recommendations.dotAria", { index: i + 1 })}
      renderItem={(rec) => <RecommendationItem recommendation={rec} />}
    />
  );
}
