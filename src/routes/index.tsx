import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Stethoscope, Clock, Star, MapPin, ArrowRight } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { CONDITIONS, DOCTOR, LOCATIONS, WHATSAPP_LINK } from "@/lib/site-data";
import { BookingCta, Section, TrustBadge } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rheumatologist in Karachi | Dr. Avinash Punshi, MRCP (UK)" },
      {
        name: "description",
        content:
          "Dr. Avinash Punshi is a Consultant Rheumatologist in Karachi with 15+ years' experience treating arthritis, lupus, gout, fibromyalgia and chronic joint pain. Book at Clifton, North Nazimabad, PECHS, Saddar or online.",
      },
      { property: "og:title", content: "Rheumatologist in Karachi | Dr. Avinash Punshi" },
      {
        property: "og:description",
        content:
          "Expert rheumatology care in Karachi — arthritis, lupus and joint pain treatment. 1,000+ verified patient reviews.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="hero-surface">
        <div className="container-page grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              MRCP (UK) · FCPS Rheumatology
            </p>
            <h1 className="mt-5 text-3xl leading-tight font-semibold text-secondary md:text-5xl">
              Expert Rheumatology Care in Karachi
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              If your joint pain, back pain or stiffness has lasted for months and nobody has given
              you a clear answer — you are in the right place. {DOCTOR.name} is a Consultant
              Rheumatologist who takes the time to explain what is happening and what will help.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
              >
                Book Appointment
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-secondary transition-colors hover:bg-muted"
              >
                Chat on WhatsApp
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-3">
              <TrustBadge value="15+" label="Years of experience" />
              <TrustBadge value="1,000+" label="Verified patient reviews" />
              <TrustBadge value="99%" label="Patient satisfaction" />
            </dl>
          </div>

          <div className="relative">
            <img
              src={doctorPortrait}
              alt={`${DOCTOR.name}, ${DOCTOR.title} in Karachi`}
              width={1024}
              height={1280}
              fetchPriority="high"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
            <div className="surface-card absolute right-4 bottom-4 max-w-[15rem] px-4 py-3">
              <p className="text-sm font-semibold text-secondary">{DOCTOR.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{DOCTOR.credentials}</p>
              <p className="mt-1 text-xs text-muted-foreground">Consults in English & Urdu</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-card">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-5 text-sm text-muted-foreground">
          <span className="text-xs font-semibold tracking-[0.16em] uppercase">
            Consulting at
          </span>
          {["Dr. Ziauddin Hospital", "South City Hospital", "RIMS Trauma Hospital", "Islamabad Diagnostic Centre"].map(
            (name) => (
              <span key={name} className="font-medium text-secondary">
                {name}
              </span>
            ),
          )}
        </div>
      </div>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-secondary md:text-3xl">
              Unhurried, thorough, explained in plain language
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Rheumatic conditions are often missed or mislabelled for years. Dr. Punshi trained in
              internal medicine and rheumatology in Pakistan and the UK, and has spent over 15 years
              helping patients in Karachi get an accurate diagnosis — and then a treatment plan they
              actually understand.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Consultations are deliberately longer than average. You will leave knowing what your
              condition is called, why it happened, what each medicine does, and what to expect next.
            </p>
            <Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read the full profile <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-4">
            {[
              { icon: Stethoscope, title: "Accurate diagnosis first", text: "Only the tests you genuinely need — no unnecessary expense." },
              { icon: Clock, title: "20–30 minute first visit", text: "Time to hear your full story and examine properly." },
              { icon: Star, title: "Education-focused care", text: "Written plans, and video explanations in Urdu." },
            ].map((item) => (
              <li key={item.title} className="surface-card flex gap-4 p-5">
                <item.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-secondary">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold text-secondary md:text-3xl">Conditions treated</h2>
          <Link to="/conditions" className="text-sm font-semibold text-primary">
            View all {CONDITIONS.length} conditions →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONDITIONS.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              to="/conditions/$slug"
              params={{ slug: c.slug }}
              className="surface-card group p-6 transition-transform hover:-translate-y-0.5"
            >
              <h3 className="text-base font-semibold text-secondary group-hover:text-primary">
                {c.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.short}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold text-secondary md:text-3xl">Locations at a glance</h2>
          <Link to="/locations" className="text-sm font-semibold text-primary">
            All locations & timings →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l) => (
            <Link
              key={l.slug}
              to="/locations/$slug"
              params={{ slug: l.slug }}
              className="surface-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-secondary">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {l.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{l.area}</p>
              <p className="mt-3 text-sm font-semibold text-primary">{l.fee}</p>
              <p className="text-xs text-muted-foreground">{l.days} · {l.hours}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="surface-card flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Telemedicine
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-secondary md:text-3xl">
              Online video consultation
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Can&apos;t travel to a clinic? Consult Dr. Punshi by secure video call from anywhere in
              Pakistan or abroad — reports reviewed beforehand, prescription sent the same evening.
            </p>
          </div>
          <Link
            to="/online-consultation"
            className="shrink-0 rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Learn more
          </Link>
        </div>
      </Section>


      <Section className="!pt-0">
        <BookingCta />
      </Section>
    </>
  );
}
