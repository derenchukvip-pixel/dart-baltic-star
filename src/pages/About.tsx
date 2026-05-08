import { Compass, HeartHandshake, LineChart, MapPin, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { calendlyProps } from "@/lib/booking";

const valueIcons = [Compass, LineChart, MapPin, HeartHandshake];

const About = () => {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as { name: string; desc: string }[];
  const timeline = t("about.timeline", { returnObjects: true }) as { y: string; t: string }[];
  return (
    <Layout>
      <SEO
        title="About DART Agency — Baltic Creator Growth Partner"
        description="DART Agency helps Baltic and regional brands run creator campaigns with strategy, reporting and local market execution. Based in Vilnius."
        path="/about"
      />

      <section className="container-tight pt-20 pb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("about.tag")}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">{t("about.title")}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("about.body")}</p>
      </section>

      <section className="container-tight pb-20">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={v.name} className="bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-tight pb-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Sparkles className="h-6 w-6 text-highlight" />
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">{t("about.timelineTitle")}</h2>
            <p className="mt-4 text-muted-foreground">{t("about.timelineBody")}</p>
          </div>
          <ol className="relative lg:col-span-7">
            <div className="absolute left-[7.5rem] top-0 hidden h-full w-px bg-border md:block" aria-hidden />
            {timeline.map((s) => (
              <li key={s.y} className="grid grid-cols-1 gap-3 border-b border-border py-6 last:border-b-0 md:grid-cols-[8rem_1fr] md:gap-8">
                <span className="text-sm font-semibold tabular text-highlight">{s.y}</span>
                <p className="text-base leading-relaxed text-foreground">{s.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-tight pb-24">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl">{t("about.ctaTitle")}</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">{t("about.ctaBody")}</p>
            </div>
            <Button asChild size="lg" className="bg-foreground text-background hover:opacity-90">
              <a {...calendlyProps}>{t("common.bookCall")}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
