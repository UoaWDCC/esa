import { verifyVerificationToken } from "@/lib/jwt/verificationToken";
import { getPayload } from "@/lib/payload";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest, res: NextResponse) => {
    const searchParams = req.nextUrl.searchParams
    const token = searchParams.get("token");

    // Verify token and get its payload
    const verified = verifyVerificationToken(token || '');
    if (!verified) {
        return NextResponse.redirect(new URL('/verify/result?status=invalid', req.url));
    }

    const { email, googleId } = verified;

    const payload = await getPayload();

    // Update member to set googleId 
    await payload.update({
        collection: "members",
        where: {
            email: { equals: email }
        },
        data: {
            googleId: googleId,
        },
    });

    // Redirect to a result page with success
    return NextResponse.redirect(new URL('/verify/result?status=success', req.url));
}

export { handler as GET };