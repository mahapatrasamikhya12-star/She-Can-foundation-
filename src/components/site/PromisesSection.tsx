import { motion } from "framer-motion";
import FREEDOM_GIRL from "../../assets/freedom girl2.png";

const PROMISES = [
  { title: "Promise of Safety", description: "Every woman will have someone to turn to anytime. Safety is your right." },
  { title: "Promise of Dignity", description: "We uphold your respect and worth in all areas. Dignity is non-negotiable." },
  { title: "Promise of Independence", description: "We help you build a life where your voice and choices are yours." },
  { title: "Promise of Support Without Judgment", description: "We promise a safe space where every woman is heard with respect." },
  { title: "Promise of Opportunity", description: "We provide access to learning and work opportunities for your future." },
  { title: "Promise of Protection & Action", description: "We ensure quick support in crises—legal, emotional, medical, or emergency via trusted partners." },
  { title: "Promise of Care for Every Stage of Life", description: "We promise lifelong support for women at every stage of life." },
];

export function PromisesSection() {
  return (
    // Updated to deep navy background color from image_0812c2.png
    <section className="bg-[#05070E] w-full py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* IMAGE COLUMN: Increased column span to lg:col-span-6 for a larger photo */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src={FREEDOM_GIRL} 
              alt="Freedom Illustration" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div className="lg:col-span-6 space-y-12">
          <div className="max-w-xl text-left">
            <h2 
              className="text-4xl md:text-[54px] font-normal tracking-tight leading-[1.12]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="text-gray-100">Our </span>
              <span className="text-[#D59D82]">Promises </span>
              <span className="text-gray-100">to </span><br />
              <span className="text-[#D59D82]">Every Woman </span>
              <span className="text-gray-100">We </span><br />
              <span className="text-gray-100">Stand For.</span>
            </h2>
          </div>

          <div className="space-y-8 text-left max-w-xl">
            {PROMISES.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="border-b border-white/10 pb-6 last:border-0 last:pb-0 group"
              >
                <h3 
                  className="text-xl md:text-2xl font-normal text-gray-200 tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#D59D82]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {promise.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-normal">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}