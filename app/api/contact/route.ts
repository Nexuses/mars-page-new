import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, positions } = body

    // Validate required fields
    if (!name || !email || !company || !positions) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      console.error('Missing environment variables:', {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASS: !!process.env.SMTP_PASS,
        FROM_EMAIL: !!process.env.FROM_EMAIL,
        TO_EMAIL: !!process.env.TO_EMAIL
      })
      return NextResponse.json(
        { error: 'Email configuration is missing. Please check environment variables.' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission - ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
             <!-- Header with Logo -->
             <div style="background: linear-gradient(135deg, #f5f0eb 0%, #ede8f0 50%, #e8e5f5 100%); padding: 30px 20px; text-align: center; border-bottom: 3px solid #B3262F;">
               <div style="background-color: transparent; padding: 20px; display: inline-block;">
                 <div style="background-color: transparent; padding: 10px; display: inline-block; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                   <h1 style="margin: 0; color: #B3262F; font-size: 36px; font-weight: bold; letter-spacing: 3px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">MARS</h1>
                   <p style="margin: 5px 0 0 0; color: #7cb342; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Solutions Group</p>
                 </div>
               </div>
             </div>
            
            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #B3262F; font-size: 24px; margin: 0 0 30px 0; text-align: center; font-weight: 600;">
                New Contact Form Submission
              </h2>
              
              <!-- Contact Details Card -->
              <div style="background-color: #f8f5f5; border: 2px solid #e0e0e0; border-radius: 12px; padding: 25px; margin-bottom: 25px;">
                <h3 style="color: #333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #B3262F; padding-bottom: 8px;">
                  Contact Information
                </h3>
                <div style="display: grid; gap: 12px;">
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #B3262F; color: white; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; margin-right: 15px; min-width: 80px;">NAME</span>
                    <span style="color: #333; font-size: 16px; font-weight: 500;">${name}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #B3262F; color: white; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; margin-right: 15px; min-width: 80px;">EMAIL</span>
                    <span style="color: #333; font-size: 16px; font-weight: 500;">${email}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #B3262F; color: white; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; margin-right: 15px; min-width: 80px;">COMPANY</span>
                    <span style="color: #333; font-size: 16px; font-weight: 500;">${company}</span>
                  </div>
                  <div style="display: flex; align-items: flex-start;">
                    <span style="background-color: #B3262F; color: white; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; margin-right: 15px; min-width: 80px; margin-top: 2px;">POSITIONS</span>
                    <span style="color: #333; font-size: 16px; font-weight: 500; line-height: 1.4;">${positions}</span>
                  </div>
                </div>
              </div>
              
              <!-- Submission Info -->
              <div style="background-color: #e8f5e8; border-left: 4px solid #7cb342; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <div style="display: flex; align-items: center;">
                  <span style="background-color: #7cb342; color: white; padding: 8px; border-radius: 50%; margin-right: 15px; font-size: 16px;">⏰</span>
                  <div>
                    <p style="margin: 0; color: #2d5a2d; font-size: 14px; font-weight: 600;">Submission Received</p>
                    <p style="margin: 5px 0 0 0; color: #2d5a2d; font-size: 16px;">${new Date().toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div style="text-align: center; background-color: #f8f5f5; padding: 25px; border-radius: 12px; border: 2px dashed #B3262F;">
                <p style="margin: 0; color: #B3262F; font-size: 16px; font-weight: 600;">
                  🚀 Ready to find your next great hire? Let's connect!
                </p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This email was sent from the <strong>MARS TalentFlex</strong> contact form.
              </p>
              <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
                © 2024 MARS TalentFlex. All rights reserved.
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Positions Looking For: ${positions}
        
        Submission Time: ${new Date().toLocaleString()}
        
        This email was sent from the MARS Returnship contact form.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
