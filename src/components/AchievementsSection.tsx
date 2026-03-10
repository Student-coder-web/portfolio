import { Award, BookOpen, Users, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: BookOpen,
    iconColor: "#A78BFA",
    iconBg: "rgba(139,92,246,0.12)",
    iconBorder: "rgba(139,92,246,0.28)",
    accentColor: "#8B5CF6",
    title: "100xDevs Cohort 3",
    text: "Completed Full Stack Development and DevOps training from the 100xDevs Cohort 3 program.",
  },
  {
    icon: Award,
    iconColor: "#FB923C",
    iconBg: "rgba(249,115,22,0.12)",
    iconBorder: "rgba(249,115,22,0.28)",
    accentColor: "#F97316",
    title: "Zensar Technologies — Java Training",
    text: "Completed Java Training from Zensar Technologies focusing on core Java and object-oriented programming.",
  },
  {
    icon: Users,
    iconColor: "#34D399",
    iconBg: "rgba(52,211,153,0.12)",
    iconBorder: "rgba(52,211,153,0.28)",
    accentColor: "#10B981",
    title: "CSESA Coordinator",
    text: "Coordinator at CSESA (Computer Science Engineering Students Association) organizing technical events and hackathons.",
  },
  {
    icon: Lightbulb,
    iconColor: "#FBBF24",
    iconBg: "rgba(251,191,36,0.12)",
    iconBorder: "rgba(251,191,36,0.28)",
    accentColor: "#F59E0B",
    title: "Techathon Participant",
    text: "Participated in Techathon contributing innovative technical ideas and solutions in a competitive technology event.",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-[1100px]">

      {/* Section header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">Recognition</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Achievements
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="rounded-2xl p-7 card-hover flex gap-5"
            style={{
              background: "#121212",
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-5 bottom-5 w-[2px] rounded-full"
              style={{ background: a.accentColor }}
            />

            {/* Icon */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: a.iconBg,
                border: `1px solid ${a.iconBorder}`,
              }}
            >
              <a.icon className="w-5 h-5" style={{ color: a.iconColor }} />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-2">
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
                {a.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;

