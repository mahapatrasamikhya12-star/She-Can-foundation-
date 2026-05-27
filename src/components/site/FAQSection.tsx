import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  { q: "Who can apply for help?", a: "Any woman in need of support, regardless of her background or circumstances, can reach out to us." },
  { q: "Is the support free?", a: "Yes. Every service, program, and assistance offered by She Can Foundation is completely free for women." },
  { q: "What kind of help can I get?", a: "We provide comprehensive support ranging from emergency intervention to long-term educational and financial assistance." },
  { q: "How quickly can a woman get emergency help?", a: "We prioritize emergency cases and strive to provide immediate support via our trusted network of partners." },
  { q: "Do you offer financial assistance directly?", a: "Yes, we facilitate micro-grants and financial aid for women striving for independence." },
  { q: "Do you work with the police and NGOs?", a: "We maintain a robust network of trusted legal, medical, and NGO partners to ensure comprehensive protection." },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    // Changed background color to solid white with clear padding variables
    <section className="bg-white py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* HEADING COLUMN */}
        <div className="lg:col-span-5">
          <h2 
            className="text-5xl md:text-6xl font-normal text-[#D59D82] leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Frequently <br /> Asked Questions
          </h2>
        </div>

        {/* ACCORDION COLUMN */}
        <div className="lg:col-span-7 space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            // Swapped dark line separators for high-contrast slate lines
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                {/* Text transitions into charcoal on normal states, and accent tint on selection */}
                <span className={`text-xl font-medium transition-colors ${activeIndex === index ? 'text-[#D59D82]' : 'text-gray-900 group-hover:text-[#D59D82]'}`}>
                  {item.q}
                </span>
                {activeIndex === index ? (
                  <Minus size={20} className="text-[#D59D82] shrink-0" />
                ) : (
                  <Plus size={20} className="text-gray-400 group-hover:text-gray-600 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {/* Content text adjusted to a readable dark grey layout format */}
                    <p className="pb-8 text-gray-600 text-base leading-relaxed max-w-lg">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}