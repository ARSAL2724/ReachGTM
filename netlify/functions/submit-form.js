import nodemailer from "nodemailer";

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    // Parse form data
    const params = new URLSearchParams(event.body);

    const name = params.get("name");
    const email = params.get("email");
    const company = params.get("company");
    const phone = params.get("phone");
    const interest = params.get("interest");
    const message = params.get("message");

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Gmail uses STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"ReachGTM Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email failed" }),
    };
  }
}
