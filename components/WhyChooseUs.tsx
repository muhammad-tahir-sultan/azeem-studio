import { taglines, whyChooseUs } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Us"
              title="Experience, quality, and a friendly team you can trust"
              description="Events move fast. Our team knows how to stay ready, guide families, and capture moments without disturbing the flow."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {taglines.map((tagline) => (
                <span
                  key={tagline}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white"
                >
                  {tagline}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="rounded-3xl border border-white/10 bg-zinc-900/70 p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-zinc-950">
                  ✓
                </div>
                <p className="text-base font-semibold leading-7 text-white">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
