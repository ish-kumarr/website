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
  console.log('Submit form API route called');

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration');
    return res.status(500).json({ message: 'Server configuration error' })
  }

  try {
    console.log('Request body:', req.body);

    if (req.body.email && !req.body.fullName) {
      console.log('Handling newsletter subscription');
      await handleNewsletterSubscription(req.body.email)
    } else {
      console.log('Handling form submission');
      await handleFormSubmission(req.body)
    }

    console.log('Submission successful');
    res.status(200).json({ message: 'Submission successful' })
  } catch (error) {
    console.error('Error processing submission:', error);
    if (error instanceof Error) {
      res.status(500).json({ message: `Error processing submission: ${error.message}` })
    } else {
      res.status(500).json({ message: 'An unknown error occurred while processing the submission' })
    }
  }
}

async function handleNewsletterSubscription(email: string) {
  console.log('Sending newsletter subscription email');
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
          .header { background-color: #4A90E2; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Newsletter Subscription</h1>
          </div>
          <div class="content">
            <p>A new user has subscribed to the Career Discovery newsletter:</p>
            <p><strong>Email:</strong> ${email}</p>
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

async function handleFormSubmission(formData: any) {
  console.log('Sending form submission email');
  const { fullName, email, phone, userType, grade, schoolName, preferredField, preferredRole, comments } = formData

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'thecareerdiscovery@gmail.com',
    subject: 'New Career Discovery Form Submission',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Career Discovery Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4A90E2; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
          .field { margin-bottom: 10px; }
          .label { font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Form Submission</h1>
          </div>
          <div class="content">
            <div class="field"><span class="label">Full Name:</span> ${fullName}</div>
            <div class="field"><span class="label">Email:</span> ${email}</div>
            <div class="field"><span class="label">Phone:</span> ${phone}</div>
            <div class="field"><span class="label">User Type:</span> ${userType}</div>
            <div class="field"><span class="label">Grade:</span> ${grade}</div>
            <div class="field"><span class="label">School Name:</span> ${schoolName}</div>
            <div class="field"><span class="label">Preferred Field:</span> ${preferredField}</div>
            <div class="field"><span class="label">Preferred Role:</span> ${preferredRole}</div>
            <div class="field"><span class="label">Comments:</span> ${comments}</div>
          </div>
        </div>
      </body>
      </html>
    `
  }

  await transporter.sendMail(mailOptions)
  console.log('Form submission email sent');
}

