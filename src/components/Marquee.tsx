import { useTranslation } from "react-i18next";

const Marquee = () => {
  const { t } = useTranslation();
  const items = t("marquee", { returnObjects: true }) as string[];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((label, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-3 text-sm font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" /> {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
