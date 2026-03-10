import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github,   href: "https://github.com/",    label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/",  label: "LinkedIn" },
  { icon: Mail,     href: "mailto:ajay@example.com", label: "Email" },
];

const Footer = () => (
  <footer
    className="py-10"
    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
  >
    <div className="container mx-auto px-6 max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-5">
      <span className="font-heading font-extrabold text-xl gradient-text">AK</span>

      <p className="text-sm text-center" style={{ color: "#52525B" }}>
        © {new Date().getFullYear()} Ajay Kumbhar — Crafted with precision.
      </p>

      <div className="flex items-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-white/[0.14]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#71717A",
            }}
          >
            <s.icon size={15} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

