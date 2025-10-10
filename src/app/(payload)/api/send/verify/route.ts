import VerificationEmailTemplate from "@/components/emails/VerificationEmailTemplate";
import { getResend } from "@/lib/resend/getResend";
import { NextRequest, NextResponse } from "next/server";
import { env } from 'config/serverEnv';
import { getPayload } from "@/lib/payload";

export async function POST(req: NextRequest) {
    const resend = getResend();
    const body = await req.json();
    const { email, token } = body;

    const payload = await getPayload();

    const verificationLink = `${env.BASE_URL}/api/verify?token=${token}`;
    
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

        await payload.update({
            collection: 'members',
            where: { email: { equals: email } },
            data: { lastVerificationEmailSentAt: new Date().toISOString() },
            limit: 1,
        });

        return NextResponse.json(data);

    } catch (error) {
        console.error('Error sending verification email:', error);
        return NextResponse.json({ error }, { status: 500 });
    }
}