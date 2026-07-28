import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, BadgeIndianRupee } from "lucide-react";
import { LOCATIONS } from "@/lib/site-data";
import { BookingCta, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Clinic Locations & Fees | Rheumatologist Clifton, Karachi" },
      {
        name: "description",
        content:
          "Consultation timings and fees for Dr. Avinash Punshi at Ziauddin Hospital Clifton & North Nazimabad, South City Hospital, RIMS PECHS, IDC Saddar, and online video consultation.",
      },
      { property: "og:title", content: "Clinic Locations & Fees — Dr. Avinash Punshi, Karachi" },
      {
        property: "og:description",
        content: "Six ways to see a rheumatologist in Karachi, including online video consultation.",
      },
    ],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Locations"
        title="Where to see Dr. Punshi"
        intro="Six clinics across Karachi plus online video consultation. Timings shown are indicative — confirm your slot when booking."
      />

      <Section>
        <div className="surface-card hidden overflow-hidden md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/70 text-xs tracking-wide text-muted-foreground uppercase">
              <tr>
                <th className="px-6 py-4 font-semibold">Hospital / Clinic</th>
                <th className="px-6 py-4 font-semibold">Area</th>
                <th className="px-6 py-4 font-semibold">Days</th>
                <th className="px-6 py-4 font-semibold">Timing</th>
                <th className="px-6 py-4 font-semibold">Fee</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {LOCATIONS.map((l) => (
                <tr key={l.slug} className="border-t border-border">
                  <td className="px-6 py-4 font-medium text-secondary">{l.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{l.area}</td>
                  <td className="px-6 py-4 text-muted-foreground">{l.days}</td>
                  <td className="px-6 py-4 text-muted-foreground">{l.hours}</td>
                  <td className="px-6 py-4 font-semibold text-primary">{l.fee}</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to="/locations/$slug"
                      params={{ slug: l.slug }}
                      className="font-semibold text-primary"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:hidden">
          {LOCATIONS.map((l) => (
            <div key={l.slug} className="surface-card p-5">
              <p className="flex items-center gap-2 font-semibold text-secondary">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {l.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{l.area}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary" aria-hidden="true" />
                {l.days} · {l.hours}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-primary">
                <BadgeIndianRupee className="size-4" aria-hidden="true" />
                {l.fee}
              </p>
              <Link
                to="/locations/$slug"
                params={{ slug: l.slug }}
                className="mt-4 block rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Book at this location
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <BookingCta title="Prefer to stay home?" text="Online video consultation is available six evenings a week for Rs. 2,200, anywhere in Pakistan or abroad." />
      </Section>
    </>
  );
}
