import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Check } from "lucide-react";

const amounts = [300, 750, 1500, 3000, 5000, 10000];
const impacts: Record<number, string> = {
  300: "Dignity kits for 3 girls",
  750: "Tuition for a girl for 1 month",
  1500: "Educational support kit",
  3000: "Vocational training starter pack",
  5000: "Full workshop sponsorship",
  10000: "Sponsor a girl for a year",
};

export function Donate() {
  const [amt, setAmt] = useState(1500);
  const [type, setType] = useState<"once" | "monthly">("once");

  return (
    <section id="donate" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 gradient-warm opacity-95" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(1_0_0/0.25),transparent_50%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div className="text-white">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Donate</div>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
            Your ₹1,500 sends a girl back to school
          </h2>
          <p className="mt-5 max-w-md text-white/85">
            Every rupee is tracked, audited and converted into measurable impact. 80G tax receipts
            are issued automatically.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/90">
            {["100% secure UPI / card / netbanking", "Tax-deductible under 80G", "Quarterly impact report"].map((x) => (
              <li key={x} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {x}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur md:p-8 dark:bg-card"
        >
          <div className="flex rounded-full bg-muted p-1 text-sm font-semibold">
            {(["once", "monthly"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`flex-1 rounded-full px-4 py-2 transition ${
                  type === t ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground"
                }`}
              >
                {t === "once" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2.5">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => setAmt(a)}
                className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                  amt === a
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                ₹{a.toLocaleString("en-IN")}
              </button>
            ))}
          </div>

          <div className="mt-5">
            <label className="text-xs font-medium text-muted-foreground">Or enter a custom amount</label>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3">
              <span className="text-muted-foreground">₹</span>
              <input
                type="number"
                value={amt}
                onChange={(e) => setAmt(Number(e.target.value) || 0)}
                className="w-full bg-transparent text-base font-semibold outline-none"
              />
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-accent/50 p-4 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Your impact
            </div>
            <div className="mt-1 font-medium">
              {impacts[amt] ?? "Helps support our ongoing programs"}
            </div>
          </div>

          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-[1.01]">
            <Heart className="h-4 w-4 fill-current" />
            Donate ₹{amt.toLocaleString("en-IN")} {type === "monthly" ? "monthly" : "now"}
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Powered by secure UPI / Razorpay · Anonymous donations supported
          </p>
        </motion.div>
      </div>
    </section>
  );
}
