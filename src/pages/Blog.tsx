import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const posts = [
  { tag: "Pricing", title: "How much influencer marketing costs in the Baltics", read: "8 min", date: "Apr 2026" },
  { tag: "Markets", title: "Estonia vs Latvia vs Lithuania for creator campaigns", read: "10 min", date: "Apr 2026" },
  { tag: "Performance", title: "Paid amplification after influencer campaigns: a playbook", read: "7 min", date: "Mar 2026" },
  { tag: "Operations", title: "How to write creator briefs that reduce revisions", read: "6 min", date: "Mar 2026" },
  { tag: "Creative", title: "UGC vs influencer posts for Meta ads", read: "5 min", date: "Feb 2026" },
  { tag: "Compliance", title: "What Baltic brands must disclose in paid creator content", read: "9 min", date: "Feb 2026" },
  { tag: "Measurement", title: "How to measure creator campaigns beyond impressions", read: "7 min", date: "Jan 2026" },
  { tag: "B2B", title: "LinkedIn creator strategy for Baltic B2B brands", read: "8 min", date: "Jan 2026" },
];

const Blog = () => (
  <Layout>
    <SEO
      title="Baltic Influencer Marketing Blog — DART Agency"
      description="Practical guides on creator marketing in the Baltics: pricing, compliance, campaign playbooks and channel trends."
      path="/blog"
    />

    <section className="container-tight pt-20 pb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-highlight">Blog</p>
      <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">
        Baltic creator marketing insights.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Practical guides, campaign breakdowns, pricing explainers, creator trends and regional market notes.
      </p>
    </section>

    <section className="container-tight pb-24">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.title} to="#" className="group flex flex-col bg-card p-7 transition-smooth hover:bg-background">
            <div className="flex items-center justify-between text-xs">
              <span className="rounded-full bg-muted px-2.5 py-1 font-medium text-muted-foreground">{p.tag}</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground tabular"><Clock className="h-3 w-3" /> {p.read} · {p.date}</span>
            </div>
            <h2 className="mt-4 flex-1 text-xl font-semibold leading-snug">{p.title}</h2>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
              Read <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;