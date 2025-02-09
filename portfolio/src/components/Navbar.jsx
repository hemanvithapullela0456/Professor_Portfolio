import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNotHomeRoute = location.pathname !== "/";

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Research Papers", path: "/research" },
    { name: "Conferences", path: "/conferences" },
    { name: "Achievements / Awards", path: "/achievements" },
    { name: "Blog Posts", path: "/blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 shadow-md ${
        scrolled || isNotHomeRoute ? "text-[#f5ffff]" : "text-[#0093cb]"
      }`}
      style={{
        backgroundColor: scrolled || isNotHomeRoute ? "#0093cb" : "#f5ffff",
      }}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Left Logo */}
        <Link to="/" className="text-2xl font-bold">
          Professor XYZ, PHD
        </Link>

        {/* Center Links */}
        {!isMobile && (
          <ul className="flex space-x-8 ml-[300px] text-lg">
            {navLinks.map((item, index) => (
              <li key={index} className="relative group">
                <Link to={item.path} className="relative px-2 transition duration-200">
                  {item.name}
                  <span
                    className="absolute left-0 bottom-[-6px] w-0 h-[2px] transition-all duration-300 ease-in-out group-hover:w-full"
                    style={{
                      backgroundColor: scrolled || isNotHomeRoute ? "#f5ffff" : "#0093cb",
                    }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Right Contact Icon */}
        {!isMobile && (
          <Link
            to="/contact"
            className="text-2xl flex items-center justify-center"
            style={{
              height: "100%", // Ensures it aligns with the navbar height
            }}
          >
            <FaEnvelope />
          </Link>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {isMobile && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: menuOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen bg-[#0093cb] text-[#f5ffff] flex flex-col items-center justify-center"
        >
          <button className="absolute top-5 right-6 text-3xl" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>

          <ul className="flex flex-col items-center space-y-6 text-xl">
            {navLinks.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.path}
                  className="relative transition duration-200 inline-block"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                  <span
                    className="block w-0 h-[2px] bg-[#f5ffff] transition-all duration-300 mx-auto group-hover:w-full"
                    style={{ marginTop: "5px" }}
                  ></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="relative transition duration-200 inline-block"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
