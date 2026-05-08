import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import { calendlyProps } from "@/lib/booking";

const Footer = () => {
  const { t } = useTranslation();
  return (
  <footer className="mt-32 border-t border-border bg-card">
    <div className="container-tight py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t("footer.tagline")}
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-highlight" /> {t("footer.location")}</span>
            <a href="mailto:hello@dartagency.com" className="inline-flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4 text-highlight" /> hello@dartagency.com</a>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-smooth hover:bg-muted hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-smooth hover:bg-muted hover:text-foreground"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">{t("footer.agency")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">{t("footer.services")}</Link></li>
            <li><Link to="/cases" className="hover:text-foreground">{t("footer.cases")}</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">{t("footer.pricing")}</Link></li>
            <li><Link to="/about" className="hover:text-foreground">{t("footer.about")}</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">{t("footer.blog")}</Link></li>
            <li><a {...calendlyProps} className="hover:text-foreground">{t("footer.bookCall")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">{t("footer.legal")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/legal/privacy" className="hover:text-foreground">{t("footer.privacy")}</Link></li>
            <li><Link to="/legal/terms" className="hover:text-foreground">{t("footer.terms")}</Link></li>
            <li><Link to="/legal/cookies" className="hover:text-foreground">{t("footer.cookies")}</Link></li>
            <li><Link to="/legal/disclosure" className="hover:text-foreground">{t("footer.disclosure")}</Link></li>
            <li><Link to="/legal/creators" className="hover:text-foreground">{t("footer.creators")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} DART Agency. {t("footer.rights")}</p>
        <p className="tabular">Vilnius · Riga · Tallinn</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;