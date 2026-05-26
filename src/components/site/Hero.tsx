import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, MapPin } from "lucide-react";
import hero from "@/assets/hero-girl.jpg";
import logo from "@/assets/logo.jpeg";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 h-[420px] w-[420px] rounded-full bg-rose-400/20 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.95_0.06_50/0.5),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:grid-cols-2 md:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" /> Affiliated with NITI Aayog · PAN-India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Empowering every girl to{" "}
            <span className="bg-gradient-to-r from-primary via-rose-500 to-pink-500 bg-clip-text text-transparent">
              rise beyond limitations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg"
          >
            Supporting education, dignity, healthcare and financial independence for
            underprivileged women across India — one girl, one community, one rising story at a
            time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#donate"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition hover:scale-[1.03] hover:shadow-primary/50"
            >
              <Heart className="h-4 w-4 fill-current" /> Donate Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Become a Volunteer
            </a>
            <a
              href="#campaigns"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-sm font-semibold text-foreground/80 transition hover:text-primary"
            >
              Explore Campaigns <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Inline mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { v: 120000, s: "+", l: "Girls Supported" },
              { v: 500, s: "+", l: "Workshops" },
              { v: 50, s: "+", l: "Cities" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-foreground">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20">
            <img
              src={hero}
              alt="A young Indian girl smiling — symbol of the She Can Foundation mission"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
              <div className="text-xs uppercase tracking-widest opacity-80">Story #248</div>
              <div className="mt-1 text-xl font-semibold">"I dream of becoming a doctor."</div>
              <div className="mt-1 text-sm opacity-80">— Anjali, age 12 · Uttar Pradesh</div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-4 top-10 hidden items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-xl md:flex"
          >
            <img src={logo} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <div className="text-xs text-muted-foreground">Live impact</div>
              <div className="text-sm font-semibold">+₹4,250 donated · just now</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 bottom-24 hidden items-center gap-2 rounded-2xl border border-border px-4 py-3 shadow-xl md:flex"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Reach</div>
              <div className="text-sm font-semibold">50+ cities · PAN-India</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
