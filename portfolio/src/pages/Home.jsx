import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedProfileSection from "./AnimatedProfileSection";

// Animation variants for Framer Motion
const textAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const backgroundImageAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
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
      {/* Background Image Section with Opacity */}
      <motion.div
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/home.png')" }}
        initial="hidden"
        animate="visible"
        variants={backgroundImageAnimation}
      >
        {/* Overlay for background opacity */}
        <div className="absolute inset-0 bg-white opacity-30 z-0"></div>

        <div className="h-full flex items-center justify-center relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
          >
            <motion.h1
              className="text-5xl font-bold text-[#0093cb] drop-shadow-lg"
              variants={textAnimation}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              className="text-lg mt-4 text-[#0093cb] drop-shadow-md"
              variants={textAnimation}
            >
              Showcasing Research, Projects, and Achievements
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Section */}
      <div className="h-screen bg-white flex items-center justify-center">
        {triggerAnimation && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          >
            <AnimatedProfileSection />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
