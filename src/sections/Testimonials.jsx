import { useState } from "react";

const testimonials = [
  {
    quote:
      "This is a placeholder testimonial. Replace it with a short client or teammate quote later.",
    name: "Testimonial placeholder",
    role: "Role or relationship",
  },
  {
    quote:
      "Another placeholder slot for a future review, recommendation, or collaboration note.",
    name: "Testimonial placeholder",
    role: "Role or relationship",
  },
  {
    quote:
      "Keep this card for a third testimonial once you have real social proof to display.",
    name: "Testimonial placeholder",
    role: "Role or relationship",
  },
];

export const Testimonials = () => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

  return (
    <section
      id="testimonials"
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
          backgroundImage: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 255, 255, 0.08), transparent 34%)`,
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Placeholder testimonials
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            These are temporary cards. Replace them with real feedback once you
            have quotes from clients, teammates, or collaborators.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="group glass rounded-3xl p-6 md:p-7 animate-fade-in transition-all duration-500 hover:-translate-y-3 hover:border-primary/25 hover:shadow-[0_24px_80px_rgba(32,178,166,0.14)]"
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <div className="mb-6 flex items-center gap-2 text-secondary-foreground">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em]">
                  Placeholder
                </span>
              </div>
              <p className="text-foreground leading-7 transition-transform duration-500 group-hover:-translate-y-0.5">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6">
                <div className="h-px w-12 bg-linear-to-r from-primary to-highlight mb-4 transition-all duration-500 group-hover:w-20" />
                <p className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
