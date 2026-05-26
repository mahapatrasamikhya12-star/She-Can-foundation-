import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { date: "12 JUN", title: "Menstrual Health Awareness Camp", place: "Lucknow, UP", tag: "Workshop" },
  { date: "28 JUN", title: "Tailoring Skill Drive — Cohort 7", place: "Pune, MH", tag: "Training" },
  { date: "10 JUL", title: "Rise Together — Fundraising Gala", place: "Mumbai, MH", tag: "Fundraiser" },
  { date: "22 JUL", title: "Back-to-School Distribution", place: "Patna, BR", tag: "Outreach" },
];

export function Events() {
  return (
    <section id="events" className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Upcoming Events</div>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">Join us on the ground</h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-rose-500 text-center text-primary-foreground">
                <div className="text-xs font-medium">{e.date.split(" ")[1]}</div>
                <div className="text-2xl font-bold leading-none">{e.date.split(" ")[0]}</div>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{e.tag}</span>
                <h3 className="mt-1 text-base font-semibold">{e.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> 2026</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.place}</span>
                </div>
              </div>
              <button className="hidden rounded-full border border-border px-4 py-2 text-xs font-semibold transition hover:border-primary hover:text-primary sm:inline-flex">
                RSVP
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
