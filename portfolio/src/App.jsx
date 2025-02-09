import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/ProjectsPage";
import Research from "./pages/Research";
import Conferences from "./pages/Conferences";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact"; // Import the Contact page
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
