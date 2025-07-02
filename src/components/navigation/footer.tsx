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
      heading: "Heading 1",
      links: [
        { label: "Marketing", href: "/marketing" },
        { label: "About Us", href: "/about" },
        { label: "filler", href: "/" },
        { label: "filler", href: "/" },
      ],
    },
    {
      heading: "Heading 2",
      links: [
        { label: "Gallery", href: "/gallery" },
        { label: "Events", href: "/events" },
        { label: "filler", href: "/" },
      ],
    },
    {
      heading: "Contact Us",
      links: [
        { label: "Contact 1", href: "/contact" },
        { label: "Contact Option 2", href: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-primary-grey border-t border-white text-white w-full py-6 mx-auto px-4">
      {/* Layout with Column 1 separated */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Column 1: Social Media */}
        <div className="flex flex-col justify-center items-center order-2 md:order-first md:ml-15">
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
        <div className="flex flex-wrap justify-center gap-x-10 md:gap-x-25 gap-y-6 mt-6 w-full text-sm text-center md:text-left">
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

      {/* Divider Line */}
      <hr className="border-t border-white mt-10 mb-4" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white">
        <p className="mb-4 md:mb-0">&copy; Eastern Students Association 2025</p>

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
          <span
            style={{ fontFamily: 'Reservoir Grunge' }}
            className="text-lg text-white leading-tight text-center"
          >
            Eastern Students
            <br />
            Association
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
