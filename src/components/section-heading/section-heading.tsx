import { Eyebrow, Title } from "./styles";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
    </>
  );
}
