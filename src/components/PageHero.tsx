import { motion } from "framer-motion";

export function PageHero({ title, subtitle, tag }: { title: string; subtitle?: string; tag?: string }) {
  return (
    <section className="bg-[#111111] py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {tag && <div className="label-tag mb-4">{tag}</div>}
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mt-2 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/55 max-w-2xl text-lg leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
