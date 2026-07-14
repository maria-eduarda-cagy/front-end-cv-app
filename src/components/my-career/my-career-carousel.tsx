import { useTranslation } from "react-i18next";
import { CareerItem } from "./my-career";
import type { MyCareerProps } from "../utils/utils";
import { CarouselManual } from "../carousel/carousel-manual";

export function MyCareerCarousel({ careerData }: MyCareerProps) {
  const { t } = useTranslation();
  return (
    <CarouselManual
      items={careerData}
      getKey={(experience) => experience.translationKey}
      ariaLabelPrev={t("career.prevAria")}
      ariaLabelNext={t("career.nextAria")}
      ariaLabelDot={(i) => t("career.dotAria", { index: i + 1 })}
      renderItem={(experience) => <CareerItem experience={experience} />}
    />
  );
}
