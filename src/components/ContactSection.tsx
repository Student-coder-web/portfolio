import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", href: "mailto:ajay@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
];

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-6">Get In Touch</h2>
      <p className="text-muted-foreground mb-12">
        Feel free to reach out for collaborations, opportunities, or just a friendly hello!
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl px-8 py-5 flex items-center gap-3 hover:border-primary/40 hover:scale-105 transition-all duration-300 group"
          >
            <c.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-foreground font-medium">{c.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
