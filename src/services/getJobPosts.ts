import type {JobPost} from "@/types/JobPost";

const UPSTREAM = process.env.NEXT_PUBLIC_TIHLDE_API_URL;

export async function getJobPosts(endpoint: string): Promise<JobPost[]> {
    const response = await fetch(`${UPSTREAM}${endpoint}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
    });

    if (!response.ok) {
        throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data.results) ? data.results : [];
}
