import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

type ContentBlock = {type: "title" | "text"; content: string};

function renderHtml(blocks: ContentBlock[]): string {
    return blocks
        .map((b) =>
            b.type === "title"
                ? `<h2 style="margin:16px 0 8px;font-family:sans-serif">${escapeHtml(b.content)}</h2>`
                : `<p style="margin:0 0 12px;font-family:sans-serif;line-height:1.5">${escapeHtml(b.content)}</p>`,
        )
        .join("\n");
}

function renderText(blocks: ContentBlock[]): string {
    return blocks.map((b) => b.content).join("\n\n");
}

function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const subject = `Bedrift: ${data.info.bedrift} – Ny kontaktforespørsel`;
        const content: ContentBlock[] = [
            {
                type: "title",
                content: `Kontaktperson: ${data.info.kontaktperson}, ${data.info.epost}`,
            },
            {type: "text", content: `Kommentar: ${data.comment}`},
            {type: "text", content: `Valgt semester: ${data.time.join(", ")}`},
            {type: "text", content: `Type arrangement: ${data.type.join(", ")}`},
        ];

        const result = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_TO_EMAIL ?? "naeringslivsminister@tihlde.org",
            replyTo: data.info.epost,
            subject,
            text: renderText(content),
            html: renderHtml(content),
        });

        return NextResponse.json({success: true, result: {messageId: result.messageId}});
    } catch (err) {
        console.error("Email send failed:", err);
        return NextResponse.json({error: "Failed to send email"}, {status: 500});
    }
}
