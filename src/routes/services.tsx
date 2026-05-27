import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Package, Droplets, Layers, Hammer, ClipboardList, ArrowRight } from "lucide-react";

const services = [
  {
    Icon: Package,
    title: "Construction Chemicals Supply",
    desc: "We supply all types of high-quality construction chemicals including concrete admixtures, waterproofing chemicals, tile adhesives, grouts, coatings, repair mortars, and much more. Reliable stock for residential and commercial projects of every scale.",
  },
  {
    Icon: Droplets,
    title: "Waterproofing Service Provider",
    desc: "Professional waterproofing services for terraces, rooftops, basements, bathrooms, and retaining walls. We use proven systems — liquid membranes, crystalline coatings, cement-based systems — applied by our trained team.",
  },
  {
    Icon: Layers,
    title: "Epoxy Grout Work",
    desc: "Expert epoxy grouting for tile joints, industrial floors, and high-traffic areas. Epoxy grouts are stain-resistant, durable, and ideal for kitchens, hospitals, factories, and commercial spaces.",
  },
  {
    Icon: Hammer,
    title: "Waterproofing Work",
    desc: "On-site waterproofing application using the best products for your specific situation — whether it's a new construction terrace, a leaking roof, or a wet basement. We assess, recommend, and execute.",
  },
  {
    Icon: ClipboardList,
    title: "Premix Work",
    desc: "On-site premix mortar application for wall plastering, block laying, tile fixing, and floor screeding. Our team ensures consistent quality and smooth finishes every time.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SJS Architecture Solutions | Waterproofing & Chemicals Rajkot" },
      { name: "description", content: "Construction chemicals supply, waterproofing services, epoxy grout work, and premix application in Rajkot, Gujarat." },
      { property: "og:title", content: "Our Services — SJS Architecture Solutions" },
      { property: "og:description", content: "Professional waterproofing, epoxy grouting, and construction chemical supply in Rajkot." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="We supply construction chemicals and apply them too — complete solutions from one trusted partner."
      />

      <div className="container-tight py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white border border-border rounded-lg p-7 hover:shadow-elegant hover:border-brand/40 transition-all group"
            >
              <div className="h-14 w-14 rounded-md bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-charcoal text-charcoal-foreground rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight">
              Have a project in Rajkot? Let's talk.
            </h2>
            <p className="mt-4 text-white/65 text-lg max-w-xl mx-auto">
              Tell us your requirement and we'll recommend the right chemicals and services for your project.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-7 py-3.5 rounded-md font-semibold transition-all"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
