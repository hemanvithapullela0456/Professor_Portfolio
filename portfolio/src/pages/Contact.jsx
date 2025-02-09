import React from "react";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f5ffff]"
      style={{ color: "#0093cb" }}
    >
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="mb-8 text-lg">
          Feel free to reach out with any inquiries or collaboration opportunities.
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-[#0093cb] text-white font-bold rounded-lg hover:bg-[#0078a6]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
