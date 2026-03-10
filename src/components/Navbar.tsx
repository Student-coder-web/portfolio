import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Projects", "Skills", "Achievements", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("home")} className="font-heading font-bold text-xl gradient-text">
          AK
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border/30 animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
