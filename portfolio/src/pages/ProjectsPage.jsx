import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects";

// Define animation variants
const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  const { tabs, content, filterOptions } = projectsData;

  const filteredContent = content[activeTab]
    .filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((project) => (filter === "All" ? true : project.tags.includes(filter)));

  const handleProjectClick = (project) => {
    setExpandedProject(project);
  };

  const closeModal = () => {
    setExpandedProject(null);
  };

  return (
    <div className="bg-[#f5ffff] text-[#0093cb] min-h-screen">
      <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-base lg:text-xl text-[#b3e6f9]"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Insights, research, and updates from the professor.
        </motion.p>
      </div>

      <div className="px-4 lg:px-16 py-4 lg:py-8">
                <motion.div
          className="flex justify-center overflow-x-auto py-4 border-b border-[#0093cb]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                className={`flex-shrink-0 text-base lg:text-lg font-semibold px-4 py-2 ${
                  activeTab === tab
                    ? "text-[#0093cb] border-b-2 border-[#0093cb]"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setSearchQuery("");
                  setFilter("All");
                  setExpandedProject(null);
                }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="my-4 flex flex-col md:flex-row gap-4"
          initial="hidden"
          animate="visible"
          variants={sectionAnimation}
        >
          <motion.input
            type="text"
            placeholder={`Search ${activeTab.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
          />
          <motion.select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
          >
            {filterOptions[activeTab].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </motion.select>
        </motion.div>
        <motion.div className="mt-4">
          <motion.h2 className="text-2xl font-semibold mb-4">
            {activeTab}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContent.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {expandedProject && (
          <div
            className="fixed inset-0 bg-[rgba(255,255,255,0.7)] flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{expandedProject.title}</h2>
              <img
                src={`/images/${expandedProject.image}`}
                alt={expandedProject.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {expandedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={expandedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={expandedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Completed: {expandedProject.date}
              </p>
              <p className="text-gray-600 mt-4">{expandedProject.description}</p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;