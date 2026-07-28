import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CONDITIONS } from "@/lib/site-data";
import { BookingCta, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/conditions/")({
  head: () => ({
    meta: [
      { title: "Conditions Treated | Arthritis, Lupus & Joint Pain Specialist Karachi" },
      {
        name: "description",
        content:
          "Rheumatoid arthritis, osteoarthritis, ankylosing spondylitis, lupus, gout, fibromyalgia, osteoporosis and more — treated by Dr. Avinash Punshi, rheumatologist in Karachi.",
      },
      { property: "og:title", content: "Conditions Treated by Dr. Avinash Punshi, Karachi" },
      {
        property: "og:description",
        content:
          "Patient-friendly guides to the rheumatic conditions treated at our Karachi clinics, with symptoms and treatment options.",
      },
    ],
  }),
  component: ConditionsIndex,
});

function ConditionsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Conditions treated"
        title="Conditions we treat"
        intro="Short, jargon-free guides to the conditions seen most often in our Karachi clinics. Find the one that sounds like your symptoms — and read what can be done about it."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.map((c) => (
            <Link
              key={c.slug}
              to="/conditions/$slug"
              params={{ slug: c.slug }}
              className="surface-card group flex flex-col p-6 transition-transform hover:-translate-y-0.5"
            >
              <h2 className="font-display text-lg font-semibold text-secondary group-hover:text-primary">
                {c.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read more <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <BookingCta title="Symptoms not listed here?" text="Many rheumatic conditions overlap. If joint, muscle or back pain has lasted more than six weeks, a consultation is the fastest way to a clear answer." />
      </Section>
    </>
  );
}
