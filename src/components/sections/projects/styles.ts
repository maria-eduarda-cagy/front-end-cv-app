import styled from "styled-components";
import { up } from "../../../styles/media";

export const ProjectsSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.25rem;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${up.md} {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Card = styled.div`
  flex: 1 1 0%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-card);
`;

export const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-card-foreground, var(--color-text));
  margin: 0;
`;

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Tech = styled.span`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
`;

export const CardDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin: 0;
  flex: 1;
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;
