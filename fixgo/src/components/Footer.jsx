import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-14 pb-6 px-6 md:px-16">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">
            FixGo
          </h1>

          <p className="text-gray-400 mt-4 leading-7">
            Fast and trusted repair service platform.
            Users can request technicians directly
            to their location anytime.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a
              href="/"
              className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-cyan-500 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="/"
              className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-pink-500 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="/"
              className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-blue-500 duration-300"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-cyan-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Services
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              About
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Services
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Phone Repair</li>
            <li>Laptop Repair</li>
            <li>TV Repair</li>
            <li>Home Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Contact
          </h2>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+855 12 345 678</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <span>support@fixgo.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-6">
        © 2026 FixGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;