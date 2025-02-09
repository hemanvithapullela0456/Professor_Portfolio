import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [fetchedData, setFetchedData] = useState(null);

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    fetch("https://legendary-garden-b29e23ea65.strapiapp.com/api/abouts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setFetchedData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-[#f5ffff] text-[#1B2C48] min-h-screen">
      {fetchedData && fetchedData.data ? (
        fetchedData.data.map((item) => (
          <div key={item.id}>
            {/* Title and Subtitle Section */}
            <div className="h-[50vh] bg-[#0093cb] flex flex-col justify-center items-start text-[#f5ffff] px-6 lg:px-20 text-left">
              <motion.h1
                className="text-3xl lg:text-5xl font-bold mb-2"
                initial="hidden"
                animate="visible"
                variants={textAnimation}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {item.Title}
              </motion.h1>
              <motion.p
                className="text-base lg:text-xl text-[#b3e6f9]"
                initial="hidden"
                animate="visible"
                variants={textAnimation}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              >
                {item.Subtitle}
              </motion.p>
            </div>

            {/* Video and Text Section */}
            <div className="px-6 lg:px-20 py-8 lg:py-16">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Description */}
                <div className="flex-1">
                  {item.Description.map((desc, index) => (
                    <p key={index} className="text-base text-gray-800 mt-2">
                      {desc.children[0]?.text}
                    </p>
                  ))}
                </div>

                {/* Video */}
                {item.Video ? (
                  <motion.div
                    className="w-full lg:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={textAnimation}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  >
                    <video
                      controls
                      className="w-full h-auto rounded-lg shadow-lg"
                    >
                      <source src={item.Video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                ) : (
                  <p className="text-gray-500 mt-2">No video available</p>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
