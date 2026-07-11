import { useState } from "react";

const projects = [
  {
    title: "Project Placeholder 01",
    description:
      "Add a short description of the project, its problem statement, and the outcome here.",
    tags: ["React", "UI", "Placeholder"],
  },
  {
    title: "Project Placeholder 02",
    description:
      "Use this card for another showcase project once the final details are ready.",
    tags: ["Frontend", "API", "Placeholder"],
  },
  {
    title: "Project Placeholder 03",
    description:
      "This area can hold a future product, client work, or experimental build.",
    tags: ["Design", "Build", "Placeholder"],
  },
  {
    title: "Project Placeholder 04",
    description:
      "Keep this slot open for a fourth case study, demo, or portfolio highlight.",
    tags: ["Case Study", "Portfolio", "Placeholder"],
  },
];
export const Projects = () => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 35, visible: false });

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden isolate"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
          visible: true,
        });
      }}
      onPointerLeave={() =>
        setSpotlight((current) => ({ ...current, visible: false }))
      }
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          backgroundImage: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(32, 178, 166, 0.16), transparent 32%)`,
        }}
      />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"
        style={{ animation: "slow-drift 18s ease-in-out infinite" }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Projects
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Placeholder projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            These cards are temporary placeholders. Replace them with finished
            project summaries, visuals, and links when the portfolio content is
            ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group glass rounded-3xl overflow-hidden border border-border/40 animate-fade-in transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_24px_80px_rgba(32,178,166,0.16)]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/20 via-surface to-highlight/20 flex items-center justify-center">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
                <div className="w-20 h-20 rounded-2xl border border-dashed border-primary/50 bg-background/40 flex items-center justify-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Soon
                </div>
              </div>
              <div className="p-6 space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary-foreground">
                    Placeholder
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
