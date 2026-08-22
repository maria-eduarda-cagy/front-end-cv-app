import styled from "styled-components";
import { up } from "../../../styles/media";

export const RecommendationsSection = styled.section`
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

export const Card = styled.figure`
  flex: 1 1 0%;
  min-width: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-card);
`;

export const Quote = styled.blockquote`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--color-text-muted);
  flex: 1;

  p {
    margin: 0 0 0.85rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

export const Attribution = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Photo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Name = styled.span`
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-card-foreground, var(--color-text));
`;

export const Role = styled.span`
  display: block;
  font-size: 0.78rem;
  color: var(--color-text-muted);
`;

export const Meta = styled.span`
  display: block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  opacity: 0.75;
  margin-top: 0.15rem;
`;
