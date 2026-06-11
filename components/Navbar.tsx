import Link from "next/link";
import { business, navItems } from "@/lib/site-data";
import { ButtonLink } from "./ButtonLink";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="group">
          <span className="block text-lg font-black tracking-tight text-white">
            {business.name}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-300">
            Since 1994
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <ButtonLink
          href={`https://wa.me/${business.phoneWhatsApp}`}
          className="hidden sm:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Now
        </ButtonLink>
      </nav>
    </header>
  );
}
