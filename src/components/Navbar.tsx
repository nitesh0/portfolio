import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About me" },
    { href: "#skills", label: "Skills" },
    { href: "#WorkExperience", label: "Work Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
  ];

  const socialLinks = [
    { src: "/gitwhite.png", alt: "GitHub", url: "https://github.com/nitesh0" },
    { src: "/LeetCode.png", alt: "LeetCode", url: "https://leetcode.com/u/NiteshS/", extraClass: "bg-white" },
    { src: "/linkedin.webp", alt: "LinkedIn", url: "https://www.linkedin.com/in/nitesh-singhal30/" },
    { src: "/twitter.avif", alt: "Twitter / X", url: "https://x.com/Nitesh00022" },
     { src: "/hacker.webp", alt: "HackerRank", url: "https://www.hackerrank.com/profile/niteshsinghal9" },
  ];

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10 border border-[#7042f861] rounded-full mt-4 h-[65px]">
      <style>{`
        @media (max-width: 950px) {
          .desktop-nav {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
        @media (min-width: 951px) {
          .hamburger {
            display: none;
          }
        }
      `}</style>

      <div className="w-full h-full flex items-center justify-between">
        {/* Logo + Name */}
        <a href="#about-me" className="flex items-center space-x-2" aria-label="Go to About Me">
          <img
            src="/NavLogo.png"
            alt="NS logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <motion.span
            initial={{ opacity: 1, y: 1 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="hidden md:block font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xl md:text-3xl"
          >
            NS
          </motion.span>
        </a>

        {/* Desktop Links + Socials */}
        <div className="desktop-nav flex gap-10 text-sm md:text-base text-gray-200">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="cursor-pointer hover:text-purple-400">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ src, alt, url, extraClass = "" }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                width={28}
                height={28}
                className={`cursor-pointer hover:animate-slowspin rounded-full ${extraClass}`}
                onClick={() => window.open(url, "_blank")}
                aria-label={alt}
              />
            ))}
          </div>
        </div>

        {/* Hamburger button */}
        <div className="hamburger hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-[#030014d0] backdrop-blur-md rounded-lg mt-2 p-4 flex flex-col gap-3 text-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:bg-purple-700/30 hover:rounded-lg p-2 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            {socialLinks.map(({ src, alt, url, extraClass = "" }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                width={28}
                height={28}
                className={`cursor-pointer hover:animate-slowspin rounded-full ${extraClass}`}
                onClick={() => window.open(url, "_blank")}
                aria-label={alt}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
