// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  getMailOptions,
  getTransportAuth,
  getTransporter,
} from "@/db/send-email";
import type { NextApiRequest, NextApiResponse } from "next";

export default function sendEmailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).end();
  }

  if (
    !req.body ||
    (req.body && !(req.body.name || req.body.email || req.body.message))
  ) {
    res.status(404).end();
  }

  const name = req.body.name as string;
  const email = req.body.email as string;
  const message = req.body.email as string;
  const origin = req.headers.origin as string;

  try {
    const mailOptions = getMailOptions({ email, name, message, origin });

    const transporter = getTransporter(
      getTransportAuth() as { user: string; pass: string }
    );

    transporter.sendMail(mailOptions, (err) => {
      if (err) throw new Error(err.message);
    });
    res.status(200).end();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    res.status(500).end();
  }
}
