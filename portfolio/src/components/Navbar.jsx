import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Professor Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#research" className="hover:underline">Research</a></li>
          <li><a href="#conferences" className="hover:underline">Conferences</a></li>
          <li><a href="#achievements" className="hover:underline">Achievements</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
