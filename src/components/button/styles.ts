import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  opacity: 0.7;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
