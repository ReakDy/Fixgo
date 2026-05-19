import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0F172A]/80 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-4xl font-bold text-cyan-400 hover:scale-105 duration-300"
        >
          FixGo
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-gray-300 font-medium">

          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="hover:text-cyan-400 transition duration-300"
          >
            Services
          </Link>

          <Link
            to="/tracking"
            className="hover:text-cyan-400 transition duration-300"
          >
            Tracking
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <Link to="/login">
            <button className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
              Login
            </button>
          </Link>

          <Link to="/request">
            <button className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white">
              Request Repair
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;