import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { calendlyProps } from "@/lib/booking";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container-tight flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("notfound.code")}</span>
        <h1 className="mt-3 text-balance text-5xl font-bold md:text-6xl">{t("notfound.title")}</h1>
        <p className="mt-4 max-w-md text-muted-foreground">{t("notfound.body")}</p>
        <div className="mt-8 flex gap-3">
          <Button asChild className="bg-foreground text-background hover:opacity-90">
            <Link to="/">{t("common.backHome")}</Link>
          </Button>
          <Button asChild variant="outline">
            <a {...calendlyProps}>{t("common.bookCall")}</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
