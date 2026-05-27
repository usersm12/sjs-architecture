import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { productCategories } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SJS Architecture Solutions | Rajkot, Gujarat" },
      { name: "description", content: "Contact SJS Architecture Solutions in Rajkot for product enquiries, waterproofing services, or project requirements. Call +91 85300 81327." },
      { property: "og:title", content: "Contact SJS Architecture Solutions" },
      { property: "og:description", content: "Get in touch for product enquiries, waterproofing services, or project requirements in Rajkot." },
    ],
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
      title: "Address",
      lines: [
        "PI-208, Sitaram Park,",
        "Dharti Tyres Street,",
        "Opp. Rajkot Taluka Police Station,",
        "Motamava, Rajkot — 360005, Gujarat, India",
      ],
    },
    {
      Icon: Phone,
      title: "Phone",
      lines: [
        { label: "", value: "+91 85300 81327", href: "tel:+918530081327" },
      ],
    },
    {
      Icon: Mail,
      title: "Email",
      lines: [{ label: "", value: "rupeshgohel376@gmail.com", href: "mailto:rupeshgohel376@gmail.com" }],
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for product enquiries, waterproofing services, or project requirements."
      />

      <section className="container-tight py-16 md:py-20">
        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {contacts.map(({ Icon, title, lines }) => (
            <div key={title} className="bg-white border border-border rounded-lg p-6 hover:border-brand/40 hover:shadow-card transition-all">
              <div className="h-12 w-12 rounded-md bg-brand text-brand-foreground flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-charcoal mb-3">{title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                {lines.map((line, i) =>
                  typeof line === "string" ? (
                    <p key={i}>{line}</p>
                  ) : (
                    <p key={i}>
                      {line.label && <span className="text-charcoal font-medium">{line.label}: </span>}
                      <a href={line.href} className="hover:text-brand transition-colors break-all">
                        {line.value}
                      </a>
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid gap-10 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white border border-border rounded-lg p-7 md:p-9 space-y-5">
            <div>
              <span className="text-brand font-semibold uppercase text-xs tracking-wider">Send a message</span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-charcoal mt-2 tracking-tight">
                Tell us about your requirement
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </Field>
            </div>

            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
              />
            </Field>

            <Field label="Product / Service of Interest">
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
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
            </Field>

            <Field label="Message" required>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-md bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
              />
            </Field>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3 rounded-md font-semibold transition-all shadow-elegant"
            >
              <Send className="h-4 w-4" />
              Send Enquiry
            </button>
          </form>

          {/* Map */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-border min-h-[400px]">
            <iframe
              title="SJS Architecture Solutions Location"
              src="https://www.google.com/maps?q=Motamava,+Rajkot,+Gujarat+360005&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-charcoal mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
