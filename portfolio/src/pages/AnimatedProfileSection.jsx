import React from "react";
import { motion } from "framer-motion";

const AnimatedProfileSection = () => {
  const imageAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="relative max-w-6xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center relative bg-transparent">
        <div className="p-6 sm:p-8 bg-[#0093cb] text-white w-full md:w-1/2 relative z-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Meredith Schmehl</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Meredith Schmehl is a neuroscientist and science communicator based
            in Durham, North Carolina. She writes and speaks about science and
            policy, produces multimedia projects such as podcasts, and leads
            other scientists in communication and advocacy opportunities.
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Recognized as one of the{" "}
            <span className="italic font-semibold">
              Triangle Business Journal’s 40 Under 40 Leaders
            </span>{" "}
            and a recipient of several science communication and leadership
            awards, Meredith is an advocate for diverse and inclusive STEM
            education for a more equitable global community.
          </p>
          <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-[#1B2C48] font-bold rounded-full shadow-md hover:bg-gray-200 transition-all">
            Contact
          </button>
        </div>

        <motion.div
          className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-[500px] relative"
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/imageq.png"
              alt="Profile"
              className="w-[120%] h-full object-cover rounded-lg shadow-lg -translate-y-10 md:translate-y-0 md:-translate-x-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedProfileSection;
