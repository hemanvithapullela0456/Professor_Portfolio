import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Showcasing Research, Projects, and Achievements
          </motion.p>
        </div>
      </header>

      <Section id="about" title="About the Professor">
        <p>Details about the professor, background, and expertise.</p>
      </Section>
      <Section id="projects" title="Projects">
        <p>Highlights of key projects with descriptions and links.</p>
      </Section>
      <Section id="research" title="Research Papers">
        <p>Comprehensive list of research papers and publications.</p>
      </Section>
      <Section id="conferences" title="Conferences">
        <p>Details of attended and hosted conferences.</p>
      </Section>
      <Section id="achievements" title="Achievements">
        <p>Recognition, awards, and honors received.</p>
      </Section>
      <Section id="blog" title="Blog Posts">
        <p>Insights and writings on various topics.</p>
      </Section>

      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Professor Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;