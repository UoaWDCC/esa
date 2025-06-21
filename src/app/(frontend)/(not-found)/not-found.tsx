import Link from 'next/link'

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-zinc-900">
      <h2 className="text-primary-red p-10">404 - Page Not Found</h2>

      <div className="flex space-x-6 text-white">
        {' '}
        {/* Links to other pages for navigation */}
        <Link href="/public" className="hover:underline">
          Go to Home
        </Link>
        <Link href="/public" className="hover:underline">
          About Us
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  )
}
