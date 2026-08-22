import styled from "styled-components";
import { up } from "../../../styles/media";

export const ContactSection = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.25rem 4rem;
  box-sizing: border-box;
`;

export const Intro = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  max-width: 56ch;
  margin: 0 0 2rem;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${up.md} {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const Panel = styled.div`
  flex: 1 1 0%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-card);
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
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
    animation: contact-status-pulse 2s ease-in-out infinite;
  }

  @keyframes contact-status-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.35;
    }
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const InfoLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
`;

export const InfoValue = styled.span`
  font-size: 0.95rem;
  color: var(--color-card-foreground, var(--color-text));
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  color: var(--color-card-foreground, var(--color-text));
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 160ms ease;

  &:hover {
    background: var(--color-surface);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: var(--color-primary);
  }
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-card-foreground, var(--color-text));
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 160ms ease;

  &:hover {
    background: var(--color-surface-hover);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: var(--color-primary);
  }
`;
