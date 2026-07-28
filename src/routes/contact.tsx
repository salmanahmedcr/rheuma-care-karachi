import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, MapPin, ChevronDown } from "lucide-react";
import {
  CONDITIONS,
  FAQS,
  LOCATIONS,
  PHONE_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/site-data";
import { PageHeader, Section } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & FAQs | Dr. Avinash Punshi, Rheumatologist Karachi" },
      {
        name: "description",
        content:
          "Contact Dr. Avinash Punshi's clinics in Karachi on WhatsApp or by phone, send an appointment enquiry, and read answers about insurance, walk-ins and online video consultations.",
      },
      { property: "og:title", content: "Contact & FAQs — Dr. Avinash Punshi, Karachi" },
      {
        property: "og:description",
        content: "WhatsApp, phone and enquiry form, plus answers to common patient questions.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // CRM / WEBHOOK INTEGRATION POINT:
    // POST `data` to your CRM or automation webhook here.
    console.log("Appointment enquiry", data);
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact & FAQ"
        title="Get in touch"
        intro="Send an enquiry and the clinic team will reply the same day, or message on WhatsApp for the quickest response."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <form onSubmit={handleSubmit} className="surface-card grid gap-4 p-6">
            <h2 className="font-display text-lg font-semibold text-secondary">
              Appointment enquiry
            </h2>

            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-secondary">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-secondary">
                Phone / WhatsApp number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="03XX XXXXXXX"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="location" className="text-sm font-medium text-secondary">
                  Preferred location
                </label>
                <select
                  id="location"
                  name="location"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l.slug} value={l.slug}>
                      {l.name} — {l.area}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="date" className="text-sm font-medium text-secondary">
                  Preferred date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="condition" className="text-sm font-medium text-secondary">
                Condition or reason for visit
              </label>
              <select
                id="condition"
                name="condition"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              >
                <option value="">Not sure / other</option>
                {CONDITIONS.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-secondary">
                Anything else we should know? (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
            >
              Send enquiry
            </button>

            {submitted ? (
              <p className="rounded-lg bg-primary-soft px-4 py-3 text-sm text-primary">
                Thank you — your enquiry has been recorded. The clinic team will contact you to
                confirm your appointment.
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Please do not share sensitive medical details here. For emergencies, go to your
                nearest hospital.
              </p>
            )}
          </form>

          <div className="grid gap-4">
            <div className="surface-card p-6">
              <h2 className="font-display text-lg font-semibold text-secondary">Clinic contact</h2>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  Clinics in Clifton, North Nazimabad, PECHS and Saddar, Karachi
                </li>
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-success px-4 py-3 text-sm font-semibold text-success-foreground"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="text-2xl font-semibold text-secondary md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 grid gap-3">
          {FAQS.map((f) => (
            <details key={f.q} className="surface-card group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-secondary">
                {f.q}
                <ChevronDown
                  className="size-4 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
