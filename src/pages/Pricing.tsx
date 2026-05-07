import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { calendlyProps } from "@/lib/booking";

const tiers = [
  {
    name: "Starter",
    price: "€900+",
    cadence: "per month",
    desc: "Kickstart awareness in a single Baltic market.",
    features: [
      "5 creators for awareness campaigns",
      "Stories-only content format",
      "Full campaign report with analytics",
    ],
    cta: "Book a call",
  },
  {
    name: "Pro",
    price: "€3,900+",
    cadence: "per month",
    desc: "Dominate your niche with always-on creator output.",
    features: [
      "15+ creators for niche dominance",
      "Reels + Stories content mix",
      "Maximum reach and engagement",
    ],
    cta: "Book a call",
    featured: true,
  },
  {
    name: "UGC",
    price: "€1,700+",
    cadence: "per month",
    desc: "High-converting creator content engineered for paid ads.",
    features: [
      "5 professional UGC videos",
      "Full usage rights for your ads",
      "High-converting content production",
    ],
    cta: "Book a call",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    desc: "Multi-brand, multi-market, integrated with your performance team.",
    features: ["Unlimited markets", "Dedicated pod", "Custom data pipelines", "Legal & compliance lead", "Embedded strategist"],
    cta: "Contact sales",
  },
];

const faqs = [
  { q: "Can you work in one country only?", a: "Yes. We run single-market campaigns regularly — Lithuania is our home base, but we operate identically in Estonia and Latvia." },
  { q: "Do creator fees sit inside your fee?", a: "No. Creator fees, paid media and production are pass-through and shown as separate line items. Our agency fee covers strategy and operations." },
  { q: "Can we use creator content in ads?", a: "Yes — with the right usage scope. We negotiate paid usage and whitelisting upfront so the content is yours to amplify." },
  { q: "How do you measure success?", a: "Per-objective KPI tree, agreed before the campaign starts. We deliver a live dashboard plus a written read-out." },
  { q: "Are you GDPR-compliant?", a: "Yes. We use plain-language consent flows, a clear DPA and disclosure templates aligned to EU UCPD guidance." },
];

const Pricing = () => (
  <Layout>
    <SEO
      title="Influencer Agency Pricing for Baltic Brands — DART Agency"
      description="Transparent pricing for pilot campaigns, monthly retainers, regional programmes and enterprise creator growth support across the Baltics."
      path="/pricing"
    />

    <section className="container-tight pt-20 pb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-highlight">Pricing</p>
      <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">
        Start with a pilot. Scale with a system.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        We price for clarity. Strategy and operations are fixed. Creator fees, media spend and usage rights stay transparent.
      </p>
    </section>

    <section className="container-tight pb-16">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border p-8 transition-smooth ${
              t.featured ? "border-foreground bg-foreground text-background shadow-elevated" : "border-border bg-card hover:shadow-soft"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-amber-grad px-3 py-1 text-xs font-semibold text-foreground">Most popular</span>
            )}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold tabular">{t.price}</span>
              <span className={`text-xs ${t.featured ? "text-background/70" : "text-muted-foreground"}`}>{t.cadence}</span>
            </div>
            <p className={`mt-3 text-sm ${t.featured ? "text-background/75" : "text-muted-foreground"}`}>{t.desc}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-highlight" : "text-pine"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild className={`mt-8 w-full ${t.featured ? "bg-amber-grad text-foreground hover:opacity-90" : "bg-foreground text-background hover:opacity-90"}`}>
              <a {...calendlyProps}>{t.cta}</a>
            </Button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        All prices exclude VAT. Creator fees and paid media spend are billed at cost as separate pass-through.
      </p>
    </section>

    <section className="container-tight pb-24">
      <h2 className="text-balance text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
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

export default Pricing;