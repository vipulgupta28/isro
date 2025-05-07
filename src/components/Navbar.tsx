import  { useState } from "react";
import { Link } from "react-router-dom";
import {  X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SpaceParticles from "./Footer/SpaceParticles";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const sidebarVariants = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: 300,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const sidebarItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarContent = [
    "Sitemap",
    "Contact Us",
    "Feedback",
    "RTI",
    "Career",
    "Tender",
    "FAQ",
  ];

  const dropdownContent = {
    Home: [],
    About: [
      "Profile",
      "Vision-Mission-Objectives",
      "Citizen Charter",
      "Organisational structure",
      "DoS Centers/units/enterprises",
      "Secretary, DoS/ Chairman, ISRO",
      "Former Secretaries/Chairmen",
      "Space Commission",
      "Autonomous bodies",
      "Genesis",
      "Timeline",
      "Who's who",
      "Contact us",
    ],
    Activities: [
      "Missions accomplished",
      "Upcoming Missions",
      "Science",
      "Launches",
      "Satellites",
      "Space Applications",
      "Research & Development",
      "Gaganyaan",
      "Ground Segment activities",
      "Promotion & authorisation",
      "International co-operation",
      "Capacity building",
      "Training",
      "Outreach",
    ],
    Services: [
      "launch Service",
      "Satellite:system,bus,sub-system,testing",
      "Mission support",
      "Ground system support",
      "Satellite Communication & Lease of transponders",
      "Space based Earth observation: Bhuvan & Bhoonidhi",
      "Satellite Navigation services",
      "Meteorologial & Oceanographic Satellite Data",
      "Disaster Management: National & International",
      "Aerial Services & Digital Mapping",
      "North-East India region specific applications Services",
      "VEDAS services",
      "Transfer Orbit Service",
      "Satellite aided search & rescue",
    ],
    Programmes: [
      "Academic Courses",
      "Conferences Grants",
      "Fellowships",
      "Space merchandise",
      "Space tutor",
      "Space on wheels",
      "Student Satellite",
      "Technology Transfer",
      "UNNATI",
      "YUVIKA",
    ],
    Resources: [
      "Atlases:River basin",
      "Bhuvan",
      "Database for Emergency Management",
      "FEAST Tool",
      "I-grasp",
      "Info for Climate & Environment studies",
      "Landslide Atlas of India",
      "Meteorology & Oceanographic data",
      "Mobile Apps",
      "Monthly Summary of DOS",
      "MOSDAC",
      "NAVIC Time",
      "Publications",
      "School Bhuvan-NCERT",
      "Science Data",
    ],
    Engagement: [
      "Academia",
      "Ask an expert",
      "Educators",
      "Industry",
      "Internship & Projects",
      "Join ISRO",
      "Media",
      "Researchers",
      "Start-ups",
      "Students",
      "Training",
      "Visitors",
    ],
  };

  const toggleMenu = () => setVisible((prev) => !prev);
  const toggleDropdown = (title:any) =>
    setOpenDropdown(openDropdown === title ? null : title);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full relative  top-0 text-white px-6 py-4 z-50 backdrop bg-black backdrop-blur-md"
    >
      <SpaceParticles/>
      <div className="flex items-center justify-between px-4 md:px-10 relative w-full">
        {/* Left: Logo and Desktop Nav */}
        <div className="flex items-center space-x-12">
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-white tracking-wide glow-text">
            ISRO
          </h1>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex space-x-6 items-center"
            variants={navVariants}
          >
            {Object.entries(dropdownContent).map(([title, subItems], i) => (
              <motion.div
              key={i}
              className="relative group"
              variants={itemVariants}
            >
            
            <button
  className="transition p-2 hover:cursor-pointer rounded-lg font-orbitron text-sm font-medium flex items-center gap-1 hover:text-zinc-400"
  onClick={() => toggleDropdown(title)}
>
  {title}
  <ChevronDown
    className={`w-4 h-4 transition-transform ${
      openDropdown === title ? "rotate-180" : ""
    }`}
  />
</button>


                {subItems.length > 0 && (
                  <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: openDropdown === title ? 1 : 0,
                    y: openDropdown === title ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-10 left-0 w-80 bg-black text-white rounded-lg shadow-xl backdrop-blur-md border border-white z-[100] transition-all duration-300 ${
                    openDropdown === title ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                >
                
                    {subItems.map((sub, index) => (
                      <Link
                        key={index}
                        to={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm font-orbitron hover:bg-cyan-900/50 hover:text-cyan-300 transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Hamburger */}
        {/* <div>
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex items-center"
          >
            {visible ? (
              <X className="w-6 h-6 text-white hover:text-cyan-300 transition-transform glow-hover duration-300 transform rotate-180" />
            ) : (
              <Menu className="w-6 h-6 text-white hover:text-cyan-300 glow-hover transition-transform duration-300" />
            )}
          </button>
        </div> */}
      </div>

      {/* Sidebar with Framer Motion */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-64 bg-black backdrop-blur-md p-6 flex flex-col space-y-5 z-50 shadow-2xl border-l border-cyan-500/30"
          >
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="focus:outline-none"
              >
                <X className="w-6 h-6 text-white hover:text-cyan-300 glow-hover transition-transform duration-300" />
              </button>
            </div>
            {sidebarContent.map((text, i) => (
              <motion.div
                key={i}
                variants={sidebarItemVariants}
                whileHover={{ color: "#00f7ff" }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/${text.toLowerCase()}`}
                  className="block text-white text-right font-orbitron text-sm border-b border-cyan-500/20 py-2 transition duration-300 hover:text-cyan-300 glow-hover"
                  onClick={() => setVisible(false)}
                >
                  {text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;