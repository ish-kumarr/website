import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Subscribe API route called');

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email } = req.body

  if (!email) {
    console.log('Email is missing in the request body');
    return res.status(400).json({ message: 'Email is required' })
  }

  try {
    console.log('Sending newsletter subscription email for:', email);
    await sendNewsletterSubscriptionEmail(email)
    console.log('Subscription successful');
    res.status(200).json({ message: 'Subscription successful' })
  } catch (error) {
    console.error('Error processing subscription:', error);
    if (error instanceof Error) {
      res.status(500).json({ message: `Error processing subscription: ${error.message}` })
    } else {
      res.status(500).json({ message: 'An unknown error occurred while processing the subscription' })
    }
  }
}

async function sendNewsletterSubscriptionEmail(email: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'thecareerdiscovery@gmail.com',
    subject: 'New Newsletter Subscription',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #356bff; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
          .email { font-weight: bold; color: #356bff; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Newsletter Subscription</h1>
          </div>
          <div class="content">
            <p>A new user has subscribed to the Career Discovery newsletter:</p>
            <p>Email: <span class="email">${email}</span></p>
            <p>Please add this email to your newsletter mailing list.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }

  await transporter.sendMail(mailOptions)
  console.log('Newsletter subscription email sent');
}

