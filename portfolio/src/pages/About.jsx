import React from "react";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="bg-[#f5ffff] text-[#1B2C48] min-h-screen">
      {/* Header Section */}
      <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-base lg:text-xl text-[#b3e6f9]"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Leading, creating, communicating, and advocating to make science a tool for progress.
        </motion.p>
      </div>

      {/* Video and Text Section */}
      <div className="px-6 lg:px-20 py-8 lg:py-16">
        {/* Flex Container for Video and Text */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <video controls className="w-full h-auto rounded-lg shadow-lg">
              <source src="/path/to/your/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Text Section Beside Video */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-base lg:text-lg leading-relaxed mb-6">
              Meredith Schmehl is a neuroscientist, science communicator, and science policy advocate driven to connect science and society through storytelling and community engagement.
            </p>
            <ul className="list-disc list-inside space-y-3 text-base lg:text-lg leading-relaxed mb-6">
              <li>
                As the Public Relations Manager at the National Science Policy Network (NSPN), she created accessible written and visual content to share NSPN's story with the media and the public.
              </li>
              <li>
                Engaged early-career scientists in professional development opportunities related to science policy and science communication.
              </li>
              <li>
                Led advocacy projects as an Early Career Policy Ambassador with the Society for Neuroscience.
              </li>
              <li>
                Written about science policy and related topics through Duke University initiatives.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Full-width Text Below Video */}
        <motion.div
          className="w-full mt-8 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base lg:text-lg leading-relaxed mb-6">
            Meredith also works as an independent science communicator, public speaker, and advocate through multimedia and outreach projects. Her work empowers communities to understand, value, and engage with scientific research.
          </p>
          <p className="text-base lg:text-lg leading-relaxed">
            Meredith holds a PhD in Neurobiology from Duke University, where she studied how the brain uses vision to process sound. She continues to bridge the gap between scientific research and public engagement through impactful communication.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;