import { Instagram, Facebook, Twitter, Linkedin, Youtube, Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div aria-hidden className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_80%_0%,oklch(0.72_0.22_40/0.25),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40" />
            <div>
              <div className="text-base font-bold">She Can! Foundation</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/60">PAN-India NGO</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70">
            Empowering underprivileged women through education, health, skills and economic
            independence — across India.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/70">
            {["About", "Campaigns", "Programs", "Events", "Stories", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Get Involved</div>
          <ul className="mt-4 space-y-2.5 text-sm text-secondary-foreground/70">
            {["Donate", "Volunteer", "Internships", "Corporate CSR", "Partner with Us"].map((l) => (
              <li key={l}><a href="#donate" className="hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Stay in the loop</div>
          <p className="mt-3 text-sm text-secondary-foreground/70">Monthly impact updates, straight to your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-secondary-foreground/40 focus:border-primary"
            />
            <button className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-secondary-foreground/60">
          <div>© {new Date().getFullYear()} She Can! Foundation. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> for the women of India
          </div>
        </div>
      </div>
    </footer>
  );
}
