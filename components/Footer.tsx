import Link from "next/link";
import { business, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-black text-white">{business.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400">
            Professional wedding photography, event coverage, cinematic movies,
            and editing services in {business.location}.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Explore</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-zinc-400">
            <a href={`https://wa.me/${business.phoneWhatsApp}`} className="hover:text-white">
              WhatsApp: {business.phoneDisplay}
            </a>
            <a href={business.facebook} className="hover:text-white">
              Facebook Page
            </a>
            <a href={business.instagram} className="hover:text-white">
              Instagram Page
            </a>
            <a href={business.maps} className="hover:text-white">
              Google Maps Location
            </a>
            <span>{business.hours}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <p>Best From 30 Years. Faisalabad ki trusted studio team.</p>
      </div>
    </footer>
  );
}
