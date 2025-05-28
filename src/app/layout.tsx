import 'src/styles/global.css'

export const metadata = {
  description: 'Placeholder layout for not-found.tsx functionality and compatibility with next.js',
  title: 'Functioality Placeholder',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
