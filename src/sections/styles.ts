import styled from "styled-components";
import { up } from "../styles/media";

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
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.3px;
  white-space: nowrap;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FooterBackground = styled.footer`
  width: 100%;
  height: 84px;
  margin-top: 2rem;

  background-color: var(--color-footer-bg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  span {
    font-size: 14px;
  }

  .mobile-header-icons {
    display: flex;
    gap: 1rem;
  }
`;

export const Nav = styled.nav<{
  $variant: "desktop" | "mobile";
  $open?: boolean;
}>`
  ${({ $variant }) =>
    $variant === "desktop" &&
    `
    display: flex;
    gap: 0.9rem;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media (max-width: 768px) {
      display: none;
    }
  `}

  ${({ $variant, $open }) =>
    $variant === "mobile" &&
    `
    display: block;
    max-height: ${$open ? "320px" : "0"};
    overflow: hidden;
    transition: max-height 240ms ease;
    border-top: 1px solid var(--color-header-border);
        position: absolute;
    background: var(--color-bg);
    width: 100%;
}

     ${up.md} {
      display: none;
    }
  `}
`;

export const NavLink = styled.a`
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.35rem 0.55rem;
  border-radius: 10px;
  white-space: nowrap;

  &:hover {
    background: var(--color-surface);
    color: var(--color-text);
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
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 8px;
  background: var(--color-surface);
  cursor: pointer;
  padding: 10px;

  &:hover {
    background: var(--color-surface-hover);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
  }
`;

export const BurgerBar = styled.span<{ $open: boolean; $index: number }>`
  display: block;
  height: 2px;
  width: 20px;
  background: var(--color-text);
  border-radius: 5px;
  transition: transform 180ms ease, opacity 180ms ease;

  ${({ $open, $index }) =>
    $open &&
    $index === 0 &&
    `
      transform: translateY(6px) rotate(45deg);
    `}

  ${({ $open, $index }) =>
    $open &&
    $index === 1 &&
    `
      opacity: 0;
    `}

  ${({ $open, $index }) =>
    $open &&
    $index === 2 &&
    `
      transform: translateY(-6px) rotate(-45deg);
    `}
`;
