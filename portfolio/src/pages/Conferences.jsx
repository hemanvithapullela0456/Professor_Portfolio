import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { conferences } from "../data/conferenceData"; // Import the conference data

// Define animation variants
const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Conferences = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredConferences, setFilteredConferences] = useState(conferences);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = conferences.filter(
      (conf) =>
        conf.title.toLowerCase().includes(query) ||
        conf.location.toLowerCase().includes(query) ||
        conf.description.toLowerCase().includes(query)
    );
    setFilteredConferences(filtered);
  };

  return (
    <div className="bg-[#f5ffff] text-[#1B2C48] min-h-screen">
      {/* Header Section */}
      <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Conferences
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl text-[#b3e6f9]"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Exploring impactful conferences, presentations, and collaborations in the field of computer science.
        </motion.p>
      </div>

      <div className="px-6 lg:px-32 py-8 lg:py-16">
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          <input
            type="text"
            placeholder="Search conferences by title, location, or description..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb] focus:border-transparent shadow-sm transition-all duration-200 placeholder-gray-400 bg-white"
          />
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          <div className="hidden lg:block">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0093cb]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredConferences.map((conf) => (
                  <tr
                    key={conf.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {conf.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {conf.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {conf.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {conf.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={conf.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0093cb] hover:text-[#0077a8] underline transition-colors duration-200"
                      >
                        Visit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:hidden">
            {filteredConferences.map((conf) => (
              <div
                key={conf.id}
                className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {conf.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{conf.date}</p>
                <p className="text-sm text-gray-600 mt-1">{conf.location}</p>
                <p className="text-sm text-gray-600 mt-2">{conf.description}</p>
                <a
                  href={conf.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0093cb] hover:text-[#0077a8] underline mt-2 inline-block"
                >
                  Visit
                </a>
              </div>
            ))}
          </div>
        </motion.div>
        {filteredConferences.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-gray-500">No conferences found.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Conferences;