import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { languages } from "@/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = languages.find((l) => l.code === i18n.resolvedLanguage) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 text-xs font-semibold text-muted-foreground transition-smooth hover:text-foreground"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className={l.code === current.code ? "font-semibold text-foreground" : ""}
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;