import { motion } from "framer-motion";
import {
  Quote,
  ArrowUpRight,
} from "lucide-react";

const stories = [
  {
    name: "Priya Sharma",
    role: "Skill Development Program",
    quote:
      "The training helped me start my own tailoring business and support my family independently.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&q=80",
  },
  {
    name: "Anjali Devi",
    role: "Education Support",
    quote:
      "I became the first girl in my village to complete higher secondary education.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&q=80",
  },
  {
    name: "Reshma Khan",
    role: "Healthcare Initiative",
    quote:
      "The health workshops gave me confidence and awareness that changed my daily life.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&q=80",
  },
];

export function Stories() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden py-24 md:py-32 bg-[#05070E]"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-[#D59D82]/30 bg-[#D59D82]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D59D82]"
            >
              Success Stories
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-5 text-4xl font-normal leading-tight tracking-tight text-white md:text-5xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Real stories.
              <span className="block text-[#D59D82]">
                Real impact.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-md text-sm leading-relaxed text-gray-400"
          >
            Every woman we support carries a story of
            resilience, growth and hope for the future.
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {stories.map((story, index) => (
            <motion.article
              key={story.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D59D82]/30"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/4.2] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  loading="lazy"
                  className="h-full w-full object-cover brightness-90 transition duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-[#05070E]/20 to-transparent" />

                {/* Quote Icon */}
                <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#05070E]/80 shadow-lg backdrop-blur-sm border border-white/10">
                  <Quote className="h-5 w-5 text-[#D59D82]" />
                </div>
              </div>

              {/* Text Card Content */}
              <div className="p-7">
                <p className="text-sm leading-relaxed text-gray-300 italic font-light">
                  “{story.quote}”
                </p>

                <div className="mt-7 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {story.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium tracking-wide text-[#D59D82]/80 uppercase">
                      {story.role}
                    </p>
                  </div>

                  {/* High Contrast Arrow Trigger Button */}
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white/5 border border-white/10 text-[#D59D82] transition-all duration-300 group-hover:bg-[#D59D82] group-hover:text-[#05070E] group-hover:scale-105">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}