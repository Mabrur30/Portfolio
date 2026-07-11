import { X } from "lucide-react";

export const Contact = ({ isOpen, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const subject =
      formData.get("subject")?.toString().trim() ?? "Portfolio contact";
    const message = formData.get("message")?.toString().trim() ?? "";

    const body = [
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoUrl = `mailto:mabrurdcc2020@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <>
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.12),transparent_52%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-14 animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Contact
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Send a message
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Use the form below for direct contact, or open the modal for the
              full overlay experience.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-10 border border-border/40 animate-fade-in">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      className="mb-2 block text-sm text-muted-foreground"
                      htmlFor="contact-name"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm text-muted-foreground"
                      htmlFor="contact-email"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm text-muted-foreground"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry, collaboration, question..."
                    className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm text-muted-foreground"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about what you want to build..."
                    className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Send message
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-border bg-background/40 px-6 py-3 font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                  >
                    Close modal
                  </button>
                </div>
              </form>
            </div>

            <div className="glass rounded-3xl p-8 md:p-10 border border-border/40 animate-fade-in animation-delay-100">
              <p className="text-sm uppercase tracking-[0.25em] text-secondary-foreground">
                Contact me modal
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Reach out with a project idea, opportunity, or question.
              </h3>
              <p className="mt-3 text-muted-foreground leading-6">
                The modal below remains available as a more focused contact
                experience, while the section form handles quick inquiries.
              </p>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-foreground font-semibold">Email</p>
                  <p>hello@example.com</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Location</p>
                  <p>Available worldwide</p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Response</p>
                  <p>Usually within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center px-4 py-6">
          <button
            type="button"
            aria-label="Close contact modal"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="relative w-full max-w-3xl glass-strong rounded-4xl border border-border/50 shadow-2xl shadow-black/40 animate-fade-in overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,178,166,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(245,166,35,0.14),transparent_34%)]" />
            <div className="relative z-10 p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-secondary-foreground">
                    Contact modal
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-foreground">
                    Let's build something useful.
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-border/70 p-2 text-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="mb-2 block text-sm text-muted-foreground"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm text-muted-foreground"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-2 block text-sm text-muted-foreground"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project..."
                      className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-primary/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Send message
                  </button>
                </form>

                <div className="glass rounded-3xl p-6 md:p-7 border border-border/40">
                  <p className="text-sm uppercase tracking-[0.25em] text-secondary-foreground">
                    Quick contact
                  </p>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                    <div>
                      <p className="text-foreground font-semibold">Email</p>
                      <p>hello@example.com</p>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Location</p>
                      <p>Available worldwide</p>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Response</p>
                      <p>Usually within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
