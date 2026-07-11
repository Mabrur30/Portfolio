import { useState } from "react";

const experienceItems = [
  {
    year: "2026",
    title: "Experience placeholder",
    description:
      "Add your most recent role, internship, freelance work, or major responsibility here.",
  },
  {
    year: "2025",
    title: "Experience placeholder",
    description:
      "Use this slot for a prior position or a milestone that shows growth.",
  },
  {
    year: "2024",
    title: "Experience placeholder",
    description:
      "Keep this item for another role, training program, or relevant project experience.",
  },
];

export const Experience = () => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40, visible: false });

  return (
    <section
      id="experience"
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
          backgroundImage: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(245, 166, 35, 0.14), transparent 34%)`,
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Experience
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Placeholder experience
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            This section is intentionally left as a scaffold. Swap in real
            roles, responsibilities, and measurable impact when you are ready.
          </p>
        </div>

        <div className="relative border-l border-border pl-6 md:pl-10 space-y-8 before:absolute before:-left-[1px] before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/70 before:via-highlight/60 before:to-transparent">
          {experienceItems.map((item, index) => (
            <div
              key={item.year}
              className="group relative animate-fade-in transition-transform duration-500 hover:translate-x-1"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <span className="absolute -left-[1.65rem] md:-left-[2.15rem] top-2 flex h-4 w-4 rounded-full border border-primary bg-background shadow-[0_0_0_6px_rgba(32,178,166,0.12)] transition-transform duration-500 group-hover:scale-125 group-hover:shadow-[0_0_0_10px_rgba(32,178,166,0.08)]" />
              <div className="glass rounded-2xl p-6 md:p-7 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/25 group-hover:shadow-[0_20px_70px_rgba(32,178,166,0.14)]">
                <p className="text-xs uppercase tracking-[0.25em] text-secondary-foreground">
                  {item.year}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-6">
                  {item.description}
                </p>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-highlight to-primary transition-all duration-700 group-hover:w-full"
                    style={{ width: `${55 + index * 12}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
