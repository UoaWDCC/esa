import { Exec } from '@/payload-types';
import { ExecData } from '@/types/ExecData';

export default function parseExecs(execs: Exec[]): ExecData[] {
    return execs.map((doc): ExecData => {
        // Safe check for image url
        const imageUrl =
            doc.image &&
            typeof doc.image === 'object' &&
            'url' in doc.image &&
            typeof doc.image.url === 'string'
                ? doc.image.url
                : '/images/logo/esa_mascot.png';

        // Safe check for image alt text
        const imageAlt =
            doc.image &&
            typeof doc.image === 'object' &&
            'alt' in doc.image &&
            typeof doc.image.alt === 'string'
                ? doc.image.alt
                : 'Executive Image';

        return {
            _id: doc.id,
            firstName: doc.firstName,
            lastName: doc.lastName,
            ethnicity: doc.ethnicity,
            degree: doc.degree,
            image: imageUrl,
            imageAlt: imageAlt,
            about: doc.about || '',
            isImportant: doc.isImportant || false,
        };
    });
}
