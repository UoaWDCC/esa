import type { CollectionConfig } from 'payload';
import { addDataAndFileToRequest } from 'payload'

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

        if (!file) {
          return Response.json({ message: 'No file uploaded' });
        }

        console.log('Received file:', {
          filename: file.name,
          mimetype: file.mimetype,
          size: file.size,
        });

        return Response.json({ message: 'CSV file uploaded successfully' });
      },
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
