import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { calendlyProps } from "@/lib/booking";

type CaseItem = { tag: string; title: string; summary: string; metrics: { v: string; l: string }[] };

const Cases = () => {
  const { t } = useTranslation();
  const items = t("cases.items", { returnObjects: true }) as CaseItem[];
  return (
    <Layout>
      <SEO
        title="Baltic Influencer Marketing Case Studies — DART Agency"
        description="See how creator campaigns drive reach, social proof and revenue-ready content across Estonia, Latvia and Lithuania."
        path="/cases"
      />

      <section className="container-tight pt-20 pb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("cases.tag")}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">{t("cases.title")}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("cases.body")}</p>
      </section>

      <section className="container-tight pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-smooth hover:shadow-elevated">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{c.tag}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5">
                {c.metrics.map((m) => (
                  <div key={m.l}>
                    <div className="text-xl font-bold tabular md:text-2xl">{m.v}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.l}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-tight pb-24">
        <div className="rounded-3xl bg-foreground p-10 text-background md:p-14">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">{t("cases.ctaTitle")}</h2>
          <p className="mt-3 max-w-xl text-background/75">{t("cases.ctaBody")}</p>
          <div className="mt-6">
            <Button asChild className="bg-amber-grad text-foreground hover:opacity-90">
              <a {...calendlyProps}>{t("common.bookCall")}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
