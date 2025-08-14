// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// T3 env
import { env } from 'config/serverEnv';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import Events from './collections/Events';
import { Members } from './collections/Members';
import { Execs } from './collections/Execs';
import storage from '@/collections/Storage';
import { Sponsors } from './collections/Sponsors';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    routes: {
        admin: '/admin',
    },
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
        components: {
            views: {
                csvUpload: {
                    Component: '@/app/(payload)/components/views/CSVUploadView.tsx',
                    path: '/csv-upload',
                    exact: true,
                },
                csvDownload: {
                    Component: '@/app/(payload)/components/views/CSVDownloadView.tsx',
                    path: '/csv-download',
                    exact: true,
                },
            },
            afterNavLinks: [
                '@/app/(payload)/components/CSVUploadLink.tsx',
                '@/app/(payload)/components/CSVDownloadLink.tsx',
            ],
        },
    },
    collections: [Users, Media, Sponsors, Events, Members, Execs],
    editor: lexicalEditor(),
    secret: env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: env.DATABASE_URI || '',
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        storage,
        storage,
        // storage-adapter-placeholder
    ],
});
