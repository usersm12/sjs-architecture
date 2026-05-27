import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { services } from "@/data/services";
import { Package, Droplets, Layers, Hammer, ClipboardList, ArrowRight, Phone, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Package,
  Droplets,
  Layers,
  Hammer,
  ClipboardList,
};

const brandLogos = [
  { name: "Redwop", img: "/images/products/SMARZKOT-ADVANCED.png" },
  { name: "Polycote", img: "/images/products/POLYCOTE-BB.png" },
  { name: "Teratile", img: "/images/products/TERATILE-PLATIUM.png" },
  { name: "Plastcone", img: "/images/products/PLASTCONE-AW.png" },
  { name: "Blockfix", img: "/images/products/BLOCKFIX.png" },
  { name: "Redwop PU", img: "/images/products/REDWOP-PU-200.png" },
  { name: "Eptile", img: "/images/products/EPTILE-GROUT-GLITTER-1.png" },
  { name: "Mazikcoat", img: "/images/products/MAZIKCOAT-1.png" },
];

const reasons = [
  "15+ years in Rajkot construction chemicals",
  "Supply and apply — one accountable partner",
  "ISI-certified products only",
  "On-site assessment before every project",
  "Written workmanship warranty",
  "Same-day delivery within Rajkot",
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — SJS Architecture Solutions | Waterproofing & Construction Chemicals Rajkot" },
      { name: "description", content: "Construction chemicals supply, waterproofing services, epoxy grout, and premix application in Rajkot, Gujarat. Expert team, ISI-certified products, warranty backed." },
      { property: "og:title", content: "Our Services — SJS Architecture Solutions" },
      { property: "og:description", content: "Professional waterproofing, epoxy grouting, and construction chemical supply in Rajkot." },
    ],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#111111] py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        {/* Subtle red accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000]" />
        <div className="container-tight relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="label-tag mb-4" style={{ color: "#CC0000" }}>Our Services</div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-[1.1] max-w-3xl text-balance">
              We Supply.<br />
              <span className="text-[#CC0000]">We Apply.</span><br />
              You Get Results.
            </h1>
            <p className="mt-4 text-white/55 max-w-xl text-sm md:text-base leading-relaxed">
              From concrete admixtures and waterproofing chemicals to on-site application by trained specialists — complete construction chemistry solutions under one roof in Rajkot.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
              <a
                href="tel:+918530081327"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 85300 81327
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Free Site Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us — luxury strip */}
      <section className="bg-[#f8f8f8] border-b border-border py-10">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-2.5"
              >
                <CheckCircle className="h-4 w-4 text-[#CC0000] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#444] leading-snug">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — card grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="label-tag mb-3">What We Do</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
                5 Core Services
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Click any service to see detailed information, the products we use, our process, and to submit an enquiry.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Package;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group block bg-white border border-border hover:border-[#CC0000] hover:shadow-xl transition-all overflow-hidden h-full"
                  >
                    {/* Image */}
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/60 bg-[#111111]/60 px-2 py-1">
                          {service.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 h-10 w-10 bg-[#CC0000] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-sans text-xs font-bold text-[#CC0000] uppercase tracking-widest">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-[#e5e5e5]" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#111111] group-hover:text-[#CC0000] transition-colors leading-tight mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                        {service.heroDescription}
                      </p>
                      <div className="flex items-center gap-1.5 text-[#CC0000] font-semibold text-sm group-hover:gap-3 transition-all">
                        View Details <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products We Use — brand showcase */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container-tight relative">
          <div className="text-center mb-10">
            <div className="label-tag mb-3 justify-center">Trusted Products</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
              Products We Work With
            </h2>
            <p className="text-white/40 mt-2 text-sm max-w-md mx-auto">
              We use only proven, ISI-certified construction chemicals — so your project performs as designed.
            </p>
          </div>

          <div className="marquee">
            <div className="marquee-track gap-6">
              {[...brandLogos, ...brandLogos].map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0 w-32 h-32 bg-white/5 border border-white/10 hover:border-white/30 transition-colors flex flex-col items-center justify-center gap-2 p-3"
                >
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <span className="text-xs text-white/40 font-semibold text-center leading-tight">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Browse All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CC0000] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container-tight relative text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
              Have a project?
            </p>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white leading-tight">
              Talk to Our Team Today.<br className="hidden md:block" /> Free Site Assessment.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+918530081327"
              className="inline-flex items-center gap-2 bg-white text-[#CC0000] px-7 py-4 font-bold text-sm uppercase tracking-wide hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              +91 85300 81327
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-7 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Send Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
