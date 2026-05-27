import { motion } from "framer-motion";
import { Shield, MessageCircle, Key, Heart, Scale, Sparkles } from "lucide-react";

// Directly import the precise group image asset you saved
import GROUP_IMAGE from "@/assets/impact-group.png";

const bottomPillIcons = [
  { icon: Shield, label: "Safety" },
  { icon: MessageCircle, label: "Voice" },
  { icon: Key, label: "Independence" },
  { icon: Heart, label: "Health" },
  { icon: Scale, label: "Legal" },
  { icon: Sparkles, label: "Dignity" },
];

export function ActionImpact() {
  return (
    <section className="bg-white w-full py-20 px-6 md:px-12 text-center select-none">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Top Minimal Narrative Subheading */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xs sm:text-[13px] text-gray-900 font-normal leading-relaxed tracking-normal">
            She Can! Foundation is a nationwide movement to solve the deepest 
            unsolved challenges of women at home, at work, on the streets, in the economy, 
            in society, and in aging.
          </p>
        </div>

        {/* Dynamic High-Contrast Serif Headings Block */}
        <div className="space-y-1">
          <h2 
            className="text-[38px] md:text-[52px] font-normal text-gray-900 tracking-tight leading-none"
            style={{ fontFamily: "'Playfair Display', Georgia, Cambria, serif" }}
          >
            Not theory. Not slogans.
          </h2>
          <h3 
            className="text-[36px] md:text-[48px] font-normal text-[#D59D82] tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, Cambria, serif" }}
          >
            Real help. Real impact. Real results.
          </h3>
        </div>

        {/* Centered Image Frame matching image_05b20c.png exactly */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-[2rem] shadow-sm aspect-[1.91/1]"
        >
          <img 
            src={GROUP_IMAGE} 
            alt="Empowered Indian Women Professionals representing fields of education, healthcare, engineering, and corporate leadership" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Segment Context Line Divider */}
        <div className="pt-2 max-w-md mx-auto">
          <p className="text-sm sm:text-base font-normal text-gray-900 tracking-tight leading-tight">
            75 years after independence,<br />
            countless women still live without
          </p>
        </div>

        {/* Replicated Thin Line Vector Icon Matrix */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-3xl mx-auto pt-4">
          {bottomPillIcons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="flex flex-col items-center space-y-3 cursor-pointer group"
              >
                {/* Custom round minimalist contour line containers matching the image mockup */}
                <div className="w-12 h-12 rounded-full border border-gray-300 bg-[#FAF7F2]/40 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:border-[#D59D82]/60 group-hover:shadow-sm">
                  <IconComponent 
                    size={22} 
                    className="text-gray-700 transition-colors duration-300 group-hover:text-[#D59D82]" 
                    strokeWidth={1.25} 
                  />
                </div>
                <span 
                  className="text-[13px] font-normal text-gray-900 tracking-wide"
                  style={{ fontFamily: "'Playfair Display', Georgia, Cambria, serif" }}
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}