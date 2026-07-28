import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site-data";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="hero-surface border-b border-border">
      <div className="container-page py-14 md:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-secondary md:text-5xl">{title}</h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`container-page py-14 md:py-20 ${className}`}>{children}</section>;
}

export function BookingCta({
  title = "Not sure where to start?",
  text = "Book a consultation and get a clear explanation of what is causing your pain — in Urdu or English, at your own pace.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="deep-surface rounded-2xl px-6 py-10 text-center md:px-12 md:py-14">
      <h2 className="text-2xl font-semibold text-primary-foreground md:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
        {text}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          to="/book"
          className="rounded-xl bg-background px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
        >
          Book a Consultation
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

export function TrustBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="surface-card px-5 py-4 text-center">
      <p className="font-display text-2xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
