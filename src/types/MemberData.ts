export type MemberData = {
  _id: string;
  timestamp: Date;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other' | 'prefer not to say';
  email: string;
  studentID?: string;
  upi?: string;
  yearOfStudy: '1st Year' | '2nd Year' | '3rd Year' | '4th Year+';
  ethnicity: string;
  convincedByCommitteeMember?: string;
  membershipCardNumber?: string;
  membershipPayment?: string;
  paymentScreenshotLink?: string;
  referrerName?: string;
  notes?: string;
};
