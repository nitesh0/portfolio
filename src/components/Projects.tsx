
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center py-10"
      id="projects"
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 md:mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          My
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
        >
          Projects
        </motion.span>
      </motion.h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        loop={false}
        className="w-full px-4 sm:px-6 md:px-10"
      >
        {[
          {
            src: "/space-theme-portfolio.png",
            title: "Space Themed Portfolio",
            description:
              "A modern space-themed portfolio built with React, featuring an interactive design and smooth animations powered by Framer Motion. The portfolio showcases projects and skills through a visually engaging, dynamic interface.",
          },
          {
            src: "/careersuite.png",
            title: "CareerSuite",
            description:
              "CareerSuite is an AI-powered platform designed to help users and advance their careers efficiently. Users can select or input the skills they want to develop or focus on. The platform analyzes these inputs and generates a personalized career plan — outlining learning paths, and growth milestones.",
          },
          
          {
            src: "/streamline.png",
            title: "Movie Recommendation Website",
            description: "Movie Corner delivers personalized recommendations even for new users. By combining community detection and collaborative filtering, it overcomes the cold start problem and ensures relevant suggestions without prior user interaction.",
            repoUrl:"https://github.com/nitesh0/Movie-Recommendations"
          },
        ].map((project, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <div className="h-full hover:scale-105 hover:cursor-pointer w-full flex flex-col md:flex-row gap-10 px-10">
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
                repoUrl={project.repoUrl}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
