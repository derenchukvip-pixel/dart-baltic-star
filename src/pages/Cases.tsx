import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const cases = [
  {
    tag: "DTC Beauty · LT",
    title: "Launching a clean-beauty brand to 1.4M Lithuanians in 6 weeks",
    metrics: [
      { v: "+312%", l: "Add-to-cart lift" },
      { v: "1.4M", l: "Reach" },
      { v: "€0.04", l: "CPM (paid amp)" },
    ],
    summary: "Twelve mid-tier creators, eight UGC ad variants, a single landing page test, and a clean attribution window.",
  },
  {
    tag: "Fintech · Regional",
    title: "Cross-Baltic creator launch for a B2C fintech app",
    metrics: [
      { v: "47k", l: "App installs" },
      { v: "€2.10", l: "CPI (blended)" },
      { v: "3", l: "Markets · 1 ops team" },
    ],
    summary: "One brief, three local versions. Creators in Tallinn, Riga and Vilnius told the same story in three voices.",
  },
  {
    tag: "Consumer Electronics · EE",
    title: "Seeding 60 creators in Estonia for a product reveal",
    metrics: [
      { v: "8.2x", l: "ROAS on amplified creatives" },
      { v: "92%", l: "Posting rate" },
      { v: "5", l: "Reusable hero ads" },
    ],
    summary: "Product seeding with rights-cleared content reuse — turning organic posts into the brand's best-performing ads.",
  },
  {
    tag: "Hospitality · LV",
    title: "Filling a Riga hotel's shoulder season with creator content",
    metrics: [
      { v: "+38%", l: "Direct bookings" },
      { v: "22", l: "Long-form Reels" },
      { v: "€61", l: "CAC, blended" },
    ],
    summary: "Travel creators briefed on real guest journeys. Cinematic UGC for paid + organic across LV and EE.",
  },
];

const Cases = () => (
  <Layout>
    <SEO
      title="Baltic Influencer Marketing Case Studies — DART Agency"
      description="See how creator campaigns drive reach, social proof and revenue-ready content across Estonia, Latvia and Lithuania."
      path="/cases"
    />

    <section className="container-tight pt-20 pb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-highlight">Case studies</p>
      <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">Proof over promises.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        We structure every campaign around a commercial objective: awareness, launch, social proof, hiring,
        traffic or sales. Then we show the outcome clearly.
      </p>
    </section>

    <section className="container-tight pb-16">
      <div className="grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
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
        <h2 className="text-balance text-3xl font-bold md:text-4xl">Request the full results deck</h2>
        <p className="mt-3 max-w-xl text-background/75">
          Want the unredacted numbers, briefs and ad creatives? We share full decks under NDA.
        </p>
        <div className="mt-6">
          <Button asChild className="bg-amber-grad text-foreground hover:opacity-90">
            <Link to="/contact">Request results deck</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Cases;