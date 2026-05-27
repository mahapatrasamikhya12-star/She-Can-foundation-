import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, ArrowRight, Instagram, Linkedin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-[#05070E] py-24 md:py-36">
      
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-14 md:grid-cols-2 items-center">

          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block rounded-full border border-[#D59D82]/40 bg-[#D59D82]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D59D82]">
              Contact Us
            </span>
            
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl font-serif">
              Let's build the{" "}
              <span className="text-[#D59D82]">rise</span>{" "}
              together.
            </h2>
            
            <p className="mt-5 max-w-md text-sm text-gray-400 leading-relaxed">
              Partnerships, volunteering, CSR or simply need help — we're here for you.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                { Icon: Mail, text: "president@shecanfoundation.org", label: "Email", href: "mailto:president@shecanfoundation.org" },
                { Icon: Phone, text: "+91-8283841830", label: "Phone", href: "tel:+918283841830" },
                { Icon: MapPin, text: "PAN-India presence", label: "Location", href: null },
              ].map(({ Icon, text, label, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D59D82]/10 border border-[#D59D82]/20">
                    <Icon className="h-5 w-5 text-[#D59D82]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-white transition hover:text-[#D59D82]">{text}</a>
                    ) : (
                      <div className="text-sm font-medium text-white">{text}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Follow Us</div>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/_shecanfoundation_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-[#D59D82] hover:text-[#D59D82]">
                  <Instagram className="h-3.5 w-3.5 text-[#D59D82]" /> @_shecanfoundation_
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - FORM */}
          <motion.form
            id="volunteer"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            // 1. ADDED THESE ATTRIBUTES FOR FUNCTIONALITY
            action="https://formspree.io/f/YOUR_FORMSPREE_ID_HERE"
            method="POST"
            onSubmit={() => setSent(true)}
            className="rounded-3xl bg-white p-8 shadow-2xl md:p-10"
          >
            <h3 className="text-xl font-bold text-gray-900">Send a message</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your Name" name="name" />
              <Field label="Email Address" name="email" type="email" />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-4">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Message</label>
              <textarea name="message" required rows={4} className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#FBF6F0]/40 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#D59D82] resize-none" placeholder="Tell us how we can help..." />
            </div>

            <button
              type="submit"
              disabled={sent}
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-white shadow-lg transition ${
                sent ? "bg-emerald-500" : "bg-[#D59D82] hover:bg-[#c68e73]"
              }`}
            >
              {sent ? <><Check className="h-4 w-4" /> Sent — we'll reply soon!</> : <><Send className="h-4 w-4" /> Send Message</>}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{label}</label>
      <input required type={type} name={name} className="mt-2 w-full rounded-2xl border border-gray-200 bg-[#FBF6F0]/40 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#D59D82]" />
    </div>
  );
}