import React from "react";
import { motion } from "framer-motion";

const ExperienceJourney = () => {
  const timeline = [
    {
      year: "Present - 2016",
      role: "Associate Professor",
      institution: "Massachusetts Institute of Technology",
      description:
        "Focused on advanced research and mentoring graduate students in AI and robotics.",
      icon: "\ud83d\udcbc",
    },
    {
      year: "2013 - 2016",
      role: "Doctor of Engineering",
      institution: "Institute of Technology",
      description:
        "Completed groundbreaking research in nanotechnology and received multiple awards.",
      icon: "\ud83c\udf93",
    },
    {
      year: "2009 - 2013",
      role: "Engineering of Master",
      institution: "University of Science and Technology",
      description:
        "Specialized in mechanical engineering with a focus on sustainability.",
      icon: "\ud83d\udcd6",
    },
    {
      year: "2007 - 2009",
      role: "Bachelor of Management",
      institution: "University of Posts and Telecommunications",
      description:
        "Developed strong foundations in management and organizational behavior.",
      icon: "\u2696\ufe0f",
    },
  ];

  return (
    <div className="bg-[#f5ffff] py-16">
      <h2 className="text-4xl font-bold text-center text-[#0093cb] mb-12">
        My Experience Journey
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-4 border-[#0093cb]">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span
                className="absolute -left-7 flex items-center justify-center w-12 h-12 bg-[#0093cb] text-white text-2xl font-bold rounded-full"
                aria-label="icon"
              >
                {item.icon}
              </span>
              <div className="bg-white p-6 shadow-md rounded-2xl">
                <h3 className="text-2xl font-semibold text-[#0093cb]">
                  {item.role}
                </h3>
                <p className="text-lg font-medium text-gray-600">
                  {item.institution}
                </p>
                <p className="text-gray-500 mt-2">{item.description}</p>
                <p className="text-sm text-gray-400 mt-1">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceJourney;
