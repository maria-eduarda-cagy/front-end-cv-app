import React from "react";
import { StyledText } from "./styles";
import type { TextVariants } from "./styles";

interface TextProps {
  preset?: TextVariants;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Text({ preset = "text", children, style }: TextProps) {
  return (
    <StyledText variant={preset} style={style}>
      {children}
    </StyledText>
  );
}
