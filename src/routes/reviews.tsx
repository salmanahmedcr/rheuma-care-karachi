import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { DOCTOR, TESTIMONIALS } from "@/lib/site-data";
import { BookingCta, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews | Dr. Avinash Punshi, Rheumatologist Karachi" },
      {
        name: "description",
        content:
          "Read what patients say about Dr. Avinash Punshi — 1,000+ verified reviews and 99% patient satisfaction for rheumatology care in Karachi.",
      },
      { property: "og:title", content: "Patient Reviews — Dr. Avinash Punshi, Karachi" },
      {
        property: "og:description",
        content: "1,000+ verified patient reviews and 99% satisfaction for rheumatology care in Karachi.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHeader
        eyebrow="Patient reviews"
        title="What patients say"
        intro="Thousands of patients across Karachi have been treated over the past 15 years. Here is a selection of their feedback."
      />

      <Section>
        <div className="surface-card flex flex-col items-center gap-3 px-6 py-10 text-center">
          <div className="flex gap-1 text-primary" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-current" />
            ))}
          </div>
          <p className="font-display text-3xl font-semibold text-secondary">
            {DOCTOR.satisfaction} patient satisfaction
          </p>
          <p className="text-sm text-muted-foreground">
            Based on {DOCTOR.reviews} verified patient reviews
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="surface-card flex flex-col p-6">
              <Quote className="size-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                <span className="font-semibold text-secondary">{t.name}</span>
                <span className="text-muted-foreground"> · {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Placeholder testimonials shown while verified patient reviews are being added.
        </p>
      </Section>

      <Section className="!pt-0">
        <BookingCta title="Join a thousand patients who found an answer" />
      </Section>
    </>
  );
}
