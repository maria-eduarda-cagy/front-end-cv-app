import { MyCareerContainer } from "./styles";
import { Text } from "../text/text";

import type { CareerExperience } from "../utils/utils";

type Props = {
  experience: CareerExperience;
};

export function CareerItem({ experience }: Props) {
  return (
    <MyCareerContainer>
      {experience.href ? (
        <a
          href={experience.href}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff" }}
        >
          <Text preset="subtitle" style={{ textAlign: "start",  marginRight: "1rem" }}>
            {experience.title}
          </Text>
        </a>
      ) : (
        <Text preset="subtitle" style={{ textAlign: "start",  marginRight: "1rem" }}>
          {experience.title}
        </Text>
      )}

      <Text preset="subtext" style={{ textAlign: "start" }}>
        {experience.period}
      </Text>

      <Text preset="text" style={{ textAlign: "start"}}>
        {experience.bullets.map((b, idx) => (
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
