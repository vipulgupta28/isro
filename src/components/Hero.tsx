import background from "../assets/rc-bellergy-6X6SKcj8gfY-unsplash.jpg";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100, rotate: 5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 1.5,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={background}
        alt="ISRO Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Gradient Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent z-5" />

      {/* Right-aligned content */}
      <motion.div
        className="relative z-10 flex flex-col items-end justify-center h-full pr-12 md:pr-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-bold text-right bg-black/30 px-6 py-4 rounded-lg"
        >
          INDIAN SPACE <br /> RESEARCH ORGANIZATION
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="mt-8 flex gap-6"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="text-white text-lg px-8 py-3 bg-white/10 border border-white/30 rounded-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300"
          >
            Launches
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="text-white text-lg px-8 py-3 bg-white/10 border border-white/30 rounded-lg backdrop-blur-md hover:bg-white/20 transition-all duration-300"
          >
            Who We Are
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Subtle Floating Particles Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;