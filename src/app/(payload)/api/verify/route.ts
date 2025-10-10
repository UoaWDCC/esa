import type { NextApiRequest, NextApiResponse } from "next";
import payload from "payload";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { token, email } = req.query;

    if (!token || typeof token !== "string") {
        return res.status(400).send("Invalid token");
    }

    // Find member with token and check expiration
    const result = await payload.find({
            collection: "members",
            where: {
                email: { equals: email },
                verificationToken: { equals: token },
                verificationTokenExpiry: { greater_than: new Date() },
            },
            limit: 1,
    });

    if (!result.docs.length || !result.docs[0].pendingGoogleId) {
        return res.redirect("/verify/result?status=invalid");
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
    return res.redirect("/verification-result?status=success");
}
