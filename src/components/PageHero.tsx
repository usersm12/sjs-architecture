import { motion } from "framer-motion";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-charcoal text-charcoal-foreground py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* Decorative red line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="text-brand/60 font-semibold uppercase tracking-[0.25em] text-xs mb-5">
            SJS Architecture Solutions
          </p>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-balance uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-white/55 max-w-2xl leading-relaxed font-light">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
