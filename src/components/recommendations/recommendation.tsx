import { RecommendationContainer } from "./styles";
import { Text } from "../text/text";

import type { Recommendation } from "../utils/utils";

type Props = {
  recommendation: Recommendation;
};

export function Recommendation({ recommendation }: Props) {
  return (
    <RecommendationContainer>
      <div className="row">
        <img
          src={recommendation.photo}
          className="profile-image"
          alt="profile image"
          width={50}
          height={50}
        />
        <div className="description">
          <Text
            preset="subtitle"
            style={{ textAlign: "start", marginBottom: "0.25rem" }}
          >
            {recommendation.name}
           
          </Text>

          <Text
            preset="subtext"
            style={{ textAlign: "start" }}
          >
            {recommendation.role}
             
          </Text>
            <Text
            preset="subtext"
            style={{ textAlign: "start", marginBottom: "0.75rem", fontWeight:"500", fontSize:14 }}
          >
            {recommendation.relationship}
             
          </Text>
          <Text
            preset="subtext"
            style={{ textAlign: "start", opacity: 0.7, marginBottom: "1rem" }}
          >
            {new Date(recommendation.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </Text>
        </div>
      </div>
      <Text preset="text" style={{ textAlign: "start" }}>
        {recommendation.content}
      </Text>
    </RecommendationContainer>
  );
}
