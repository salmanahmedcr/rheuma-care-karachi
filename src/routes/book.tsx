import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { LOCATIONS, WHATSAPP_LINK } from "@/lib/site-data";
import { PageHeader, Section } from "@/components/site/ui";

type BookSearch = { location?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): BookSearch => ({
    location: typeof search.location === "string" ? search.location : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book an Appointment | Rheumatologist in Karachi" },
      {
        name: "description",
        content:
          "Book a consultation with Dr. Avinash Punshi, Consultant Rheumatologist, at Clifton, North Nazimabad, PECHS or Saddar in Karachi — or online. Book instantly or chat on WhatsApp.",
      },
      { property: "og:title", content: "Book an Appointment — Dr. Avinash Punshi, Karachi" },
      {
        property: "og:description",
        content: "Choose your clinic, pick a time, or book instantly on WhatsApp.",
      },
    ],
  }),
  component: Book,
});

function Book() {
  const { location } = Route.useSearch();
  const [selected, setSelected] = useState(location ?? LOCATIONS[0].slug);
  const active = LOCATIONS.find((l) => l.slug === selected) ?? LOCATIONS[0];

  return (
    <>
      <PageHeader
        eyebrow="Book appointment"
        title="Book your consultation"
        intro="Choose a clinic, then confirm your slot below or send a quick WhatsApp message — whichever is easier for you."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold text-secondary">1. Choose location</h2>
            <div className="mt-4 grid gap-2">
              {LOCATIONS.map((l) => (
                <button
                  key={l.slug}
                  type="button"
                  onClick={() => setSelected(l.slug)}
                  aria-pressed={selected === l.slug}
                  className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                    selected === l.slug
                      ? "border-primary bg-primary-soft"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <span className="block text-sm font-semibold text-secondary">
                    {l.name} — {l.area}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {l.days} · {l.hours}
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-primary">{l.fee}</span>
                </button>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-success px-4 py-3 text-sm font-semibold text-success-foreground"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat to book on WhatsApp
            </a>
          </div>

          <div className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold text-secondary">
              2. Pick your time — {active.name}
              {active.area === "Anywhere" ? "" : `, ${active.area}`}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fee {active.fee} · {active.days} · {active.hours}
            </p>

            {/*
              SIMPLYBOOK.ME INTEGRATION POINT
              Replace this placeholder block with the SimplyBook.me widget embed code
              (script/iframe) provided in your SimplyBook.me dashboard.
              Pass the selected location as the SimplyBook "location"/"provider" parameter:
              current selection => `${active.slug}`
            */}
            <div
              data-booking-widget="simplybook"
              data-location={active.slug}
              className="mt-6 flex min-h-[22rem] flex-col items-center justify-center rounded-xl border border-dashed border-primary/50 bg-primary-soft/60 px-6 py-12 text-center"
            >
              <CalendarCheck className="size-8 text-primary" aria-hidden="true" />
              <p className="mt-3 font-semibold text-secondary">Online booking calendar</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                The live SimplyBook.me scheduling widget will appear here. Until it is connected,
                please book on WhatsApp or through the enquiry form on the contact page — you will
                get a confirmation the same day.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Book on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-secondary"
                >
                  Send an enquiry
                </Link>
              </div>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
              <li>• Bring previous reports, X-rays and your current medicine list.</li>
              <li>• First consultations usually last 20–30 minutes.</li>
              <li>• Online video consultations are available six evenings a week.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
