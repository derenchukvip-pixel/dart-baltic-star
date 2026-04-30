import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const docs: Record<string, { title: string; meta: string; intro: string; sections: { h: string; p: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    meta: "How DART Agency processes personal data under GDPR.",
    intro: "We collect only the data needed to respond to enquiries, manage campaigns and meet legal obligations.",
    sections: [
      { h: "Data we collect", p: "Contact details you submit, campaign performance data, and standard analytics. We do not sell personal data." },
      { h: "Lawful basis", p: "Consent (forms), contract (active engagements), and legitimate interest (B2B outreach to identified roles)." },
      { h: "Retention", p: "Enquiry data: 24 months. Campaign data: 5 years (tax/compliance). Analytics: 14 months." },
      { h: "Your rights", p: "Access, rectification, erasure, portability, restriction and objection. Email privacy@dartagency.com." },
    ],
  },
  terms: {
    title: "Terms of Use",
    meta: "Terms governing use of dartagency.com.",
    intro: "By using this site you agree to these terms. If you do not agree, please do not use the site.",
    sections: [
      { h: "Use of content", p: "All content is © DART Agency unless stated. You may share with attribution; commercial reuse requires permission." },
      { h: "Disclaimer", p: "Content is provided as-is for informational purposes and is not a substitute for legal or financial advice." },
      { h: "Governing law", p: "These terms are governed by the laws of the Republic of Lithuania." },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    meta: "Which cookies we set and why.",
    intro: "We use a minimal cookie set: strictly necessary cookies, plus opt-in analytics.",
    sections: [
      { h: "Strictly necessary", p: "Session, security and consent storage. Cannot be disabled." },
      { h: "Analytics", p: "Aggregated, anonymised page-view metrics. Set only after consent." },
      { h: "Managing consent", p: "Use the cookie banner or your browser settings to update preferences." },
    ],
  },
  disclosure: {
    title: "Disclosure Policy",
    meta: "How we ensure paid partnerships are clearly disclosed.",
    intro: "All paid creator content we manage carries clear, prominent disclosure aligned with EU UCPD and national regulator guidance in EE, LV and LT.",
    sections: [
      { h: "What gets disclosed", p: "Paid partnerships, gifted products, affiliate links and any material connection between brand and creator." },
      { h: "How", p: "Native platform tags (Paid partnership / Branded content) plus first-line text disclosure in the local language." },
      { h: "Audit", p: "We retain dated screenshots of disclosed posts for 24 months." },
    ],
  },
  creators: {
    title: "Creator Terms",
    meta: "The standard terms creators agree to when working with DART.",
    intro: "These terms govern engagements between DART Agency and creators delivering campaigns for our clients.",
    sections: [
      { h: "Deliverables", p: "Briefs are scoped per campaign with formats, timelines and approval rounds clearly stated." },
      { h: "Payment", p: "30-day payment terms from accepted invoice. Per-campaign rates agreed upfront." },
      { h: "Usage rights", p: "Default usage is organic only. Paid usage and whitelisting are agreed and priced separately." },
      { h: "Disclosure", p: "Creators must disclose paid partnerships per our Disclosure Policy." },
    ],
  },
};

const Legal = () => {
  const { slug = "privacy" } = useParams();
  const doc = docs[slug] ?? docs.privacy;

  return (
    <Layout>
      <SEO title={`${doc.title} — DART Agency`} description={doc.meta} path={`/legal/${slug}`} />
      <article className="container-tight max-w-3xl py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-highlight">Legal</p>
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
        <p className="mt-12 text-xs text-muted-foreground">Last updated: April 2026.</p>
      </article>
    </Layout>
  );
};

export default Legal;