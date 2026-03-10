const techs = [
  { name: "React",       dot: "#61DAFB" },
  { name: "Node.js",     dot: "#68A063" },
  { name: "Java",        dot: "#F89820" },
  { name: "Docker",      dot: "#2496ED" },
  { name: "Kubernetes",  dot: "#326CE5" },
  { name: "Prometheus",  dot: "#E6522C" },
  { name: "TailwindCSS", dot: "#06B6D4" },
];

const TechStackRow = () => (
  <section
    className="py-14"
    style={{
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}
  >
    <div className="container mx-auto px-6 max-w-[1100px]">
      <p
        className="text-center text-xs font-semibold uppercase tracking-[0.22em] mb-8"
        style={{ color: "#52525B" }}
      >
        Technologies I Work With
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {techs.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-white/[0.14] cursor-default"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "#D4D4D8",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: t.dot }}
            />
            {t.name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackRow;
