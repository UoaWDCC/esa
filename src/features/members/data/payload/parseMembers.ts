import { Member } from "@/payload-types";
import { MemberData } from "@/types/MemberData";

export default function parseMembers(members: Member[] | Member): MemberData[] {
    if (!Array.isArray(members)) {
        members = [members];
    }

    return members.map((doc): MemberData => {
        return {
            _id: doc.id,
            timestamp: new Date(doc.timestamp),
            firstName: doc.firstName,
            lastName: doc.lastName,
            gender: doc.gender,
            email: doc.email,
            studentID: doc.studentID || undefined,
            upi: doc.upi || undefined,
            yearOfStudy: doc.yearOfStudy,
            ethnicity: doc.ethnicity,
            convincedByCommitteeMember: doc.convincedByCommitteeMember || undefined,
            membershipCardNumber: doc.membershipCardNumber || undefined,
            membershipPayment: doc.membershipPayment || undefined,
            paymentScreenshotLink: doc.paymentScreenshotLink || undefined,
            referrerName: doc.referrerName || undefined,
            notes: doc.notes || undefined,
        }
    });
}
