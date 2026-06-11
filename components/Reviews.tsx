import { reviews } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section id="reviews" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Trusted by families and businesses for over 30 years"
          description="Real confidence comes from reliable event handling, friendly communication, and results families are proud to share."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="text-lg tracking-[0.2em] text-amber-300">
                ★★★★★
              </div>
              <blockquote className="mt-5 text-base leading-8 text-zinc-200">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <p className="font-bold text-white">{review.name}</p>
                <p className="mt-1 text-sm text-zinc-400">{review.event}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
