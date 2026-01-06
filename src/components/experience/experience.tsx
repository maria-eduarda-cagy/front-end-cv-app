import { ExperienceStyled } from "./styles";
import { Text } from "../text/text";

type ExperienceProps = {
  src: string;
  time: string;
  position: string;
  using?: string;
};

export default function Experience(props: ExperienceProps) {
  return (
    <ExperienceStyled>
      <img src={props.src} alt="avatar" width={72} height={74} />
      <div className="text-container">
        <Text preset="text">{props.time} as </Text>
        <Text preset="subtitle">{props.position}</Text>
        {props.using && <Text preset="subtext">using {props.using}</Text>}
      </div>
    </ExperienceStyled>
  );
}
