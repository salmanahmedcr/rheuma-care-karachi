import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { CONDITIONS, DOCTOR, LOCATIONS, PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-lg font-semibold text-secondary">{DOCTOR.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{DOCTOR.title}</p>
          <p className="mt-3 text-sm text-muted-foreground">{DOCTOR.credentials}</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-success px-4 py-2 text-sm font-semibold text-success-foreground"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat to book
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-secondary">Conditions treated</h2>
          <ul className="mt-3 space-y-2">
            {CONDITIONS.slice(0, 7).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/conditions/$slug"
                  params={{ slug: c.slug }}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/conditions" className="text-sm font-medium text-primary">
                View all conditions →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-secondary">Clinic locations</h2>
          <ul className="mt-3 space-y-2">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {l.name} — {l.area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-secondary">Get in touch</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {PHONE_DISPLAY}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Consulting across Clifton, North Nazimabad, PECHS and Saddar, Karachi
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/online-consultation" className="text-sm font-medium text-primary">
              Online video consultation →
            </Link>
            <Link to="/book" className="text-sm font-medium text-primary">
              Book an appointment →
            </Link>
            <Link to="/contact" className="text-sm font-medium text-primary">
              Contact & FAQ →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {DOCTOR.name}. All rights reserved.</p>
          <p>
            This website is for general information only and does not replace a medical
            consultation. In an emergency, go to your nearest hospital.
          </p>
        </div>
      </div>
    </footer>
  );
}
