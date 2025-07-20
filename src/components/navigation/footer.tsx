import {FaFacebookF, FaInstagram, FaTiktok} from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";

function Footer() {

  const socialLinks = [
    {
      href: "https://www.facebook.com/EasternStudentsAssociation/",
      icon: FaFacebookF,
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/esaaagram/?hl=en",
      icon: FaInstagram,
      label: "Instagram"
    },
    {
      href: "https://www.tiktok.com/@uoaesa",
      icon: FaTiktok,
      label: "TikTok"
    }
  ];

  const footerColumns = [
    {
      heading: "About",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Execs", href: "/execs" },
        { label: "Sponsors", href: "/sponsors" },
      ],
    },
    {
      heading: "Explore",
      links: [
        { label: "Gallery", href: "/gallery" },
        { label: "Events", href: "/events" },
        { label: "News", href: "/news" },
      ],
    },
    {
      heading: "Contact Us",
      links: [
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-primary-grey border-t border-white text-white w-full py-6 mx-auto px-4 flex flex-col items-center">
      {/* Layout with Column 1 separated */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] justify-between w-[80%]">
        {/* Column 1: Social Media */}
        <div className="flex flex-col justify-center items-center order-2 md:order-first mt-6 md:mt-2">
          <p className="text-sm mb-1 opacity-75">Follow Us!</p>
          <div className="flex space-x-2">
            {socialLinks.map(({ href, icon: Icon, label }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                aria-label={label}
                className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center hover:opacity-80 transition"
              >
                <Icon className="text-xl" />
              </Link>
            ))}
          </div>
        </div>

        {/* Grouped Columns 2–4 */}
        <div className="flex justify-center gap-x-10 md:gap-x-[20%] gap-y-6 mt-6 text-sm text-center md:text-left">
            {footerColumns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col items-start text-left">
                <p className="text-sm mb-1 opacity-75">{col.heading}</p>
                <ul className="space-y-1">
                  {col.links.map(({ label, href }, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={href} className="hover:underline">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center gap-2 justify-between text-xs text-white border-t border-white mt-6 md:mt-10 pt-6 w-[80%]">
        <p className="mb-0">&copy; Eastern Students Association 2025</p>

        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-0.25 md:p-0.5">
            <Image
              src="/images/logo/esa_logo.png"
              alt="ESA Logo"
              height={36}
              width={44}
              className="object-contain"
            />
          </div>
          <div className="text-md md:text-lg text-white leading-tight text-start font-reservoir-grunge">
            Eastern Students
            <br />
            Association
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
