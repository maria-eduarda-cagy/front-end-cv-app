import styled from "styled-components";
import { motion } from "framer-motion";
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
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent-cyan);
  margin: 0 0 1.25rem;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const ItemName = styled.span`
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-card-foreground, var(--color-text));
`;

export const Track = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 999px;
  overflow: hidden;
  background: var(--color-border);
`;

export const Bar = styled(motion.span)`
  position: absolute;
  inset: 0 auto 0 0;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent-cyan));
`;
