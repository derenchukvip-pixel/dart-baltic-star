import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

type DocSlug = "privacy" | "terms" | "cookies" | "disclosure" | "creators";

const Legal = () => {
  const { slug = "privacy" } = useParams();
  const { t } = useTranslation();
  const validSlugs: DocSlug[] = ["privacy", "terms", "cookies", "disclosure", "creators"];
  const key = (validSlugs.includes(slug as DocSlug) ? slug : "privacy") as DocSlug;
  const doc = t(`legal.docs.${key}`, { returnObjects: true }) as { title: string; intro: string; sections: { h: string; p: string }[] };

  return (
    <Layout>
      <SEO title={`${doc.title} — DART Agency`} description={doc.intro} path={`/legal/${key}`} />
      <article className="container-tight max-w-3xl py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-highlight">{t("legal.tag")}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{doc.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{doc.intro}</p>
        <div className="mt-10 space-y-8">
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-xs text-muted-foreground">{t("legal.lastUpdated")}</p>
      </article>
    </Layout>
  );
};

export default Legal;
