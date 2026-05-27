import { motion } from "framer-motion";
import HERO_IMAGE from "@/assets/image_05414a.png";

export function Hero() {
  return (
    <section
      id="home"
      // CHANGED: Adjusted height scaling to prevent stretching and match the reference site height layout exactly
      className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] max-h-[720px] min-h-[520px] flex items-center justify-start overflow-hidden bg-[#05070E]"
    >
      {/* Background Image — full bleed like Naari Shakti */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="She Can Foundation Movement"
          className="w-full h-full object-cover object-[center_20%]"
        />
        {/* Light left overlay only — keep right side of image bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content — upper left, just like Naari Shakti */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        <div className="max-w-xl space-y-4 pt-4">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-[58px] font-normal text-white leading-[1.08] tracking-tight select-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            A Freedom <br />
            Movement for Women.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/85 text-sm font-normal max-w-sm leading-relaxed"
          >
            We stand beside women to protect, empower, dignify, educate, and uplift.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href="#contact"
              className="px-7 py-2.5 bg-[#D59D82] hover:bg-[#c68e73] text-gray-900 font-semibold rounded-full text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-md"
            >
              Apply for help
            </a>
            <a
              href="#contact"
              className="px-7 py-2.5 bg-white/90 hover:bg-white text-gray-900 font-semibold rounded-full text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-md"
            >
              Contact Us
            </a>
          </motion.div>

        </div>
      </div>

      {/* Dot indicators bottom left */}
      <div className="absolute bottom-6 left-6 sm:left-12 md:left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-white cursor-pointer" />
        <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300 cursor-pointer" />
      </div>
    </section>
  );
}