import styled from "styled-components";
import { up } from "../../../styles/media";

export const AboutSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.25rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${up.md} {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const TextColumn = styled.div`
  min-width: 0;
  width: 100%;
`;

export const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  max-width: 60ch;
  margin: 0 0 2rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const StatValue = styled.span`
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-primary);
`;

export const CardsColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MiniCard = styled.div`
  padding: 1.25rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-card);
`;

export const MiniCardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-card-foreground, var(--color-text));
  margin: 0 0 0.4rem;
`;

export const MiniCardBody = styled.p`
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-text-muted);
  margin: 0;
`;
