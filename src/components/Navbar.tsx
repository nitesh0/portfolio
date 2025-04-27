
// import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion'
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 border border-[#7042f861] rounded-full mt-4">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <img
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <motion.span
            initial={{ opacity: 1, y: 1 }} // Start position
            animate={{ opacity: 1, y: [0, -6, 0] }} // Moves up and down
            transition={{
              duration: 2, // Time for one full float cycle
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Smooth back and forth
              ease: "easeInOut" // Smooth animation
            }}
            className="font-bold  ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl md:text-4xl"
          >
            NS
          </motion.span>
        </a>

        <div className="w-[700px] h-full flex flex-row items-center justify-between gap-10 text-gray-200 ml-auto pr-0">
          <a href="#about" className="cursor-pointer">About me</a>
          <a href="#skills" className="cursor-pointer">Skills</a>
          <a href="#WorkExperience" className="cursor-pointer">Work Experience</a>
          <a href="#projects" className="cursor-pointer">Projects</a>
          <a href="#achievements" className="cursor-pointer">Achievements</a>
          <img
  src="/gitwhite.png"
  alt="logo"
  width={30}
  height={30}
  className="cursor-pointer hover:animate-slowspin"
  onClick={() => window.open("https://github.com/nitesh0", "_blank")}

/>

        </div>



        <div className="flex flex-row gap-5">
          {/* {Socials.map((social) => (
            <img
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
