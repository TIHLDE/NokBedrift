import type {CompaniesEmail} from '@/types/CompaniesEmail';

const UPSTREAM = process.env.TIHLDE_API_URL;

export async function postCompanyContact(data: CompaniesEmail) {
    const response = await fetch(`${UPSTREAM}` + 'accept-form/', {
        method: 'POST',
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
