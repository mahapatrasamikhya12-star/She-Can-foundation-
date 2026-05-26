import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { Users, GraduationCap, MapPin, HeartHandshake } from "lucide-react";

const stats = [
  { icon: Users, v: 120000, s: "+", l: "Girls Supported" },
  { icon: GraduationCap, v: 500, s: "+", l: "Workshops Conducted" },
  { icon: MapPin, v: 50, s: "+", l: "Cities Reached" },
  { icon: HeartHandshake, v: 10000, s: "+", l: "Volunteers" },
];

export function Impact() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Impact</div>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
            Real numbers. Real lives. Real change.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every workshop, every dignity kit and every classroom is a measurable step toward a
            more equitable India.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 transition group-hover:bg-primary/20" />
              <s.icon className="relative h-7 w-7 text-primary" />
              <div className="relative mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="relative mt-2 text-sm text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
