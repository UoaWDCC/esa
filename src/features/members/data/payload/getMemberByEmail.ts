'use server'

import { getPayload } from "@/lib/payload";

export const getMemberByEmail = async (email: string) => {
  const payload = await getPayload();

  const { docs } = await payload.find({
    collection: "members",
    where: { email: { equals: email } },
    limit: 1,
  });

  return docs.length > 0 ? docs[0] : null;
};