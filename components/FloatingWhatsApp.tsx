import { business } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${business.phoneWhatsApp}?text=Assalam%20o%20Alaikum,%20I%20need%20event%20photography%20details.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-green-950/40 transition hover:-translate-y-1 hover:bg-green-400"
    >
      WhatsApp
    </a>
  );
}
