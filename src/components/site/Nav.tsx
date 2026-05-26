import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { ThemeToggle } from "./theme";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#campaigns", label: "Campaigns" },
  { href: "#programs", label: "Programs" },
  { href: "#stories", label: "Stories" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled ? "glass border-b border-border/60" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="She Can Foundation" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/40" />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">She Can!</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Foundation</div>
          </div>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-foreground/80 transition hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#donate"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-[1.03] hover:shadow-primary/50 md:inline-flex"
          >
            <Heart className="h-4 w-4 fill-current" /> Donate
          </a>
          <button
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Heart className="h-4 w-4 fill-current" /> Donate Now
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
