import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow="About Us"
          title="Faisalabad ka experienced photography aur movies studio"
          description="For 30 years, our team has captured weddings, engagements, corporate events, and family functions with professional quality and creative storytelling."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "We understand local wedding traditions, family moments, and event flow.",
            "Every project is planned for clean coverage, smooth edits, and reliable delivery.",
            "Our goal is simple: preserve your best memories in a premium, timeless way.",
            "From photo albums to cinematic films, everything is handled by an experienced team.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-zinc-950/50 p-5 text-sm leading-7 text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
