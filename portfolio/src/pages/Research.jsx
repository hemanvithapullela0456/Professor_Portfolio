import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_BASE_URL = "https://legendary-garden-b29e23ea65.strapiapp.com/api";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Research = () => {
  const [activeTab, setActiveTab] = useState("Research Areas");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [researchData, setResearchData] = useState({
    "International Journal Papers": [],
    "International Conference Papers": [],
    "Book Chapters": [],
    "Books": [],
  });

  const filterOptions = {
    "Research Areas": ["All"],
    "International Journal Papers": ["All", "2020", "2021", "2022"],
    "International Conference Papers": ["All", "2020", "2021", "2022"],
    "Book Chapters": ["All", "Publisher A", "Publisher B"],
    "Books": ["All", "Publisher X", "Publisher Y"],
  };

  // Fetching Research Data
  const fetchResearchData = async () => {
    try {
      const [journalRes, conferenceRes, bookChapterRes, bookRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/international-journal-papers`),
        axios.get(`${API_BASE_URL}/international-conference-papers`),
        axios.get(`${API_BASE_URL}/book-chapters-collections`),
        axios.get(`${API_BASE_URL}/books-collections`),
      ]);

      setResearchData({
        "International Journal Papers": journalRes.data.data,
        "International Conference Papers": conferenceRes.data.data,
        "Book Chapters": bookChapterRes.data.data,
        "Books": bookRes.data.data,
      });
    } catch (error) {
      console.error("Error fetching research data", error);
    }
  };

  useEffect(() => {
    fetchResearchData();
  }, []);

  // Tab Names
  const tabs = [
    "Research Areas",
    "International Journal Papers",
    "International Conference Papers",
    "Book Chapters",
    "Books",
  ];

  // Filtered Content Based on Tab, Search Query, and Filters
  const filteredContent =
    activeTab === "Research Areas"
      ? [
          "Digital Heritage Preservation",
          "Medical Imagining",
          "Data Science and Its Industrial Applications",
          "Machine Learning",
          "Image Processing",
        ]
      : researchData[activeTab]?.filter((item) => {
          const { Title, Authors, Conference, Publisher, Year } = item;
          const matchesSearchQuery =
            Title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            Authors?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            Conference?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            Publisher?.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesFilter =
            filter === "All" ||
            Year?.toString().includes(filter) ||
            Publisher?.includes(filter) ||
            Conference?.includes(filter);

          return matchesSearchQuery && matchesFilter;
        });

  return (
    <div className="bg-[#f5ffff] text-[#0093cb] min-h-screen">
      {/* Header Section */}
      <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
        >
          Research
        </motion.h1>
        <motion.p
          className="text-base lg:text-xl text-[#b3e6f9]"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.2 }}
        >
          Exploring impactful projects, ideas, and advancements in computer science.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="px-6 lg:px-20 py-6 lg:py-12">
        {/* Tabs */}
        <motion.div
          className="flex justify-center overflow-x-auto py-4 border-b border-[#0093cb]"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <div className="flex space-x-6">
            {tabs.map((tab, index) => (
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
                }}
                variants={itemAnimation}
                transition={{ delay: index * 0.1 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        {activeTab !== "Research Areas" && (
          <motion.div
            className="my-4 flex flex-col md:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={containerAnimation}
          >
            <motion.input
              type="text"
              placeholder={`Search ${activeTab.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-1/2 p-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
              variants={itemAnimation}
            />
            <motion.select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full md:w-1/2 p-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
              variants={itemAnimation}
              transition={{ delay: 0.1 }}
            >
              {filterOptions[activeTab].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </motion.select>
          </motion.div>
        )}

        {/* Tab Content */}
        <motion.div
          className="mt-4"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={itemAnimation}
          >
            {activeTab}
          </motion.h2>
          {activeTab === "Research Areas" ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerAnimation}
            >
              {filteredContent.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-[#0093cb] text-[#f5ffff] px-4 py-2 rounded-lg shadow-md text-center font-medium border border-[#0093cb] hover:bg-[#b3e6f9] transition-colors"
                  variants={itemAnimation}
                  transition={{ delay: index * 0.1 }}
                >
                  {area}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="space-y-4"
              variants={containerAnimation}
            >
              {filteredContent.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#0093cb]"
                  variants={itemAnimation}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold">{item.Title}</h3>
                  {item.Authors && (
                    <p className="text-sm text-gray-600">Authors: {item.Authors}</p>
                  )}
                  {item.Conference && (
                    <p className="text-sm text-gray-600">Conference: {item.Conference}</p>
                  )}
                  {item.Publisher && (
                    <p className="text-sm text-gray-600">Publisher: {item.Publisher}</p>
                  )}
                  {item.Year && (
                    <p className="text-sm text-gray-600">Year: {item.Year}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
