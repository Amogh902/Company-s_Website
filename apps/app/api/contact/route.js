import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: ["your@email.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ error });
  }
}
