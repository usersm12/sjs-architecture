import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowRight, CircleCheck as CheckCircle2, Phone, Droplets, Package, Layers, Hammer, ClipboardList, Star, ShieldCheck, Truck, Award, MapPin, Mail, Clock, Users, BadgeCheck } from "lucide-react";
import { productCategories } from "@/data/products";

// Indian construction site photos from Pexels
const heroImg = "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80";
const waterproofingImg = "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";
const constructionWorkImg = "https://images.pexels.com/photos/1545525/pexels-photo-1545525.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";
const buildingSiteImg = "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800&q=80";

const trustItems = [
  {
    Icon: Package,
    title: "50+ Products",
    desc: "Complete range of construction chemicals in stock.",
  },
  {
    Icon: Droplets,
    title: "Waterproofing Experts",
    desc: "Professional on-site application services.",
  },
  {
    Icon: MapPin,
    title: "Rajkot Based",
    desc: "Serving Gujarat with fast local delivery.",
  },
  {
    Icon: Users,
    title: "500+ Happy Clients",
    desc: "Trusted by contractors and builders across Rajkot.",
  },
];

const services = [
  {
    Icon: Package,
    title: "Construction Chemicals Supply",
    desc: "Complete range of admixtures, waterproofing, tile adhesives, coatings, grouts and more.",
    image: constructionWorkImg,
  },
  {
    Icon: Droplets,
    title: "Waterproofing Services",
    desc: "Professional on-site waterproofing for terraces, roofs, basements and wet areas.",
    image: waterproofingImg,
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

const stats = [
  { num: "50+", label: "Products" },
  { num: "500+", label: "Happy Clients" },
  { num: "10+", label: "Years Experience" },
  { num: "5", label: "Services" },
];

const whyUs = [
  "High-quality, ISI-certified products",
  "Professional on-site application teams",
  "Serving Rajkot and surrounding areas",
  "Expert product selection guidance",
  "Timely supply and service delivery",
  "Complete customer satisfaction commitment",
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
  const featuredProducts = productCategories.slice(0, 3).flatMap((cat) =>
    cat.products.slice(0, 3).map((p) => ({ ...p, category: cat.title }))
  );

  return (
    <Layout>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center bg-[#111111] overflow-hidden">
        <img
          src={heroImg}
          alt="Construction site in India"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/70 to-transparent" />

        <div className="container-tight relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-6">
              <MapPin className="h-3.5 w-3.5" />
              Rajkot, Gujarat, India
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight text-balance">
              Your Trusted Partner for{" "}
              <span className="text-[#CC0000]">Construction Chemicals</span> & Waterproofing in Rajkot
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
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────── */}
      <section className="bg-[#CC0000] py-8">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
            {stats.map(({ num, label }, i) => (
              <div key={label}>
                <span className="font-display font-extrabold text-3xl md:text-4xl text-white">{num}</span>
                <p className="font-sans font-semibold text-xs uppercase tracking-widest text-white/70 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {trustItems.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-6 md:p-8 group">
                <div className="h-12 w-12 border-2 border-[#CC0000] flex items-center justify-center shrink-0 group-hover:bg-[#CC0000] transition-colors">
                  <Icon className="h-5 w-5 text-[#CC0000] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-display font-bold text-base text-[#111111]">{title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-3">Featured Products</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
              Top Selling Construction Chemicals
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Our most popular products trusted by contractors across Rajkot.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 8).map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to="/products"
                  className="group block bg-white border border-border hover:border-[#CC0000] hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="aspect-square bg-[#f5f5f5] overflow-hidden flex items-center justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Package className="h-12 w-12 text-muted-foreground/30" />
                    )}
                  </div>
                  <div className="p-4 border-t border-border">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-display font-bold text-sm text-[#111111] group-hover:text-[#CC0000] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-1 text-[#CC0000] text-xs font-semibold">
                      View <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#CC0000] text-white px-8 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-3">What We Supply</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
              Complete Range of Construction Chemicals
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to="/products"
                  className="group flex items-center gap-5 bg-[#fafafa] border border-border p-6 hover:border-[#CC0000] hover:bg-white transition-all"
                >
                  <div className="h-14 w-14 bg-[#CC0000] flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-lg text-white">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg text-[#111111] group-hover:text-[#CC0000] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{cat.intro}</p>
                  </div>
                  <div className="text-right shrink-0 hidden sm:block">
                    <span className="font-sans text-xs font-bold text-white bg-[#111111] px-2.5 py-1 group-hover:bg-[#CC0000] transition-colors">
                      {cat.products.length} Products
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES WITH IMAGES ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="container-tight">
          <div className="text-center mb-14">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-3">What We Do</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Professional Construction Services
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              We supply and apply — complete solutions from one trusted partner.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map(({ Icon, title, desc, image }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white overflow-hidden"
              >
                {image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 bg-[#CC0000] flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#111111] group-hover:text-[#CC0000] transition-colors">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-[#CC0000] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#CC0000] hover:bg-[#CC0000] text-white px-8 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-all"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Construction work"
                className="aspect-[3/4] object-cover"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                src="https://images.pexels.com/photos/1545525/pexels-photo-1545525.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                alt="Indian construction site"
                className="aspect-[3/4] object-cover mt-8"
              />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-4">About Us</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111] mb-6">
                Why Choose SJS Architecture Solutions?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Based in Rajkot, Gujarat, we supply all types of construction chemicals and building materials while also offering professional on-site waterproofing, epoxy grouting, and premix application services.
              </p>

              <ul className="space-y-4 mb-8">
                {whyUs.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#CC0000] shrink-0 mt-0.5" />
                    <span className="text-[#333333] font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-7 py-3 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  About Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#111111] text-[#111111] hover:border-[#CC0000] hover:text-[#CC0000] px-7 py-3 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─────────────────────────────────────────── */}
      <section className="bg-[#CC0000] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container-tight relative">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                Get in Touch
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Need Construction Chemicals in Rajkot?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Tell us your requirement and we'll recommend the right chemicals and services for your specific project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <a
                href="tel:+918530081327"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#CC0000] px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                +91 85300 81327
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-[#CC0000] transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </Link>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { Icon: Phone, label: "Phone", value: "+91 85300 81327", href: "tel:+918530081327" },
              { Icon: Mail, label: "Email", value: "rupeshgohel376@gmail.com", href: "mailto:rupeshgohel376@gmail.com" },
              { Icon: Clock, label: "Hours", value: "Mon-Sat, 9 AM - 7 PM" },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="bg-white/10 backdrop-blur p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-5 w-5 text-white" />
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white/60">{label}</span>
                </div>
                {href ? (
                  <a href={href} className="font-semibold text-white hover:text-white/80 transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-white">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
