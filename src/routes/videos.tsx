import { createFileRoute } from "@tanstack/react-router";
import { VIDEOS } from "@/lib/site-data";
import { BookingCta, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Patient Education Videos in Urdu | Arthritis & Back Pain, Karachi" },
      {
        name: "description",
        content:
          "Free Urdu and Roman Urdu video explanations of arthritis, fibromyalgia, ankylosing spondylitis, gout and back pain by Dr. Avinash Punshi, rheumatologist in Karachi.",
      },
      { property: "og:title", content: "Patient Education Video Library — Dr. Avinash Punshi" },
      {
        property: "og:description",
        content: "Arthritis, fibromyalgia and back pain explained in Urdu, with English summaries.",
      },
    ],
  }),
  component: Videos,
});

function Videos() {
  return (
    <>
      <PageHeader
        eyebrow="Patient education"
        title="Video library"
        intro="Dr. Punshi explains common rheumatology conditions in Urdu and Roman Urdu, so you can share them with your family. An English summary sits alongside each video."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {VIDEOS.map((v, i) => (
            <article key={`${v.id}-${i}`} className="surface-card overflow-hidden">
              <div className="aspect-video w-full bg-muted">
                <iframe
                  title={v.title}
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {v.language}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold text-secondary">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          These videos are general information and cannot replace a personal consultation.
        </p>
      </Section>

      <Section className="!pt-0">
        <BookingCta title="Still have questions after watching?" />
      </Section>
    </>
  );
}
