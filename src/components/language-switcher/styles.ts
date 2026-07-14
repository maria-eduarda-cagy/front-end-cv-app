import styled from "styled-components";

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2px;
`;

export const LangButton = styled.button<{ $active: boolean }>`
  border: 0;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "var(--color-accent)" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "var(--color-text)")};
  transition: background 160ms ease;

  &:hover {
    background: ${({ $active }) =>
      $active ? "var(--color-accent)" : "var(--color-surface)"};
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;
