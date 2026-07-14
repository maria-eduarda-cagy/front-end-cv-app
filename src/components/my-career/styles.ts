import styled from "styled-components";

export const MyCareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-accent-80);
  border-radius: 16px;
  padding: 10px;
  position: relative;
  height: fit-content;
`;

export const Button = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;

  width: 24px;
  height: 24px;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
