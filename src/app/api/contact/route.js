import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const sender = requiredEnv("GMAIL_EMAIL");
    const recipient = process.env.GMAIL_EMAIL_RECIPIENT || sender;

    const transporter = nodemailer.createTransport({
      service: process.env.NODEMAILER_SERVICE || "gmail",
      auth: {
        user: sender,
        pass: requiredEnv("GMAIL_PASSWORD"),
      },
    });

    await transporter.sendMail({
      from: sender,
      replyTo: email,
      to: recipient,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #172026;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ message: "Message sent successfully." });
  } catch (error) {
    return Response.json(
      { message: error.message || "Unable to send message right now." },
      { status: 500 }
    );
  }
}
