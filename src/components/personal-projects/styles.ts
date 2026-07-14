import styled from "styled-components";

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  border: 1px solid var(--color-accent-80);
  border-radius: 12px;
  width:100%;
  color: var(--color-text);
  text-decoration: none;
  transition: transform 160ms ease, opacity 160ms ease;
  will-change: transform;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
    color: var(--color-text);
  }

  &:visited {
    color: var(--color-text);
  }

  .title {
    font-size: 18px;
    font-weight: 800;
  }
  .link {
    font-size: 12px;
    opacity: 0.85;
  }
  .desc {
    font-size: 16px;
    opacity: 0.8;
  }
  .tech {
    font-size: 12px;
    opacity: 0.75;
  }
`;
