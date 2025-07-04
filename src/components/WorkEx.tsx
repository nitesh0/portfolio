import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

const WorkExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const experiences: Experience[] = [
    {
      title: "React.js Developer",
      company: "Leading Insurance Client (Confidential)",
      period: "July 2024 - Present",
      logo: "/infosys.jpg",
      color: "#00704A",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js and modern JavaScript libraries, ensuring seamless performance across devices.",
        " Achieved 95% compatibility across devices and optimized application performance by 30%.",
        "Worked with micro-frontend architecture to integrate independent modules, enhancing scalability and maintain ability",
        "Led and mentored a team of 3 developers, providing guidance in learning and developing complex components. Ensuring successful delivery of high-quality solutions.",
      ],
      skills: [
        "React.js",
        "Redux",
        "JavaScript",
        "HTML/CSS",
        "Git",
        "Material-UI",
      ],
    },
    {
      title: "Backend Developer",
      company: "Indian Tax Department Portal",
      period: "April 2022 - Dec 2022",
      logo: "/infosys.jpg",
      color: "#E82127",
      responsibilities: [
        "Implemented a secure PAN-Aadhaar linking verification feature in alignment with multiple government data protection and identity verification regulations, ensuring both compliance and enhanced user security.",       
        "Resolved high-severity bugs in PAN-Aadhaar linking flows on the national tax portal, restoring critical functionality and preventing large-scale user disruptions during peak traffic.",
        "Enabled smooth tax payment processing for over 7.77 crore users during high-traffic filing periods by maintaining backend stability and resolving bottlenecks under pressure.",
        "Received client appreciation for exceptional team support during the peak filing period, where the team promptly resolved critical issues, ensuring smooth operations and customer satisfaction.",
      ],
      skills: ["Java", "Spring", "PostgreSQL", "Git", "Dbeaver"],
    },
  ];

  return (
    <section id="WorkExperience">
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a14] p-4 md:p-8 overflow-hidden"
        ref={containerRef}
      >
        <div className="max-w-5xl w-full flex flex-col items-center text-start">
          <motion.h1
            className="text-5xl font-bold text-white mb-28"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Work
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            >
              Experience
            </motion.span>
          </motion.h1>

          <div className="relative flex flex-col gap-y-32">
            <motion.div
              className="absolute left-[25px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-700"
              style={{
                height: "calc(100px * 8)",
                scaleY: scrollYProgress,
                originY: 0,
              }}
            />

            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Define types for experience object
type Experience = {
  title: string;
  company: string;
  period: string;
  logo: string;
  color: string;
  responsibilities: string[];
  skills: string[];
};

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  scrollYProgress: any;
};

const ExperienceCard = ({
  experience,
  index,
  scrollYProgress,
}: ExperienceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const [isExpanded] = useState(true);
  console.log(isExpanded);
  const y = useTransform(
    scrollYProgress,
    [index * 0.3, index * 0.3],
    [50, -50]
  );

  return (
    <motion.div
      ref={cardRef}
      className={` relative flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ y }}
    >
      <motion.div
        className="absolute left-20 md:left-[47.5%] transform md:-translate-x-1/2 w-[50px] h-[50px] rounded-full bg-gray-800 border-2 flex items-start justify-start z-10 mr-20"
        style={{
          borderColor: isInView ? experience.color : "rgba(75, 85, 99, 0.6)",
          boxShadow: isInView ? `0 0 15px ${experience.color}` : "none",
        }}
        initial={{ scale: 0 }}
        animate={
          isInView
            ? {
                scale: [0, 1.2],
                rotate: [0, 10],
              }
            : {}
        }
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 200,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <img
            src={experience.logo || "/placeholder.svg"}
            alt={`${experience.company} logo`}
            width={50}
            height={50}
            className="rounded-full"
            style={{ transform: "rotate(-10deg)" }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={`hidden md:block w-1/2 ${
          index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
        }`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p
          className="text-gray-400 font-medium inline-block"
          whileHover={{
            color: experience.color,
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          {experience.period}
        </motion.p>
      </motion.div>

      <motion.div
        className={`bg-[#1a1a2e] rounded-lg p-6 ml-16 md:ml-0 md:w-1/2 ${
          index % 2 === 0 ? "md:ml-24" : "md:mr-24"
        } relative overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: `0 10px 30px -15px ${experience.color}`,
          transition: { duration: 0.2 },
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${experience.color}, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          whileHover={{ opacity: 0.2 }}
        />
        <motion.p
          className="md:hidden text-gray-400 font-medium mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {experience.period}
        </motion.p>

        <motion.h3
          className="text-xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {experience.title}
        </motion.h3>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ color: experience.color }}
        >
          {experience.company}
        </motion.p>

        <motion.ul className="space-y-2">
          {experience.responsibilities.map((resp, idx) => (
            <motion.li
              key={idx}
              className="flex justify-start items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.7 + idx * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ x: 5, color: "white" }}
            >
              <motion.span
                className="text-lg"
                style={{ color: experience.color }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  delay: idx * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: 5,
                }}
              >
                •
              </motion.span>
              <span className="text-gray-300 text-sm flex items-start justify-start">
                {resp}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-700"
            >
              <p className="text-white text-sm mb-2">Skills & Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: `${experience.color}20`,
                      color: experience.color,
                      border: `1px solid ${experience.color}40`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: experience.color,
                      color: "#fff",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;
