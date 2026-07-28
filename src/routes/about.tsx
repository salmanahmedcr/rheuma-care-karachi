import { createFileRoute } from "@tanstack/react-router";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { DOCTOR } from "@/lib/site-data";
import { BookingCta, PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Avinash Punshi — Consultant Rheumatologist, Karachi" },
      {
        name: "description",
        content:
          "Qualifications, training and philosophy of care of Dr. Avinash Punshi, MBBS, FCPS (Medicine), FCPS (Rheumatology), MRCP (UK) — a rheumatologist practising in Karachi for over 15 years.",
      },
      { property: "og:title", content: "About Dr. Avinash Punshi — Rheumatologist in Karachi" },
      {
        property: "og:description",
        content:
          "15+ years of rheumatology practice in Karachi, with training in Pakistan and the UK. Unhurried, education-focused care.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2012", title: "MBBS", text: "Completed undergraduate medical training and house job in internal medicine." },
  { year: "2020", title: "FCPS (Medicine)", text: "Fellowship of the College of Physicians and Surgeons Pakistan in Internal Medicine." },
  { year: "—", title: "FCPS (Rheumatology)", text: "Sub-specialty fellowship in Rheumatology, covering autoimmune and inflammatory joint disease." },
  { year: "—", title: "MRCP (UK)", text: "Membership of the Royal College of Physicians, United Kingdom." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`${DOCTOR.name}, Consultant Rheumatologist`}
        intro="More than fifteen years spent listening carefully to patients whose pain had been dismissed elsewhere — and finding the answer."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <img
            src={doctorPortrait}
            alt={`${DOCTOR.name} at his clinic in Karachi`}
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <h2 className="text-2xl font-semibold text-secondary">Biography</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Dr. Avinash Punshi is a Consultant Rheumatologist based in Karachi. He trained first
                in internal medicine before sub-specialising in rheumatology — the branch of
                medicine that deals with arthritis, autoimmune disease, and long-standing pain in
                the joints, muscles and spine.
              </p>
              <p>
                He holds an MBBS, Fellowships of the College of Physicians and Surgeons Pakistan in
                both Medicine and Rheumatology, and Membership of the Royal College of Physicians
                (UK). Over the past fifteen years he has cared for thousands of patients with
                rheumatoid arthritis, lupus, ankylosing spondylitis, gout, fibromyalgia and
                osteoporosis, and holds clinics at four leading Karachi hospitals as well as online.
              </p>
              <p>
                He is widely known for his patient-education videos in Urdu, which explain arthritis,
                fibromyalgia and back pain in language families can follow — because a patient who
                understands their condition takes their treatment properly, and gets better faster.
              </p>
              <p>
                Consultations are available in <strong className="text-secondary">English and Urdu</strong>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="text-2xl font-semibold text-secondary md:text-3xl">Qualifications timeline</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {TIMELINE.map((item) => (
            <li key={item.title} className="surface-card p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                {item.year}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-secondary">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="!pt-0">
        <div className="surface-card p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-secondary md:text-3xl">Philosophy of care</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Unhurried",
                text: "Rheumatology cannot be practised in five minutes. First consultations run 20–30 minutes so the whole story is heard before any conclusion is drawn.",
              },
              {
                title: "Thorough",
                text: "A careful examination and only the investigations that will genuinely change the plan — no long list of expensive tests for the sake of it.",
              },
              {
                title: "Education-focused",
                text: "You should leave knowing the name of your condition, what each medicine does, and what to watch for. Written plans and Urdu video explanations support this.",
              },
            ].map((p) => (
              <div key={p.title}>
                <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <BookingCta title="Ready to get a clear answer?" />
      </Section>
    </>
  );
}
