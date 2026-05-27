import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Quality Products", desc: "We source high-quality construction chemicals for all types of projects." },
  { title: "Professional Services", desc: "Expert on-site waterproofing, grouting, and premix application teams." },
  { title: "Local Expertise", desc: "Serving Rajkot and surrounding areas with deep knowledge of local project needs." },
  { title: "Complete Customer Satisfaction", desc: "We are committed to excellent workmanship and durable results on every project." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SJS Architecture Solutions | Construction Chemicals & Waterproofing Rajkot" },
      { name: "description", content: "SJS Architecture Solutions is a trusted construction chemicals supplier and waterproofing service provider based in Rajkot, Gujarat." },
      { property: "og:title", content: "About SJS Architecture Solutions" },
      { property: "og:description", content: "Your complete partner for construction chemicals and waterproofing services in Rajkot." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero title="About SJS Architecture Solutions" />

      <section className="container-tight py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">Who we are</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal tracking-tight text-balance">
              A trusted construction chemicals &amp; waterproofing partner in Rajkot
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-charcoal">SJS Architecture Solutions</strong> is a comprehensive supplier of all types of construction chemicals and building materials, based in Rajkot, Gujarat. We supply quality products for residential, commercial, and infrastructure projects across Rajkot and surrounding areas.
              </p>
              <p>
                Beyond supply, we are also a professional <strong className="text-charcoal">Waterproofing Service Provider</strong> — offering on-site application of waterproofing systems, epoxy grout work, and premix solutions. Our team brings hands-on expertise directly to your site.
              </p>
              <p>
                Whether you need construction chemicals for a new build, waterproofing for a terrace or basement, or grouting solutions for a renovation project, SJS Architecture Solutions is your complete one-stop partner.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted rounded-2xl p-8 flex flex-col items-center justify-center border border-border text-center"
          >
            <div className="h-16 w-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-charcoal">Full Service</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Supply + on-site application. We bring the chemicals and the expertise to your project.
            </p>
          </motion.div>
        </div>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="bg-charcoal text-charcoal-foreground rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <span className="text-brand font-semibold uppercase text-xs tracking-wider">Our Mission</span>
              <p className="mt-3 text-lg leading-relaxed">
                To provide high-quality, reliable, and affordable all type of construction chemicals and waterproofing and grouting services with complete customer satisfaction. We are committed to delivering excellent workmanship, durable solutions, and professional service in nearby areas and surrounding locations.
              </p>
            </div>
          </div>
          <div className="bg-brand text-brand-foreground rounded-xl p-8">
            <span className="font-semibold uppercase text-xs tracking-wider opacity-90">Our Vision</span>
            <p className="mt-3 text-lg leading-relaxed">
              To become a trusted name in the construction and waterproofing industry by consistently providing excellent services and long-lasting results. We aim to expand our reach while maintaining product quality, service, trust, and strong customer relationships in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted/50 border-y border-border py-16 md:py-20">
        <div className="container-tight">
          <div className="max-w-2xl mb-10">
            <span className="text-brand font-semibold uppercase text-xs tracking-wider">Why choose us</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal mt-3 tracking-tight">
              Built on quality, delivered with care
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-border rounded-lg p-6 flex items-start gap-4 hover:border-brand/40 hover:shadow-card transition-all"
              >
                <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-lg text-charcoal">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
