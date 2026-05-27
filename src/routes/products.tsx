import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { productCategories } from "@/data/products";
import { Mail, Box, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — SJS Architecture Solutions | Construction Chemicals Rajkot" },
      { name: "description", content: "Complete range of construction chemicals: concrete admixtures, waterproofing, tile adhesives, repair mortars, coatings, flooring, and building materials." },
      { property: "og:title", content: "Our Products — SJS Architecture Solutions" },
      { property: "og:description", content: "From concrete admixtures to waterproofing — every construction chemical you need, in stock in Rajkot." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [activeSlug, setActiveSlug] = useState(productCategories[0].slug);

  const activeCategory = productCategories.find((c) => c.slug === activeSlug) ?? productCategories[0];

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative">
          <div className="label-tag mb-4" style={{ color: "#CC0000" }}>
            <span style={{ background: "#CC0000" }} className="inline-block" />
            Our Products
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mt-2">
            Construction Chemicals & Materials
          </h1>
          <p className="mt-4 text-white/55 max-w-2xl text-lg">
            We stock a complete range of construction chemicals and building materials — from concrete to waterproofing, flooring to coatings.
          </p>
        </div>
      </section>

      <div className="container-tight py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar category nav */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white border border-border sticky top-24">
              <div className="px-5 py-4 border-b border-border">
                <p className="font-sans font-bold text-xs uppercase tracking-widest text-muted-foreground">
                  Product Categories
                </p>
              </div>
              <nav>
                {productCategories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveSlug(cat.slug)}
                    className={`w-full text-left px-5 py-3.5 text-sm font-semibold border-b border-border last:border-0 transition-colors flex items-center justify-between gap-2 group ${
                      activeSlug === cat.slug
                        ? "bg-[#CC0000] text-white"
                        : "text-[#333333] hover:bg-[#f8f8f8] hover:text-[#CC0000]"
                    }`}
                  >
                    <span>{cat.title}</span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        activeSlug === cat.slug
                          ? "bg-white/20 text-white"
                          : "bg-[#f0f0f0] text-muted-foreground group-hover:bg-[#CC0000]/10 group-hover:text-[#CC0000]"
                      }`}
                    >
                      {cat.products.length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile sticky quote button */}
            <div className="mt-5 hidden">
              <a
                href="mailto:rupeshgohel376@gmail.com?subject=Product Enquiry — SJS Architecture Solutions"
                className="flex items-center justify-center gap-2 bg-[#CC0000] text-white py-3.5 text-sm font-bold uppercase tracking-wide w-full"
              >
                <Mail className="h-4 w-4" />
                Request a Quote
              </a>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111]">
                {activeCategory.title}
              </h2>
              <p className="text-muted-foreground mt-2">{activeCategory.intro}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {activeCategory.products.map((product, i) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.24) }}
                  className="group bg-white border border-border hover:border-[#CC0000] hover:shadow-[0_8px_32px_-8px_rgba(204,0,0,0.14)] transition-all duration-200 flex flex-col"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] bg-[#f7f7f7] overflow-hidden flex items-center justify-center border-b border-border">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-400"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground p-6 text-center">
                        <Box className="h-10 w-10 mb-2 opacity-30" />
                        <span className="text-sm font-medium text-[#666]">{product.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg text-[#111111] leading-tight">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <a
                      href={`mailto:rupeshgohel376@gmail.com?subject=Enquiry: ${encodeURIComponent(product.name)}`}
                      className="mt-4 inline-flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white py-2.5 text-sm font-bold uppercase tracking-wide transition-colors w-full"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Enquire Now
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky "Request a Quote" */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-white border-t border-border shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.15)]">
        <a
          href="mailto:rupeshgohel376@gmail.com?subject=Product Enquiry — SJS Architecture Solutions"
          className="flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white py-3.5 text-sm font-bold uppercase tracking-wide w-full transition-colors"
        >
          <Mail className="h-4 w-4" />
          Request a Quote
        </a>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#f8f8f8] border-t border-border py-14 mb-[72px] lg:mb-0">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-[#111111]">
              Need help choosing the right product?
            </h3>
            <p className="text-muted-foreground mt-1">Our experts are ready to guide you.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+918530081327"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#CC0000] text-white px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <a
              href="mailto:rupeshgohel376@gmail.com"
              className="inline-flex items-center gap-2 border-2 border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors"
            >
              Email Enquiry
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
