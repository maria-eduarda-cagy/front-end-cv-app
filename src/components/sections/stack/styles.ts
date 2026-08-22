import styled from "styled-components";
import { up } from "../../../styles/media";

export const StackSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.25rem;
  box-sizing: border-box;
`;

export const GroupsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  ${up.md} {
    flex-direction: row;
  }
`;

export const Group = styled.div`
  flex: 1 1 0;
  min-width: 0;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-card);
`;

export const GroupTitle = styled.h3`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-card-foreground, var(--color-text));
  border: 1px solid var(--color-border);
`;
