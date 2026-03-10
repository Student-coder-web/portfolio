const projects = [
  {
    label: "AI Platform",
    labelStyle: {
      bg: "rgba(139,92,246,0.1)",
      color: "#A78BFA",
      border: "rgba(139,92,246,0.28)",
    },
    accentColor: "#8B5CF6",
    icon: "🚀",
    title: "CareerGenie",
    description:
      "AI-powered career assistant platform helping students with career guidance and resume insights.",
    stack: ["React", "Node.js", "AI APIs"],
    stackStyle: {
      bg: "rgba(139,92,246,0.08)",
      color: "#A78BFA",
      border: "rgba(139,92,246,0.22)",
    },
  },
  {
    label: "AI Chatbot",
    labelStyle: {
      bg: "rgba(96,165,250,0.1)",
      color: "#60A5FA",
      border: "rgba(96,165,250,0.28)",
    },
    accentColor: "#3B82F6",
    icon: "🤖",
    title: "Gemini Clone",
    description:
      "An AI chatbot inspired by Google Gemini using the Gemini API for intelligent responses.",
    stack: ["React", "Node.js", "Gemini API"],
    stackStyle: {
      bg: "rgba(59,130,246,0.08)",
      color: "#60A5FA",
      border: "rgba(59,130,246,0.22)",
    },
  },
  {
    label: "DevOps",
    labelStyle: {
      bg: "rgba(52,211,153,0.1)",
      color: "#34D399",
      border: "rgba(52,211,153,0.28)",
    },
    accentColor: "#10B981",
    icon: "⚡",
    title: "Kubernetes Monitoring Dashboard",
    description:
      "A monitoring system visualizing Kubernetes metrics using Prometheus and Grafana.",
    stack: ["Kubernetes", "Prometheus", "Grafana", "Node.js"],
    stackStyle: {
      bg: "rgba(16,185,129,0.08)",
      color: "#34D399",
      border: "rgba(16,185,129,0.22)",
    },
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-[1100px]">

      {/* Section header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3">Work</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
          Featured Projects
        </h2>
        <p className="max-w-xl mx-auto" style={{ color: "#A1A1AA" }}>
          A selection of projects built with a focus on real-world impact, clean
          architecture, and modern tech.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl p-7 card-hover flex flex-col"
            style={{
              background: "#121212",
              border: "1px solid rgba(255,255,255,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${p.accentColor}80, transparent)`,
              }}
            />

            {/* Card header */}
            <div className="flex items-start justify-between mb-5">
              <span className="text-3xl">{p.icon}</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: p.labelStyle.bg,
                  color: p.labelStyle.color,
                  border: `1px solid ${p.labelStyle.border}`,
                }}
              >
                {p.label}
              </span>
            </div>

            {/* Text */}
            <h3 className="font-heading font-semibold text-lg text-white mb-3">
              {p.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "#A1A1AA" }}
            >
              {p.description}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-lg font-medium"
                  style={{
                    background: p.stackStyle.bg,
                    color: p.stackStyle.color,
                    border: `1px solid ${p.stackStyle.border}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

