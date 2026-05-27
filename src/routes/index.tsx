import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Package,
  Droplets,
  Layers,
  Hammer,
  ClipboardList,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  Star,
  Building2,
  Wrench,
  FlaskConical,
} from "lucide-react";
import { productCategories } from "@/data/products";
import { services } from "@/data/services";

const heroImg = "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80";
const waterproofingImg = "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";
const tilingImg = "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";
const buildingSiteImg = "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";
const chemicalsImg = "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";
const premixImg = "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";
const warehouseImg = "https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";

const serviceIconMap: Record<string, React.ElementType> = {
  Package, Droplets, Layers, Hammer, ClipboardList,
};

const serviceImages: Record<string, string> = {
  "chemicals-supply": chemicalsImg,
  "waterproofing": waterproofingImg,
  "epoxy-grout": tilingImg,
  "waterproofing-work": buildingSiteImg,
  "premix-work": premixImg,
};

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Product Categories" },
  { value: "5", label: "Core Services" },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Concrete Admixtures": FlaskConical,
  "Waterproofing Chemicals": Droplets,
  "Tile Adhesive & Grout": Layers,
  "Repair & Flooring Systems": Wrench,
  "Building Materials": Building2,
  "Others": Package,
};

const redwopProducts = [
  { name: "Smarzkot Advanced", img: "/images/products/SMARZKOT-ADVANCED.png" },
  { name: "Polycote BB", img: "/images/products/POLYCOTE-BB.png" },
  { name: "Redwop PU-200", img: "/images/products/REDWOP-PU-200.png" },
  { name: "Teratile Platinum", img: "/images/products/TERATILE-PLATIUM.png" },
  { name: "Eptile Grout Glitter", img: "/images/products/EPTILE-GROUT-GLITTER-1.png" },
  { name: "Plastcone AW", img: "/images/products/PLASTCONE-AW.png" },
  { name: "Blockfix", img: "/images/products/BLOCKFIX.png" },
  { name: "Mazikcoat 1", img: "/images/products/MAZIKCOAT-1.png" },
  { name: "Polycote WH100", img: "/images/products/POLYCOTE-WH100.png" },
  { name: "Hardfloor N", img: "/images/products/HARDFLOOR-N.png" },
  { name: "Procrete HP20", img: "/images/products/PROCRETE-HP20.png" },
  { name: "Smarzkot Waterguard", img: "/images/products/SMARZKOT-waterguard.png" },
];

const processSteps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Enquire",
    desc: "Tell us your project type, location, and requirement. Our team in Rajkot is ready to help.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "We Recommend",
    desc: "We specify the right product or service system for your substrate, exposure, and budget — no guesswork.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Supply or Apply",
    desc: "We deliver to your site same day, or send our application team to execute the work with a written warranty.",
  },
];

const whyUs = [
  { icon: ShieldCheck, text: "ISI-certified and tested products only" },
  { icon: Truck, text: "Same-day delivery within Rajkot" },
  { icon: Wrench, text: "Professional on-site application team" },
  { icon: Star, text: "Expert product guidance for every application" },
  { icon: Building2, text: "Serving residential, commercial, and infrastructure projects" },
  { icon: Phone, text: "Responsive support before, during, and after the project" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SJS Architecture Solutions — Construction Chemicals & Waterproofing, Rajkot" },
      { name: "description", content: "SJS Architecture Solutions — authorized Redwop dealer. Construction chemicals supply, waterproofing services, epoxy grouting and premix work in Rajkot, Gujarat." },
      { property: "og:title", content: "SJS Architecture Solutions — Construction Chemicals Rajkot" },
      { property: "og:description", content: "Authorized Redwop dealer. Construction chemicals and waterproofing services in Rajkot, Gujarat." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredProducts = productCategories
    .flatMap((cat) => cat.products.filter((p) => p.image).slice(0, 2).map((p) => ({ ...p, category: cat.title })))
    .slice(0, 8);

  return (
    <Layout>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center bg-[#111111] overflow-hidden">
        <img
          src={heroImg}
          alt="Construction site in India"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/98 via-[#111111]/75 to-[#111111]/20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000]" />

        <div className="container-tight relative z-10 py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Redwop partner badge */}
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 backdrop-blur px-4 py-2.5 mb-8">
              <img
                src="/images/redwop-logo-white.png"
                alt="Redwop"
                className="h-5 w-auto object-contain opacity-90"
              />
              <span className="h-4 w-px bg-white/20" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/60">
                Authorized Dealer · Rajkot, Gujarat
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08] text-balance mb-6">
              Rajkot's Trusted Source for{" "}
              <span className="text-[#CC0000]">Construction Chemicals</span>{" "}
              & Waterproofing
            </h1>

            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
              We supply ISI-certified construction chemicals and apply them on-site — one accountable partner for every project, from foundation to finish.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Browse Products <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+918530081327"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 85300 81327
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-semibold transition-colors"
              >
                View Services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Hero stats row */}
            <div className="flex flex-wrap gap-6 border-t border-white/10 pt-8">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-bold text-2xl text-white">{s.value}</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest font-semibold">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { Icon: ShieldCheck, title: "ISI Certified", desc: "All products tested and certified for quality" },
              { Icon: Truck, title: "Same-Day Delivery", desc: "Fast delivery across Rajkot and surroundings" },
              { Icon: Wrench, title: "Supply & Apply", desc: "Full service — chemicals + on-site application" },
              { Icon: MapPin, title: "Rajkot Based", desc: "PI-208, Sitaram Park, Motamava — walk-ins welcome" },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-6 md:p-8 group">
                <div className="h-11 w-11 border-2 border-[#CC0000] flex items-center justify-center shrink-0 group-hover:bg-[#CC0000] transition-colors">
                  <Icon className="h-5 w-5 text-[#CC0000] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-sm text-[#111111]">{title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REDWOP PARTNER SECTION ───────────────────────────────── */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="container-tight relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left — content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/redwop-logo-white.png"
                  alt="Redwop"
                  className="h-10 w-auto object-contain"
                />
                <span className="h-8 w-px bg-white/20" />
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/40">
                  Authorized Rajkot Dealer
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
                Official Redwop Distributor<br />
                <span className="text-[#CC0000]">in Rajkot, Gujarat</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-6 text-base">
                SJS Architecture Solutions is an authorized dealer for Redwop — one of India's leading construction chemicals brands. We stock the complete Redwop product range: waterproofing systems, concrete admixtures, tile adhesives, epoxy grouts, repair mortars, and flooring systems.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                When you buy through us, you get genuine, in-date products with manufacturer documentation — plus our team's technical guidance on correct application.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Browse Redwop Products <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+918530081327"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Us
                </a>
              </div>
            </motion.div>

            {/* Right — product image grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-3 gap-3"
            >
              {redwopProducts.slice(0, 6).map((p, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white/5 border border-white/10 hover:border-[#CC0000]/50 transition-colors flex flex-col items-center justify-center p-3 group"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ───────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[#fafafa]">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="label-tag mb-3">Our Range</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
                Product Categories
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[#CC0000] font-bold text-sm hover:gap-3 transition-all shrink-0"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.title] ?? Package;
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    to="/products"
                    className="group flex items-center gap-5 bg-white border border-border hover:border-[#CC0000] hover:shadow-lg transition-all p-5"
                  >
                    <div className="h-14 w-14 bg-[#CC0000] flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-base text-[#111111] group-hover:text-[#CC0000] transition-colors leading-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{cat.products.length} products in stock</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <span className="font-display font-bold text-2xl text-[#CC0000]/20 group-hover:text-[#CC0000]/40 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ───────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="label-tag mb-3">Featured</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
                Top Selling Products
              </h2>
              <p className="mt-3 text-muted-foreground text-sm max-w-md">
                Our most popular construction chemicals — trusted by contractors and builders across Rajkot.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] px-6 py-3 font-bold text-sm uppercase tracking-wide transition-all shrink-0"
            >
              All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to="/products"
                  className="group flex flex-col bg-white border border-border hover:border-[#CC0000] hover:shadow-lg transition-all overflow-hidden h-full"
                >
                  <div className="aspect-square bg-[#fafafa] overflow-hidden flex items-center justify-center border-b border-border">
                    <img
                      src={product.image!}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-display font-bold text-sm text-[#111111] group-hover:text-[#CC0000] transition-colors leading-tight flex-1">
                      {product.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-1 text-[#CC0000] text-xs font-semibold">
                      View <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─────────────────────────────────────────── */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="container-tight relative">
          <div className="text-center mb-12">
            <div className="label-tag mb-3 justify-center">Simple Process</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              How It Works
            </h2>
            <p className="text-white/40 mt-3 max-w-md mx-auto text-sm">
              Getting the right product or service is straightforward — we handle everything from specification to delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px border-t border-dashed border-white/10 z-0" style={{ width: "calc(100% - 3rem)", left: "calc(100% + 0rem)" }} />
                )}
                <div className="bg-white/5 border border-white/10 p-7 relative z-10 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-12 w-12 bg-[#CC0000] flex items-center justify-center shrink-0">
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-display font-bold text-4xl text-white/10">{step.number}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[#fafafa]">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="label-tag mb-3">What We Do</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
                5 Core Services
              </h2>
              <p className="mt-3 text-muted-foreground text-sm max-w-md">
                We supply and apply — the only partner you need for construction chemistry.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#CC0000] font-bold text-sm hover:gap-3 transition-all shrink-0"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Services — top 3 as image cards */}
          <div className="grid gap-5 md:grid-cols-3 mb-5">
            {services.slice(0, 3).map((service, i) => {
              const Icon = serviceIconMap[service.icon] ?? Package;
              const img = serviceImages[service.slug];
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group block bg-white border border-border hover:border-[#CC0000] hover:shadow-xl transition-all overflow-hidden h-full"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={img}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
                      <div className="absolute top-4 left-4 h-9 w-9 bg-[#CC0000] flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-base text-[#111111] group-hover:text-[#CC0000] transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{service.heroDescription}</p>
                      <span className="inline-flex items-center gap-1.5 text-[#CC0000] font-bold text-xs group-hover:gap-2.5 transition-all">
                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Services — bottom 2 as horizontal cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {services.slice(3).map((service, i) => {
              const Icon = serviceIconMap[service.icon] ?? Package;
              const img = serviceImages[service.slug];
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group flex bg-white border border-border hover:border-[#CC0000] hover:shadow-lg transition-all overflow-hidden"
                  >
                    <div className="w-36 md:w-44 shrink-0 overflow-hidden">
                      <img
                        src={img}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="h-8 w-8 bg-[#CC0000] flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-display font-bold text-sm text-[#111111] group-hover:text-[#CC0000] transition-colors leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">{service.heroDescription}</p>
                      <span className="inline-flex items-center gap-1.5 text-[#CC0000] font-bold text-xs group-hover:gap-2.5 transition-all">
                        Learn More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── REDWOP PRODUCT MARQUEE ───────────────────────────────── */}
      <section className="bg-[#111111] py-14 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container-tight relative mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="/images/redwop-logo-white.png" alt="Redwop" className="h-6 w-auto object-contain opacity-70" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/30">Product Range</span>
            </div>
            <p className="text-white/50 text-sm">Hover to pause. Click products to view full range.</p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white/50 hover:text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wide transition-colors shrink-0"
          >
            All Products <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="marquee">
          <div className="marquee-track gap-4">
            {[...redwopProducts, ...redwopProducts].map((p, i) => (
              <Link
                to="/products"
                key={i}
                className="shrink-0 w-28 h-28 bg-white/5 border border-white/8 hover:border-[#CC0000]/50 hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-2 p-3 group"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-16 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[9px] text-white/30 group-hover:text-white/60 font-semibold text-center leading-tight transition-colors">
                  {p.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="col-span-2 overflow-hidden"
              >
                <img src={warehouseImg} alt="Warehouse" loading="lazy" className="w-full h-48 object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="overflow-hidden"
              >
                <img src={waterproofingImg} alt="Waterproofing" loading="lazy" className="w-full h-36 object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="overflow-hidden"
              >
                <img src={premixImg} alt="Premix work" loading="lazy" className="w-full h-36 object-cover" />
              </motion.div>
              {/* Stat overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="col-span-2 bg-[#CC0000] p-6 flex items-center justify-between"
              >
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-2xl text-white">{s.value}</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="label-tag mb-4">Why Us</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111] mb-5">
                Why Contractors Choose SJS Architecture Solutions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Based in Rajkot since over a decade, we've built our reputation on one principle: the right product, correctly specified, honestly supplied. We're not just distributors — we understand what you're building and why the chemical choice matters.
              </p>

              <ul className="space-y-4 mb-8">
                {whyUs.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-[#CC0000]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-3.5 w-3.5 text-[#CC0000]" />
                    </div>
                    <span className="text-[#333] font-medium text-sm leading-snug">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-7 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  About SJS <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#111111] hover:border-[#CC0000] hover:text-[#CC0000] text-[#111111] px-7 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─────────────────────────────────────────── */}
      <section className="bg-[#CC0000] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container-tight relative">
          <div className="grid gap-10 lg:grid-cols-2 items-center mb-10">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Get in Touch</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
                Need Construction Chemicals in Rajkot?
              </h2>
              <p className="text-white/65 leading-relaxed">
                Tell us your requirement and we'll recommend the right chemicals and services for your specific project. Free site assessment available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <a
                href="tel:+918530081327"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#CC0000] px-8 py-4 font-bold text-sm uppercase tracking-wide hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                +91 85300 81327
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-[#CC0000] transition-colors"
              >
                <Mail className="h-5 w-5" />
                Send Enquiry
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { Icon: Phone, label: "Phone", value: "+91 85300 81327", href: "tel:+918530081327" },
              { Icon: Mail, label: "Email", value: "rupeshgohel376@gmail.com", href: "mailto:rupeshgohel376@gmail.com" },
              { Icon: Clock, label: "Hours", value: "Mon–Sat, 9 AM – 7 PM", href: undefined },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="bg-white/10 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="h-4 w-4 text-white" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/50">{label}</span>
                </div>
                {href ? (
                  <a href={href} className="font-semibold text-white hover:text-white/80 transition-colors text-sm break-all">
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-white text-sm">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
