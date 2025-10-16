import { NextResponse } from 'next/server';
import { getPayload } from '@/lib/payload';

export async function GET() {
    try {
        const payload = await getPayload();
        const result = await payload.find({ collection: 'sponsor', limit: 100 });
        return NextResponse.json(result, { status: 200 });
    } catch (err) {
        console.error('Error fetching sponsors from Payload', err);
        return NextResponse.json({ error: 'Failed to fetch sponsors' }, { status: 500 });
    }
}
