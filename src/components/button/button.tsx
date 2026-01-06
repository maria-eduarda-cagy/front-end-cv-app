import { StyledButton } from "./styles";

export default function Button(props: React.ComponentProps<"button">) {
  return (
    <StyledButton {...props} className={`${props.className}`}>
      {props.children}
    </StyledButton>
  );
}
