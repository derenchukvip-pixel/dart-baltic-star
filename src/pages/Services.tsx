import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Megaphone, ShieldCheck, Target, Video, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { calendlyProps } from "@/lib/booking";

const blockIcons = [Target, Video, Megaphone, BarChart3, Workflow, ShieldCheck];

const Services = () => {
  const { t } = useTranslation();
  const blocks = t("services.blocks", { returnObjects: true }) as { name: string; desc: string; features: string[] }[];
  return (
  <Layout>
    <SEO
      title="Influencer Campaigns, UGC & Paid Amplification in the Baltics — DART Agency"
      description="Explore our creator services: campaign management, UGC production, creator seeding, reporting, and regional execution across Estonia, Latvia and Lithuania."
      path="/services"
    />

    <section className="container-tight pt-20 pb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("services.tag")}</p>
      <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">
        {t("services.title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {t("services.body")}
      </p>
    </section>

    <section className="container-tight pb-20">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {blocks.map((b, i) => {
          const Icon = blockIcons[i];
          return (
          <article key={b.name} className="group bg-card p-8 transition-smooth hover:bg-background">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background transition-smooth group-hover:bg-amber-grad group-hover:text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs tabular text-muted-foreground">0{i + 1}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{b.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {b.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" /> {f}
                </li>
              ))}
            </ul>
          </article>
          );
        })}
      </div>
    </section>

    <section className="container-tight pb-24">
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
        <h2 className="text-balance text-3xl font-bold md:text-4xl">{t("services.ctaTitle")}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {t("services.ctaBody")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="bg-foreground text-background hover:opacity-90">
            <a {...calendlyProps}>{t("common.bookCall")} <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline">
            <Link to="/pricing">{t("common.viewPricing")}</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Services;