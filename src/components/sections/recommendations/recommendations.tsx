import { useTranslation } from "react-i18next";
import { SectionHeading } from "../../section-heading/section-heading";
import { ScrollEnter } from "../../motion/ScrollEnter";
import { recommendations } from "../../utils/references";
import {
  Attribution,
  Card,
  Grid,
  Meta,
  Name,
  Photo,
  Quote,
  RecommendationsSection,
  Role,
} from "./styles";

export function Recommendations() {
  const { t } = useTranslation();

  return (
    <RecommendationsSection id="recommendations">
      <SectionHeading
        eyebrow={t("recommendations.eyebrow")}
        title={t("recommendations.title")}
      />

      <Grid>
        {recommendations.map((rec, index) => (
          <ScrollEnter key={rec.id} from={index % 2 === 0 ? "left" : "right"}>
            <Card>
              <Quote>
                {rec.content.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Quote>
              <Attribution>
                <Photo src={rec.photo} alt="" width={44} height={44} />
                <div>
                  <Name>{rec.name}</Name>
                  <Role>{rec.role}</Role>
                  <Meta>
                    {rec.relationship} ·{" "}
                    {new Date(rec.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </Meta>
                </div>
              </Attribution>
            </Card>
          </ScrollEnter>
        ))}
      </Grid>
    </RecommendationsSection>
  );
}
