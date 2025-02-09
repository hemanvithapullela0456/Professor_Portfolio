
import React from 'react';
import { motion } from 'framer-motion'; 
import { blogData } from '../data/blogData';

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Blog = () => {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:px-20">
        {blogData.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={cardAnimation}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-700 mt-2">{blog.content}</p>
            <p className="text-sm text-gray-500 mt-4">{blog.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;