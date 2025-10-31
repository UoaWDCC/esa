'use client';
import { useEffect } from 'react';

import { SessionProvider } from 'next-auth/react';
export default function SessionWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const disableDragging = () => {
            document.querySelectorAll('a, img').forEach((element) => {
                element.setAttribute('draggable', 'false');
            });
        };
        disableDragging();

        const observer = new MutationObserver(disableDragging);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return <SessionProvider>{children}</SessionProvider>;
}
