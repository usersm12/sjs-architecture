import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoRed from "@/assets/sjs_logo_red.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_16px_-4px_rgba(0,0,0,0.12)]" : "border-b border-border"
      }`}
    >
      {/* Top utility bar */}
      <div className="bg-[#111111] text-white/70 text-xs py-2 hidden md:block">
        <div className="container-tight flex items-center justify-between">
          <span>Rajkot, Gujarat — India's trusted construction chemicals partner</span>
          <a
            href="tel:+918530081327"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <Phone className="h-3 w-3" />
            +91 85300 81327
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container-tight flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src={logoRed}
            alt="SJS Architecture Solutions"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-display font-bold text-[13px] tracking-wide text-[#111111] uppercase">SJS Architecture</span>
            <span className="font-sans text-[10px] font-bold text-[#CC0000] uppercase tracking-[0.2em]">Solutions</span>
          </div>
        </Link>

        {/* Nav — desktop */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-[13px] font-semibold text-[#444444] hover:text-[#CC0000] transition-colors relative group"
              activeProps={{ className: "text-[#CC0000]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#CC0000] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide transition-colors"
          >
            Get a Quote
          </Link>
          <button
            className="lg:hidden p-2 text-[#111111] hover:text-[#CC0000] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white shadow-lg">
          <nav className="container-tight py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-[13px] font-semibold text-[#444444] border-b border-border last:border-0 hover:text-[#CC0000] transition-colors"
                activeProps={{ className: "text-[#CC0000]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-[#CC0000] hover:bg-[#a80000] text-white py-3 text-sm font-bold uppercase tracking-wide transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+918530081327"
                className="flex items-center justify-center gap-2 border border-[#CC0000] text-[#CC0000] py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#CC0000] hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 85300 81327
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
