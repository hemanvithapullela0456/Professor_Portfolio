import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://legendary-garden-b29e23ea65.strapiapp.com/api/projects?populate=Image");
        const data = await response.json();
        setProjects(data.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const tabs = ["All Projects", "AI/ML", "IoT", "Blockchain", "Web Development"];
  const filterOptions = {
    "All Projects": ["All", "AI/ML", "IoT", "Blockchain", "Web Development"],
    "AI/ML": ["All", "ML", "Deep Learning"],
    "IoT": ["All", "Smart Devices", "Embedded Systems"],
    "Blockchain": ["All", "Smart Contracts", "DeFi"],
    "Web Development": ["All", "Frontend", "Backend", "Full Stack"],
  };

  const filteredContent = projects
    .filter((project) =>
      project.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((project) => (filter === "All" ? true : project.Tags.includes(filter)));

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                Project Description
              </motion.p>
      </div>

      <div className="px-4 lg:px-16 py-4 lg:py-8">
        <motion.div className="flex justify-center overflow-x-auto py-4 border-b border-[#0093cb]">
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                className={`flex-shrink-0 text-base lg:text-lg font-semibold px-4 py-2 relative ${
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

        <motion.div className="my-4 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder={`Search ${activeTab.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-[#0093cb] rounded-lg"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-[#0093cb] rounded-lg"
          >
            {filterOptions[activeTab].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div className="mt-4">
          <motion.h2 className="text-2xl font-semibold mb-4">{activeTab}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContent.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <img
  src={project.Image?.formats?.medium?.url || project.Image?.url || "/images/default.jpg"}
  alt={project.Title}
  className="w-full h-40 object-cover"
/>

                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.Title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {expandedProject && (
          <div className="fixed inset-0 bg-[rgba(255,255,255,0.7)] flex items-center justify-center z-50" onClick={closeModal}>
            <motion.div className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={closeModal}>✕</button>
              <h2 className="text-2xl font-bold mb-4">{expandedProject.Title}</h2>
              <img
  src={expandedProject.Image?.formats?.medium?.url || expandedProject.Image?.url || "/images/default.jpg"}
  alt={expandedProject.Title}
  className="w-full h-40 object-cover mb-4 rounded"
/>

              <p className="text-gray-600 mt-4">{expandedProject.Description[0]?.children[0]?.text}</p>
              <p className="text-sm text-gray-500 mt-4">Completed: {expandedProject.Date}</p>
              <div className="flex gap-4 mt-2">
                <a href={expandedProject.Github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                <a href={expandedProject.Demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;