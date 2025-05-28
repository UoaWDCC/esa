import Link from 'next/link'

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-900">
      <a className="text-white text-5xl p-10">404 - Page Not Found</a>

      <div className="flex space-x-6 text-white">
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
