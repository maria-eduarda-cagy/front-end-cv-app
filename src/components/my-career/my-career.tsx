import { useTranslation } from "react-i18next";
import { MyCareerContainer } from "./styles";
import { Text } from "../text/text";

import type { CareerExperience } from "../utils/utils";

type Props = {
  experience: CareerExperience;
};

type Bullet = { highlight: string; text: string };

export function CareerItem({ experience }: Props) {
  const { t } = useTranslation();
  const base = `career.${experience.section}.${experience.translationKey}`;
  const title = t(`${base}.title`);
  const bullets = t(`${base}.bullets`, { returnObjects: true }) as Bullet[];

  return (
    <MyCareerContainer>
      {experience.href ? (
        <a
          href={experience.href}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--color-text)" }}
        >
          <Text preset="subtitle" style={{ textAlign: "start",  marginRight: "1rem" }}>
            {title}
          </Text>
        </a>
      ) : (
        <Text preset="subtitle" style={{ textAlign: "start",  marginRight: "1rem" }}>
          {title}
        </Text>
      )}

      <Text preset="subtext" style={{ textAlign: "start" }}>
        {experience.period}
      </Text><br />

      <Text preset="text" style={{ textAlign: "start"}}>
        {bullets.map((b, idx) => (
          <span key={idx}>
            <b>{b.highlight}</b>, {b.text}
            <br />
            <br />
          </span>
        ))}
      </Text>
    </MyCareerContainer>
  );
}
