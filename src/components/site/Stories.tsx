import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    quote: "I learned tailoring through She Can. Today I run a small boutique and pay for my sister's school fees.",
    name: "Priya Sharma",
    where: "Jaipur, Rajasthan",
  },
  {
    quote: "The dignity kits and the workshop changed how I see myself. I'm no longer ashamed.",
    name: "Reshma B.",
    where: "Bengaluru, Karnataka",
  },
  {
    quote: "I'm the first woman in my family to finish 12th grade. The scholarship made it possible.",
    name: "Anjali Devi",
    where: "Patna, Bihar",
  },
];

export function Stories() {
  return (
    <section id="stories" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Success Stories</div>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">She rose. So can the next girl.</h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass relative rounded-3xl border border-border p-7"
            >
              <Quote className="h-8 w-8 text-primary/40" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                "{s.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-rose-500 text-sm font-bold text-primary-foreground">
                  {s.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.where}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
