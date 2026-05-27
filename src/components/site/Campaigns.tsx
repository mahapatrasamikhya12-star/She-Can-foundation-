import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

// Importing your assets
import workImg from "@/assets/workfromhome.jpeg";
import doctorImg from "@/assets/doctor.jpeg";
import eduImg from "@/assets/study.jpeg"; // Assuming 'study' maps to education
import defenceImg from "@/assets/defence.jpeg";
import lawImg from "@/assets/law.jpeg";
import elderlyImg from "@/assets/elderly.jpeg";

const campaigns = [
  { img: workImg, tag: "Employment", title: "Work-from-Home Program", desc: "Handicraft, packaging, and digital support." },
  { img: doctorImg, tag: "Healthcare", title: "Women's Healthcare", desc: "Physiotherapy, gynecology, and wellness." },
  { img: eduImg, tag: "Education", title: "Education for Dreams", desc: "College programs, skill courses, and diplomas." },
  { img: defenceImg, tag: "Protection", title: "24h Protection Support", desc: "Emergency assistance and police coordination." },
  { img: lawImg, tag: "Legal", title: "Legal Assistance", desc: "Domestic violence, abuse, and harassment support." },
  { img: elderlyImg, tag: "Elderly", title: "Dignified Living", desc: "Residential homes and health check-ups." },
];

export function Campaigns() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-4xl font-black mb-12">Six ways we stand beside Everywoman.</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group rounded-3xl border border-gray-100 bg-gray-50 p-4 hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/5] mb-4 rounded-2xl overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase">{c.tag}</span>
              </div>
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}