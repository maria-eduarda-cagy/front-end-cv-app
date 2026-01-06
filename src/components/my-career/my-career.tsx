import { MyCareerContainer } from "./styles";
import { Text } from "../text/text";
export function MyCareer() {
  return (
    <MyCareerContainer>
      <Text preset="subtitle" style={{ textAlign: "start" }}>
        Voting Buddy
      </Text>
      <Text preset="subtext" style={{ textAlign: "start" }}>
        {" "}
        Sep/2024 · Present
      </Text>
      <Text preset="text" style={{ textAlign: "start", marginTop: "1rem" }}>
        <b>
          Actively participated in the implementation of the official website
          votingbuddy.com
        </b>
        , from structure to launch, using React (front-end) and Strapi
        (back-end) to ensure scalability and easy maintenance. <br />
        <br />
        <b>Developed integration with external and internal APIs</b>, automating
        data collection and processing for AI- powered features and user
        behavior analysis. <br />
        <br />
        <b>Helped build a booth at the Web Summit Rio 2024</b>, representing the
        company with machine learning and AI-based civic engagement solutions.{" "}
        <br />
        <br />
        <b>Collaborated with design, data, and product teams</b> to ensure
        visual consistency, accessibility, and responsive performance across
        multiple devices. <br />
        <br />
        <b>Conducted continuous maintenance and iterative improvements</b>,
        optimizing website load time and fixing bugs based on user feedback and
        automated testing.
      </Text>
    </MyCareerContainer>
  );
}
