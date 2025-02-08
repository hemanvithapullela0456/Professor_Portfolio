import React from "react";
import { motion } from "framer-motion";

const dropAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <motion.header
      variants={dropAnimation}
      initial="hidden"
      animate="visible"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }} // Replace with actual image path
    >
      {/* Soft White Overlay for a Clean Look */}
      <div className="absolute inset-0 bg-[#f5ffff] bg-opacity-80"></div>

      {/* Content */}
      <div className="h-full flex items-center justify-center relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-[#0093cb] drop-shadow-lg">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg mt-4 text-[#0093cb] drop-shadow-md">
            Showcasing Research, Projects, and Achievements
          </p>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Home;
