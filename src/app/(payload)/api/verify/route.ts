import { getPayload } from "@/lib/payload";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest, res: NextResponse) => {
    const searchParams = req.nextUrl.searchParams
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (!email || typeof email !== "string") {
        return new NextResponse("Invalid email", { status: 400 });
    }

    if (!token || typeof token !== "string") {
        return new NextResponse("Invalid token", { status: 400 });
    }

    const payload = await getPayload();

    // Find member with token and check expiration
    const result = await payload.find({
            collection: "members",
            where: {
                and: [
                    { email: { equals: email } },
                    { verificationToken: { equals: token } },
                    { verificationTokenExpiry: { greater_than: new Date() } },
                ]
            },
            limit: 1,
    });

    if (!result.docs.length || !result.docs[0].pendingGoogleId) {
        return NextResponse.redirect(new URL('/verify/result?status=invalid', req.url));
    }

    const member = result.docs[0];

    // Update member (e.g., mark verified or link googleId)
    await payload.update({
        collection: "members",
        id: member.id,
        data: {
            googleId: member.pendingGoogleId,
            verificationToken: null,
            verificationTokenExpiry: null,
            pendingGoogleId: null,
        },
    });

    // Redirect to a result page with success
    return NextResponse.redirect(new URL('/verify/result?status=success', req.url));
}

export { handler as GET };