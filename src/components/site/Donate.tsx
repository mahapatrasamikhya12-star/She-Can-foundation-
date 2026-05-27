import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Shield,
  Check,
  Repeat,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const DONATE_BG =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop";

// Explicit array mapping slider steps to direct impact metrics
const sliderSteps = [
  { amount: 500, label: "₹500", text: "Supplies 5 girls with complete sustainable hygiene kits for a full month." },
  { amount: 1500, label: "₹1,500", text: "Equips 15 girls with core protection kits and immediate wellness mentorship." },
  { amount: 3000, label: "₹3,000", text: "Funds an on-ground menstrual awareness workshop for an entire school section." },
  { amount: 5000, label: "₹5,000", text: "Enables 25 girls to stay safely in school with full protective resource channels." },
  { amount: 10000, label: "₹10,000", text: "Sponsors a complete institutional learning initiative and village infrastructure setup." },
  { amount: 15000, label: "₹15,000", text: "Drives a deep regional community outreach campaign and distribution network." }
];

const stats = [
  { value: "1,20,000+", label: "Girls Supported" },
  { value: "50+", label: "Cities Reached" },
  { value: "500+", label: "Workshops Conducted" },
];

const trustBadges = [
  { icon: Shield, text: "100% Secure Payments via Verified Portal" },
  { icon: FileText, text: "80G Indian Tax Benefits Deduction Approved" },
  { icon: Repeat, text: "Real-time Audited Impact Operational Reports" },
];

export function Donate() {
  const [stepIndex, setStepIndex] = useState(1); // Defaults to ₹1,500
  const [type, setType] = useState<"once" | "monthly">("once");

  const currentSelection = sliderSteps[stepIndex];
  const RAZORPAY_URL = "https://rzp.io/rzp/shecanfoundation";

  return (
    <section id="donate" className="relative overflow-hidden">
      {/* Premium Dark Glass Layout Background Wrapper */}
      <div className="absolute inset-0 -z-10">
        <img
          src={DONATE_BG}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center md:py-36">
        
        {/* LEFT BRAND VALUE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-white space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/90 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Empowering Structural Change
          </div>

          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl font-editorial">
            Her period <br />
            <span className="bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300 bg-clip-text text-transparent">
              should never
            </span> <br />
            end her education.
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-gray-400 font-normal">
            Millions of girls across regional ecosystems face immediate educational barriers due to a lack of hygienic safety structures. Your involvement funds physical distribution channels, verified medical advocacy, and systemic socio-economic elevation.
          </p>

          {/* Core Verified NGO Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-white tracking-tight md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-500 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Secure Trust Badging */}
          <div className="space-y-3.5 pt-4 border-t border-white/10">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
                  <Icon className="h-3.5 w-3.5 text-amber-300" />
                </span>
                <span className="text-xs text-gray-300 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* INTERACTIVE SIMULATOR CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gray-200/50 bg-white p-8 shadow-2xl dark:border-gray-800/80 dark:bg-gray-900/95 backdrop-blur-xl md:p-10"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Live Impact Engine
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Simulate Your Footprint
            </h3>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Drag the interactive controller below to view exactly how your allocation constructs real socio-economic transformation.
            </p>
          </div>

          {/* Once / Monthly Segmented Toggle */}
          <div className="mt-8 flex rounded-xl bg-gray-100 p-1 text-xs font-bold dark:bg-gray-800/60">
            {(["once", "monthly"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`flex-1 rounded-lg py-2.5 transition-all duration-300 ${
                  type === t
                    ? "bg-white text-gray-900 shadow-md dark:bg-gray-900 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {t === "once" ? "One-Time Contribution" : "Monthly Operational Support"}
              </button>
            ))}
          </div>

          {/* THE METRIC SLIDER ENGINE */}
          <div className="mt-8 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target Contribution</span>
              <span className="text-4xl font-black tracking-tight text-primary font-mono">
                ₹{currentSelection.amount.toLocaleString("en-IN")}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={sliderSteps.length - 1}
              step="1"
              value={stepIndex}
              onChange={(e) => setStepIndex(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer accent-primary"
            />
            
            <div className="flex justify-between text-[10px] font-bold text-gray-400 px-1">
              {sliderSteps.map((s, idx) => (
                <span 
                  key={s.amount} 
                  onClick={() => setStepIndex(idx)}
                  className={`cursor-pointer transition-colors ${idx === stepIndex ? "text-primary font-black" : "hover:text-gray-600"}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Dynamic Real-time Impact Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-8 rounded-2xl border border-primary/10 bg-primary/[0.03] p-5 dark:bg-primary/[0.01]"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-base shadow-sm">
                  🎯
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Direct Micro-Impact Statement
                  </div>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    {currentSelection.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action Call Button */}
          <a
            href={RAZORPAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/30"
          >
            <Heart className="h-4 w-4 fill-current" />
            Proceed to Secure Gateway (₹{currentSelection.amount.toLocaleString("en-IN")})
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-5 flex items-center justify-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-t border-gray-100 dark:border-gray-800/60 pt-4">
            <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> Razorpay</span>
            <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> Instant Receipt</span>
            <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> 80G Certified</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}