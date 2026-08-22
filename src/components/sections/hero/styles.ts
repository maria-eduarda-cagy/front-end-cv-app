import styled from "styled-components";
import { up } from "../../../styles/media";

export const HeroSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.25rem 4rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;

  ${up.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding-top: 4rem;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  text-align: start;
  min-width: 0;
  width: 100%;

  ${up.md} {
    flex: 1 1 480px;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #27c93f;
  flex-shrink: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: status-pulse 2s ease-in-out infinite;
  }

  @keyframes status-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.35;
    }
  }
`;

export const Headline = styled.h1`
  font-family: var(--font-display);
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 1.15;
  margin: 0;
  color: var(--color-text);

  ${up.md} {
    font-size: 3rem;
  }
`;

export const AccentPrimary = styled.span`
  color: var(--color-primary);
`;

export const AccentCyan = styled.span`
  color: var(--color-accent-cyan);
`;

export const Subheadline = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  max-width: 46ch;
  margin: 0;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.25rem;
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.4rem;
  border-radius: var(--radius);
  background: var(--color-primary);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: transform 160ms ease, opacity 160ms ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

export const SecondaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.4rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: background 160ms ease, transform 160ms ease;

  &:hover {
    background: var(--color-surface);
    transform: translateY(-2px);
  }
`;

export const TerminalColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${up.md} {
    width: auto;
    flex: 0 1 480px;
    justify-content: flex-end;
  }
`;
