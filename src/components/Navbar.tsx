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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 max-w-[1100px]">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="font-heading font-extrabold text-xl gradient-text"
        >
          AK
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-7">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{ color: "#71717A" }}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <div className="hidden md:block">
          <a
            href="/version.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.28)",
              color: "#A78BFA",
            }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "#71717A" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden animate-fade-in"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <ul className="flex flex-col items-center gap-5 py-8">
            {links.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className="text-sm font-medium transition-colors hover:text-white"
                  style={{ color: "#71717A" }}
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

