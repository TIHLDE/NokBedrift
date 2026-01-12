import {NextResponse} from "next/server";

const UPSTREAM = process.env.NEXT_PUBLIC_PHOTON_URL;
const PRIVATE_KEY = process.env.PHOTON_EMIAL_KEY;

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const emailBody = {
            to: "naeringslivsminister@tihlde.org",
            subject: `Bedrift: ${data.info.bedrift} – Ny kontaktforespørsel`,
            content: [
                {
                    type: "title",
                    content: `Kontaktperson: ${data.info.kontaktperson}, ${data.info.epost}`,
                },
                {
                    type: "text",
                    content: `Kommentar: ${data.comment}`,
                },
                {
                    type: "text",
                    content: `Valgt semester: ${data.time.join(", ")}`,
                },
                {
                    type: "text",
                    content: `Type arrangement: ${data.type.join(", ")}`,
                },
            ],
        };

        const baseUrl = UPSTREAM?.endsWith("/") ? UPSTREAM.slice(0, -1) : UPSTREAM;

        const response = await fetch(`${baseUrl}/api/email/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${PRIVATE_KEY}`,
            },
            body: JSON.stringify(emailBody),
        });

        if (!response.ok) {
            const text = await response.text();
            console.error("Upstream error:", text);
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
        }

        const result = await response.json();
        return NextResponse.json({ success: true, result });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
