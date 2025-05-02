import React from 'react'

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
          {/* replace empty container with nav bar component*/}
          <p>navbar</p>
        </>

        <main>{children}</main>

        <>
          {/* replace empty container with footer component*/}
          <p>footer</p>
        </>
      </body>
    </html>
  )
}
