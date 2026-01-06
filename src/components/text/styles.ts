import styled, { css } from "styled-components";

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
      font-weight: 700;
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
    `}
  ${(props) =>
    props.variant === "textWithBackground" &&
    css`
      font-size: 16px;
      background-color: #7b4ae230;
      color: #fff;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 8px;
      width: fit-content;
    `}
`;
