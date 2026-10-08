"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";

const initial: EnquiryState = { status: "idle" };

const field =
  "w-full border border-maroon/25 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gold-dark";

export default function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);

  if (state.status === "success") {
    return (
      <p role="status" className="border border-gold bg-white p-8 text-center font-display text-2xl text-maroon">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2" noValidate>
      <label className="text-sm">
        Name *
        <input name="name" required autoComplete="name" className={field} />
        {state.errors?.name && <span className="text-xs text-red-700">{state.errors.name}</span>}
      </label>
      <label className="text-sm">
        Phone *
        <input name="phone" type="tel" required autoComplete="tel" className={field} />
        {state.errors?.phone && <span className="text-xs text-red-700">{state.errors.phone}</span>}
      </label>
      <label className="text-sm">
        Email
        <input name="email" type="email" autoComplete="email" className={field} />
        {state.errors?.email && <span className="text-xs text-red-700">{state.errors.email}</span>}
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
        <p className="text-sm text-red-700 sm:col-span-2">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="bg-maroon px-8 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-maroon-light disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
