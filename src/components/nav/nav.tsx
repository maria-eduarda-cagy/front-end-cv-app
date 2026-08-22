import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import {
  HeaderWrapper,
  HeaderInner,
  Brand,
  HeaderControls,
  Nav as NavList,
  NavLink,
  MobileLink,
  BurgerButton,
} from "./styles";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import brandMark from "../../assets/icons/Link.png";
import { breakpoints } from "../../styles/breakpoints";

const MOBILE_BREAKPOINT = parseInt(breakpoints.lg, 10);

export function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.stack"), href: "#stack" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.recommendations"), href: "#recommendations" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) setOpen(false);
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
        <Brand href="#hero" aria-label={t("header.goToTop")}>
          <img src={brandMark} alt="" width={44} height={16} />
          {t("header.brand")}
        </Brand>

        {/* Desktop navigation */}
        <NavList $variant="desktop" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </NavList>

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
            {open ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </BurgerButton>
        </HeaderControls>
      </HeaderInner>

      <NavList id="mobile-nav" $variant="mobile" $open={open} aria-label="Mobile">
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
      </NavList>
    </HeaderWrapper>
  );
}
