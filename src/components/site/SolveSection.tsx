import { motion } from "framer-motion";
import FREEDOM_GIRL from "@/assets/freedom girl.png";
import { BadgeCheck, Heart, Users, Globe } from "lucide-react";

const highlights = [
  { icon: BadgeCheck, title: "NITI Aayog Affiliated", desc: "Registered under NGO Darpan with full government recognition." },
  { icon: Heart, title: "Est. 2020", desc: "Founded with a mission to serve underprivileged women across India." },
  { icon: Users, title: "1,20,000+ Lives Touched", desc: "Real women, real stories, real change across 50+ cities." },
  { icon: Globe, title: "PAN-India Presence", desc: "Active in rural and urban communities from Kashmir to Kanyakumari." },
];

export function SolveSection() {
  return (
    // Modified background to your premium dark style #05070E
    <section id="about" className="bg-[#05070E] w-full py-24 px-6 sm:px-12 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Image Layer */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -bottom-5 -right-5 w-40 h-40 border-[3px] border-[#D59D82]/20 rounded-[2.5rem] pointer-events-none transform rotate-12 z-0" />
          <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src={FREEDOM_GIRL}
              alt="She Can Foundation — empowering women"
              className="w-full h-full object-cover object-center brightness-90"
            />
            {/* Bottom overlay with quote */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <p
                className="text-white text-lg font-normal leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "Every woman deserves a life of dignity, safety and freedom."
              </p>
              <p className="text-white/60 text-xs mt-2">— She Can! Foundation</p>
            </div>
          </div>
          {/* Top-right floating badge adjusted for dark theme contrast */}
          <div className="absolute -top-3 right-6 z-20 bg-[#05070E] px-4 py-2 rounded-full shadow-xl border border-white/10 text-xs font-semibold text-[#D59D82]">
            Since 2020 🇮🇳
          </div>
        </motion.div>

        {/* RIGHT — About content with updated high contrast typography */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-7"
        >
          {/* Section Label */}
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#D59D82]">
            About Us
          </span>

          {/* Headline updated to readable pure white */}
          <h2
            className="text-4xl md:text-[50px] font-normal text-white leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Who We Are &amp; <br />
            <span className="text-[#D59D82]">Why We Exist</span>
          </h2>

          <div className="w-14 h-px bg-[#D59D82]/50" />

          {/* Body text optimized with slate-silver readable values */}
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed max-w-lg">
            <p>
              <strong className="text-white">She Can! Foundation</strong> is a registered NGO under the Indian
              Society Registration Act of 1860, dedicated to uplifting underprivileged
              women through education, training, and essential resources.
            </p>
            <p>
              We believe every woman — regardless of her background, caste, religion
              or economic status — deserves access to dignity, healthcare, education
              and economic independence. We don't just donate; we build lasting systems
              of support that create real, measurable change.
            </p>
            <p>
              From free menstrual hygiene kits to vocational training, legal awareness
              caps to scholarship programs — our work touches every dimension of a
              woman's life.
            </p>
          </div>

          {/* Highlights grids transitioned into elegant dark translucent cards */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-sm shadow-md"
              >
                <h.icon className="h-5 w-5 text-[#D59D82] mb-2" strokeWidth={1.5} />
                <div className="text-xs font-bold text-white">{h.title}</div>
                <div className="text-xs text-gray-400 mt-1 leading-relaxed">{h.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex gap-3 pt-2">
            <a
              href="#contact"
              className="inline-block px-7 py-2.5 bg-[#D59D82] hover:bg-[#c68e73] text-[#05070E] font-bold rounded-full text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-md"
            >
              Get in Touch
            </a>
            <a
              href="#programs"
              className="inline-block px-7 py-2.5 border border-[#D59D82] text-[#D59D82] hover:bg-[#D59D82] hover:text-[#05070E] font-semibold rounded-full text-sm tracking-wide transition-all duration-200"
            >
              Our Programs
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}