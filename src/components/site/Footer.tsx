import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Heart,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import logo from "@/assets/logo.jpeg";

const socials = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/_shecanfoundation_",
    label: "Instagram",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/shecanfoundation",
    label: "LinkedIn",
  },
];

const links = [
  "About",
  "Programs",
  "Stories",
  "Events",
  "Contact",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      {/* Gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#d6a58c]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#c68f74]/10 blur-3xl" />
      </div>

      {/* Main */}
      <div className="relative mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr_0.9fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="She Can Foundation"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <div className="text-xl font-black tracking-tight">
                  She Can Foundation
                </div>

                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  PAN India NGO
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Empowering women through education,
              healthcare, dignity, skills and opportunities
              across India.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-3">
              <a
                href="mailto:president@shecanfoundation.org"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#d6a58c]"
              >
                <Mail className="h-4 w-4 text-[#d6a58c]" />
                president@shecanfoundation.org
              </a>

              <a
                href="tel:+918283841830"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-[#d6a58c]"
              >
                <Phone className="h-4 w-4 text-[#d6a58c]" />
                +91 82838 41830
              </a>
            </div>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-[#d6a58c] hover:bg-[#d6a58c] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
              Quick Links
            </div>

            <ul className="mt-6 space-y-4">
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-[#d6a58c]"
                  >
                    <span className="h-px w-0 bg-[#d6a58c] transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d6a58c] to-[#b98267] p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                Support Women
              </div>

              <h3 className="mt-5 text-3xl font-black leading-tight">
                Small help. <br />
                Big impact.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Your contribution supports education,
                healthcare and dignity initiatives for women
                and girls across India.
              </p>

              {/* ONLY ONE DONATE BUTTON */}
              <a
                href="https://rzp.io/rzp/shecanfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#9f6f56] transition hover:scale-[1.03]"
              >
                Donate
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center text-[12px] text-white/40 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} She Can Foundation.
            All rights reserved.
          </div>

          <div className="inline-flex items-center justify-center gap-1.5">
            Built with
            <Heart className="h-3.5 w-3.5 fill-[#d6a58c] text-[#d6a58c]" />
            for women across India
          </div>
        </div>
      </div>
    </footer>
  );
}