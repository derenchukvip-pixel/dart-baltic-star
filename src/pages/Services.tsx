import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Megaphone, ShieldCheck, Target, Video, Workflow } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const blocks = [
  {
    icon: Target,
    name: "Creator Campaign Management",
    desc: "Creator sourcing, briefing, negotiation, approvals, reporting — end to end.",
    features: ["Creator vetting & rate negotiation", "Brief writing that reduces revisions", "Approvals workflow with brand & legal", "Post-campaign deck with benchmarks"],
  },
  {
    icon: Video,
    name: "UGC Production",
    desc: "Creator-made short-form content for paid social, landing pages and product pages.",
    features: ["Hook/format library tuned for Meta & TikTok", "Vertical 9:16 + 1:1 deliverables", "Usage rights scoped for paid", "Iteration cycles based on creative scoring"],
  },
  {
    icon: Megaphone,
    name: "Paid Amplification & Whitelisting",
    desc: "Boost the creators that work. Test hooks, formats and audiences with proper attribution.",
    features: ["Spark Ads & Meta whitelisting setup", "Creative testing matrix", "Audience & placement strategy", "Weekly performance read-outs"],
  },
  {
    icon: BarChart3,
    name: "Strategy & Analytics",
    desc: "Market fit, KPI frameworks, competitor scans and dashboards leadership trusts.",
    features: ["Channel & creator audit", "KPI tree by funnel stage", "Competitor & share-of-voice scan", "Live reporting dashboard"],
  },
  {
    icon: Workflow,
    name: "Workshops & Audits",
    desc: "Train your team or get an outside look at your creator operating model.",
    features: ["Half-day or full-day workshops", "Influencer maturity audit", "Brief-template & rate-card review", "Vendor & tooling recommendations"],
  },
  {
    icon: ShieldCheck,
    name: "Compliance & Disclosure",
    desc: "Disclosure-safe campaigns under EU UCPD and Baltic regulator guidance.",
    features: ["Plain-language disclosure templates", "GDPR-safe data flows", "Contract + creator-terms library", "Crisis & takedown protocol"],
  },
];

const Services = () => (
  <Layout>
    <SEO
      title="Influencer Campaigns, UGC & Paid Amplification in the Baltics — DART Agency"
      description="Explore our creator services: campaign management, UGC production, creator seeding, reporting, and regional execution across Estonia, Latvia and Lithuania."
      path="/services"
    />

    <section className="container-tight pt-20 pb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-highlight">Services</p>
      <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">
        Built for brands that want more than one-off posts.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Every engagement is structured around a commercial objective: awareness, launch, social proof,
        traffic or sales. We then choose the right mix of creators, content, paid and reporting.
      </p>
    </section>

    <section className="container-tight pb-20">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {blocks.map((b, i) => (
          <article key={b.name} className="group bg-card p-8 transition-smooth hover:bg-background">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background transition-smooth group-hover:bg-amber-grad group-hover:text-foreground">
                <b.icon className="h-5 w-5" />
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
        ))}
      </div>
    </section>

    <section className="container-tight pb-24">
      <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
        <h2 className="text-balance text-3xl font-bold md:text-4xl">Build my campaign plan</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Tell us the country, timeline, budget band and goal. We respond with the best-fit format and a transparent quote.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="bg-foreground text-background hover:opacity-90">
            <Link to="/contact">Start a brief <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;