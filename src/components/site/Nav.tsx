import { useState } from "react";
import { Menu, X } from "lucide-react";
import LOGO_IMG from "@/assets/logo.jpeg";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Stories", id: "stories" },
    { name: "Contact", id: "contact" },
  ];

  // Fail-safe manual scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Stop standard href jump
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#05070E]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/5">
            <img src={LOGO_IMG} alt="She Can Logo" className="h-full w-full object-cover" />
          </div>
          <div className="text-white font-extrabold text-xl tracking-wider font-serif">
            SHE CAN
          </div>
        </div>
        
        {/* Desktop Menu - Uses explicit handleScroll handler */}
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wider text-gray-300">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} 
              onClick={(e) => handleScroll(e, item.id)}
              className="hover:text-[#D59D82] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#05070E] p-5 border-t border-white/10 space-y-1 shadow-2xl">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} 
              onClick={(e) => handleScroll(e, item.id)}
              className="block py-4 px-3 text-sm font-medium text-gray-200 hover:text-[#D59D82] hover:bg-white/5 rounded-xl transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}