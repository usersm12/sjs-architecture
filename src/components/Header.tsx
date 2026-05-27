import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur border-b border-border">
      {/* Top accent line */}
      <div className="h-0.5 bg-brand w-full" />

      <div className="container-tight flex items-center justify-between py-3">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs font-bold uppercase tracking-wider text-charcoal/70 hover:text-brand transition-colors"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918530081327"
            className="hidden md:flex items-center gap-2 bg-brand text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider hover:bg-brand-dark transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            85300 81327
          </a>
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-tight py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-charcoal font-bold text-xs uppercase tracking-wider border-b border-border last:border-0"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+918530081327"
              className="mt-3 flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 font-bold text-xs uppercase tracking-wider"
            >
              <Phone className="h-4 w-4" />
              Call: 85300 81327
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
