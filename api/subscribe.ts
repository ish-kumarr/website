import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS, // Gmail app password
  },
});

export default async function handler(
  req: NextApiRequest, // Type for the incoming request
  res: NextApiResponse // Type for the outgoing response
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'thecareerdiscovery@gmail.com',
        subject: 'Newsletter Subscription',
        html: `<p>New subscription from: ${email}</p>`,
      });

      res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Subscription failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
