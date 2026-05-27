import { motion } from "framer-motion";
import { ShieldCheck, FileText, Award, BadgeCheck, Download, ArrowUpRight } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "NITI Aayog Verified", desc: "Registered under NGO Darpan with government-recognized compliance." },
  { icon: Award, title: "80G & 12A Certified", desc: "Eligible for tax-exempt donations under Indian regulations." },
  { icon: FileText, title: "Annual Reports", desc: "Financial reports and impact summaries published regularly." },
  { icon: BadgeCheck, title: "CSR Ready", desc: "Structured for partnerships with corporate CSR initiatives." },
];

const allocations = [
  { label: "Healthcare & Hygiene", value: "40%", width: "w-[40%]", color: "bg-orange-500" },
  { label: "Education Programs", value: "30%", width: "w-[30%]", color: "bg-pink-500" },
  { label: "Workshops & Outreach", value: "20%", width: "w-[20%]", color: "bg-amber-400" },
  { label: "Operational Support", value: "10%", width: "w-[10%]", color: "bg-violet-500" },
];

const reports = [
  { title: "Annual Impact Report 2024", size: "PDF · 12MB" },
  { title: "Menstrual Awareness Campaign", size: "PDF · 8MB" },
  { title: "Volunteer & Outreach Overview", size: "PDF · 6MB" },
];

export function Transparency() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Trust & Transparency</span>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight">Built on accountability, <span className="text-primary">measurable impact.</span></h2>
        </motion.div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {items.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="rounded-3xl border border-border bg-secondary/40 p-7">
                  <item.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="rounded-[2rem] border border-border bg-secondary/40 p-8">
              <h3 className="font-black text-xl mb-6">Fund Allocation</h3>
              {allocations.map((a) => (
                <div key={a.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-2"><span>{a.label}</span><span className="font-bold text-primary">{a.value}</span></div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: a.value }} className={`h-full ${a.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="rounded-[2rem] border border-border bg-secondary/40 p-8">
            <h3 className="text-3xl font-black mb-8">Public resources</h3>
            <div className="space-y-4">
              {reports.map((r, i) => (
                <div key={r.title} className="flex items-center justify-between p-5 rounded-2xl border bg-background/50 hover:border-primary/50 transition">
                  <div><div className="font-semibold">{r.title}</div><div className="text-xs text-muted-foreground">{r.size}</div></div>
                  <button className="p-3 rounded-full bg-primary/10 text-primary"><Download size={18} /></button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}