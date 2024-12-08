import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { fullName, email, phone, userType, grade, schoolName, preferredField, preferredRole, comments } = req.body

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
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

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Career Discovery Form Submission</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f0f4f8;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 20px;">
                    <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);">
                        <!-- Header -->
                        <tr>
                            <td style="background: linear-gradient(135deg, #6366F1 0%, #3B82F6 100%); padding: 40px 20px; text-align: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #ffffff; margin-bottom: 20px;">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                                </svg>
                                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">Career Discovery</h1>
                                <p style="color: #E0E7FF; margin: 10px 0 0; font-size: 16px;">Exciting career journey begins here!</p>
                            </td>
                        </tr>
                        <!-- Intro -->
                        <tr>
                            <td style="padding: 30px 20px; background-color: #EEF2FF; text-align: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #6366F1; margin-bottom: 20px;">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                                </svg>
                                <h2 style="color: #4F46E5; font-size: 24px; margin: 0;">New Form Submission Alert!</h2>
                                <p style="color: #6B7280; margin-top: 10px;">A potential student has just embarked on their career discovery journey.</p>
                            </td>
                        </tr>
                        <!-- Content -->
                        <tr>
                            <td style="padding: 30px 20px;">
                                <!-- Personal Information -->
                                <table role="presentation" style="width: 100%; border-collapse: separate; border-spacing: 0 15px;">
                                    <tr>
                                        <td colspan="2">
                                            <h3 style="color: #4F46E5; font-size: 20px; margin: 0 0 15px; padding-bottom: 10px; border-bottom: 2px solid #E0E7FF;">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 10px; color: #6366F1;">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                </svg>
                                                Personal Information
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>Full Name:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${fullName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>Email:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${email}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>Phone:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${phone}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>User Type:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${userType}</td>
                                    </tr>
                                </table>

                                <!-- Education -->
                                <table role="presentation" style="width: 100%; border-collapse: separate; border-spacing: 0 15px; margin-top: 30px;">
                                    <tr>
                                        <td colspan="2">
                                            <h3 style="color: #4F46E5; font-size: 20px; margin: 0 0 15px; padding-bottom: 10px; border-bottom: 2px solid #E0E7FF;">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 10px; color: #6366F1;">
                                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                                                </svg>
                                                Education
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>Grade:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${grade}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>School Name:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${schoolName}</td>
                                    </tr>
                                </table>

                                <!-- Career Preferences -->
                                <table role="presentation" style="width: 100%; border-collapse: separate; border-spacing: 0 15px; margin-top: 30px;">
                                    <tr>
                                        <td colspan="2">
                                            <h3 style="color: #4F46E5; font-size: 20px; margin: 0 0 15px; padding-bottom: 10px; border-bottom: 2px solid #E0E7FF;">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 10px; color: #6366F1;">
                                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                                                </svg>
                                                Career Preferences
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>Preferred Field:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${preferredField}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;"><strong>Preferred Role:</strong></td>
                                        <td style="padding: 15px; background-color: #F3F4F6; border-radius: 8px;">${preferredRole}</td>
                                    </tr>
                                </table>

                                <!-- Additional Comments -->
                                <table role="presentation" style="width: 100%; margin-top: 30px;">
                                    <tr>
                                        <td>
                                            <h3 style="color: #4F46E5; font-size: 20px; margin: 0 0 15px; padding-bottom: 10px; border-bottom: 2px solid #E0E7FF;">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 10px; color: #6366F1;">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                                </svg>
                                                Additional Comments
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px; background-color: #F3F4F6; border-radius: 8px; font-style: italic;">${comments}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- Call to Action -->
                        <tr>
                            <td style="padding: 30px 20px; background-color: #EEF2FF; text-align: center;">
                                <p style="margin-bottom: 20px; font-size: 18px; color: #4F46E5;">Ready to guide this student on their career journey?</p>
                                <a href="#" style="background-color: #6366F1; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-weight: bold; display: inline-block; transition: background-color 0.3s ease;">Take Action Now</a>
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td style="background-color: #4F46E5; padding: 20px; text-align: center;">
                                <p style="margin: 0; font-size: 14px; color: #E0E7FF;">© 2023 Career Discovery. All rights reserved.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'thecareerdiscovery@gmail.com',
    subject: 'New Career Discovery Form Submission',
    html: htmlTemplate,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Form submitted successfully' })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: `Error submitting form: ${error.message}` })
    } else {
      res.status(500).json({ message: 'An unknown error occurred while submitting the form' })
    }
  }
}

