import type { CollectionConfig } from 'payload';
import { addDataAndFileToRequest } from 'payload';
import { Member } from '@/payload-types';
import Papa from 'papaparse';
import { isTier3 } from '@/access/isTier3';

export const Members: CollectionConfig = {
    slug: 'members',
    admin: {
        hidden: false,
    },
    access: {
        read: () => true,
        create: isTier3,
        update: isTier3,
        delete: isTier3,
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
                    Timestamp: 'timestamp',
                    'First Name': 'firstName',
                    'Last Name': 'lastName',
                    'Email Address': 'email',
                    'Student ID': 'studentID',
                    UPI: 'upi',
                    'Year of Study': 'yearOfStudy',
                    "What's Your Ethnicity?": 'ethnicity',
                    'Which ESA committee member convinced you to sign-up?':
                        'convincedByCommitteeMember',
                    'ESA membership card number': 'membershipCardNumber',
                    'Membership Payment': 'membershipPayment',
                    'Please upload the screenshot of your payment:': 'paymentScreenshotLink',
                    'Person who referred you (Full Name) - if applicable': 'referrerName',
                    Notes: 'notes',
                };

                // Parse the CSV file as an array of Member objects. Assume there are headers in the CSV file.
                const csvString = file.data.toString('utf-8');
                const trimmedCsv = csvString
                    .split('\n')
                    .map((line) =>
                        line.split(',').slice(0, Object.keys(headerMap).length).join(','),
                    )
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
                        }),
                    ),
                );

                return Response.json(
                    { message: 'CSV file uploaded and members created successfully' },
                    { status: 200 },
                );
            },
        },
        {
            path: '/can-create',
            method: 'post',
            handler: async (req) => {
                await addDataAndFileToRequest(req);

                // Cast data to Member type
                const data = req.data as Member;

                let canCreate = true;
                let errorMessage = '';

                // Check whether there is a duplicate email.
                const existingMembers = await req.payload.find({
                    collection: 'members',
                    where: {
                        email: { equals: data.email },
                    },
                });

                // If there are members with the same email, check if the year in the timestamp is the same.
                if (existingMembers.totalDocs !== 0) {
                    const existingMember = existingMembers.docs[0] as Member;

                    const existingYear = new Date(existingMember.timestamp).getFullYear();
                    const newYear = new Date(data.timestamp).getFullYear();

                    // Check if the year of the existing member matches the year of the new member
                    if (existingMember.email === data.email && existingYear === newYear) {
                        errorMessage = 'A member with this email already exists for this year.';
                        canCreate = false;
                    }
                }

                if (canCreate) {
                    return Response.json({ canCreate: true }, { status: 200 });
                } else {
                    return Response.json(
                        { canCreate: false, error: errorMessage },
                        { status: 400 },
                    );
                }
            },
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
                { label: 'prefer not to say', value: 'prefer not to say' },
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
                { label: '4th Year+', value: '4th Year+' },
            ],
            required: true,
        },
        {
            name: 'ethnicity',
            type: 'text',
            required: true,
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
        {
            name: 'googleId',
            type: 'text',
            admin: {
                hidden: true,
            },
            unique: true,
        }
    ],
    hooks: {
        // Ensure that duplicate emails are not allowed within the same year
        // This hook runs before creating a member (updates are ignored)
        beforeChange: [
            async ({ data, req, operation }) => {
                if (operation === 'create') {
                    const { email, timestamp } = data;

                    if (!email || !timestamp) return;

                    const year = new Date(timestamp).getFullYear();

                    // Search for existing member with the same email and year
                    const existing = await req.payload.find({
                        collection: 'members',
                        where: {
                            and: [
                                { email: { equals: email } },
                                {
                                    timestamp: {
                                        greater_than_equal: `${year}-01-01T00:00:00.000Z`,
                                        less_than: `${year + 1}-01-01T00:00:00.000Z`,
                                    },
                                },
                            ],
                        },
                    });

                    if (existing.docs.length > 0) {
                        throw new Error(
                            `A member with email "${email}" has already registered in ${year}.`,
                        );
                    }
                }
            },
        ],
    },
};
