import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProductSlider } from "@/components/ProductSlider";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Layers,
  Package,
  Hammer,
  ClipboardList,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const stats = [
  { value: "50+", label: "Products in Stock" },
  { value: "5", label: "Service Types" },
  { value: "100%", label: "Satisfaction Goal" },
  { value: "Rajkot", label: "Gujarat, India" },
];

const services = [
  {
    num: "01",
    Icon: Package,
    title: "Construction Chemicals Supply",
    desc: "Complete range of high-quality construction chemicals — admixtures, waterproofing, tile adhesives, coatings, grouts and more.",
  },
  {
    num: "02",
    Icon: Droplets,
    title: "Waterproofing Services",
    desc: "Professional on-site waterproofing for terraces, roofs, basements and wet areas using proven systems applied by our trained team.",
  },
  {
    num: "03",
    Icon: Layers,
    title: "Epoxy Grout Work",
    desc: "Expert epoxy grouting for tile joints, industrial floors and high-traffic areas — stain-resistant, durable, and long-lasting.",
  },
  {
    num: "04",
    Icon: ClipboardList,
    title: "Premix Work",
    desc: "On-site premix mortar application for plastering, block laying, tile fixing and floor screeding with consistent quality.",
  },
];

const process = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Tell us your project requirement — product needed, site location, and timeline.",
  },
  {
    step: "02",
    title: "We Recommend",
    desc: "Our team recommends the right chemicals and application method for your specific project.",
  },
  {
    step: "03",
    title: "Supply & Apply",
    desc: "We supply quality products and our service team applies them directly on your site.",
  },
];

const whyUs = [
  "High-quality, reliable products for all project types",
  "Professional on-site application services",
  "Serving Rajkot and surrounding areas",
  "Complete customer satisfaction commitment",
  "Expert guidance on product selection",
  "Timely supply and service delivery",
];

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

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col bg-charcoal">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35 select-none"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-grid opacity-25" />

        {/* Main content — vertically centered */}
        <div className="relative flex-1 flex items-center">
          <div className="container-tight w-full py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="text-brand font-semibold uppercase tracking-[0.25em] text-xs sm:text-sm mb-6">
                Rajkot · Gujarat · India
              </p>

              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-white leading-[0.92] tracking-tight">
                CONSTRUCTION
                <br />
                <span className="text-brand">CHEMICALS</span>
                <br />
                &amp; WATERPROOFING
              </h1>

              <p className="mt-8 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light">
                High-quality chemicals and professional on-site waterproofing, epoxy grouting &amp; premix services — one trusted partner in Rajkot.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  Our Services
                </Link>
                <a
                  href="tel:+918530081327"
                  className="inline-flex items-center gap-2 border border-white/25 hover:border-brand hover:text-brand text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar anchored at bottom */}
        <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="container-tight grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="py-6 px-4 md:px-8 text-center"
              >
                <div className="font-display font-black text-2xl md:text-3xl text-brand">{value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-1 font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────── */}
      <div className="bg-brand overflow-hidden py-4 border-b-2 border-brand-dark">
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, pass) =>
              ["CONSTRUCTION CHEMICALS", "WATERPROOFING SERVICES", "EPOXY GROUT WORK", "PREMIX WORK", "TILE ADHESIVES", "CONCRETE ADMIXTURES", "REPAIR SOLUTIONS", "FRP MANHOLES", "BUILDING MATERIALS"].map((item) => (
                <span key={`${pass}-${item}`} className="inline-flex items-center gap-5 px-8 text-white font-bold text-sm uppercase tracking-[0.2em] whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                  {item}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-tight relative">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="section-num">01 — Services</span>
              <h2 className="font-display font-black text-4xl md:text-6xl text-white mt-3 tracking-tight leading-tight">
                WHAT WE DO
              </h2>
              <p className="mt-4 text-white/50 text-lg max-w-md">
                We supply and apply — everything your construction project needs.
              </p>
            </div>
            <Link
              to="/services"
              className="self-start md:self-auto inline-flex items-center gap-2 border border-white/20 hover:border-brand text-white hover:text-brand px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all"
            >
              All Services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 2×2 grid with gap lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {services.map(({ num, Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-charcoal p-8 md:p-10 hover:bg-white/5 transition-colors group"
              >
                <span className="font-display font-black text-5xl text-brand/20 group-hover:text-brand/40 transition-colors leading-none">
                  {num}
                </span>
                <div className="h-12 w-12 bg-brand flex items-center justify-center mt-6 mb-5">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-tight">{title}</h3>
                <p className="mt-3 text-white/55 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-white">
        <div className="container-tight py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-0 md:divide-x divide-border">
            {[
              { value: "50+", label: "Products in Stock", sub: "Full chemical range" },
              { value: "5", label: "Service Types", sub: "Supply + on-site" },
              { value: "100%", label: "Satisfaction Goal", sub: "Every project" },
              { value: "Rajkot", label: "Gujarat, India", sub: "Local experts" },
            ].map(({ value, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center md:px-10"
              >
                <div className="font-display font-black text-5xl md:text-6xl text-brand leading-none">{value}</div>
                <div className="font-display font-bold text-charcoal text-sm mt-3 uppercase tracking-wider">{label}</div>
                <div className="text-muted-foreground text-xs mt-1">{sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-muted/30">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <span className="section-num">02 — Products</span>
              <h2 className="font-display font-black text-4xl md:text-6xl text-charcoal mt-3 tracking-tight leading-tight">
                WHAT WE SUPPLY
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl">
                From foundation to finish — concrete admixtures, waterproofing, tile adhesives, repair mortars, coatings and building materials.
              </p>
            </div>
            <Link
              to="/products"
              className="self-start md:self-auto inline-flex items-center gap-2 border border-charcoal/20 hover:border-brand text-charcoal hover:text-brand px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all"
            >
              All Products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <ProductSlider />
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 border-t border-border overflow-hidden">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={heroImg}
                  alt="SJS Architecture Solutions"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-brand text-white p-6 md:p-8 max-w-[180px] md:max-w-[210px]">
                <div className="font-display font-black text-4xl md:text-5xl leading-none">100%</div>
                <div className="text-xs md:text-sm mt-2 text-white/80 leading-tight">Commitment to customer satisfaction</div>
              </div>
            </motion.div>

            {/* Content column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <span className="section-num">03 — About Us</span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-charcoal mt-3 tracking-tight leading-tight text-balance">
                YOUR COMPLETE CONSTRUCTION PARTNER
              </h2>

              <div className="mt-8 pl-5 border-l-4 border-brand">
                <p className="text-lg text-charcoal/75 italic leading-relaxed">
                  "Our mission is to provide high-quality, reliable, and affordable construction chemicals and waterproofing services with complete customer satisfaction."
                </p>
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                <strong className="text-charcoal">SJS Architecture Solutions</strong> is based in Rajkot, Gujarat — supplying all types of construction chemicals and building materials while also offering professional on-site services including waterproofing, epoxy grouting, and premix application.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {whyUs.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal/80">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white px-7 py-4 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  About Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-charcoal/20 hover:border-brand hover:text-brand text-charcoal px-7 py-4 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-tight relative">

          <span className="section-num">04 — Process</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white mt-3 tracking-tight leading-tight">
            HOW WE WORK
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl">
            Simple, straightforward. From your first enquiry to on-site delivery.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-charcoal p-10 md:p-12 group"
              >
                <span className="font-display font-black text-7xl md:text-8xl text-brand/15 group-hover:text-brand/30 transition-colors leading-none">
                  {step}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-6 mb-3">{title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION STRIP ───────────────────────────────────────── */}
      <section className="bg-muted/50 border-y border-border py-12">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-brand flex items-center justify-center shrink-0">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-charcoal text-lg">Based in Rajkot, Gujarat</p>
              <p className="text-muted-foreground text-sm">PI-208, Sitaram Park, Motamava, Rajkot — 360005</p>
            </div>
          </div>
          <a
            href="tel:+918530081327"
            className="flex items-center gap-3 bg-charcoal hover:bg-black text-white px-7 py-4 font-bold text-sm uppercase tracking-wider transition-all"
          >
            <Phone className="h-4 w-4" />
            +91 85300 81327
          </a>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────── */}
      <section className="relative bg-brand overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15" />
        {/* Large decorative text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[12rem] md:text-[16rem] text-white/5 leading-none select-none pointer-events-none translate-x-16">
          SJS
        </div>
        <div className="container-tight relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-white/60 font-semibold uppercase tracking-[0.2em] text-xs mb-5">
              Ready to start?
            </p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight text-balance">
              NEED CONSTRUCTION CHEMICALS OR WATERPROOFING IN RAJKOT?
            </h2>
            <p className="mt-5 text-white/65 text-lg max-w-2xl leading-relaxed">
              Tell us your requirement — we'll recommend the right products and services and get to work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-brand px-8 py-4 font-black text-sm uppercase tracking-wider transition-all shadow-strong"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+918530081327"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all"
              >
                <Phone className="h-4 w-4" />
                Call: 85300 81327
              </a>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
