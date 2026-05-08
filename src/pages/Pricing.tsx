import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { calendlyProps } from "@/lib/booking";

type Tier = { name: string; price: string; desc: string; features: string[]; cta: string; cadence: "perMonth" | "annual" };

const Pricing = () => {
  const { t } = useTranslation();
  const tiers = t("pricing.tiers", { returnObjects: true }) as Tier[];
  const faqs = t("pricing.faqs", { returnObjects: true }) as { q: string; a: string }[];
  const featuredName = "Pro";

  return (
    <Layout>
      <SEO
        title="Influencer Agency Pricing for Baltic Brands — DART Agency"
        description="Transparent pricing for pilot campaigns, monthly retainers, regional programmes and enterprise creator growth support across the Baltics."
        path="/pricing"
      />

      <section className="container-tight pt-20 pb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("pricing.tag")}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">{t("pricing.title")}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("pricing.body")}</p>
      </section>

      <section className="container-tight pb-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => {
            const featured = tier.name === featuredName;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 transition-smooth ${
                  featured ? "border-foreground bg-foreground text-background shadow-elevated" : "border-border bg-card hover:shadow-soft"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-amber-grad px-3 py-1 text-xs font-semibold text-foreground">
                    {t("common.mostPopular")}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tabular">{tier.price}</span>
                  <span className={`text-xs ${featured ? "text-background/70" : "text-muted-foreground"}`}>
                    {t(`pricing.${tier.cadence}`)}
                  </span>
                </div>
                <p className={`mt-3 text-sm ${featured ? "text-background/75" : "text-muted-foreground"}`}>{tier.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-highlight" : "text-pine"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`mt-8 w-full ${featured ? "bg-amber-grad text-foreground hover:opacity-90" : "bg-foreground text-background hover:opacity-90"}`}>
                  <a {...calendlyProps}>{tier.cta}</a>
                </Button>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">{t("pricing.vatNote")}</p>
      </section>

      <section className="container-tight pb-24">
        <h2 className="text-balance text-3xl font-bold md:text-4xl">{t("pricing.faqTitle")}</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="bg-card p-6">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
