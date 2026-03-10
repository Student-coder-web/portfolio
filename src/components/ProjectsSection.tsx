import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "CareerGenie",
    description:
      "An AI-powered career guidance platform that helps students receive career recommendations, resume suggestions, and job insights using intelligent analysis.",
    stack: ["React", "Node.js", "AI APIs"],
  },
  {
    title: "Gemini Clone",
    description:
      "A full-stack AI chatbot inspired by Google Gemini that uses the Gemini API to generate intelligent responses and assist users with queries.",
    stack: ["React", "Node.js", "Gemini API"],
  },
  {
    title: "Kubernetes Monitoring Dashboard",
    description:
      "A real-time monitoring dashboard that visualizes Kubernetes cluster metrics using Prometheus and Grafana to track system performance and infrastructure health.",
    stack: ["Kubernetes", "Prometheus", "Grafana", "Node.js"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl gradient-text text-center mb-14">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass rounded-2xl p-8 group hover:border-primary/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10"
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs bg-secondary/80 text-muted-foreground border-border/50">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
