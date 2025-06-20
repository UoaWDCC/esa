import type { CollectionConfig } from 'payload';
import { addDataAndFileToRequest } from 'payload';
import { Member } from '@/payload-types';
import Papa from 'papaparse';

export const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    hidden: true, 
  },
  access: {
    read: () => true,
  },
  endpoints: [
    {
      path: '/csv-upload',
      method: 'post',
      handler: async (req) => {
        await addDataAndFileToRequest(req);

        const file = req.file;

        if (!req.user) {
          return Response.json({ message: 'Unauthorised user' }, { status: 401 });
        }

        if (!file) {
          return Response.json({ message: 'No file uploaded' }, { status: 400 });
        }

        const headerMap: Record<string, string> = {
          "Timestamp": "timestamp",
          "First Name": "firstName",
          "Last Name": "lastName",
          "Email Address": "email",
          "Student ID": "studentID",
          "UPI": "upi",
          "Year of Study": "yearOfStudy",
          "What's Your Ethnicity?": "ethnicity",
          "Which ESA committee member convinced you to sign-up?": "convincedByCommitteeMember",
          "ESA membership card number": "membershipCardNumber",
          "Membership Payment": "membershipPayment",
          "Please upload the screenshot of your payment:": "paymentScreenshotLink",
          "Person who referred you (Full Name) - if applicable": "referrerName",
          "Notes": "notes"
        };

        // Parse the CSV file as an array of Member objects. Assume there are headers in the CSV file.
        const csvString = file.data.toString('utf-8');
        const trimmedCsv = csvString
          .split('\n')
          .map(line => line.split(',').slice(0, Object.keys(headerMap).length).join(','))
          .join('\n');
        
        const result = Papa.parse<Record<string, string>>(trimmedCsv, {
          header: true,
          transformHeader: (header) => headerMap[header.trim()] || header,
          skipEmptyLines: true,
        });

        // Map parsed data to Member type directly
        const csvData = result.data.map((row) => ({
          timestamp: row.timestamp,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          studentID: row.studentID || '',
          upi: row.upi || '',
          yearOfStudy: row.yearOfStudy || '',
          ethnicity: row.ethnicity || '',
          convincedByCommitteeMember: row.convincedByCommitteeMember || '',
          membershipCardNumber: row.membershipCardNumber || '',
          membershipPayment: row.membershipPayment || '',
          paymentScreenshotLink: row.paymentScreenshotLink || '',
          referrerName: row.referrerName || '',
          notes: row.notes || '',
        })) as Member[];

        // Save each member to the database
        await Promise.all(
          csvData.map((row) =>
            req.payload.create({
              collection: 'members',
              data: row,
            })
          )
        );

        return Response.json({ message: 'CSV file uploaded and members created successfully' }, { status: 200 });
      }
    },
  ],
  fields: [
    {
      name: 'timestamp',
      type: 'date',
      required: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'gender',
      type: 'select',
      options: [
        { label: 'male', value: 'male' },
        { label: 'female', value: 'female' },
        { label: 'other', value: 'other' },
        { label: 'prefer not to say', value: 'prefer not to say' }
      ],
      required: true,
      defaultValue: 'prefer not to say',
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'studentID',
      label: 'Student ID',
      type: 'text',
    },
    {
      name: 'upi',
      label: 'UPI',
      type: 'text',
    },
    {
      name: 'yearOfStudy',
      type: 'select',
      options: [
        { label: '1st Year', value: '1st Year' },
        { label: '2nd Year', value: '2nd Year' },
        { label: '3rd Year', value: '3rd Year' },
        { label: '4th Year+', value: '4th Year+' }
      ],
      required: true,
    },
    {
      name: 'ethnicity',
      type: 'text',
    },
    {
      name: 'convincedByCommitteeMember',
      type: 'text',
    },
    {
      name: 'membershipCardNumber',
      type: 'text',
    },
    {
      name: 'membershipPayment',
      type: 'text',
    },
    {
      name: 'paymentScreenshotLink',
      type: 'text',
    },
    {
      name: 'referrerName',
      type: 'text',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
  ],
};
