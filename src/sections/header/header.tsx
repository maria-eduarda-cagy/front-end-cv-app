import { useEffect, useState } from "react";
import {
  HeaderWrapper,
  HeaderInner,
  Brand,
  Nav,
  NavLink,
  MobileLink,
  BurgerButton,
  BurgerBar,
} from "../styles";

const navItems = [
  { label: "Home", href: "#avatar" },
  { label: "About", href: "#about-me" },
  { label: "Career", href: "#my-career" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Skills", href: "#skills" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Brand href="#avatar" aria-label="Go to top">
          Maria Cagy
        </Brand>

        {/* Desktop navigation */}
        <Nav $variant="desktop" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <BurgerButton
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          type="button"
        >
          {[0, 1, 2].map((index) => (
            <BurgerBar
              key={index}
              $open={open}
              $index={index}
            />
          ))}
        </BurgerButton>
      </HeaderInner>

      <Nav
        id="mobile-nav"
        $variant="mobile"
        $open={open}
        aria-label="Mobile"
      >
        {navItems.map((item) => (
          <MobileLink
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
          >
            {item.label}
          </MobileLink>
        ))}
      </Nav>
    </HeaderWrapper>
  );
}
