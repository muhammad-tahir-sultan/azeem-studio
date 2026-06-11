import { services } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete coverage for weddings, events, and business moments"
          description="Choose a focused service or build a full event package with photography, movie coverage, editing, albums, and social reels."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-zinc-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-lg font-black text-zinc-950">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
