import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '@/models/User';
import { connectDB } from '@/lib/mongodb';

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export async function POST(req: Request) {
    try {
        await connectDB();
        const { idToken } = await req.json();

        if (!idToken) {
            return NextResponse.json({ message: 'Token is required' }, { status: 400 });
        }

        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) {
            return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
        }

        const { sub: googleId, email, name, picture: avatar } = payload;

        let user = await User.findOne({ email });

        if (user) {
            if (!user.googleId) {
                user.googleId = googleId;
                user.avatar = avatar;
                await user.save();
            }
        } else {
            user = new User({
                name,
                email,
                googleId,
                avatar,
            });
            await user.save();
        }

        const tokenData = { userId: user._id.toString(), email: user.email };
        const token = jwt.sign(
            tokenData,
            process.env.JWT_SECRET!,
            { expiresIn: '7d' }
        );

        return NextResponse.json({
            success: true,
            token,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                avatar: user.avatar
            }
        });

    } catch (error) {
        console.error('Google Auth Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
