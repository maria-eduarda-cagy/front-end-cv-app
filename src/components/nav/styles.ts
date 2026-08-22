import styled from "styled-components";
import { up } from "../../styles/media";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: var(--color-bg-elevated);
  border-bottom: 1px solid var(--color-header-border);
`;

export const HeaderInner = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.9rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${up.md} {
    padding: 0.9rem 1.25rem;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-card-foreground, var(--color-text));
  text-decoration: none;
  font-family: var(--font-mono);
  font-weight: 600;
  letter-spacing: 0.3px;
  white-space: nowrap;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Nav = styled.nav<{
  $variant: "desktop" | "mobile";
  $open?: boolean;
}>`
  ${({ $variant }) =>
    $variant === "desktop" &&
    `
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media (max-width: calc(${breakpoints.lg} - 1px)) {
      display: none;
    }
  `}

  ${({ $variant, $open }) =>
    $variant === "mobile" &&
    `
    display: block;
    max-height: ${$open ? "420px" : "0"};
    overflow: hidden;
    transition: max-height 240ms ease;
    border-top: 1px solid var(--color-header-border);
    position: absolute;
    background: var(--color-card);
    width: 100%;

    ${up.lg} {
      display: none;
    }
  `}
`;

export const NavLink = styled.a`
  color: var(--color-text-muted);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  padding: 0.5rem 0.7rem;
  border-radius: var(--radius);
  white-space: nowrap;

  &:hover {
    background: var(--color-surface);
    color: var(--color-primary);
  }
`;

export const MobileLink = styled(NavLink)`
  display: block;
  padding: 0.85rem 1.25rem;
  border-radius: 0;

  &:hover {
    background: var(--color-surface);
  }
`;

export const BurgerButton = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  padding: 5px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: var(--radius);
  background: var(--color-surface);
  color: var(--color-card-foreground, var(--color-text));
  cursor: pointer;

  &:hover {
    background: var(--color-surface-hover);
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: calc(${breakpoints.lg} - 1px)) {
    display: flex;
  }
`;
