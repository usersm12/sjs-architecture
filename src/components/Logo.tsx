import { Link } from "@tanstack/react-router";
import logoDark from "@/assets/sjs-logo-dark.png";
import logoLight from "@/assets/sjs-logo-light.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-charcoal" : "text-white";
  const subColor = variant === "dark" ? "text-brand" : "text-white/75";
  const src = variant === "light" ? logoLight : logoDark;

  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={src}
        alt="SJS Architecture Solutions"
        className="h-14 w-14 sm:h-16 sm:w-16 object-contain shrink-0"
      />
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-base sm:text-lg tracking-tight ${textColor}`}>
          SJS ARCHITECTURE SOLUTIONS
        </span>
        <span className={`text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-1 ${subColor}`}>
          Construction Chemicals &amp; Waterproofing
        </span>
      </div>
    </Link>
  );
}
