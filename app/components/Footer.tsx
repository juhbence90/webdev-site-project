import { NavLink } from "react-router";
import { FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="self-start flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span>The Webdeveloper</span>
        </NavLink>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm text-gray-300">
          <NavLink className="transition hover:text-blue-400" to="/">
            Home
          </NavLink>
          <NavLink className="transition hover:text-blue-400" to="/projects">
            Projects
          </NavLink>
          <NavLink className="transition hover:text-blue-400" to="/blog">
            Blog
          </NavLink>
          <NavLink className="transition hover:text-blue-400" to="/about">
            About
          </NavLink>
          <NavLink className="transition hover:text-blue-400" to="/contact">
            Contact
          </NavLink>
        </nav>

        {/* Bottom line */}
        <div className="text-xs text-blue-300 opacity-70">
          © {new Date().getFullYear()} The Webdeveloper. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
