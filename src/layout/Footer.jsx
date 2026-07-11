export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.08),transparent_55%)]" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-foreground">
            ADRO <span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Modern portfolio placeholder built for projects, experience, and
            contact.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a
            href="#projects"
            className="transition-colors duration-300 hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="transition-colors duration-300 hover:text-primary"
          >
            Experience
          </a>
          <a
            href="#testimonials"
            className="transition-colors duration-300 hover:text-primary"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
