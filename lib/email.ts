import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
    try {
        await transporter.sendMail({
            from: `"Interwise AI" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        });
        return { success: true };
    } catch (error) {
        console.error('Email sending error:', error);
        return { success: false, error };
    }
};

export const sendContactEmail = async (data: { name: string, email: string, message: string }) => {
    const html = `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
                ${data.message}
            </div>
        </div>
    `;
    return sendEmail(process.env.EMAIL_USER!, `New Contact from ${data.name}`, html);
};

export const sendWelcomeEmail = async (name: string, email: string) => {
    const html = `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h1 style="color: #8b5cf6;">Welcome to Interwise AI, ${name}!</h1>
            <p>We're thrilled to have you on board. Start your journey to mastering interviews today.</p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" style="display: inline-block; padding: 12px 24px; background: #8b5cf6; color: white; text-decoration: none; border-radius: 8px; margin-top: 20px;">Get Started</a>
        </div>
    `;
    return sendEmail(email, "Welcome to Interwise AI", html);
};
