import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedProfileSection from "./AnimatedProfileSection";

const dropAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.9; 
      if (window.scrollY >= scrollThreshold) {
        setTriggerAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[200vh] w-full">
      <motion.header
        variants={dropAnimation}
        initial="hidden"
        animate="visible"
        className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/imageq.png')" }}
      >
        <div className="absolute inset-0 bg-[#f5ffff] bg-opacity-80"></div>
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
      <div className="h-screen bg-white flex items-center justify-center">
        {triggerAnimation && <AnimatedProfileSection />}
      </div>
    </div>
  );
};

export default Home;
