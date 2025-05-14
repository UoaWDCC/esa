import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#141212] text-white w-full px-6 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Centered Grid Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-max gap-x-20 gap-y-4">
            {/* Column 1: Social Media */}
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-6">
              <h3 className="text-base font-semibold mb-1">Follow Us!</h3>
              <div className="flex space-x-4 text-2xl">
                <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
                <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-base font-semibold mb-1">Heading</h3>
              <ul className="space-y-1 text-sm text-center md:text-left">
                <li>Marketing</li>
                <li>About Us</li>
                <li>Text filler</li>
                <li>Text filler</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-base font-semibold mb-1">Heading</h3>
              <ul className="space-y-1 text-sm text-center md:text-left">
                <li>Gallery</li>
                <li>Events</li>
                <li>Text filler</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-base font-semibold mb-1">Contact Us</h3>
              <ul className="space-y-1 text-sm text-center md:text-left">
                <li>Contact 1</li>
                <li>Contact option 2</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-t border-gray-700 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p className="mb-4 md:mb-0 font-bold">© Eastern Students Association 2025</p>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm">
              Eastern Students Association
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
