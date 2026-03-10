const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full glow-purple animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full glow-pink animate-glow-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1
          className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl gradient-text mb-6 opacity-0 animate-fade-up"
        >
          Full Stack Developer | DevOps Enthusiast | AI Builder
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          I am <span className="text-foreground font-semibold">Ajay Kumbhar</span>, a Computer Science Engineering student passionate about building scalable web applications, AI-powered platforms, and cloud-native systems.
        </p>

        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          I enjoy solving real-world problems through technology and actively participate in hackathons, developer communities, and open-source innovation.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3 rounded-lg font-heading font-semibold text-foreground gradient-btn shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 rounded-lg font-heading font-semibold text-foreground border border-border hover:border-primary/50 transition-all hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
