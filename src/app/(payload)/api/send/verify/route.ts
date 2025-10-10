import VerificationEmailTemplate from "@/components/emails/VerificationEmailTemplate";
import { getResend } from "@/lib/resend/getResend";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
    const resend = getResend();
    const { email, token } = await req.body;

    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify?token=${token}&email=${email}`;

    try {
        const { data, error } = await resend.emails.send({
            from: 'ESA <esa@projects.wdcc.co.nz>',
            to: email,
            subject: 'Verify Your Email Address',
            react: VerificationEmailTemplate({ verificationLink }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
        
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}