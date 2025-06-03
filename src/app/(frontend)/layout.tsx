import React from 'react'
import 'src/styles/global.css'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
        </>

        <main>{children}</main>

        <>
          <Footer />
        </>
      </body>
    </html>
  )
}
