import { motion } from "framer-motion";
import { BookOpen, HeartPulse, Briefcase, Scale, Heart, PawPrint } from "lucide-react";

// Asset imports
import EDU_IMG from "@/assets/campaign-education.jpg";
import HEALTH_IMG from "@/assets/doctor.jpeg";
import SKILLS_IMG from "@/assets/campaign-skills.jpg";
import LAW_IMG from "@/assets/law.jpeg";
import ELDERLY_IMG from "@/assets/elderly.jpeg";
// Ensuring we use the correct filename structure with the space if not renamed yet
import FEEDING_IMG from "@/assets/feeding .jpeg"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const programs = [
  { icon: Briefcase, title: "Work-from-Home Employment Program", tags: ["Handicraft", "Packaging", "Digital support", "& more"], image: SKILLS_IMG },
  { icon: HeartPulse, title: "Women's Healthcare & Hygiene", tags: ["Physiotherapy", "gynecology", "mental wellness support", "& more"], image: HEALTH_IMG },
  { icon: BookOpen, title: "Education for Interrupted Dreams", tags: ["College Programs", "Skill Courses", "Diplomas", "& more"], image: EDU_IMG },
  
  // 1. Replaced Defense right here with your new Feeding card
  { icon: PawPrint, title: "Street Animal Feeding & Care", tags: ["Daily Feeding", "Stray Welfare", "Medical Camps", "Compassion"], image: FEEDING_IMG },
  
  // 2. Legal Assistance remains perfectly intact
  { icon: Scale, title: "Legal Assistance for Women", tags: ["Domestic violence", "Abuse", "Harassment", "& more"], image: LAW_IMG },
  
  { icon: Heart, title: "Dignified Living for Elder Women", tags: ["Residential Homes", "Health Check-ups", "Community Activities", "& more"], image: ELDERLY_IMG },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-24 bg-[#05070E]">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-16"
        >
          <h2 className="text-5xl font-serif text-[#d6a58c] leading-tight">
            Six ways <span className="text-white">we stand</span><br />
            <span className="text-white">beside </span>Every life.
          </h2>
        </motion.div>

        {/* Program Grid */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program) => (
            <motion.article 
              key={program.title} 
              variants={itemVariants} 
              className="group overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d6a58c]/30 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#05070E] via-[#05070E]/70 to-transparent" />
                <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#05070E]/80 backdrop-blur-md border border-white/10 shadow-lg">
                  <program.icon className="h-6 w-6 text-[#d6a58c]" />
                </div>
              </div>
              
              <div className="p-7">
                <h3 className="text-xl font-bold text-white tracking-wide leading-snug">{program.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full bg-[#d6a58c]/10 border border-[#d6a58c]/20 px-3 py-1 text-xs font-medium text-[#d6a58c] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}