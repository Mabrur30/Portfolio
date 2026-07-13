import { GraduationCap, School, Trophy } from "lucide-react";

const educationItems = [
  {
    icon: GraduationCap,
    title: "Bachelor's Degree",
    institution: "United International University",
    detail: "Graduated with a 3.33 CGPA.",
  },
  {
    icon: School,
    title: "Higher Secondary Certificate",
    institution: "Dhaka City College",
    detail: "Achieved GPA 5.",
  },
  {
    icon: Trophy,
    title: "Secondary School Certificate",
    institution: "Ideal School",
    detail: "Achieved GPA 5.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Education
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Academic foundation
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            My education gave me the technical foundation, discipline, and
            problem-solving mindset that I bring into every project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {educationItems.map((item, index) => (
            <article
              key={item.title}
              className="glass rounded-2xl p-6 md:p-7 animate-fade-in transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_70px_rgba(32,178,166,0.14)]"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-secondary-foreground">
                {item.institution}
              </p>
              <p className="mt-4 text-muted-foreground leading-6">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
