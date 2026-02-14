import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        const result = await sendContactEmail({ name, email, message });

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Message sent successfully' });
        } else {
            return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
        }

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
