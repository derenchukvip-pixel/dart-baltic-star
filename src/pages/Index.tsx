import { ArrowRight, BarChart3, CheckCircle2, FileText, Globe2, Megaphone, Sparkles, Target, Video } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Marquee from "@/components/Marquee";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import { Link } from "react-router-dom";
import { calendlyProps } from "@/lib/booking";

const scrollToPricing = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const serviceIcons = [Target, Video, Megaphone, BarChart3];

const Index = () => {
  const { t } = useTranslation();
  const stats = t("home.stats", { returnObjects: true }) as { value: string; label: string }[];
  const services = t("home.services", { returnObjects: true }) as { title: string; desc: string }[];
  const proofs = t("home.proofs", { returnObjects: true }) as string[];
  const markets = t("home.markets", { returnObjects: true }) as { c: string; code: string; note: string }[];
  return (
  <Layout>
    <SEO
      title="DART Agency — Baltic Influencer Marketing for Estonia, Latvia & Lithuania"
      description="Cross-Baltic creator campaigns, UGC, paid amplification and measurable reporting. Vilnius-based agency serving Estonia, Latvia and Lithuania."
      path="/"
    />

    {/* HERO */}
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="container-tight relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <span className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-highlight" />
            {t("home.badge")}
          </span>
          <h1 className="mt-6 animate-fade-up text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t("home.titlePart1")}<span className="relative whitespace-nowrap">{t("home.titleHighlight")}
              <svg className="absolute -bottom-1 left-0 h-2 w-full text-highlight" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none"><path d="M2 6 Q 50 2, 100 5 T 198 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </span>{t("home.titlePart2")}
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "0.1s" }}>
            {t("home.subtitle")}
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-foreground text-background hover:opacity-90">
              <a {...calendlyProps}>{t("common.bookCall")} <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-card hover:bg-muted">
              <a href="#pricing" onClick={scrollToPricing}>{t("common.learnMore")}</a>
            </Button>
          </div>
          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
            {proofs.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-pine" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img src={heroImg} alt="Baltic skyline at golden hour with abstract dashboard overlays" width={1600} height={1200} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-background/85 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span>{t("home.liveLabel")}</span><span className="tabular text-pine">+212% CTR</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[78%] rounded-full bg-amber-grad" />
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground tabular">
                <span>{t("home.liveCreators")}</span><span>{t("home.liveReach")}</span><span>€0.04 CPM</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden h-20 w-20 rotate-12 rounded-2xl bg-amber-grad opacity-80 shadow-glow lg:block" aria-hidden />
        </div>
      </div>
    </section>

    <Marquee />

    {/* GAP STATEMENT */}
    <section className="container-tight py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("home.thesisTag")}</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            {t("home.thesisTitle")}
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("home.thesisBody")}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-highlight pl-4">
                <div className="text-2xl font-bold tabular text-foreground md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="bg-card py-24">
      <div className="container-tight">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("home.servicesTag")}</p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
              {t("home.servicesTitle")}
            </h2>
          </div>
          <Link to="/services" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground md:inline-flex md:items-center md:gap-1">
            {t("common.allServices")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
            <div key={s.title} className="group relative bg-card p-8 transition-smooth hover:bg-background">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-foreground text-background transition-smooth group-hover:bg-amber-grad group-hover:text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tabular text-muted-foreground">0{i + 1}</div>
                  <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* MARKET MAP */}
    <section className="container-tight py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("home.marketsTag")}</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            {t("home.marketsTitle")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("home.marketsBody")}
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" className="border-border bg-card">
              <Link to="/about">{t("common.readPlaybook")} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {markets.map((m) => (
            <div key={m.c} className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-smooth hover:shadow-soft">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-highlight" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground tabular">{m.code}</span>
              </div>
              <div className="mt-3 text-2xl font-bold">{m.c}</div>
              <p className="mt-2 text-sm text-muted-foreground">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING CTA BAND */}
    <section id="pricing" className="container-tight scroll-mt-24 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-grad opacity-20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-signal opacity-25 blur-3xl" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Sparkles className="h-6 w-6 text-highlight" />
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight md:text-5xl">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-background/75">
              {t("home.ctaBody")}
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <Button asChild size="lg" className="bg-amber-grad text-foreground hover:opacity-90">
              <a {...calendlyProps}>{t("common.bookCall")} <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10">
              <Link to="/pricing"><FileText className="mr-2 h-4 w-4" /> {t("common.seePricing")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Index;
