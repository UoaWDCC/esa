import VerificationEmailTemplate from "@/components/emails/VerificationEmailTemplate";
import { getPayload } from "@/lib/payload";
import { getResend } from "@/lib/resend/getResend";
import { NextRequest, NextResponse } from "next/server";
import { env } from 'config/serverEnv';

export async function POST(req: NextRequest) {
    const resend = getResend();
    const body = await req.json();
    const { email } = body;

    const createToken = async () => {
        // Logic to create a verification token and update the member's document
        const token = Math.random().toString(36).substring(2); // Simple token generation
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + 1); // Token valid for 1 hour

        const payload = await getPayload();

        await payload.update({
            collection: 'members',
            where: {
                email: { equals: email },
            },
            data: {
                verificationToken: token,
                verificationTokenExpiry: expiry.toISOString(),
            }
        });

        return token;
    }

    const token = await createToken();

    const verificationLink = `${env.BASE_URL}/api/verify?token=${token}&email=${email}`;

    console.log('Verification link:', verificationLink);

    try {
        const { data, error } = await resend.emails.send({
            from: 'ESA <esa@projects.wdcc.co.nz>',
            to: email,
            subject: 'Verify Your Email Address',
            react: VerificationEmailTemplate({ verificationLink }),
        });

        if (error) {
            console.error('Error sending verification email:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);

    } catch (error) {
        console.error('Error sending verification email:', error);
        return NextResponse.json({ error }, { status: 500 });
    }
}