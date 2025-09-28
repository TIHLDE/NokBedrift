import type { CompaniesEmail } from "@/types/CompaniesEmail";

const UPSTREAM = process.env.NEXT_PUBLIC_TIHLDE_API_URL;

export async function postCompanyContact(data: CompaniesEmail) {
  const baseUrl = UPSTREAM?.endsWith("/") ? UPSTREAM.slice(0, -1) : UPSTREAM;
  const response = await fetch(`${baseUrl}/accept-form/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send mail");
  }

  return response.json();
}
