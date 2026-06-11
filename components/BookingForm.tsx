import { business } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

const eventTypes = [
  "Wedding",
  "Engagement",
  "Mehndi",
  "Corporate Event",
  "Family Function",
  "Video Editing",
];

export function BookingForm() {
  return (
    <section id="booking" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-amber-300/20 bg-amber-300/[0.07] p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Book Consultation"
            title="Need photography for your event?"
            description="Share your event details and get a quick quotation. For fastest response, contact directly on WhatsApp."
          />
          <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
              Quick Contact
            </p>
            <p className="mt-3 text-2xl font-black text-white">
              WhatsApp: {business.phoneDisplay}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Location: {business.location}. Available for weddings, events,
              family functions, and business coverage.
            </p>
          </div>
        </div>

        <form className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Phone Number" name="phone" placeholder="+92..." />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Event Date" name="date" type="date" />
            <label className="grid gap-2 text-sm font-semibold text-white">
              Event Type
              <select
                name="eventType"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
                defaultValue=""
              >
                <option value="" disabled>
                  Select event
                </option>
                {eventTypes.map((type) => (
                  <option key={type} value={type} className="bg-zinc-950">
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-white">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about venue, event timing, and services required"
              className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-300"
            />
          </label>
          <a
            href={`https://wa.me/${business.phoneWhatsApp}?text=Assalam%20o%20Alaikum,%20I%20need%20a%20photography%20quote.`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-200"
          >
            Request Quote on WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
};

function Field({ label, name, placeholder, type = "text" }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-300"
      />
    </label>
  );
}
