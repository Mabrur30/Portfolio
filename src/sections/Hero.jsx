import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Twitter,
  X,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Node.js",
  "Python",
  "Machine Learning",
  "Data Analysis",
  "AWS",
  "Docker",
  "MONGODB",
  "SQL",
  "Git",
  "CI/CD",
  "Agile Methodologies",
  "Figma",
  "Adobe XD",
  "Jira",
  "Trello",
  "Linux",
  "REST APIs",
  "GraphQL",
  "TypeScript",
  "Next.js",
];
const DOT_COUNT = 30;

const dots = Array.from({ length: DOT_COUNT }).map(() => {
  const top = `${Math.random() * 100}%`;
  const left = `${Math.random() * 100}%`;
  const duration = 15 + Math.random() * 20; // seconds
  const delay = Math.random() * 5; // seconds
  return { top, left, duration, delay };
});

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 ">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((d, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              top: d.top,
              left: d.left,
              animation: `slow-drift ${d.duration}s ease-in-out infinite`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>
      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column: badge + headline + CTAs + socials */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineeer * React Specialist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I am a software Engineering student specializing in Machine
                Learning, with strong skills in Python, data analysis, and
                software development. Passionate about building intelligent,
                scalable solutions to real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Mabrur30" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/mabrur30",
                },
                { icon: X, href: "https://x.com/mabrur_Adro" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* right column: profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.jpg"
                  alt="Mabrur"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3 ">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills cloud */}
        <div className="mt-16  animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="flex-shrink-0 px-8 py-4">
                <span
                  className="text-xl font-semibold text-muted-foreground/50"
                  hover:text-muted-foreground
                  transition-colors
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>

          <ChevronDown className=" w-6 h-6 animate-bounce " />
        </a>
      </div>
    </section>
  );
};
