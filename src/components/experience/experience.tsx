import { useTranslation } from "react-i18next";
import { ExperienceStyled } from "./styles";
import { Text } from "../text/text";
import { formatExperienceDuration, type TimeDiff } from "../utils/utils";

type ExperienceProps = {
  src: string;
  time: TimeDiff;
  position: string;
  using?: string;
};

export default function Experience(props: ExperienceProps) {
  const { t } = useTranslation();
  const duration = formatExperienceDuration(t, props.time);

  return (
    <ExperienceStyled>
      <img src={props.src} alt="avatar" width={72} height={74} />
      <div className="text-container">
        <Text preset="text">
          {duration} {t("experience.asSuffix")}
        </Text>
        <Text preset="subtitle" style={{ textAlign: "center" }}>{props.position}</Text>
        {props.using && (
          <Text preset="subtext">
            {t("experience.usingPrefix")} {props.using}
          </Text>
        )}
      </div>
    </ExperienceStyled>
  );
}
