import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Video,
  MessageCircle,
  CalendarCheck,
  FileText,
  Globe2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { BookingCta, PageHeader, Section, TrustBadge } from "@/components/site/ui";
import { DOCTOR, LOCATIONS, WHATSAPP_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/online-consultation")({
  head: () => ({
    meta: [
      { title: "Online Video Consultation | Rheumatologist Karachi, Pakistan" },
      {
        name: "description",
        content:
          "Consult Dr. Avinash Punshi, Consultant Rheumatologist, by secure video call from anywhere in Pakistan or abroad. Rs. 2,200, six evenings a week, reports reviewed before the call.",
      },
      { property: "og:title", content: "Online Video Consultation — Dr. Avinash Punshi" },
      {
        property: "og:description",
        content:
          "Secure video consultation with a Karachi rheumatologist for arthritis, lupus, gout and chronic joint pain. Prescription sent the same evening.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OnlineConsultation,
});

const STEPS = [
  {
    icon: CalendarCheck,
    title: "1. Book your slot",
    text: "Choose an evening slot on the booking page or send a WhatsApp message. You will get a written confirmation.",
  },
  {
    icon: FileText,
    title: "2. Share your reports",
    text: "Send photos of your blood tests, X-rays or MRI reports on WhatsApp beforehand so they are reviewed before the call.",
  },
  {
    icon: Video,
    title: "3. Join the video call",
    text: "A secure video link arrives at your appointment time. Consultations last 20–30 minutes in Urdu or English.",
  },
  {
    icon: ShieldCheck,
    title: "4. Receive your plan",
    text: "Your prescription, test advice and follow-up plan are sent to you in writing the same evening.",
  },
];

function OnlineConsultation() {
  const online = LOCATIONS.find((l) => l.slug === "online-video-consultation");

  return (
    <>
      <PageHeader
        eyebrow="Telemedicine"
        title="Online video consultation"
        intro={`See ${DOCTOR.name} by secure video call from home — anywhere in Pakistan or abroad. Ideal for follow-ups, second opinions and reviewing reports without travelling to a hospital.`}
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-3">
          <TrustBadge value={online?.fee ?? "Rs. 2,200"} label="Consultation fee" />
          <TrustBadge value={online?.hours ?? "9:00 PM – 10:30 PM"} label="Evening slots" />
          <TrustBadge value={DOCTOR.languages} label="Consultation languages" />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {STEPS.map((s) => (
            <div key={s.title} className="surface-card p-6">
              <s.icon className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-3 font-semibold text-secondary">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="surface-card p-6 md:p-8">
          <h2 className="text-xl font-semibold text-secondary md:text-2xl">
            Who is an online consultation suitable for?
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Globe2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Patients outside Karachi or living abroad
              </li>
              <li className="flex gap-2">
                <FileText className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Reviewing blood reports, X-rays or MRI results
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Routine follow-ups and medicine adjustments
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Second opinions on an existing diagnosis
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Elderly patients or anyone who finds travel difficult
              </li>
            </ul>
          </div>
          <p className="mt-6 rounded-xl bg-muted/70 p-4 text-sm text-muted-foreground">
            Some problems need a hands-on joint examination. If that is the case, Dr. Punshi will
            tell you during the call and arrange an in-person visit at the most convenient clinic.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book a video consultation
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-secondary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <BookingCta
          title="Consult from anywhere"
          text={`Video consultations run ${online?.days ?? "Monday – Saturday"}, ${online?.hours ?? "9:00 PM – 10:30 PM"} for ${online?.fee ?? "Rs. 2,200"}.`}
        />
      </Section>
    </>
  );
}
