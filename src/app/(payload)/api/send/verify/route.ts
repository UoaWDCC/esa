import VerificationEmailTemplate from "@/components/emails/VerificationEmailTemplate";
import { getResend } from "@/lib/resend/getResend";
import { NextRequest, NextResponse } from "next/server";
import { env } from 'config/serverEnv';

export async function POST(req: NextRequest) {
    const resend = getResend();
    const body = await req.json();
    const { email, token } = body;

    const verificationLink = `${env.BASE_URL}/api/verify?token=${token}`;

    console.log('Verification link:', verificationLink);

    try {
        const { data, error } = await resend.emails.send({
            from: 'noreply@esa.projects.wdcc.co.nz',
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