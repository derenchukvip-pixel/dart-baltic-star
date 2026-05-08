import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Blog = () => {
  const { t } = useTranslation();
  const posts = t("blog.posts", { returnObjects: true }) as { tag: string; title: string; read: string; date: string }[];
  return (
    <Layout>
      <SEO
        title="Baltic Influencer Marketing Blog — DART Agency"
        description="Practical guides on creator marketing in the Baltics: pricing, compliance, campaign playbooks and channel trends."
        path="/blog"
      />

      <section className="container-tight pt-20 pb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("blog.tag")}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">{t("blog.title")}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("blog.body")}</p>
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
                {t("blog.read")} <ArrowUpRight className="h-4 w-4 transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
