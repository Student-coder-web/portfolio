import { Github } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-48 w-[700px] h-[700px] rounded-full glow-purple pointer-events-none"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] rounded-full glow-pink pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.06) 0%, transparent 60%)"
      }} />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center py-20 lg:py-28">

          {/* ── Left Column ── */}
          <div className="space-y-7 opacity-0 animate-slide-left">

            {/* Status pill */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium w-fit"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.28)",
                color: "#A78BFA",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              Available for opportunities
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.15] tracking-tight">
              {/* Line 1 */}
              <span className="word-reveal" style={{ animationDelay: "0.15s" }}>
                <span className="gradient-text-animated">Building</span>
              </span>
              {" "}
              <span className="word-reveal" style={{ animationDelay: "0.30s" }}>
                <span className="gradient-text-animated">AI-Powered</span>
              </span>
              <br />
              {/* Line 2 */}
              <span className="word-reveal" style={{ animationDelay: "0.48s" }}>
                <span className="text-white">Applications</span>
              </span>
              {" "}
              <span className="word-reveal" style={{ animationDelay: "0.58s" }}>
                <span className="text-white">&amp;</span>
              </span>
              <br />
              {/* Line 3 */}
              <span className="word-reveal" style={{ animationDelay: "0.74s" }}>
                <span className="gradient-text-animated">Cloud-Native</span>
              </span>
              {" "}
              <span className="word-reveal" style={{ animationDelay: "0.90s" }}>
                <span className="gradient-text-animated">Systems</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg leading-relaxed max-w-[480px]"
              style={{ color: "#A1A1AA" }}
            >
              I am{" "}
              <span className="text-white font-semibold">Ajay Kumbhar</span>, a
              Computer Science Engineering student focused on full stack
              development, DevOps systems, and AI-powered platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <button
                onClick={() => scrollTo("projects")}
                className="gradient-btn px-7 py-3.5 rounded-xl font-heading font-semibold text-white text-sm"
              >
                View Projects →
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="outline-btn px-7 py-3.5 rounded-xl font-heading font-semibold text-white text-sm"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div
            className="relative opacity-0 animate-slide-right space-y-4"
            style={{ animationDelay: "0.25s" }}
          >
            {/* Code preview card */}
            <div
              className="glass rounded-2xl p-6 glass-hover animate-float"
              style={{ animationDelay: "0s", position: "relative", overflow: "hidden" }}
            >
              {/* Gradient top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: "linear-gradient(90deg, transparent, #8B5CF6, #EC4899, transparent)" }}
              />

              {/* Window chrome dots */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
                </div>
                <span
                  className="text-xs ml-2 font-mono-code"
                  style={{ color: "#6B7280" }}
                >
                  careergenie.tsx
                </span>
              </div>

              {/* Syntax-highlighted code */}
              <div className="font-mono-code space-y-1.5 leading-relaxed">
                <div>
                  <span style={{ color: "#8B5CF6" }}>const </span>
                  <span style={{ color: "#34D399" }}>CareerGenie </span>
                  <span style={{ color: "#9CA3AF" }}>= () =&gt; {"{"}</span>
                </div>
                <div className="pl-5">
                  <span style={{ color: "#EC4899" }}>return </span>
                  <span style={{ color: "#FBBF24" }}>&lt;AICareerPlatform</span>
                </div>
                <div className="pl-10">
                  <span style={{ color: "#60A5FA" }}>stack</span>
                  <span style={{ color: "#9CA3AF" }}>=</span>
                  <span style={{ color: "#F97316" }}>&#123;["React", "Node.js", "AI"]&#125;</span>
                </div>
                <div className="pl-10">
                  <span style={{ color: "#60A5FA" }}>model</span>
                  <span style={{ color: "#9CA3AF" }}>=</span>
                  <span style={{ color: "#34D399" }}>"gemini-pro"</span>
                </div>
                <div className="pl-5">
                  <span style={{ color: "#FBBF24" }}>/&gt;</span>
                </div>
                <div>
                  <span style={{ color: "#9CA3AF" }}>{"}"}</span>
                </div>
              </div>

              {/* Card footer */}
              <div
                className="mt-5 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-xs" style={{ color: "#6B7280" }}>
                  Featured Project
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(52,211,153,0.1)",
                    color: "#34D399",
                    border: "1px solid rgba(52,211,153,0.22)",
                  }}
                >
                  ● Live
                </span>
              </div>
            </div>

            {/* GitHub stats mini card */}
            <div
              className="glass rounded-xl p-4 glass-hover flex items-center gap-4"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.22)",
                }}
              >
                <Github className="w-5 h-5" style={{ color: "#A78BFA" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white">
                  GitHub Activity
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                  Active contributor · 3+ projects
                </div>
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-[3px] h-8 flex-shrink-0">
                {[30, 55, 38, 70, 50, 82, 60, 45, 74, 64].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-sm"
                    style={{
                      height: `${h * 0.35}px`,
                      background: i > 6 ? "#8B5CF6" : "rgba(139,92,246,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

