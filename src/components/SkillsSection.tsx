const categories = [
  {
    title: "Programming",
    icon: "⌨️",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.22)",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.22)",
    skills: ["React", "HTML", "CSS", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#34D399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.22)",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "DevOps",
    icon: "🚢",
    color: "#F97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.22)",
    skills: ["Docker", "Kubernetes", "Prometheus", "Git", "GitHub"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-[1100px]">

      {/* Section header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">Expertise</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Skills &amp; Technologies
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl p-6 card-hover"
            style={{
              background: "#121212",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
              >
                {c.icon}
              </div>
              <h3 className="font-heading font-semibold text-sm text-white">
                {c.title}
              </h3>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {c.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    background: c.bg,
                    color: c.color,
                    border: `1px solid ${c.border}`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

