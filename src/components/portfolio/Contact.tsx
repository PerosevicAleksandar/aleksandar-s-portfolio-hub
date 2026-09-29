import { useState, type FormEvent } from "react";
import { CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
import { CONTACT } from "@/data/portfolio";
import { Section } from "./Section";

type Errors = { name?: string; email?: string; message?: string };

const links = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Github, label: "GitHub", value: "https://github.com/PerosevicAleksandar", href: CONTACT.github },
  { icon: Linkedin, label: "LinkedIn", value: "example-link.com", href: CONTACT.linkedin },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  // NOTE: frontend-only sample functionality — nothing is actually sent anywhere.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) nextErrors.message = "Please write a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's get in touch"
      description="I am looking for junior frontend roles and internships. Feel free to reach out."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <ul className="grid gap-4 self-start">
          {links.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="truncate text-sm font-medium">{value}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card/60 p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                className={fieldClass}
              />
              {errors.name ? (
                <p className="mt-2 text-xs text-destructive">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                className={fieldClass}
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-destructive">{errors.email}</p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the role or project..."
              aria-invalid={Boolean(errors.message)}
              className={`${fieldClass} resize-y`}
            />
            {errors.message ? (
              <p className="mt-2 text-xs text-destructive">{errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Send size={16} />
            Send Message
          </button>

          <p aria-live="polite" className="mt-4">
            {sent ? (
              <span className="inline-flex items-center gap-2 rounded-xl border border-success/40 bg-success/10 px-4 py-3 text-sm text-success">
                <CheckCircle2 size={16} />
                Thanks! Your message has been received (demo only — no email is sent).
              </span>
            ) : null}
          </p>
        </form>
      </div>
    </Section>
  );
}
