import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { calendlyProps } from "@/lib/booking";

const Header = () => {
  const { t } = useTranslation();
  const nav = [
    { to: "/services", label: t("nav.services") },
    { to: "/cases", label: t("nav.cases") },
    { to: "/pricing", label: t("nav.pricing") },
    { to: "/about", label: t("nav.about") },
    { to: "/blog", label: t("nav.blog") },
  ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-smooth hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button asChild variant="default" size="sm" className="bg-foreground text-background hover:opacity-90">
            <a {...calendlyProps}>{t("nav.bookSession")}</a>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
        <LanguageSwitcher />
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-tight flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-foreground text-background">
              <a {...calendlyProps}>{t("nav.bookSession")}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;