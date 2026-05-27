import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Droplets,
  Package,
  Layers,
  Hammer,
  ClipboardList,
  Star,
  ShieldCheck,
  Truck,
  Award,
} from "lucide-react";
const heroImg = "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80";
import { productCategories } from "@/data/products";

const trustItems = [
  {
    Icon: ShieldCheck,
    title: "Quality Products",
    desc: "ISI-certified chemicals and materials sourced from leading manufacturers.",
  },
  {
    Icon: Droplets,
    title: "Waterproofing Services",
    desc: "Professional on-site application by our trained specialists.",
  },
  {
    Icon: Truck,
    title: "On-Site Application",
    desc: "We supply and apply — complete project delivery in Rajkot.",
  },
  {
    Icon: Award,
    title: "100% Satisfaction",
    desc: "Committed to durable results and complete customer satisfaction.",
  },
];

const services = [
  {
    Icon: Package,
    title: "Construction Chemicals Supply",
    desc: "Complete range of admixtures, waterproofing, tile adhesives, coatings, grouts and more.",
  },
  {
    Icon: Droplets,
    title: "Waterproofing Services",
    desc: "Professional on-site waterproofing for terraces, roofs, basements and wet areas.",
  },
  {
    Icon: Layers,
    title: "Epoxy Grout Work",
    desc: "Stain-resistant, durable epoxy grouting for tiles, industrial floors and high-traffic areas.",
  },
  {
    Icon: Hammer,
    title: "Waterproofing Work",
    desc: "On-site assessment and application using the best system for your specific requirement.",
  },
  {
    Icon: ClipboardList,
    title: "Premix Work",
    desc: "Consistent on-site premix mortar for plastering, block laying, tile fixing and screeding.",
  },
];

const whyUs = [
  "High-quality, ISI-certified products",
  "Professional on-site application teams",
  "Serving Rajkot and surrounding areas",
  "Expert product selection guidance",
  "Timely supply and service delivery",
  "Complete customer satisfaction commitment",
];

const categoryIcons: Record<string, React.ElementType> = {
  "Concrete Admixtures": Package,
  "Waterproofing Chemicals": Droplets,
  "Tile Adhesive, Grout & Bonding": Layers,
  "Repair, Flooring & Specialty": Hammer,
  "Building Materials": ClipboardList,
  "Others": Star,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SJS Architecture Solutions — Construction Chemicals & Waterproofing, Rajkot" },
      { name: "description", content: "SJS Architecture Solutions — construction chemicals supply, waterproofing services, epoxy grouting and premix work in Rajkot, Gujarat." },
      { property: "og:title", content: "SJS Architecture Solutions" },
      { property: "og:description", content: "Construction chemicals and waterproofing services in Rajkot, Gujarat." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-[#111111] overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/40" />

        <div className="container-tight relative z-10 py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="label-tag mb-6">Rajkot, Gujarat, India</div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight text-balance">
              Your Trusted Partner for Construction Chemicals & Waterproofing in Rajkot
            </h1>

            <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed font-sans">
              High-quality construction chemicals, professional waterproofing services, epoxy grouting and premix application — one reliable partner for every project.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+918530081327"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white px-2 py-4 font-sans font-semibold text-sm transition-colors"
              >
                <Phone className="h-4 w-4 text-[#CC0000]" />
                +91 85300 81327
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {trustItems.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center p-6 md:p-8 gap-3"
              >
                <div className="h-11 w-11 rounded-full bg-[#CC0000]/8 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#CC0000]" />
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-[#111111]">{title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed hidden md:block">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#f8f8f8]">
        <div className="container-tight">
          <div className="text-center mb-14">
            <div className="label-tag justify-center mb-4">What We Supply</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
              Complete Range of Construction Chemicals
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              From foundation to finish — every chemical solution for your construction project.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.title] ?? Package;
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    to="/products"
                    className="group flex flex-col bg-white border border-border p-7 hover:border-[#CC0000] hover:shadow-[0_8px_32px_-8px_rgba(204,0,0,0.15)] transition-all duration-200 h-full"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-sm bg-[#CC0000]/8 flex items-center justify-center group-hover:bg-[#CC0000] transition-colors">
                        <Icon className="h-6 w-6 text-[#CC0000] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-sans text-xs font-bold text-muted-foreground bg-[#f5f5f5] px-2.5 py-1 rounded-full">
                        {cat.products.length} products
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#111111] mb-2 group-hover:text-[#CC0000] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{cat.intro}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-[#CC0000] text-sm font-bold font-sans">
                      View All <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white px-8 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────── */}
      <div className="bg-[#CC0000] overflow-hidden py-3.5">
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, pass) =>
              ["CONSTRUCTION CHEMICALS", "WATERPROOFING SERVICES", "EPOXY GROUT WORK", "PREMIX WORK", "TILE ADHESIVES", "CONCRETE ADMIXTURES", "REPAIR SOLUTIONS", "FRP MANHOLES", "BUILDING MATERIALS"].map((item) => (
                <span key={`${pass}-${item}`} className="inline-flex items-center gap-6 px-8 text-white font-sans font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
                  <span className="h-1 w-1 rounded-full bg-white/50 shrink-0" />
                  {item}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="label-tag mb-4">What We Do</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
                Professional Construction Services
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                We supply and apply — complete construction chemical solutions from one trusted partner.
              </p>
            </div>
            <Link
              to="/services"
              className="shrink-0 inline-flex items-center gap-2 border border-[#111111]/20 text-[#111111] hover:border-[#CC0000] hover:text-[#CC0000] px-5 py-2.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group border border-border p-7 hover:border-[#CC0000] hover:shadow-[0_8px_32px_-8px_rgba(204,0,0,0.12)] transition-all duration-200"
              >
                <div className="h-12 w-12 rounded-sm bg-[#CC0000]/8 flex items-center justify-center mb-5 group-hover:bg-[#CC0000] transition-colors">
                  <Icon className="h-6 w-6 text-[#CC0000] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#111111] mb-3 group-hover:text-[#CC0000] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
                <a
                  href={`mailto:rupeshgohel376@gmail.com?subject=Enquiry: ${encodeURIComponent(title)}`}
                  className="inline-flex items-center gap-1.5 text-[#CC0000] font-sans font-bold text-sm hover:gap-2.5 transition-all"
                >
                  Enquire <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#f8f8f8] border-y border-border">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="label-tag mb-4">About Us</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111] mb-6">
                SJS Architecture Solutions — Rajkot's Complete Construction Partner
              </h2>

              <blockquote className="border-l-4 border-[#CC0000] pl-5 mb-6">
                <p className="text-lg text-[#444444] italic leading-relaxed font-display">
                  "Our mission is to provide high-quality, reliable, and affordable construction chemicals and waterproofing services with complete customer satisfaction."
                </p>
              </blockquote>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Based in Rajkot, Gujarat, we supply all types of construction chemicals and building materials while also offering professional on-site waterproofing, epoxy grouting, and premix application services across Rajkot and surrounding areas.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#CC0000] text-white px-7 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right — why choose us */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Why Choose SJS Architecture Solutions
              </h3>
              <ul className="space-y-4">
                {whyUs.map((point) => (
                  <li key={point} className="flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 text-[#CC0000] shrink-0 mt-0.5" />
                    <span className="text-[#333333] font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 bg-white border border-border p-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 bg-[#CC0000] flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      Call Us Directly
                    </p>
                    <a
                      href="tel:+918530081327"
                      className="font-display font-bold text-2xl text-[#111111] hover:text-[#CC0000] transition-colors"
                    >
                      +91 85300 81327
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────── */}
      <section className="bg-[#CC0000] py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
              Need Construction Chemicals in Rajkot?
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white text-balance">
              Get the Right Product for Your Project — Talk to Our Experts
            </h2>
            <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
              Tell us your requirement and we'll recommend the right chemicals and services for your specific project.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#CC0000] px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+918530081327"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 85300 81327
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
