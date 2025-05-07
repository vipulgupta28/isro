import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import image from "../assets/nasa-jlV2k_Fx0fc-unsplash.jpg";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-black" />
      {/* Animated stars */}

  <div className="stars" />
  <div className="twinkling" />


      {/* Animated stars */}
      <div className="absolute inset-0">
        <div className="stars" />
        <div className="twinkling" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2"
            >
              <div className="inline-block">
                <span className="bg-black text-white text-sm font-medium px-4 py-1 rounded-full">
                  Exploring New Frontiers
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                India's Gateway to
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Space</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-gray-300 text-lg max-w-lg"
            >
              From launching satellites to exploring Mars, ISRO continues to push the boundaries of space exploration and technological innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex gap-4"
            >
              <button className="group relative px-6 py-3 bg-white hover:bg-blue-600 text-black rounded-lg font-medium transition-all duration-300 ">
                Discover Missions
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <FiArrowRight className="inline" />
                </motion.span>
              </button>
              <button className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={image}
                  alt="ISRO Mission"
                  className="rounded-2xl shadow-2xl shadow-blue-500/20"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-white/10 rounded-2xl -z-10" />
              <div className="absolute -inset-8 border border-white/5 rounded-2xl -z-20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
        <span className="mt-2 text-sm font-bold text-gray-400">Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default Hero;