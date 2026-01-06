import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(10, 10, 14, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

export const Brand = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.3px;
  white-space: nowrap;
`;

export const FooterBackground = styled.footer`
  width: 100%;
  height: 84px;
  margin-top: 2rem;

  background-color: #7b4ae210;

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
    border-top: 1px solid rgba(255, 255, 255, 0.06);
        position: absolute;
    background: rgba(10, 10, 14);
    width: 100%;
}

    @media (min-width: 769px) {
      display: none;
    }
  `}
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.35rem 0.55rem;
  border-radius: 10px;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }
`;

export const MobileLink = styled(NavLink)`
  display: block;
  padding: 0.85rem 1.25rem;
  border-radius: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const BurgerButton = styled.button`
  display: none;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  padding: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
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
  background: rgba(255, 255, 255, 0.9);
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
