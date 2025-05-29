import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#141212] text-white w-full px-6 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4">

        {/* Layout with Column 1 separated */}
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Column 1: Social Media */}
          <div className="flex flex-col items-center md:items-start mt-4 md:mt-6 md:ml-[-20px]">
            <h3 className="text-sm font-semibold mb-2 text-center">Follow Us!</h3>
            <div className="flex space-x-2">
              <div className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center hover:opacity-80 transition">
                <FaFacebookF className="text-xl" />
              </div>
              <div className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center hover:opacity-80 transition">
                <FaInstagram className="text-xl" />
              </div>
              <div className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center hover:opacity-80 transition">
                <FaLinkedinIn className="text-xl" />
              </div>
            </div>
          </div>

          {/* Grouped Columns 2–4 */}
          <div className="flex flex-col md:flex-row gap-x-12 mt-6 md:mt-0">
            
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
        <hr className="border-t border-white my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white">
          <p className="mb-4 md:mb-0 font-bold">© Eastern Students Association 2025</p>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-lg">
              Eastern Students Association
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
