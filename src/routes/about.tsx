import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { CircleCheck as CheckCircle2, Package, Droplets, MapPin, Star, ArrowRight } from "lucide-react";
import { SITE_URL, SITE_NAME, canonicalMeta, jsonLdScript, breadcrumbSchema } from "@/config/seo";

const whyCards = [
  {
    Icon: Package,
    title: "Quality Products",
    desc: "We source ISI-certified, high-performance construction chemicals from leading manufacturers. Every product meets the quality standards your project demands.",
  },
  {
    Icon: Droplets,
    title: "Professional Services",
    desc: "Beyond supply, our trained on-site teams apply waterproofing, epoxy grouting, and premix — professional workmanship on every project.",
  },
  {
    Icon: MapPin,
    title: "Local Expertise",
    desc: "Based in Rajkot, Gujarat, we understand local construction requirements, climate conditions, and project timelines across the region.",
  },
  {
    Icon: Star,
    title: "Customer Satisfaction",
    desc: "We are committed to excellent workmanship, durable results, and long-term customer relationships on every project we undertake.",
  },
];

const aboutSchema = [
  breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "About", url: `${SITE_URL}/about` },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/about`,
    name: `About ${SITE_NAME}`,
    description:
      "SJS Architecture Solutions is an authorized Redwop dealer and complete construction chemicals supplier in Rajkot, Gujarat — supply and on-site application under one roof.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SJS Architecture Solutions — Construction Chemicals Supplier Rajkot" },
      {
        name: "description",
        content:
          "SJS Architecture Solutions is an authorized Redwop dealer and trusted construction chemicals supplier in Rajkot, Gujarat. We supply ISI-certified chemicals and provide professional waterproofing and epoxy grouting services.",
      },
      {
        name: "keywords",
        content:
          "SJS Architecture Solutions, construction chemicals Rajkot, waterproofing company Rajkot, Redwop authorized dealer Gujarat, about us",
      },
      { property: "og:title", content: "About SJS Architecture Solutions — Construction Chemicals Rajkot" },
      { property: "og:description", content: "Authorized Redwop dealer in Rajkot. Supply + apply — complete construction chemistry solutions in one place." },
      ...canonicalMeta("/about"),
    ],
    scripts: [jsonLdScript(aboutSchema)],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative">
          <div className="label-tag mb-4" style={{ color: "#CC0000" }}>About Us</div>
          <h1 className="font-display font-bold text-2xl md:text-4xl text-white mt-2">
            SJS Architecture Solutions
          </h1>
          <p className="mt-4 text-white/55 max-w-2xl text-lg">
            Rajkot's trusted partner for construction chemicals, waterproofing services, and building materials.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="label-tag mb-5">Who We Are</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-6">
                Your Complete Construction Chemicals Partner in Rajkot
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-[#111111]">SJS Architecture Solutions</strong> is a comprehensive supplier of all types of construction chemicals and building materials, based in Rajkot, Gujarat. We supply quality products for residential, commercial, and infrastructure projects across Rajkot and surrounding areas.
                </p>
                <p>
                  Beyond supply, we are also a professional <strong className="text-[#111111]">Waterproofing Service Provider</strong> — offering on-site application of waterproofing systems, epoxy grout work, and premix solutions. Our team brings hands-on expertise directly to your site.
                </p>
                <p>
                  Whether you need construction chemicals for a new build, waterproofing for a terrace or basement, or grouting solutions for a renovation project, SJS Architecture Solutions is your complete one-stop partner.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-7 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors mt-8"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Mission + Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-8 bg-[#CC0000]" />
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">
                    Our Mission
                  </span>
                </div>
                <p className="font-display text-lg text-[#111111] leading-relaxed">
                  "To provide high-quality, reliable, and affordable construction chemicals and waterproofing and grouting services with complete customer satisfaction. We are committed to delivering excellent workmanship, durable solutions, and professional service."
                </p>
              </div>

              <div className="bg-[#CC0000] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-8 bg-white/50" />
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-white/60">
                    Our Vision
                  </span>
                </div>
                <p className="font-display text-lg text-white leading-relaxed">
                  "To become a trusted name in the construction and waterproofing industry by consistently providing excellent services and long-lasting results. We aim to expand our reach while maintaining quality, trust, and strong customer relationships."
                </p>
              </div>

              <div className="bg-[#f8f8f8] border border-border p-7">
                <p className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Quick Facts
                </p>
                <ul className="space-y-3">
                  {[
                    "Based in Rajkot, Gujarat — 360005",
                    "Comprehensive stock of 50+ products",
                    "5 professional service types",
                    "Supply + on-site application",
                  ].map((fact) => (
                    <li key={fact} className="flex items-center gap-3 text-sm text-[#333333] font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#CC0000] shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#f8f8f8] border-t border-border">
        <div className="container-tight">
          <div className="text-center mb-14">
            <div className="label-tag justify-center mb-4">Why Choose Us</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#111111]">
              Built on Quality, Delivered with Care
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Four reasons why construction professionals in Rajkot choose SJS Architecture Solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyCards.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-border p-8 hover:border-[#CC0000] hover:shadow-[0_8px_32px_-8px_rgba(204,0,0,0.12)] transition-all group"
              >
                <div className="h-12 w-12 bg-[#CC0000]/8 flex items-center justify-center mb-6 group-hover:bg-[#CC0000] transition-colors">
                  <Icon className="h-6 w-6 text-[#CC0000] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#111111] mb-3 group-hover:text-[#CC0000] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-white/55 max-w-xl mx-auto mb-8">
            Contact SJS Architecture Solutions today for product enquiries, service quotations, or expert advice on your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white text-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
