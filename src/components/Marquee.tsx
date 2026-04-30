const items = [
  "Cross-Baltic execution",
  "Measurable reporting",
  "Paid social integration",
  "Disclosure-safe delivery",
  "Vilnius · Riga · Tallinn",
  "Whitelisted creator ads",
  "UGC at scale",
];

const Marquee = () => (
  <div className="relative overflow-hidden border-y border-border bg-card py-4">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items].map((t, i) => (
        <span key={i} className="mx-8 inline-flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-highlight" /> {t}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;