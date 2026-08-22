import styled from "styled-components";

export const ExperienceSection = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.25rem;
  box-sizing: border-box;
`;

export const Timeline = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0.4rem;
    bottom: 0.4rem;
    left: 7px;
    width: 2px;
    background: var(--color-border);
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-left: 2.25rem;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0.35rem;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-card);
    border: 2px solid var(--color-primary);
  }
`;

export const Company = styled.h3`
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
`;

export const Role = styled.p`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-primary);
  margin: 0.2rem 0 0.4rem;
`;

export const Meta = styled.p`
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
`;

export const Bullets = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Bullet = styled.li`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-muted);
`;
