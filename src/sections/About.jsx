import * as Icons from "lucide-react";

const DefaultIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="8" />
  </svg>
);

const highlights = [
  {
    icon: Icons.Code2 ?? DefaultIcon,
    title: "Clean Code",
    description:
      "I write clean, maintainable code following best practices and design patterns.",
  },
  {
    icon: Icons.Lightning ?? DefaultIcon,
    title: "Fast Development",
    description:
      "I deliver high-quality work quickly without sacrificing quality or attention to detail.",
  },
  {
    icon: Icons.Users ?? DefaultIcon,
    title: "Collaboration",
    description:
      "I work closely with clients and team members to ensure the best possible outcome for every project.",
  },
  {
    icon: Icons.Award ?? DefaultIcon,
    title: "Quality Focus",
    description:
      "I prioritize quality in every aspect of my work, from initial design to final implementation.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* {left col} */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-norml text-white">
                {" "}
                one component at a time
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate developer with a focus on creating exceptional
                user experiences. With a background in both design and
                development, I bridge the gap between creative vision and
                technical implementation.
              </p>
              <p>
                My approach combines attention to detail with a commitment to
                delivering high-quality, maintainable code that stands the test
                of time.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                To grow as a Software Engineer and Data Science professional by
                applying analytical thinking, programming skills, and machine
                learning techniques to develop innovative solutions that address
                real-world challenges and contribute to technological progress.
              </p>
            </div>
          </div>
          {/* {right col} */}
          <div className="grid sm:grid-cols-2 gap-12">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: "${(idx+1)*100}ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="text-primary -6 h-6" />
                </div>
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
