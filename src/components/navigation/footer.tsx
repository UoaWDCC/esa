import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#141212] text-white w-full pt-10 pb-6">
    {/* Top full-width divider */}
    <hr className="border-t border-white w-full" />

    <div className="max-w-6xl mx-auto px-4 mt-8">

        {/* Layout with Column 1 separated */}
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Column 1: Social Media */}
          <div className="flex flex-col mt-4 md:mt-6 md:ml-15">
            <div className="flex flex-col items-center">
              <h6 className="text-sm font-sm mb-1 text-center">Follow Us!</h6>
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
          </div>

          {/* Grouped Columns 2–4 */}
          <div className="flex flex-col md:flex-row md:gap-x-25 mt-6 md:mt-0 md:mr-65">
            
            {/* Column 2 */}
            <div className="flex flex-col items-center md:items-start">
              <h6 className="text-sm font-sm mb-1">Heading</h6>
              <ul className="space-y-1 text-sm text-center md:text-left">
                <li>Marketing</li>
                <li>About Us</li>
                <li>Text filler</li>
                <li>Text filler</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center md:items-start">
              <h6 className="text-sm font-sm mb-1">Heading</h6>
              <ul className="space-y-1 text-sm text-center md:text-left">
                <li>Gallery</li>
                <li>Events</li>
                <li>Text filler</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center md:items-start">
              <h6 className="text-sm font-sm mb-1">Contact Us</h6>
              <ul className="space-y-1 text-sm text-center md:text-left">
                <li>Contact 1</li>
                <li>Contact option 2</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-t border-white mt-10 mb-4" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white">
          <p className="mb-4 md:mb-0">© Eastern Students Association 2025</p>

          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-0.25 md:p-0.5">
            <img
              src="/assets/esa_logo.png"
              alt="ESA Logo"
              className="h-[1.5rem] md:h-[2rem] object-contain"
            />
            </div>
            <span
              style={{ fontFamily: 'Reservoir Grunge' }}
              className="text-lg text-white leading-tight text-center md:text-right"
            >
              Eastern Students<br />Association
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
