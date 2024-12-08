import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request:', req.method, req.url)

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method)
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { fullName, email, phone, userType, grade, schoolName, preferredField, preferredRole, comments } = req.body

  console.log('Received form data:', req.body)

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration')
    return res.status(500).json({ message: 'Server configuration error' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'thecareerdiscovery@gmail.com',
    subject: 'New Career Discovery Form Submission',
    html: `
      <h1>New Form Submission</h1>
      <h2>Personal Information</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>User Type:</strong> ${userType}</p>
      
      <h2>Education</h2>
      <p><strong>Grade:</strong> ${grade}</p>
      <p><strong>School Name:</strong> ${schoolName}</p>
      
      <h2>Career Preferences</h2>
      <p><strong>Preferred Field:</strong> ${preferredField}</p>
      <p><strong>Preferred Role:</strong> ${preferredRole}</p>
      
      <h2>Additional Comments</h2>
      <p>${comments}</p>
    `,
  }

  try {
    console.log('Attempting to send email...')
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.response)
    res.status(200).json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    if (error instanceof Error) {
      res.status(500).json({ message: `Error submitting form: ${error.message}` })
    } else {
      res.status(500).json({ message: 'An unknown error occurred while submitting the form' })
    }
  }
}

