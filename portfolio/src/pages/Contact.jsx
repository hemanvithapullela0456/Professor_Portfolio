import React from "react";
import { motion } from "framer-motion";
import { Mail, Twitter } from "lucide-react";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div className="bg-[#f5ffff] text-[#0093cb] min-h-screen">
      {/* Animated Header */}
      <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-base lg:text-xl text-[#b3e6f9]"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          We'd love to hear from you!
        </motion.p>
      </div>

      {/* Contact Section */}
      <div className="p-10 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {/* Left Side - Contact Info */}
          <div className="bg-[#f5ffff] p-8 rounded-2xl shadow-md border border-[#0093cb]">
            <h2 className="text-2xl font-bold text-[#0093cb] mb-4">Get in Touch</h2>
            <a
              href="mailto:ebalogun@skidmore.edu"
              className="block text-lg font-medium text-gray-700 underline mb-4 hover:text-[#0093cb]"
            >
              ebalogun@skidmore.edu
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0093cb] text-gray-700"
              >
                <Twitter size={28} />
              </a>
              <a
                href="mailto:ebalogun@skidmore.edu"
                className="hover:text-[#0093cb] text-gray-700"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-md border border-[#0093cb]">
            <h2 className="text-2xl font-bold text-[#0093cb] mb-4">Send Us a Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name (required)</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email (required)</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message (required)</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border border-[#0093cb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0093cb]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0093cb] text-white font-bold rounded-lg hover:bg-[#0078a6] focus:ring-2 focus:ring-[#0093cb]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
