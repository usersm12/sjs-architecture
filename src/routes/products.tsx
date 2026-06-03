import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { productCategories } from "@/data/products";
import { Mail, Box, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_URL, canonicalMeta, jsonLdScript, productListSchema } from "@/config/seo";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Construction Chemicals Rajkot — Admixtures, Waterproofing, Tile Adhesives | SJS Architecture Solutions" },
      {
        name: "description",
        content:
          "Complete range of construction chemicals in stock in Rajkot — concrete admixtures, waterproofing chemicals, tile adhesives, epoxy grouts, repair mortars, coatings, flooring systems, and building materials. Authorized Redwop dealer.",
      },
      {
        name: "keywords",
        content:
          "construction chemicals Rajkot, concrete admixtures Gujarat, waterproofing chemicals, tile adhesive Rajkot, epoxy grout, repair mortar, building materials Rajkot, Redwop products, SMARZKOT, POLYCOTE, TERATILE, PLASTCONE",
      },
      { property: "og:title", content: "Construction Chemicals Rajkot — SJS Architecture Solutions" },
      { property: "og:description", content: "50+ construction chemicals in stock in Rajkot — admixtures, waterproofing, tile adhesives, epoxy grouts, repair mortars." },
      ...canonicalMeta("/products"),
    ],
    scripts: [jsonLdScript(productListSchema(productCategories))],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="container-tight relative">
          <div className="flex items-center gap-2 text-[#CC0000] font-sans text-xs font-bold uppercase tracking-widest mb-4">
            <Box className="h-4 w-4" />
            Our Products
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white text-balance">
            Construction Chemicals & Materials
          </h1>
          <p className="mt-4 text-white/50 max-w-2xl">
            We stock a complete range of construction chemicals and building materials — from concrete to waterproofing, flooring to coatings.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <section className="bg-white border-b border-border sticky top-[68px] md:top-[104px] z-40 overflow-x-auto">
        <div className="container-tight">
          <nav className="flex gap-1 py-3 min-w-max">
            <Link
              to="#all"
              className="px-4 py-2 text-sm font-semibold bg-[#CC0000] text-white"
            >
              All Products
            </Link>
            {productCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="px-4 py-2 text-sm font-semibold text-[#444] hover:text-[#CC0000] hover:bg-[#f5f5f5] transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <main className="container-tight py-12 md:py-16 mb-[72px] lg:mb-0">
        {productCategories.map((category, catIndex) => (
          <section key={category.slug} id={category.slug} className="mb-16 last:mb-0 scroll-mt-[160px] md:scroll-mt-[180px]">
            {/* Category header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 bg-[#CC0000] flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-sm text-white">{String(catIndex + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-[#111111]">
                      {category.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{category.intro}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-sans text-xs font-bold text-white bg-[#111111] px-3 py-1.5">
                  {category.products.length} Products
                </span>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product, i) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.2) }}
                  className="group bg-white border border-border hover:border-[#CC0000] hover:shadow-lg transition-all overflow-hidden flex flex-col"
                >
                  <div className="aspect-square bg-[#fafafa] overflow-hidden flex items-center justify-center border-b border-border">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-muted-foreground p-6 text-center">
                        <Box className="h-12 w-12 opacity-30 mb-2" />
                        <span className="text-sm font-medium text-[#666]">{product.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-base text-[#111111] leading-tight group-hover:text-[#CC0000] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        href={`mailto:rupeshgohel376@gmail.com?subject=Enquiry: ${encodeURIComponent(product.name)}`}
                        className="inline-flex items-center justify-center gap-2 w-full bg-[#CC0000] hover:bg-[#a80000] text-white py-2.5 text-xs font-bold uppercase tracking-wide transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Mobile sticky CTA */}
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
      <section className="bg-[#111111] py-14 border-t border-border">
        <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
              Need help choosing the right product?
            </p>
            <h3 className="font-display font-bold text-xl md:text-2xl text-white">
              Call Us — +91 85300 81327
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+918530081327"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white px-6 py-3 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="mailto:rupeshgohel376@gmail.com"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3 font-sans font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Email Enquiry
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
