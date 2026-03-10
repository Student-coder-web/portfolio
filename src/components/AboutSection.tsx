const stats = [
  { label: "Projects Shipped", value: "3+",  color: "#8B5CF6" },
  { label: "Technologies",     value: "12+", color: "#06B6D4" },
  { label: "Certifications",   value: "2",   color: "#34D399" },
  { label: "Community Roles",  value: "1",   color: "#F97316" },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-[1100px]">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

        {/* Left — text */}
        <div>
          <p className="section-label mb-3">Who I Am</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            About Me
          </h2>
          <p
            className="text-lg leading-relaxed mb-5"
            style={{ color: "#A1A1AA" }}
          >
            Ajay Kumbhar is a Computer Science Engineering student with strong
            interests in Web Development, Artificial Intelligence, and DevOps
            technologies.
          </p>
          <p className="leading-relaxed" style={{ color: "#71717A" }}>
            He enjoys building real-world applications, experimenting with cloud
            technologies, and participating in hackathons and technical
            communities.
          </p>
        </div>

        {/* Right — stat grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-7 text-center card-hover"
              style={{
                background: "#121212",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="font-heading font-extrabold text-4xl mb-2"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "#71717A" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

