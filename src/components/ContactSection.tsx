import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    sub: "ajay@example.com",
    href: "mailto:ajay@example.com",
    color: "#A78BFA",
    colorRaw: "139,92,246",
  },
  {
    icon: Github,
    label: "GitHub",
    sub: "github.com/ajay",
    href: "https://github.com/",
    color: "#E4E4E7",
    colorRaw: "228,228,231",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "linkedin.com/in/ajay",
    href: "https://linkedin.com/",
    color: "#60A5FA",
    colorRaw: "96,165,250",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-[1100px] text-center">
      <p className="section-label mb-3">Contact</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
        Get In Touch
      </h2>
      <p className="max-w-md mx-auto mb-14" style={{ color: "#A1A1AA" }}>
        Available for internships, collaborations, and full-time opportunities.
        Let's build something great together.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-2xl mx-auto">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-2xl px-6 py-5 flex items-center gap-4 card-hover text-left"
            style={{
              background: "#121212",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `rgba(${c.colorRaw},0.1)`,
                border: `1px solid rgba(${c.colorRaw},0.25)`,
              }}
            >
              <c.icon className="w-5 h-5" style={{ color: c.color }} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{c.label}</div>
              <div className="text-xs mt-0.5" style={{ color: "#52525B" }}>
                {c.sub}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

