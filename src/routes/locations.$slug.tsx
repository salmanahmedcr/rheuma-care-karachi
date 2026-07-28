import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, MapPin, Wallet } from "lucide-react";
import { LOCATIONS, WHATSAPP_LINK } from "@/lib/site-data";
import { BookingCta, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Location not found" }, { name: "robots", content: "noindex" }] };
    }
    const { location } = loaderData;
    const title = `Rheumatologist at ${location.name}, ${location.area} | Dr. Avinash Punshi`;
    const description = `Consultation timings (${location.days}, ${location.hours}) and fee (${location.fee}) for Dr. Avinash Punshi at ${location.name}, ${location.area}, Karachi.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: LocationPage,
  notFoundComponent: LocationNotFound,
});

function LocationNotFound() {
  return (
    <Section>
      <h1 className="text-2xl font-semibold text-secondary">We couldn't find that clinic</h1>
      <Link to="/locations" className="mt-4 inline-block font-semibold text-primary">
        See all locations →
      </Link>
    </Section>
  );
}

function LocationPage() {
  const { location } = Route.useLoaderData();
  const isOnline = location.mapQuery === "";

  return (
    <>
      <PageHeader
        eyebrow="Clinic location"
        title={`${location.name}${isOnline ? "" : `, ${location.area}`}`}
        intro={location.address}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="surface-card p-6">
            <ul className="space-y-5">
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-secondary">Days & timing</p>
                  <p className="text-sm text-muted-foreground">
                    {location.days} · {location.hours}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Timings are indicative — please confirm when you book.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Wallet className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-secondary">Consultation fee</p>
                  <p className="text-sm text-muted-foreground">{location.fee}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-secondary">Address</p>
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                </div>
              </li>
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book"
                search={{ location: location.slug }}
                className="flex-1 rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
              >
                Book at this location
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-border px-5 py-3 text-center text-sm font-semibold text-secondary transition-colors hover:bg-muted"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {isOnline ? (
            <div className="surface-card p-6">
              <h2 className="font-display text-lg font-semibold text-secondary">
                How the online consultation works
              </h2>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>1. Book an evening slot online or on WhatsApp.</li>
                <li>2. Send photos of your reports and prescriptions in advance.</li>
                <li>3. Join the secure video link at your appointment time.</li>
                <li>4. Receive your written prescription and test advice the same evening.</li>
              </ol>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title={`Map of ${location.name}, ${location.area}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full md:h-full"
              />
            </div>
          )}
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="text-xl font-semibold text-secondary">Other clinic locations</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {LOCATIONS.filter((l) => l.slug !== location.slug).map((l) => (
            <Link
              key={l.slug}
              to="/locations/$slug"
              params={{ slug: l.slug }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {l.name} — {l.area}
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <BookingCta />
      </Section>
    </>
  );
}
