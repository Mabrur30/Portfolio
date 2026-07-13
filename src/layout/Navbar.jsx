import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
const navlinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#education",
    label: "Education",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${
        isScrolled ? "glass-strong py-4" : "bg-transparent py-5"
      } fixed top-0 left-0 right-0 transition-all duration-500 z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          ADRO <span className="text-primary">.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            href="#contact"
            className="group gap-2 border border-white/10 bg-linear-to-r from-primary via-primary to-highlight px-5 py-2.5 tracking-wide text-white shadow-[0_14px_30px_rgba(32,178,166,0.28)] ring-1 ring-white/5 backdrop-blur-md hover:border-primary/35 hover:shadow-[0_18px_40px_rgba(32,178,166,0.34)]"
          >
            <span>Contact Me</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </div>
        {/* Mobile menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col  gap-4">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground rounded-full hover:bg-surface hover:text-foreground  py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group inline-flex w-full justify-center gap-2 border border-white/10 bg-linear-to-r from-primary via-primary to-highlight px-5 py-3 tracking-wide text-white shadow-[0_14px_30px_rgba(32,178,166,0.28)] ring-1 ring-white/5 backdrop-blur-md"
            >
              <span>Contact Me</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
