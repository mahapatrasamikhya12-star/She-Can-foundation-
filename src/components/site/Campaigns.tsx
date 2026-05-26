import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import edu from "@/assets/campaign-education.jpg";
import skills from "@/assets/campaign-skills.jpg";
import health from "@/assets/campaign-health.jpg";

const campaigns = [
  {
    img: edu,
    tag: "Education",
    title: "Send 500 girls back to school",
    raised: 480000,
    goal: 750000,
    days: 24,
  },
  {
    img: health,
    tag: "Menstrual Health",
    title: "Dignity kits for 10,000 women",
    raised: 612000,
    goal: 900000,
    days: 18,
  },
  {
    img: skills,
    tag: "Skill Development",
    title: "Tailoring workshops in 12 villages",
    raised: 215000,
    goal: 500000,
    days: 42,
  },
];

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export function Campaigns() {
  return (
    <section id="campaigns" className="relative bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Featured Causes
            </div>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
              Find the cause closest to your heart
            </h2>
          </div>
          <a
            href="#donate"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all campaigns <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {campaigns.map((c, i) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                    {c.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                  <div className="mt-5">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: pct + "%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-rose-500"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        <strong className="text-foreground">{fmt(c.raised)}</strong> raised
                      </span>
                      <span>Goal {fmt(c.goal)}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {c.days} days left
                    </span>
                    <a
                      href="#donate"
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                    >
                      Donate <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
