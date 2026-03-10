import { Badge } from "@/components/ui/badge";

const categories = [
  { title: "Programming", skills: ["Java", "JavaScript", "Python"] },
  { title: "Frontend", skills: ["HTML", "CSS", "React", "TailwindCSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js"] },
  { title: "DevOps & Tools", skills: ["Docker", "Kubernetes", "Prometheus", "Git", "GitHub"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-heading font-bold text-3xl md:text-4xl gradient-text text-center mb-14">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {categories.map((c) => (
          <div key={c.title} className="glass rounded-2xl p-8">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">{c.title}</h3>
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <Badge
                  key={s}
                  className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
