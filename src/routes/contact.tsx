import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";
import { motion } from "framer-motion";
import { SITE_URL, SITE_NAME, PHONE, EMAIL, ADDRESS, GEO, canonicalMeta, jsonLdScript, breadcrumbSchema } from "@/config/seo";

const contactSchema = [
  breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: `${SITE_URL}/contact` },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    name: `Contact ${SITE_NAME}`,
    description: "Contact SJS Architecture Solutions for product enquiries, waterproofing services, or project requirements in Rajkot, Gujarat.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    hasMap: `https://www.google.com/maps?q=PI-208+Sitaram+Park+Rajkot+360005`,
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SJS Architecture Solutions — Construction Chemicals Rajkot | +91 85300 81327" },
      {
        name: "description",
        content:
          "Contact SJS Architecture Solutions in Rajkot, Gujarat — +91 85300 81327. Enquire about construction chemicals, waterproofing services, epoxy grout, or any project requirement.",
      },
      {
        name: "keywords",
        content:
          "contact SJS Architecture Solutions, construction chemicals Rajkot phone, waterproofing Rajkot contact, building materials supplier Rajkot",
      },
      { property: "og:title", content: "Contact SJS Architecture Solutions — Rajkot" },
      { property: "og:description", content: "Call +91 85300 81327 or email us for construction chemicals, waterproofing services, and project enquiries in Rajkot, Gujarat." },
      ...canonicalMeta("/contact"),
    ],
    scripts: [jsonLdScript(contactSchema)],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name}${form.interest ? ` — ${form.interest}` : ""}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterest: ${form.interest}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:rupeshgohel376@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contacts = [
    {
      Icon: MapPin,
      title: "Our Address",
      content: "PI-208, Sitaram Park, Dharti Tyres Street, Opp. Rajkot Taluka Police Station, Motamava, Rajkot — 360005, Gujarat, India",
      isText: true,
    },
    {
      Icon: Phone,
      title: "Phone Number",
      content: "+91 85300 81327",
      href: "tel:+918530081327",
      isText: false,
    },
    {
      Icon: Mail,
      title: "Email Address",
      content: "rupeshgohel376@gmail.com",
      href: "mailto:rupeshgohel376@gmail.com",
      isText: false,
    },
  ];

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative">
          <div className="label-tag mb-4" style={{ color: "#CC0000" }}>Get in Touch</div>
          <h1 className="font-display font-bold text-2xl md:text-4xl text-white mt-2">
            Contact Us
          </h1>
          <p className="mt-4 text-white/55 max-w-2xl text-lg">
            Enquire about products, waterproofing services, or any project requirement in Rajkot, Gujarat.
          </p>
        </div>
      </section>

      <section className="container-tight py-14 md:py-20">
        {/* Contact cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-10">
          {contacts.map(({ Icon, title, content, href, isText }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white border border-border p-7 hover:border-[#CC0000] hover:shadow-[0_8px_32px_-8px_rgba(204,0,0,0.1)] transition-all"
            >
              <div className="h-12 w-12 bg-[#CC0000] flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3">
                {title}
              </h3>
              {isText ? (
                <p className="text-sm text-[#333333] leading-relaxed">{content}</p>
              ) : (
                <a
                  href={href}
                  className="text-[#111111] font-semibold hover:text-[#CC0000] transition-colors break-all"
                >
                  {content}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white border border-border p-8 md:p-10 space-y-6"
          >
            <div>
              <div className="label-tag mb-3">Send a Message</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111]">
                Tell Us About Your Requirement
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Fill in the form below and we'll get back to you promptly.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Full Name" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-border bg-white text-[#111111] placeholder:text-muted-foreground focus:outline-none focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/15 transition-all text-sm"
                />
              </FormField>
              <FormField label="Phone Number" required>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 border border-border bg-white text-[#111111] placeholder:text-muted-foreground focus:outline-none focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/15 transition-all text-sm"
                />
              </FormField>
            </div>

            <FormField label="Email Address">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-border bg-white text-[#111111] placeholder:text-muted-foreground focus:outline-none focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/15 transition-all text-sm"
              />
            </FormField>

            <FormField label="Product / Service of Interest">
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-white text-[#333333] focus:outline-none focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/15 transition-all text-sm"
              >
                <option value="">Select a category (optional)</option>
                {productCategories.map((c) => (
                  <option key={c.slug} value={c.title}>{c.title}</option>
                ))}
                <option value="Waterproofing Services">Waterproofing Services</option>
                <option value="Epoxy Grout Work">Epoxy Grout Work</option>
                <option value="Premix Work">Premix Work</option>
                <option value="Other">Other</option>
              </select>
            </FormField>

            <FormField label="Message" required>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe your requirement..."
                className="w-full px-4 py-3 border border-border bg-white text-[#111111] placeholder:text-muted-foreground focus:outline-none focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/15 transition-all text-sm resize-none"
              />
            </FormField>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-8 py-3.5 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Send Enquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Map + info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex-1 border border-border overflow-hidden min-h-[350px]">
              <iframe
                title="SJS Architecture Solutions Location"
                src="https://www.google.com/maps?q=Motamava,+Rajkot,+Gujarat+360005&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-[#CC0000] p-7">
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                Quick Contact
              </p>
              <a
                href="tel:+918530081327"
                className="font-display font-bold text-2xl text-white hover:text-white/80 transition-colors block mb-2"
              >
                +91 85300 81327
              </a>
              <p className="text-white/70 text-sm">
                Monday – Saturday, 9 AM – 7 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-sans font-semibold text-[13px] text-[#333333] mb-2">
        {label}
        {required && <span className="text-[#CC0000] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
