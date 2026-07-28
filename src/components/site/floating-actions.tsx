import { Link } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-success px-4 py-3 text-sm font-semibold text-success-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/book"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          <CalendarCheck className="size-4" aria-hidden="true" />
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export function DesktopWhatsAppFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-[var(--shadow-float)] transition-transform hover:scale-105 md:inline-flex"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
