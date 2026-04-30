import { Link } from "react-router-dom";

const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="DART Agency home">
    <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-ink shadow-soft transition-smooth group-hover:scale-105">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21 21 3" className="text-highlight" />
        <path d="M14 3h7v7" className="text-highlight" />
        <circle cx="8" cy="16" r="2" className="text-background" />
      </svg>
    </span>
    <span className="font-[Inter_Tight] text-lg font-bold tracking-tight text-foreground">
      DART<span className="ml-1 text-highlight">·</span><span className="ml-1 font-medium text-muted-foreground">agency</span>
    </span>
  </Link>
);

export default Logo;