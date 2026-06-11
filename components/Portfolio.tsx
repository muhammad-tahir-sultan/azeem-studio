import { portfolioItems } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  return (
    <section id="portfolio" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Portfolio"
          title="Albums, bridal shoots, event highlights, and cinematic films"
          description="A polished showcase layout for your best work, with space for photos, videos, client feedback, and project details."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"
            >
              <div
                className={`aspect-[16/11] bg-cover bg-center transition duration-500 group-hover:scale-105 ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,rgba(0,0,0,0.15),rgba(0,0,0,0.78)),url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80')]"
                    : index === 1
                      ? "bg-[linear-gradient(135deg,rgba(0,0,0,0.1),rgba(0,0,0,0.78)),url('https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80')]"
                      : index === 2
                        ? "bg-[linear-gradient(135deg,rgba(0,0,0,0.1),rgba(0,0,0,0.78)),url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80')]"
                        : "bg-[linear-gradient(135deg,rgba(0,0,0,0.1),rgba(0,0,0,0.78)),url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80')]"
                }`}
              />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
