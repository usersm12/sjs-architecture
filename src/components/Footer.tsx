import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logoWhite from "@/assets/sjs_logo_white.png";

const productLinks = [
  "Concrete Admixtures",
  "Waterproofing Chemicals",
  "Tile Adhesive & Grout",
  "Repair & Flooring",
  "Building Materials",
];

const serviceLinks = [
  "Construction Chemicals Supply",
  "Waterproofing Services",
  "Epoxy Grout Work",
  "Waterproofing Work",
  "Premix Work",
];

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* CTA strip */}
      <div className="bg-[#CC0000]">
        <div className="container-tight py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
              Ready to get started?
            </p>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Talk to our construction chemicals experts
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#CC0000] px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white/90 transition-colors"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+918530081327"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="container-tight py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <img
            src={logoWhite}
            alt="SJS Architecture Solutions"
            className="h-20 w-auto object-contain mb-5"
          />
          <p className="text-sm text-white/50 leading-relaxed">
            Your complete partner for construction chemicals, waterproofing services, and building materials in Rajkot, Gujarat.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white/40 mb-5">Products</h4>
          <ul className="space-y-2.5">
            {productLinks.map((item) => (
              <li key={item}>
                <Link
                  to="/products"
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="h-px w-3 bg-white/20 group-hover:bg-[#CC0000] group-hover:w-4 transition-all" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white/40 mb-5">Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((item) => (
              <li key={item}>
                <Link
                  to="/services"
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="h-px w-3 bg-white/20 group-hover:bg-[#CC0000] group-hover:w-4 transition-all" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white/40 mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-[#CC0000] shrink-0" />
              <span className="leading-relaxed">
                PI-208, Sitaram Park, Dharti Tyres Street,<br />
                Opp. Rajkot Taluka Police Station,<br />
                Motamava, Rajkot — 360005, Gujarat
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#CC0000] shrink-0" />
              <a href="tel:+918530081327" className="hover:text-white transition-colors">
                +91 85300 81327
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#CC0000] shrink-0" />
              <a href="mailto:rupeshgohel376@gmail.com" className="hover:text-white transition-colors break-all">
                rupeshgohel376@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} SJS Architecture Solutions. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-white/60 transition-colors">Products</Link>
            <Link to="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
