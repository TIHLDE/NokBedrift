import type { CompaniesEmail } from "@/types/CompaniesEmail";

export async function postCompanyContact(data: CompaniesEmail) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send contact data");
  }

  return response.json();
}
