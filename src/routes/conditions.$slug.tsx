import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CONDITIONS, LOCATIONS } from "@/lib/site-data";
import { BookingCta, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/conditions/$slug")({
  loader: ({ params }) => {
    const condition = CONDITIONS.find((c) => c.slug === params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Condition not found" }, { name: "robots", content: "noindex" }] };
    }
    const { condition } = loaderData;
    const title = `${condition.name} Treatment in Karachi | Dr. Avinash Punshi`;
    const description = `${condition.short} Symptoms, causes and treatment of ${condition.name.toLowerCase()} explained by Consultant Rheumatologist Dr. Avinash Punshi, Karachi.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ConditionPage,
  notFoundComponent: ConditionNotFound,
});

function ConditionNotFound() {
  return (
    <Section>
      <h1 className="text-2xl font-semibold text-secondary">We couldn't find that condition</h1>
      <p className="mt-3 text-muted-foreground">
        It may have been renamed. Browse the full list instead.
      </p>
      <Link to="/conditions" className="mt-5 inline-block font-semibold text-primary">
        All conditions →
      </Link>
    </Section>
  );
}

function ConditionPage() {
  const { condition } = Route.useLoaderData();
  const others = CONDITIONS.filter((c) => c.slug !== condition.slug).slice(0, 6);

  return (
    <>
      <PageHeader eyebrow="Condition guide" title={condition.name} intro={condition.short} />

      <Section>
        {/* Structured as a MedicalWebPage: intro, symptoms, treatment, FAQ-ready blocks. */}
        <article className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-start">
          <div>
            <h2 className="text-xl font-semibold text-secondary">What it is</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{condition.intro}</p>

            <h2 className="mt-10 text-xl font-semibold text-secondary">Common symptoms</h2>
            <ul className="mt-4 grid gap-3">
              {condition.symptoms.map((s: string) => (
                <li key={s} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-xl font-semibold text-secondary">How it is treated</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{condition.treatment}</p>

            <h2 className="mt-10 text-xl font-semibold text-secondary">When to see a rheumatologist</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              If symptoms have lasted more than six weeks, keep returning, or are stopping you from
              working, praying or sleeping, it is worth having a proper assessment. Earlier
              treatment nearly always means a better long-term outcome.
            </p>
          </div>

          <aside className="surface-card p-6 md:sticky md:top-24">
            <p className="font-display text-lg font-semibold text-secondary">
              Book a consultation
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Assessment for {condition.name.toLowerCase()} at any of our Karachi clinics, or online
              from home.
            </p>
            <Link
              to="/book"
              className="mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
            >
              Book a Consultation
            </Link>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {LOCATIONS.slice(0, 4).map((l) => (
                <li key={l.slug} className="flex justify-between gap-3">
                  <span>{l.area}</span>
                  <span className="font-medium text-secondary">{l.fee}</span>
                </li>
              ))}
            </ul>
          </aside>
        </article>
      </Section>

      <Section className="!pt-0">
        <h2 className="text-xl font-semibold text-secondary">Other conditions treated</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/conditions/$slug"
              params={{ slug: c.slug }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <BookingCta title={`Living with ${condition.name.toLowerCase()}?`} />
      </Section>
    </>
  );
}
