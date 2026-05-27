import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { Box, Mail } from "lucide-react";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
      className="group bg-white border border-border hover:border-[#CC0000] hover:shadow-[0_8px_32px_-8px_rgba(204,0,0,0.14)] transition-all duration-200 flex flex-col"
    >
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
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-[#111111] leading-tight">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>
        <a
          href={`mailto:rupeshgohel376@gmail.com?subject=Enquiry: ${encodeURIComponent(product.name)}`}
          className="mt-4 inline-flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-[#a80000] text-white py-2.5 text-sm font-bold uppercase tracking-wide transition-colors w-full"
        >
          <Mail className="h-3.5 w-3.5" />
          Enquire Now
        </a>
      </div>
    </motion.article>
  );
}
