import { Compass, HeartHandshake, LineChart, MapPin, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { calendlyProps } from "@/lib/booking";

const values = [
  { icon: Compass, name: "Clarity", desc: "We say what we will deliver, what it will cost, and what we will measure." },
  { icon: LineChart, name: "Accountability", desc: "Every campaign has a written hypothesis, a KPI tree and a post-mortem." },
  { icon: MapPin, name: "Local relevance", desc: "Briefs and creators feel native to each Baltic market — never translated." },
  { icon: HeartHandshake, name: "Commercial usefulness", desc: "If the deliverable can't be reused, amplified or learned from, we don't ship it." },
];

const timeline = [
  { y: "M1–M3", t: "Founding team in Vilnius, first 12 creators on retainer-friendly terms." },
  { y: "M4–M6", t: "Cross-Baltic launches in EE and LV with shared dashboards and reporting." },
  { y: "M7–M12", t: "Productised pilots, paid amplification practice, first enterprise retainers." },
  { y: "Y2", t: "Regional category leadership in DTC, fintech and consumer electronics." },
];

const About = () => (
  <Layout>
    <SEO
      title="About DART Agency — Baltic Creator Growth Partner"
      description="DART Agency helps Baltic and regional brands run creator campaigns with strategy, reporting and local market execution. Based in Vilnius."
      path="/about"
    />

    <section className="container-tight pt-20 pb-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-highlight">About</p>
      <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">
        Built for the Baltic market — not copied from somewhere else.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        We launched to solve a regional gap: brands need creator marketing that is local enough to feel real,
        but structured enough to be trusted by finance, legal and leadership. We combine creator relationships
        with strategy, reporting and execution discipline.
      </p>
    </section>

    <section className="container-tight pb-20">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {values.map((v) => (
          <div key={v.name} className="bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{v.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-tight pb-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Sparkles className="h-6 w-6 text-highlight" />
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">How we got here</h2>
          <p className="mt-4 text-muted-foreground">
            DART started in Vilnius with one belief: the next decade of Baltic growth will be creator-led.
            We're building the operating system that makes it measurable.
          </p>
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
            <h2 className="text-balance text-3xl font-bold md:text-4xl">Want to work with us?</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">We respond to every brief within one business day.</p>
          </div>
          <Button asChild size="lg" className="bg-foreground text-background hover:opacity-90">
            <a {...calendlyProps}>Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;