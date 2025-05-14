// this is purely for "not-found.tsx" functionality and aims to not affect any layouts stacked ontop of it
import './(frontend)/styles.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
