import { business, heroStats, taglines } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <div className="mb-6 flex flex-wrap gap-3">
            {taglines.slice(0, 2).map((tagline) => (
              <span
                key={tagline}
                className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-200"
              >
                {tagline}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            30 Years of Capturing Precious Moments
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Professional wedding photography, event coverage, and cinematic
            movies for families and businesses across {business.location}.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#portfolio">View Portfolio</ButtonLink>
            <ButtonLink href="#booking" variant="secondary">
              Book Consultation
            </ButtonLink>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
              >
                <div className="text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-amber-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
            <div className="aspect-[4/5] bg-[linear-gradient(145deg,rgba(24,24,27,0.1),rgba(0,0,0,0.75)),url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
                  Trusted by families
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  Har Lamha Banaye Yaadgaar
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  From nikah to walima, every frame is handled with care,
                  timing, and professional quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
