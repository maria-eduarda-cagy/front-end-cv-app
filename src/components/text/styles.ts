import styled, { css } from "styled-components";
import { up } from "../../styles/media";
export type TextVariants =
  | "title"
  | "subtitle"
  | "text"
  | "subtext"
  | "textWithBackground";

interface StyledTextProps {
  variant?: TextVariants;
}

export const StyledText = styled.span<StyledTextProps>`
  max-width: fit-content;
  ${up.md} {
    font-weight: 500;
  }
  ${(props) =>
    props.variant === "title" &&
    css`
      font-size: 48px;
      font-weight: 900;
    `}
  ${(props) =>
    props.variant === "subtitle" &&
    css`
      font-size: 24px;
      font-weight: 800;
    `}

  ${(props) =>
    props.variant === "text" &&
    css`
      font-size: 16px;
      b {
        font-weight: 800;
      }
    `}
    ${(props) =>
    props.variant === "subtext" &&
    css`
      font-size: 14px;
      font-weight: 800;
    `}
  ${(props) =>
    props.variant === "textWithBackground" &&
    css`
      font-size: 16px;
      background-color: var(--color-accent-30);
      color: var(--color-text);
      font-weight: 800;
      padding: 4px 8px;
      border-radius: 8px;
      width: fit-content;
    `}
`;
