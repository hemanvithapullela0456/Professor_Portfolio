import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react"; // Corrected the icon import

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://legendary-garden-b29e23ea65.strapiapp.com/api/blogs"
        );
        const data = await response.json();
        setBlogs(data.data);
        setFilteredBlogs(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(value) ||
      (blog.tags && blog.tags.toLowerCase().includes(value))
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div className="bg-[#f5ffff] text-[#0093cb] min-h-screen">
      {/* Header Section */}
      <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Blog
        </motion.h1>
        <motion.p
          className="text-base md:text-lg lg:text-xl text-[#b3e6f9]"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Insights, research, and updates from the professor.
        </motion.p>
      </div>

      {/* Search Bar */}
      <div className="px-6 lg:px-20 mt-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-[#0093cb] w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search blogs by title or tags..."
            className="w-full pl-10 p-3 rounded-lg border-2 border-[#0093cb] focus:outline-none focus:ring-2 focus:ring-[#0093cb] transition-shadow"
          />
        </div>
      </div>

      {/* Blogs Section */}
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p>Loading blogs...</p>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-500">No blogs found for "{searchTerm}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:px-20">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold text-[#0093cb]">
                {blog.title}
              </h2>
              <p className="text-gray-700 mt-2 line-clamp-3">
                {blog.content}
              </p>
              <p className="text-sm text-gray-500 mt-4">{blog.date}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {blog.tags &&
                  blog.tags.split(",").map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#0093cb] text-white text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
