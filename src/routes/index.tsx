import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProductSlider } from "@/components/ProductSlider";
import { Award, Package, Wrench, ArrowRight, Droplets, Hammer, ClipboardList, CheckCircle2, MapPin, ShieldCheck, Truck } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const trustBadges = [
  { Icon: Package, title: "Complete Chemical Range", desc: "Concrete admixtures, waterproofing, tile adhesives, coatings, grouts and more." },
  { Icon: Droplets, title: "Waterproofing Experts", desc: "Professional on-site waterproofing services for terraces, roofs and basements." },
  { Icon: Wrench, title: "Epoxy & Grouting Services", desc: "Expert epoxy grout work and premix application on your site." },
];

const services = [
  { Icon: Package, title: "Construction Chemicals Supply", desc: "Complete range of high-quality construction chemicals for all types of residential and commercial projects." },
  { Icon: Droplets, title: "Waterproofing Services", desc: "Professional waterproofing solutions for terraces, roofs, basements, and wet areas — applied by our skilled team." },
  { Icon: Hammer, title: "Epoxy Grout Work", desc: "Expert epoxy grouting for tiles, joints, and industrial floors ensuring long-lasting, stain-resistant results." },
  { Icon: ClipboardList, title: "Premix Work", desc: "On-site premix mortar application services for smooth, consistent, and durable finishes." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SJS Architecture Solutions — Construction Chemicals & Waterproofing in Rajkot" },
      { name: "description", content: "SJS Architecture Solutions — your complete partner for construction chemicals, waterproofing services, epoxy grout work, and building materials in Rajkot, Gujarat." },
      { property: "og:title", content: "SJS Architecture Solutions — Construction Chemicals & Waterproofing" },
      { property: "og:description", content: "High-quality construction chemicals and professional waterproofing services in Rajkot, Gujarat." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="container-tight relative py-24 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/50 bg-brand/15 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Rajkot · Gujarat · India
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Your Complete Construction Chemicals &amp; Waterproofing Partner
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              High-quality construction chemicals, professional <span className="text-brand font-semibold">waterproofing services</span>, epoxy grout work, and building materials — all under one roof in Rajkot.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3.5 rounded-md font-semibold transition-all shadow-elegant"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-3.5 rounded-md font-semibold transition-all"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-3.5 rounded-md font-semibold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-muted/50 border-y border-border">
        <div className="container-tight py-12 grid gap-6 md:grid-cols-3">
          {trustBadges.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 h-12 w-12 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-charcoal">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">What we supply</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal mt-3 tracking-tight text-balance">
              The complete range of construction chemicals
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From foundation to finish — every chemical you need for concrete, waterproofing, tiling, repair, and flooring.
            </p>
          </div>
          <ProductSlider />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-muted/40 py-20 md:py-28 border-y border-border">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand font-semibold uppercase text-xs tracking-wider">About us</span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-charcoal mt-3 tracking-tight text-balance">
                A trusted name for construction chemicals in Rajkot
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                <strong className="text-charcoal">SJS Architecture Solutions</strong> is your one-stop destination for all types of construction chemicals and building materials in Rajkot, Gujarat. We supply high-quality products and also offer professional on-site services including waterproofing, epoxy grouting, and premix application.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We are committed to delivering excellent workmanship, durable solutions, and complete customer satisfaction on every project — big or small.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { Icon: ShieldCheck, text: "High-quality, reliable products" },
                  { Icon: CheckCircle2, text: "Complete chemical range" },
                  { Icon: MapPin, text: "Based in Rajkot, Gujarat" },
                  { Icon: Truck, text: "On-site service available" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="shrink-0 h-9 w-9 rounded-md bg-brand/10 text-brand flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-charcoal">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white px-6 py-3 rounded-md font-semibold transition-all"
                >
                  More about us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-white hover:bg-muted border border-border text-charcoal px-6 py-3 rounded-md font-semibold transition-all"
                >
                  View Products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant border border-border bg-muted">
                <img
                  src={heroImg}
                  alt="Construction site"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:flex bg-brand text-brand-foreground px-6 py-5 rounded-lg shadow-elegant max-w-[16rem]">
                <div>
                  <div className="font-display font-extrabold text-3xl leading-none">100%</div>
                  <div className="text-xs uppercase tracking-wider mt-2 opacity-90">Customer satisfaction commitment</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 hidden md:flex bg-white border border-border px-5 py-4 rounded-lg shadow-elegant items-center gap-3">
                <Award className="h-7 w-7 text-brand" />
                <div>
                  <div className="font-display font-bold text-charcoal text-sm leading-tight">Quality Assured</div>
                  <div className="text-xs text-muted-foreground">Construction Chemicals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-charcoal text-charcoal-foreground py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-tight relative">
          <div className="max-w-2xl mb-12">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">Our services</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mt-3 tracking-tight text-balance">
              Supply &amp; on-site expertise
            </h2>
            <p className="mt-4 text-white/65 text-lg">
              We don't just supply chemicals — we apply them too. From waterproofing to epoxy grouting, our team works on your site.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-brand/40 transition-all"
              >
                <div className="h-12 w-12 rounded-md bg-brand text-brand-foreground flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3 rounded-md font-semibold transition-all"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-brand text-brand-foreground">
        <div className="container-tight py-16 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-between">
          <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight max-w-2xl text-balance">
            Need construction chemicals or waterproofing services in Rajkot? We've got you covered.
          </h2>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white px-7 py-4 rounded-md font-semibold transition-all"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
