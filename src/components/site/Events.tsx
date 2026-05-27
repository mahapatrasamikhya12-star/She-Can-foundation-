import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const events = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    date: "12 June 2026",
    title: "Women Health Awareness Camp",
    location: "Lucknow, Uttar Pradesh",
    desc: "Interactive healthcare sessions and free hygiene kit distribution for women and girls.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80",
    date: "28 June 2026",
    title: "Skill Development Workshop",
    location: "Pune, Maharashtra",
    desc: "Hands-on tailoring and entrepreneurship training for rural women.",
  },
];

export function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#faf7f4]" />

      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-[#d6a58c]/30 bg-[#d6a58c]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b98267]"
            >
              Upcoming Events
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#161616] md:text-5xl"
            >
              Join our
              <span className="block text-[#b98267]">
                community initiatives.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-md text-sm leading-relaxed text-[#666]"
          >
            Participate in workshops, outreach programs
            and awareness campaigns happening across India.
          </motion.p>
        </div>

        {/* Event Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Date */}
                <div className="absolute left-5 top-5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[#666]">
                    <CalendarDays className="h-3.5 w-3.5 text-[#b98267]" />
                    Event
                  </div>

                  <div className="mt-1 text-sm font-bold text-[#161616]">
                    {event.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold leading-snug text-[#161616]">
                      {event.title}
                    </h3>

                    <div className="mt-3 inline-flex items-center gap-2 text-sm text-[#777]">
                      <MapPin className="h-4 w-4 text-[#b98267]" />
                      {event.location}
                    </div>
                  </div>

                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f7f1ec] text-[#b98267] transition group-hover:bg-[#b98267] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#666]">
                  {event.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}