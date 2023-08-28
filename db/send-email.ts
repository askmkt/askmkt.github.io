import dotenv from "dotenv";
import nodeMailer from "nodemailer";

export function getTransportAuth() {
  dotenv.config();
  const user = process.env.NODE_MAILER_USER;
  const pass = process.env.NODE_MAILER_PASS;
  const transportAuth = { user, pass };
  return transportAuth;
}

export function getTransporter(auth: { user: string; pass: string }) {
  const transporter = nodeMailer.createTransport({ service: "gmail", auth });
  return transporter;
}

export function getMailOptions(from: {
  email: string;
  name: string;
  message: string;
  origin: string;
}) {
  dotenv.config();
  const user = process.env.NODE_MAILER_USER;
  return {
    from: user,
    to: user,
    replyTo: from.email,
    subject: `[Ask Marketing Contact] - ${from.name} - ${from.email} sent you an email.`,
    html: `
            <div>
                <p style="margin-bottom: 20px;">${from.name} sent you an email from <code style="display: inline-block; font-size: 12px; color: #66666;">${from.origin}</code></p>
                <div>
                    <h3 style="margin-bottom: 10px;">${from.name} Message</h3>
                    <p>
                        ${from.message}
                    </p>
                </div>
            </div>
        `,
  };
}
