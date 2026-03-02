import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Create transporter (using Gmail as example - you can change this)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Alternative configuration for other email providers:
    /*
    const transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    */

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contacto@krauser.com.ar',
      subject: 'Nuevo mensaje desde el formulario web',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nuevo mensaje desde la web</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f1f3f4; border-radius: 8px;">
              <h3 style="color: #333; margin: 0 0 10px 0; font-size: 16px;">👤 Información del contacto:</h3>
              <p style="margin: 5px 0; color: #555;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9ff; border-radius: 8px; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px;">💬 Mensaje:</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; padding: 20px; background-color: #f0f8ff; border-radius: 8px;">
              <p style="color: #666; margin: 0; font-size: 14px;">
                📅 Recibido el: ${new Date().toLocaleString('es-AR', { 
                  timeZone: 'America/Argentina/Buenos_Aires',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #888; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de krauser.com.ar</p>
          </div>
        </div>
      `,
      // Also include plain text version
      text: `
Nuevo mensaje desde el formulario web

Información del contacto:
Nombre: ${name}
Email: ${email}

Mensaje:
${message}

Recibido el: ${new Date().toLocaleString('es-AR', { 
  timeZone: 'America/Argentina/Buenos_Aires'
})}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor. Intenta nuevamente.' },
      { status: 500 }
    );
  }
}