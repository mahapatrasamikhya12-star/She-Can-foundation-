import { motion } from "framer-motion";
import { BookOpen, Droplets, Briefcase, Stethoscope, Crown, HeartHandshake } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "Education", desc: "Scholarships, school kits and after-school learning hubs in rural communities." },
  { icon: Droplets, title: "Menstrual Health", desc: "Dignity kits, awareness workshops and breaking the silence around periods." },
  { icon: Briefcase, title: "Skill Development", desc: "Vocational training, micro-entrepreneurship and career restart programs." },
  { icon: Stethoscope, title: "Healthcare Access", desc: "Maternal health camps, nutrition and on-ground medical outreach." },
  { icon: Crown, title: "Leadership", desc: "Mentorship and leadership labs preparing young women to lead change." },
  { icon: HeartHandshake, title: "Economic Empowerment", desc: "Financial literacy and SHG-based livelihood support for women." },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Programs</div>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">Six pillars of empowerment</h2>
          <p className="mt-4 text-muted-foreground">
            Holistic support that meets women where they are — from the classroom to the workplace.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
