import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



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

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

 
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
    About: ["Profile", "Vision-Mission-Objectives", "Citizen Charter", "Organisational structure", "DoS Centers/units/enterprises", "Secretary, DoS/ Chairman, ISRO", "Former Secretaries/Chairmen", "Space Commission", "Autonomous bodies", "Genesis", "Timeline", "Who's who", "Contact us"],
    Activities: ["Missions accomplished", "Upcoming Missions", "Science", "Launches", "Satellites", "Space Applications", "Research & Development", "Gaganyaan", "Ground Segment activities", "Promotion & authorisation", "International co-operation", "Capacity building", "Training", "Outreach"],
    Services: ["launch Service", "Satellite:system,bus,sub-system,testing", "Mission support", "Ground system support", "Satellite Communication & Lease of transponders", "Space based Earth observation: Bhuvan & Bhoonidhi", "Satellite Navigation services", "Meteorologial & Oceanographic Satellite Data", "Disaster Management: National & International", "Aerial Services & Digital Mapping", "North-East India region specific applications Services","VEDAS services", "Transfer Orbit Service", "Satellite aided search & rescue"],
    Programmes: ["Academic Courses", "Conferences Grants", "Fellowships", "Space merchandise", "Space tutor", "Space on wheels", "Student Satellite", "Technology Transfer", "UNNATI", "YUVIKA"],
    Resources: ["Atlases:River basin", "Bhuvan", "Database for Emergency Management", "FEAST Tool", "I-grasp","Info for Climate & Environment studies", "Landslide Atlas of India", "Meteorology & Oceanographic data", "Mobile Apps", "Monthly Summary of DOS", "MOSDAC", "NAVIC Time", "Publications", "School Bhuvan-NCERT", "Science Data"],
    Engagement: ["Academia", "Ask an expert", "Educators", "Industry", "Internship & Projects", "Join ISRO", "Media", "Researchers", "Start-ups", "Students", "Training", "Visitors"],
  };

  const toggleMenu = () => setVisible((prev) => !prev);

  return (
    <motion.nav
  variants={navVariants}
  initial="hidden"
  animate="visible"
  className="absolute top-0 left-0 w-full   text-white px-6 py-4  z-10"
>

      <div className="flex items-center justify-center pt-10  relative">
        {/* Desktop Nav with Animation */}
        <div>
        <h1 className="font-bold text-[50px]">ISRO</h1>
      </div>
      
        <motion.div
          className="hidden md:flex space-x-10 justify-center items-center"
          variants={navVariants}
        >
          {Object.entries(dropdownContent).map(([title, subItems], i) => (
            <motion.div
              key={i}
              className="relative group"
              variants={itemVariants}
            >
              <Link
                to={`/${title.toLowerCase()}`}
                className="transition p-2 rounded-[7px] duration-300"
              >
                {title}
              </Link>

              {subItems.length > 0 && (
                <motion.div
                  className="absolute top-8 left-0 w-78 bg-black text-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto"
                >
                  {subItems.map((sub, index) => (
                    <Link
                      key={index}
                      to={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 hover:bg-zinc-200 transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Toggle Button */}
        <div className="absolute right-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {visible ? (
              <X className="w-6 h-6 transition-transform hover:cursor-pointer duration-300 transform rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform hover:cursor-pointer duration-300" />
            )}
          </button>
        </div>
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
            className="fixed top-0 right-0 h-full w-64 bg-black p-6 flex flex-col space-y-4 z-50 shadow-lg"
          >
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="focus:outline-none">
                <X className="w-6 h-6 text-white hover:cursor-pointer transition-transform duration-300" />
              </button>
            </div>
            {sidebarContent.map((text, i) => (
              <motion.div
                key={i}
                variants={sidebarItemVariants}
                whileHover={{ scale: 1.05, color: "#00FF00" }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/${text.toLowerCase()}`}
                  className="text-white text-right  text-center p-2 border-b border-zinc-800 transition duration-300"
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