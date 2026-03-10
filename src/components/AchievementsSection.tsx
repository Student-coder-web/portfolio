import { Award, BookOpen, Users, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    text: "Completed Full Stack Development and DevOps training from the 100xDevs Cohort 3 program with practical experience building modern web applications and deploying scalable systems.",
  },
  {
    icon: Award,
    text: "Completed Java Training from Zensar Technologies focusing on core Java programming and object-oriented design.",
  },
  {
    icon: Users,
    text: "Coordinator at CSESA (Computer Science Engineering Students Association) organizing technical events, coding competitions, and national-level hackathons.",
  },
  {
    icon: Lightbulb,
    text: "Participated in Techathon contributing innovative technical ideas and solutions in a competitive technology event.",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-heading font-bold text-3xl md:text-4xl gradient-text text-center mb-14">Achievements</h2>
      <div className="space-y-6">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 md:p-8 flex gap-5 items-start hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-muted-foreground leading-relaxed">{a.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
