import React from 'react'
import 'src/styles/global.css'
<<<<<<< HEAD
import Navbar from './_components/Navbar'
import Footer from 'src/components/navigation/footer'
=======
import Navbar from '../../components/navigation/Navbar'
>>>>>>> 8ef8ed0fbc816d2e0573699899389963fb431cde

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
