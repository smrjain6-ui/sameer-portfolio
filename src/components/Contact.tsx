import FadeInOnScroll from "@/components/FadeInOnScroll";
import { contactLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <FadeInOnScroll>
          <h2 className="mb-4 font-serif text-4xl">Get in Touch</h2>
          <p className="mb-10 text-[1.05rem] leading-8 text-textSecondary">
            Want to chat about growth, AI, or business? I&apos;d love to hear from you.
          </p>
        </FadeInOnScroll>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-xl border border-borderSoft bg-bgCard px-5 py-4 text-left text-textSecondary transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
