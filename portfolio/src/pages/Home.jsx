import React from "react";
import { motion } from "framer-motion";
import AnimatedProfileSection from "./AnimatedProfileSection";
import ExperienceJourney from "./ExperienceJourney";

// Animation variants for Framer Motion
const fadeInAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Section 1: Background */}
      <div
        className="min-h-[80vh] md:min-h-screen w-full bg-cover bg-center relative flex flex-col justify-center items-center pt-20 md:pt-24"
        style={{ backgroundImage: "url('/images/home.png')" }}
      >
        {/* Overlay for background opacity */}
        <div className="absolute inset-0 bg-white opacity-30 z-0"></div>
        <div className="relative z-10 px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInAnimation}>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl" style={{ textShadow: "2px 2px 5px black" }}>
              Welcome to My Portfolio
            </h1>
            <p className="text-base md:text-lg mt-4 text-white drop-shadow-lg">
              Showcasing Research, Projects, and Achievements
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Animated Profile Section */}
      <div className="min-h-[80vh] md:min-h-screen bg-white flex items-center justify-center py-16 md:py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation}
        >
          <AnimatedProfileSection />
        </motion.div>
      </div>

      {/* Section 3: Experience Journey */}
      <div className="min-h-[80vh] md:min-h-screen bg-[#f5ffff] flex items-center justify-center py-16 md:py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInAnimation}
        >
          <ExperienceJourney />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
