import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  MapPin,
  HeartHandshake,
} from "lucide-react";

import { Counter } from "./Counter";

const stats = [
  {
    icon: Users,
    value: 120000,
    suffix: "+",
    title: "Girls Supported",
    subtitle: "through healthcare, dignity kits, workshops, and outreach programs",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    title: "Workshops Conducted",
    subtitle: "in schools, villages, colleges, and underserved communities",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "+",
    title: "Cities Reached",
    subtitle: "with awareness campaigns and community engagement programs",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: HeartHandshake,
    value: 10000,
    suffix: "+",
    title: "Volunteers Engaged",
    subtitle: "supporting real impact initiatives across India",
    gradient: "from-rose-400 to-pink-600",
  },
];

const promises = [
  {
    emoji: "🛡️",
    title: "Safety",
    desc: "Creating environments where women and girls feel protected, respected, and heard.",
  },
  {
    emoji: "📚",
    title: "Education",
    desc: "Ensuring access to learning opportunities and awareness programs for long-term growth.",
  },
  {
    emoji: "💊",
    title: "Healthcare",
    desc: "Supporting menstrual hygiene awareness and access to essential healthcare resources.",
  },
  {
    emoji: "⚖️",
    title: "Legal Awareness",
    desc: "Helping women understand their rights and access support systems confidently.",
  },
  {
    emoji: "👑",
    title: "Dignity",
    desc: "Every woman deserves dignity, opportunity, and the ability to shape her future.",
  },
  {
    emoji: "🤝",
    title: "Community",
    desc: "Building support systems powered by volunteers, educators, and local communities.",
  },
];

export function Impact() {
  return (
    <>
      {/* MAIN IMPACT SECTION */}
      <section
        id="about"
        className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground md:py-36"
      >
        {/* Background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(var(--color-border) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Impact
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-5 max-w-4xl text-center text-balance text-4xl font-black leading-tight tracking-tight md:text-6xl"
          >
            Building a future where
            <span className="block bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              every woman rises with dignity.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-secondary-foreground/60"
          >
            Through education, menstrual hygiene awareness,
            healthcare initiatives, legal support, and community
            engagement, She Can Foundation works toward
            long-term social impact across India.
          </motion.p>

          {/* Stats */}
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/20 hover:bg-white/[0.07]"
              >
                {/* Glow */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-20 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-30`}
                />

                {/* Icon */}
                <div
                  className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} shadow-lg`}
                >
                  <s.icon className="h-5 w-5 text-white" />
                </div>

                {/* Number */}
                <div className="relative mt-8 text-5xl font-black tracking-tight md:text-6xl">
                  <Counter
                    to={s.value}
                    suffix={s.suffix}
                  />
                </div>

                {/* Title */}
                <div className="mt-3 text-lg font-bold">
                  {s.title}
                </div>

                {/* Subtitle */}
                <div className="mt-2 text-sm leading-relaxed text-secondary-foreground/55">
                  {s.subtitle}
                </div>

                {/* Bottom line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${s.gradient} transition-all duration-500 group-hover:w-full`}
                />
              </motion.div>
            ))}
          </div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-20 max-w-3xl rounded-[2rem] border border-primary/20 bg-primary/8 p-10 text-center backdrop-blur-sm"
          >
            <p className="text-xl font-semibold leading-relaxed md:text-2xl">
              “Empowerment is not a one-time event.
              It is consistent access to dignity,
              education, safety, and opportunity.”
            </p>

            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-secondary-foreground/45">
              She Can Foundation
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROMISES */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-rose-400/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Stand For
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight md:text-5xl">
              More than support.
              <span className="block bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
                We build lasting change.
              </span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-secondary/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-secondary/70"
              >
                {/* Top glow */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="text-3xl">
                    {p.emoji}
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}