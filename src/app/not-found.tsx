import Link from 'next/link'

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>

      <div className="flex space-x-6">
        <Link href="/home" className="hover:underline">
          Go to Home
        </Link>
        <Link href="/" className="hover:underline">
          About Us
        </Link>
        <Link href="/" className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  )
}
