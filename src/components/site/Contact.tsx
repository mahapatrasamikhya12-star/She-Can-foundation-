import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</div>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">Let's build the rise together</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Partnerships, volunteering, CSR or just to say hello — we'd love to hear from you.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@shecanfoundation.org</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> New Delhi · PAN-India presence</li>
            </ul>
          </div>

          <motion.form
            id="volunteer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.01]"
            >
              {sent ? <><Check className="h-4 w-4" /> Sent — we'll reply soon</> : <><Send className="h-4 w-4" /> Send message</>}
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
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
