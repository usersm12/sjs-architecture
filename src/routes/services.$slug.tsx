import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ServiceLeadForm } from "@/components/ServiceLeadForm";
import { services, getServiceBySlug } from "@/data/services";
import { canonicalMeta, jsonLdScript, serviceSchema } from "@/config/seo";
import {
  Package,
  Droplets,
  Layers,
  Hammer,
  ClipboardList,
  ArrowRight,
  Phone,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Package,
  Droplets,
  Layers,
  Hammer,
  ClipboardList,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData.seoTitle },
      { name: "description", content: loaderData.seoDescription },
      {
        name: "keywords",
        content: `${loaderData.title} Rajkot, ${loaderData.title} Gujarat, construction services Rajkot, SJS Architecture Solutions`,
      },
      { property: "og:title", content: loaderData.seoTitle },
      { property: "og:description", content: loaderData.seoDescription },
      { property: "og:image", content: loaderData.heroImage },
      ...canonicalMeta(`/services/${loaderData.slug}`),
    ],
    scripts: [
      jsonLdScript(
        serviceSchema({
          name: loaderData.title,
          description: loaderData.seoDescription,
          slug: loaderData.slug,
          faqs: loaderData.faqs,
        })
      ),
    ],
  }),
  component: ServiceDetailPage,
});

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display font-semibold text-[#111111] text-base leading-snug group-hover:text-[#CC0000] transition-colors pr-2">
          {q}
        </span>
        <span className="shrink-0 mt-0.5 text-[#CC0000]">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="pb-5"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const Icon = iconMap[service.icon] ?? Package;

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-[#f8f8f8] border-b border-border py-3">
        <div className="container-tight flex items-center gap-2 text-xs text-muted-foreground font-semibold">
          <Link to="/" className="hover:text-[#CC0000] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/services" className="hover:text-[#CC0000] transition-colors">Services</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#111111]">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-[#111111]/40" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#CC0000]" />

        <div className="container-tight relative py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-[#CC0000] flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/40">
                {service.category}
              </span>
            </div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[#CC0000] mb-2">
              SJS Architecture Solutions
            </p>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-[1.15] text-balance mb-3">
              {service.title}
            </h1>
            <p className="text-sm md:text-base text-[#CC0000] font-display font-semibold mb-4 italic">
              "{service.tagline}"
            </p>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mb-6">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={`https://wa.me/918530081327?text=${encodeURIComponent(`Hi, I need more information about your ${service.title} service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba5a] text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href="tel:+918530081327"
                className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Send Enquiry <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-[#CC0000] py-6 md:py-8">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {service.keyStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-display font-bold text-2xl md:text-3xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile enquiry CTA — visible only on small screens */}
      <div className="lg:hidden bg-white border-b border-border px-4 py-3 flex gap-3">
        <a
          href="#enquiry"
          className="flex-1 flex items-center justify-center gap-2 bg-[#CC0000] text-white py-3 text-sm font-bold uppercase tracking-wide"
        >
          Get a Quote
        </a>
        <a
          href="tel:+918530081327"
          className="flex items-center justify-center gap-2 border border-[#CC0000] text-[#CC0000] px-4 py-3 text-sm font-bold"
        >
          <Phone className="h-4 w-4" />
        </a>
      </div>

      {/* Main Content */}
      <div className="py-10 md:py-20">
        <div className="container-tight">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_380px]">

            {/* Left Column */}
            <div>
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="label-tag mb-4">Overview</div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-5">
                  About This Service
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base mb-4">
                  {service.overview}
                </p>
                <div className="bg-[#111111] border-l-4 border-[#CC0000] p-5 mt-6">
                  <p className="text-white/70 text-sm leading-relaxed italic">
                    {service.whyMatters}
                  </p>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="label-tag mb-4">What's Included</div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-6">
                  Everything Covered
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="flex items-start gap-3 bg-[#fafafa] border border-border p-4"
                    >
                      <CheckCircle className="h-4 w-4 text-[#CC0000] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#333] font-medium leading-snug">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="label-tag mb-4">How We Work</div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-8">
                  Our Process
                </h2>
                <div className="space-y-0">
                  {service.processSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="relative flex gap-6 pb-8 last:pb-0"
                    >
                      {/* Connector line */}
                      {i < service.processSteps.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-px bg-[#e5e5e5]" />
                      )}
                      <div className="shrink-0 h-10 w-10 bg-[#CC0000] flex items-center justify-center z-10">
                        <span className="font-display font-bold text-xs text-white">{step.number}</span>
                      </div>
                      <div className="pt-1.5">
                        <h3 className="font-display font-bold text-lg text-[#111111] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Products Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="label-tag mb-4">Materials</div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-2">
                  Products We Use
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  We use only proven, ISI-certified products — available for supply from our Rajkot warehouse.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {service.products.map((product, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="group bg-white border border-border hover:border-[#CC0000] hover:shadow-lg transition-all overflow-hidden"
                    >
                      <div className="aspect-square bg-[#fafafa] flex items-center justify-center p-4 border-b border-border">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <span className="text-xs font-semibold text-[#444] leading-tight">
                          {product.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 text-[#CC0000] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Browse all products we stock <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="label-tag mb-4">FAQ</div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-8">
                  Common Questions
                </h2>
                <div className="border-t border-border">
                  {service.faqs.map((faq, i) => (
                    <FAQItem key={i} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column — Lead Form (sticky) */}
            <div>
              <div
                id="enquiry"
                className="sticky top-[76px] md:top-[110px] bg-white border border-border shadow-xl"
              >
                {/* Form header */}
                <div className="bg-[#111111] p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-dot-pattern opacity-20" />
                  <div className="relative">
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#CC0000] block mb-2">
                      Free Assessment
                    </span>
                    <h3 className="font-display font-bold text-xl text-white leading-tight mb-1">
                      Get a Quote for<br />{service.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-2">
                      We respond within 2 hours on business days.
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <ServiceLeadForm
                    serviceTitle={service.title}
                    fields={service.formFields}
                  />
                </div>

                {/* Direct contact options */}
                <div className="border-t border-border px-6 py-4 bg-[#fafafa] space-y-2">
                  <a
                    href="tel:+918530081327"
                    className="flex items-center gap-3 text-sm font-semibold text-[#111111] hover:text-[#CC0000] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#CC0000]" />
                    +91 85300 81327
                  </a>
                  <a
                    href={`https://wa.me/918530081327?text=${encodeURIComponent(`Hi, I need information about your ${service.title} service.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold text-[#111111] hover:text-[#25D366] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp for quick reply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <section className="bg-[#f8f8f8] border-t border-border py-16">
        <div className="container-tight">
          <div className="label-tag mb-4">Explore More</div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111] mb-8">
            Other Services
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {otherServices.map((s, i) => {
              const OtherIcon = iconMap[s.icon] ?? Package;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex gap-4 bg-white border border-border hover:border-[#CC0000] hover:shadow-md transition-all p-5"
                  >
                    <div className="h-10 w-10 bg-[#CC0000] flex items-center justify-center shrink-0">
                      <OtherIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#111111] group-hover:text-[#CC0000] transition-colors leading-tight mb-1">
                        {s.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {s.heroDescription}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#CC0000] shrink-0 self-center ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#111111] py-14 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container-tight relative flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
              Ready to get started?
            </p>
            <h3 className="font-display font-bold text-xl md:text-2xl text-white">
              Call Us — +91 85300 81327
            </h3>
            <p className="text-white/40 text-sm mt-1">
              PI-208, Sitaram Park, Motamava, Rajkot — 360005
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+918530081327"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
