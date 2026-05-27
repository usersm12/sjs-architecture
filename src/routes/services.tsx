import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Package, Droplets, Layers, Hammer, ClipboardList, ArrowRight, Phone, CircleCheck as CheckCircle2, Mail } from "lucide-react";

const services = [
  {
    Icon: Package,
    title: "Construction Chemicals Supply",
    desc: "We are your one-stop supplier for all types of high-quality construction chemicals in Rajkot. Our comprehensive range includes concrete admixtures, waterproofing chemicals, tile adhesives, epoxy grouts, protective coatings, repair mortars, curing compounds, and much more. We maintain consistent stock for residential, commercial, and infrastructure projects of every scale.",
    benefits: [
      "Wide range of ISI-certified products",
      "Admixtures, waterproofing, coatings, grouts",
      "Tile adhesives, repair mortars, curing compounds",
      "Building materials — FRP manholes, water tanks, white cement",
      "Expert guidance on product selection",
      "Reliable availability and timely delivery",
    ],
  },
  {
    Icon: Droplets,
    title: "Waterproofing Services",
    desc: "Our professional waterproofing service covers terraces, rooftops, basements, bathrooms, retaining walls, and all wet areas. We use proven, high-performance systems including liquid membranes, crystalline coatings, cement-based systems, and 2K elastic membranes — all applied on-site by our trained and experienced team.",
    benefits: [
      "Terrace and rooftop waterproofing",
      "Basement and underground waterproofing",
      "Bathroom and wet area waterproofing",
      "Liquid membrane and crystalline systems",
      "2K elastic and cement-based applications",
      "Long-lasting, durable protection",
    ],
  },
  {
    Icon: Layers,
    title: "Epoxy Grout Work",
    desc: "Our expert epoxy grouting service ensures stain-resistant, durable, and hygienic tile joints that last for decades. Epoxy grouts are ideal for kitchens, hospitals, factories, food processing facilities, and commercial spaces where cleanliness, chemical resistance, and durability are critical. We handle both new installation and re-grouting of existing tiles.",
    benefits: [
      "Stain and chemical resistant joints",
      "Perfect for kitchens, hospitals, factories",
      "Food-grade safe options available",
      "New installation and re-grouting",
      "High-traffic floor grouting",
      "Decorative glitter and colour options",
    ],
  },
  {
    Icon: Hammer,
    title: "Waterproofing Work",
    desc: "On-site waterproofing application tailored to your specific situation. Whether it's a new construction terrace, a persistently leaking roof, a damp basement, or water seeping through walls — our team assesses the root cause, recommends the most effective system, and executes with precision. We use only proven products and tested application methods.",
    benefits: [
      "On-site assessment before application",
      "Best system matched to your situation",
      "New construction and retrofitting",
      "Leaking roof and terrace repair",
      "Damp wall and basement solutions",
      "Guaranteed workmanship",
    ],
  },
  {
    Icon: ClipboardList,
    title: "Premix Work",
    desc: "Our on-site premix mortar application service delivers consistent quality and smooth finishes for a wide range of construction tasks. From wall plastering and block laying to tile fixing and floor screeding, our experienced team ensures that the right mix, the right application, and the right finish are achieved every time — saving time and material waste on your project.",
    benefits: [
      "Wall plastering with ready mix",
      "AAC block and brick laying",
      "Tile fixing with premix adhesives",
      "Floor screed and levelling",
      "Consistent mix ratios every time",
      "Reduced wastage and faster completion",
    ],
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
      {/* Page header */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative">
          <div className="label-tag mb-4" style={{ color: "#CC0000" }}>Our Services</div>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mt-2">
            What We Do
          </h1>
          <p className="mt-4 text-white/55 max-w-2xl text-lg">
            We supply construction chemicals and apply them too — complete solutions from one trusted partner in Rajkot.
          </p>
        </div>
      </section>

      {/* Services — full sections */}
      <div className="py-8 md:py-12">
        {services.map(({ Icon, title, desc, benefits }, i) => (
          <motion.section
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className={`py-16 md:py-20 border-b border-border ${i % 2 === 1 ? "bg-[#f8f8f8]" : "bg-white"}`}
          >
            <div className="container-tight">
              <div className="grid gap-12 lg:grid-cols-2 items-start">
                {/* Left — content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 bg-[#CC0000] flex items-center justify-center shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-5">
                    {title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:rupeshgohel376@gmail.com?subject=Enquiry: ${encodeURIComponent(title)}`}
                      className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-7 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
                    >
                      Get This Service <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="tel:+918530081327"
                      className="inline-flex items-center gap-2 border border-[#111111]/20 text-[#111111] hover:border-[#CC0000] hover:text-[#CC0000] px-7 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call Us
                    </a>
                  </div>
                </div>

                {/* Right — benefits */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-white border border-border p-7 md:p-9">
                    <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3.5">
                          <CheckCircle2 className="h-5 w-5 text-[#CC0000] shrink-0 mt-0.5" />
                          <span className="text-[#333333] font-medium">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                Have a project in Rajkot?
              </p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                Call Us — +91 85300 81327
              </h2>
              <p className="text-white/50 mt-2">
                Our team is ready to assess your requirement and provide the right solution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:+918530081327"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-7 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 85300 81327
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white text-white px-7 py-4 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
