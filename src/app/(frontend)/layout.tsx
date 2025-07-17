import React from 'react';
import 'src/styles/global.css';
import Footer from '../../components/navigation/footer';
import Navbar from '../../components/navigation/Navbar';

// SEO metadata
export const metadata = {
    description: "Connect, compete, and make lasting memories with the Eastern Students Association. We're a social club bringing students together through events, sports, and campus life at the University of Auckland.",
    title: "Eastern Students Association",
    keywords: [
        'Eastern Students Association',
        'ESA Club',
        'University of Auckland',
        'student life',
        'uni events',
        'Auckland clubs',
        'uni sports',
        'student social club',
      ],
      openGraph: {
        title: "Eastern Students Association",
        description: "Connect, compete, and make lasting memories with the Eastern Students Association. We're a social club bringing students together through events, sports, and campus life at the University of Auckland.",
        url: "https://esa.wdcc.co.nz",
        siteName: "Eastern Students Association",
        images: [
          {
            url: "https://esa.wdcc.co.nz/images/logo/esa_logo.png",
            width: 261,
            height: 261,
            alt: "Eastern Students Association logo",
          },
        ],
        locale: "en_NZ",
        type: "website",
      },
      icons: {
        icon: '/images/logo/esa_logo.png',
      },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;

    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                {/* <Navbar /> */}
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
