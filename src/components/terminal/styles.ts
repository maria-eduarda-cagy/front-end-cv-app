import styled from "styled-components";

export const TerminalCard = styled.div`
  width: 100%;
  max-width: 560px;
  border-radius: calc(var(--radius) * 2);
  overflow: hidden;
  background: var(--color-card);
  border: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent);
  box-shadow: 0 0 40px rgba(168, 85, 247, 0.08);
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1rem;
  background: var(--color-secondary);
  border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 15%, transparent);
`;

export const Dots = styled.div`
  display: flex;
  gap: 6px;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  span:nth-child(1) {
    background: #ff5f56;
  }
  span:nth-child(2) {
    background: #ffbd2e;
  }
  span:nth-child(3) {
    background: #27c93f;
  }
`;

export const TitleText = styled.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
`;

export const TerminalBody = styled.div`
  padding: 1.25rem 1.25rem 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.7;
  min-height: 220px;
`;

export const Row = styled.div`
  overflow: hidden;
`;

export const Line = styled.div`
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

export const Prompt = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`;

export const Command = styled.span`
  color: var(--color-card-foreground);
`;

export const Output = styled.div`
  color: var(--color-text-muted);
  margin: 0.15rem 0 0.65rem;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

export const Cursor = styled.span<{ $blink: boolean }>`
  display: inline-block;
  width: 0.55em;
  height: 1em;
  margin-left: 2px;
  background: var(--color-primary);
  vertical-align: text-bottom;
  ${({ $blink }) => $blink && "animation: terminal-blink 1s step-end infinite;"}

  @keyframes terminal-blink {
    0%,
    49% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }
`;
