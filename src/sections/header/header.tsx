import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HeaderWrapper,
  HeaderInner,
  Brand,
  HeaderControls,
  Nav,
  NavLink,
  MobileLink,
  BurgerButton,
  BurgerBar,
} from "../styles";
import { ThemeToggle } from "../../components/theme-toggle/theme-toggle";
import { LanguageSwitcher } from "../../components/language-switcher/language-switcher";

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "#avatar" },
    { label: t("nav.about"), href: "#about-me" },
    { label: t("nav.career"), href: "#my-career" },
    { label: t("nav.recommendations"), href: "#recommendations" },
    { label: t("nav.skills"), href: "#skills" },
  ];

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
        <Brand href="#avatar" aria-label={t("header.goToTop")}>
          {t("header.brand")}
        </Brand>

        {/* Desktop navigation */}
        <Nav $variant="desktop" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <HeaderControls>
          <LanguageSwitcher />
          <ThemeToggle />

          <BurgerButton
            onClick={() => setOpen((v) => !v)}
            aria-label={t("header.toggleNav")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            type="button"
          >
            {[0, 1, 2].map((index) => (
              <BurgerBar key={index} $open={open} $index={index} />
            ))}
          </BurgerButton>
        </HeaderControls>
      </HeaderInner>

      <Nav id="mobile-nav" $variant="mobile" $open={open} aria-label="Mobile">
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
