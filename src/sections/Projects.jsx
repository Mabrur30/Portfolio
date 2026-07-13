import { useState } from "react";

const projects = [
  {
    title: "Civil Hub",
    description:
      "CivilHub is a full-stack web platform designed to connect civil engineers, contractors, and clients across Bangladesh.Built with React, TypeScript, Node.js, and MongoDB, it serves as a complete ecosystem for project collaboration, including features for project management, real-time tracking, and professional networking within the civil engineering industry.",
    tags: ["React", "UI", "Nodejs"],
    image: "/projects/project1.png",
  },
  {
    title: "Surjo",
    description:
      "Surjo is an AI-powered adaptive weekly planner built with Python, Flask, and the OpenAI API. It creates personalized schedules based on users' goals, priorities, and availability while dynamically adapting plans as tasks and routines change. The platform helps users stay organized, improve productivity, and make smarter time-management decisions through intelligent AI-powered recommendations.",
    tags: ["Python", "Flask", "Open AI API"],
    image: "/projects/project2.png",
    demoUrl: "https://surjo-xi.vercel.app",
  },
  {
    title: "Probin Nibash",
    description:
      "Probin Nibash is a web platform designed to connect elderly individuals with caregivers, nursing services, and support networks in Bangladesh. It serves as a comprehensive solution for elderly care, enabling families to find reliable caregivers, book services, and ensure the well-being of senior citizens through easy access to care-related resources.",
    tags: ["React", "Nodejs", "MongoDB"],
    image: "/projects/project3.png",
    demoUrl: "https://github.com/Mabrur30/Probin-nibash",
  },
  {
    title: "EEE Hardware Management System",
    description:
      "EEE Hardware Management System is a full-stack inventory and booking platform designed for the Electrical and Electronic Engineering (EEE) department. It enables students and faculty to efficiently manage hardware equipment, track real-time availability, make bookings, and view usage history through a clean admin dashboard.",
    tags: ["React", "Nodejs", "Expressjs"],
    image: "/projects/project4.png",
    demoUrl: "https://github.com/Mabrur30/Soft_Project",
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
            Selected projects
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
              <div className="relative h-44 overflow-hidden bg-linear-to-br from-primary/20 via-surface to-highlight/20">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary-foreground">
                    Featured project
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/15"
                      >
                        Live demo
                      </a>
                    ) : null}
                  </div>
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
