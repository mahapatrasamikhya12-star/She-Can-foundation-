import { motion } from "framer-motion";
import { ShieldCheck, FileText, Award, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, t: "NITI Aayog Verified", d: "Registered on NGO Darpan portal" },
  { icon: Award, t: "80G & 12A Certified", d: "Tax-exempt donations in India" },
  { icon: FileText, t: "Annual Reports", d: "Audited financials published yearly" },
  { icon: BadgeCheck, t: "CSR Compliant", d: "Trusted partner of leading corporates" },
];

export function Transparency() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Trust & Transparency</div>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
              Built on accountability you can verify
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Every donation is traceable. Every program is reported. Every rupee is audited. Our
              commitment to transparency is what allows us to keep growing impact.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
              Download annual report
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {items.map((i, idx) => (
              <motion.div
                key={i.t}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <i.icon className="h-7 w-7 text-primary" />
                <div className="mt-3 text-sm font-semibold">{i.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{i.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
