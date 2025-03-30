import { s3Storage } from '@payloadcms/storage-s3';

const storage = s3Storage({
  collections: {
    media: {
      disableLocalStorage: true,
      prefix: "media",
    },
  },
  bucket: process.env.S3_BUCKET || "",
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.S3_SECRET_KEY || "",
    },
    region: process.env.S3_REGION || "",
  }
});

export default storage;