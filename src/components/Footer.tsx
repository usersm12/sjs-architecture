import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logoLight from "@/assets/sjs-logo-light.png";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-tight py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={logoLight}
              alt="SJS Architecture Solutions"
              className="h-16 w-16 object-contain shrink-0"
            />
            <div className="flex flex-col leading-none">
              <h3 className="font-display font-extrabold text-sm tracking-tight">SJS ARCHITECTURE SOLUTIONS</h3>
              <p className="text-brand font-semibold text-xs uppercase tracking-wider mt-1.5">
                Rajkot · Gujarat · India
              </p>
            </div>
          </div>
          <p className="text-sm text-white/60 mt-4 leading-relaxed">
            Your complete partner for construction chemicals, waterproofing services, epoxy grouting, and building materials in Rajkot.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Products</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Construction Chemicals Supply</li>
            <li>Waterproofing Services</li>
            <li>Epoxy Grout Work</li>
            <li>Waterproofing Work</li>
            <li>Premix Work</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <a href="tel:+918530081327" className="hover:text-brand">+91 85300 81327</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <a href="mailto:rupeshgohel376@gmail.com" className="hover:text-brand break-all">rupeshgohel376@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" />
              <span>PI-208, Sitaram Park, Dharti Tyres Street, Opp. Rajkot Taluka Police Station, Motamava, Rajkot — 360005, Gujarat</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} SJS Architecture Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
