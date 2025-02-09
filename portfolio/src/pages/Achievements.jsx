import React, { useState } from "react";
import { motion } from "framer-motion"; 
import awardsData from "../data/awardsData"; 

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("Sponsored Projects");

  const tabs = [
    "Sponsored Projects",
    "International Projects",
    "Special Issues",
    "Awards",
    "Conferences Organized",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Sponsored Projects":
        return (
          <ul className="list-disc list-inside space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {awardsData.sponsoredProjects.map((project, index) => (
              <li key={index}>
                <strong>{project.title}</strong><br />
                Role: {project.role}, Funding Agency: {project.fundingAgency}, Amount: {project.amount}, Duration: {project.duration}
              </li>
            ))}
          </ul>
        );
      case "International Projects":
        return (
          <ul className="list-disc list-inside space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {awardsData.internationalProjects.map((project, index) => (
              <li key={index}>
                <strong>{project.title}</strong><br />
                Funding Agency: {project.fundingAgency}, Amount: {project.amount}, Duration: {project.duration}
              </li>
            ))}
          </ul>
        );
      case "Special Issues":
        return (
          <ul className="list-disc list-inside space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {awardsData.specialIssues.map((issue, index) => (
              <li key={index}>
                <strong>{issue.title}</strong><br />
                Journal: {issue.journal}, Editors: {issue.editors}
              </li>
            ))}
          </ul>
        );
      case "Awards":
        return (
          <ul className="list-disc list-inside space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {awardsData.awards.map((award, index) => (
              <li key={index}>
                <strong>{award.title}</strong><br />
                Conference/Organization: {award.conference || award.organization}, Year: {award.year}
              </li>
            ))}
          </ul>
        );
      case "Conferences Organized":
        return (
          <ul className="list-disc list-inside space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            {awardsData.conferencesOrganized.map((event, index) => (
              <li key={index}>
                <strong>{event.title}</strong><br />
                Location: {event.location}, Date: {event.date}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f5ffff] text-[#1B2C48] min-h-screen">
      <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Achievements
        </motion.h1>
        <motion.p
          className="text-base lg:text-xl text-[#b3e6f9]"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          A showcase of sponsored projects, awards, and conference contributions.
        </motion.p>
      </div>

      <div className="px-4 sm:px-6 lg:px-32 py-8 lg:py-16">
        <motion.div
          className="flex justify-start overflow-x-auto py-4 border-b border-[#0093cb]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                className={`flex-shrink-0 text-sm sm:text-base lg:text-lg font-semibold px-3 py-2 ${
                  activeTab === tab
                    ? "text-[#0093cb] border-b-2 border-[#0093cb]"
                    : "text-gray-500 hover:text-[#0093cb] transition-colors"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-8"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#0093cb] mb-4">{activeTab}</h2>
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;