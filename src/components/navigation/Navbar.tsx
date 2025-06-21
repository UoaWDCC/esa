import Link from 'next/link'

export default function Navbar() {
  return (
    // think of how you can make the width of the navbar scale with the screen size (% units ;o)
    <nav className="mt-5 z-99 absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-black font-roboto-mono text-[1rem] text-primary-white flex justify-between items-center bg-primary-grey-light w-[1100px] px-28 rounded-full gap-4">
      <Link href="/news" className="hover:text-primary-grey">
        NEWS
      </Link>
      <Link href="/contact" className="hover:text-primary-grey">
        CONTACT
      </Link>
      <Link href="/" className="w-10 h-10 flex items-center justify-center">
        <img src="/images/logo/esa_logo.png" alt="sd" />
      </Link>
      <Link href="/events" className="hover:text-primary-grey">
        EVENTS
      </Link>
      <Link href="/about-us" className="hover:text-primary-grey">
        ABOUT US
      </Link>
    </nav>
  )
}
