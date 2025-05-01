import type { CollectionConfig } from 'payload';
import { addDataAndFileToRequest } from 'payload'
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
        await addDataAndFileToRequest(req)

        const file = req.file;

        if (!req.user) {
          return Response.json({ message: 'Unauthorised user' }, { status: 401 });
        }

        if (!file) {
          return Response.json({ message: 'No file uploaded' }, { status: 400 });
        }

        // Parse the CSV file as an array of Member objects. Assume there are headers in the CSV file.
        const csvString = file.data.toString('utf-8');
        const result = Papa.parse(csvString, {
          header: true,
          skipEmptyLines: true,
        });
        const csvData = result.data as Member[];

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
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
  ],
};
