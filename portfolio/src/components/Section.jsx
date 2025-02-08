import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="py-20 bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;