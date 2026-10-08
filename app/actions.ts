"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "email", string>>;
};

const text = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: bots fill hidden fields, humans don't.
  if (text(formData, "website")) return { status: "success", message: "Thank you." };

  const name = text(formData, "name");
  const phone = text(formData, "phone");
  const email = text(formData, "email");

  const errors: NonNullable<EnquiryState["errors"]> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{8,14}$/.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (Object.keys(errors).length) return { status: "error", errors };

  // TODO: deliver to email / CRM. For now the enquiry is only logged on the server.
  console.log("[enquiry]", {
    name,
    phone,
    email,
    eventType: text(formData, "eventType"),
    date: text(formData, "date"),
    guests: text(formData, "guests"),
    message: text(formData, "message"),
  });

  return {
    status: "success",
    message: "Thank you! Our team will get back to you shortly.",
  };
}
