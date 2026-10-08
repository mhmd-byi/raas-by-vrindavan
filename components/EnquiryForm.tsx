"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";

const initial: EnquiryState = { status: "idle" };

const field =
  "mt-2 w-full border border-white/15 bg-surface px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold";

export default function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  if (state.status === "success") {
    return (
      <p role="status" className="border border-gold/60 bg-surface p-8 text-center font-display text-3xl text-gold">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2" noValidate>
      <label className="text-sm">
        Name *
        <input name="name" required autoComplete="name" className={field} />
        {state.errors?.name && <span className="text-xs text-red-400">{state.errors.name}</span>}
      </label>
      <label className="text-sm">
        Phone *
        <input name="phone" type="tel" required autoComplete="tel" className={field} />
        {state.errors?.phone && <span className="text-xs text-red-400">{state.errors.phone}</span>}
      </label>
      <label className="text-sm">
        Email
        <input name="email" type="email" autoComplete="email" className={field} />
        {state.errors?.email && <span className="text-xs text-red-400">{state.errors.email}</span>}
      </label>
      <label className="text-sm">
        Occasion
        <select name="eventType" className={field} defaultValue="Wedding">
          <option>Wedding</option>
          <option>Corporate event</option>
          <option>Poolside party</option>
          <option>Room stay</option>
          <option>Other</option>
        </select>
      </label>
      <label className="text-sm">
        Event date
        <input name="date" type="date" className={field} />
      </label>
      <label className="text-sm">
        Approx. guests
        <input name="guests" type="number" min={1} inputMode="numeric" className={field} />
      </label>
      <label className="text-sm sm:col-span-2">
        Message
        <textarea name="message" rows={4} className={field} />
      </label>
      {/* Honeypot, hidden from people */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {state.status === "error" && !state.errors && (
        <p className="text-sm text-red-400 sm:col-span-2">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-gold px-9 py-4 text-[13px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-white disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
