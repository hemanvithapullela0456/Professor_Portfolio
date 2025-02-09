import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Research Papers", path: "/research" },
    { name: "Conferences", path: "/conferences" },
    { name: "Achievements / Awards", path: "/achievements" },
    { name: "Blog Posts", path: "/blog" },
  ];

  return (
    <footer className="bg-[#0093cb] text-[#f5ffff] py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <p className="text-lg">
            <a href="mailto:research@professor.edu" className="hover:underline">
              research@professor.edu
            </a>
          </p>
          <p className="text-lg">
            <a href="mailto:hello@professor.edu" className="hover:underline">
              hello@professor.edu
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Connect</h2>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://linkedin.com/in/professor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b3e6f9] transition-all duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/professor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b3e6f9] transition-all duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/professor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b3e6f9] transition-all duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:contact@professor.edu"
              className="hover:text-[#b3e6f9] transition-all duration-200"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-lg hover:underline transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Office Address</h2>
          <p className="text-lg">Room 123, Computer Science Building</p>
          <p className="text-lg">University Name</p>
          <p className="text-lg">City, Country</p>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-[#b3e6f9] pt-8">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Professor Portfolio. All Rights Reserved.
        </p>
        <p className="text-lg mt-2">
          <a href="/privacy" className="hover:underline">
            Data Privacy
          </a>{" "}
          |{" "}
          <a href="/imprint" className="hover:underline">
            Imprint
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;