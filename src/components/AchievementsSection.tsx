"use client"

import { motion, useInView } from "framer-motion"
import { Award, Code, Database, FileCode, Github, Globe, Star, Trophy } from "lucide-react"
import { useRef, useState } from "react"

const AchievementsSection = () => {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const achievements = [
        {
            icon: Database,
            title: "SQL Silver Badge",
            platform: "HackerRank",
            description:
                "Earned a Silver Badge in SQL on HackerRank, demonstrating proficiency in database management and query optimization.",
            color: "#6B7FD7", // Purple-blue
            badgeColor: "#C0C0C0", // Silver
            badgeIcon: Star,
            skills: ["Database Design", "Query Optimization", "Data Manipulation", "Joins & Subqueries"],
        },
        {
            icon: FileCode,
            title: "Python Silver Badge",
            platform: "HackerRank",
            description:
                "Achieved Silver Badge status in Python programming challenges, showcasing strong algorithmic thinking and problem-solving skills.",
            color: "#9D50BB", // Purple
            badgeColor: "#C0C0C0", // Silver
            badgeIcon: Star,
            skills: ["Data Structures", "Algorithms", "OOP", "Python Libraries"],
        },
        {
            icon: Code,
            title: "React Silver Badge",
            platform: "HackerRank",
            description:
                "Received a Silver Badge in React, validating expertise in building efficient and responsive user interfaces with modern React practices.",
            color: "#6E45E2", // Indigo
            badgeColor: "#C0C0C0", // Silver
            badgeIcon: Star,
            skills: ["Component Architecture", "State Management", "Hooks", "Performance Optimization"],
        },
        {
            icon: Github,
            title: "Open Source Contributions",
            platform: "GitHub",
            description:
                "Contributed to multiple open-source projects, helping improve documentation and implementing new features.",
            color: "#4A00E0", // Deep purple
            badgeIcon: Code,
            skills: ["Collaboration", "Code Reviews", "Git Workflow", "Documentation"],
        },
        {
            icon: Globe,
            title: "Technical Blog",
            platform: "Medium",
            description:
                "Published technical articles on web development and AI integration that have helped thousands of developers.",
            color: "#8E2DE2", // Violet
            badgeIcon: Award,
            skills: ["Technical Writing", "Knowledge Sharing", "Web Development", "AI Integration"],
        },
        {
            icon: Trophy,
            title: "Hackathon Winner",
            platform: "TechFest 2023",
            description: "First place in a 48-hour hackathon for developing an innovative AI-powered solution.",
            color: "#5E35B1", // Deep purple-blue
            badgeIcon: Award,
            skills: ["Rapid Prototyping", "Team Collaboration", "Problem Solving", "Presentation Skills"],
        },
    ]

    return (
        <div
            ref={sectionRef}
            className="min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8 relative overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, #0a0a14, #1a1a3a)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Cosmic background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-purple-500 opacity-10"
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                        }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}

                {/* Cosmic glow */}
                <motion.div
                    className="absolute rounded-full bg-purple-600 blur-[100px] opacity-20"
                    style={{
                        width: "40%",
                        height: "40%",
                        top: "30%",
                        left: "60%",
                    }}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />

                <motion.div
                    className="absolute rounded-full bg-blue-600 blur-[100px] opacity-10"
                    style={{
                        width: "30%",
                        height: "30%",
                        top: "60%",
                        left: "20%",
                    }}
                    animate={{
                        opacity: [0.05, 0.15, 0.05],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 5,
                    }}
                />
            </div>

            {/* Content container */}
            <div className="max-w-6xl w-full z-10 flex flex-col items-center justify-center">
                {/* Section Header */}
               

                    <motion.h1
                        className="text-5xl font-bold text-white mb-20"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    >
                        <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            My
                        </motion.span>{" "}
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
                        >
                            Achievements
                        </motion.span>
                    </motion.h1>

                

                {/* Achievement Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            achievement={achievement}
                            index={index}
                            isInView={isInView}
                            isActive={activeCard === index}
                            setActive={() => setActiveCard(activeCard === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
interface AchievementProps {
    achievement: any;
    index: number;
    isInView: boolean;
    isActive: boolean;
    setActive: (index: number | null) => void;
}
const AchievementCard = ({ achievement, index, isInView, isActive, setActive }: AchievementProps) => {
    const cardRef = useRef(null)
    const cardInView = useInView(cardRef, { once: false, amount: 0.5 })

    return (
        <motion.div
            ref={cardRef}
            className="relative rounded-xl overflow-hidden cursor-pointer group border border-[#2A0E61]"
            style={{
                background: "rgba(20, 20, 40, 0.5)",
                backdropFilter: "blur(10px)",
                // border: "1px solid rgba(100, 100, 255, 0.1)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
            }}
            whileHover={{
                y: -10,
                boxShadow: `0 10px 30px -15px ${achievement.color}`,
                transition: { duration: 0.2 },
            }}
            onClick={() => setActive}
        >
            {/* Glowing border effect */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                    background: `linear-gradient(45deg, ${achievement.color}00, ${achievement.color}40, ${achievement.color}00)`,
                    backgroundSize: "200% 200%",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                }}
            />

            {/* Card content */}
            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    {/* Platform badge */}
                    <motion.div
                        className="px-2 py-1 rounded-full text-xs flex items-center gap-1"
                        style={{
                            backgroundColor: `${achievement.color}30`,
                            color: "white",
                            border: `1px solid ${achievement.color}60`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <span>{achievement.platform}</span>
                    </motion.div>

                    {/* Silver badge for HackerRank achievements */}
                    {achievement.badgeColor && (
                        <motion.div
                            className="flex items-center gap-1 px-2 py-1 rounded-full"
                            style={{
                                background: `linear-gradient(135deg, #C0C0C0, #E8E8E8, #C0C0C0)`,
                                boxShadow: "0 0 10px rgba(192, 192, 192, 0.5)",
                            }}
                            initial={{ opacity: 0, scale: 0, rotate: -10 }}
                            animate={cardInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                delay: 0.5 + index * 0.1,
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.5 },
                            }}
                        >
                            <achievement.badgeIcon size={12} className="text-gray-800" />
                            <span className="text-xs font-bold text-gray-800">Silver</span>
                        </motion.div>
                    )}
                </div>

                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-3">
                    <motion.div
                        className="p-2 rounded-lg"
                        style={{
                            background: `linear-gradient(135deg, ${achievement.color}40, ${achievement.color}20)`,
                            boxShadow: `0 0 15px ${achievement.color}30`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.4 + index * 0.1,
                        }}
                        whileHover={{
                            rotate: [0, -10, 10, 0],
                            scale: 1.1,
                            transition: { duration: 0.5 },
                        }}
                    >
                        <achievement.icon size={20} style={{ color: "white" }} />
                    </motion.div>

                    <motion.h3
                        className="text-xl font-bold text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={cardInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                        {achievement.title}
                    </motion.h3>
                </div>

                {/* Description */}
                <motion.p
                    className="text-gray-300 text-sm mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                    {achievement.description}
                </motion.p>

                {/* Skills */}
                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                        cardInView
                            ? {
                                opacity: isActive ? 1 : 0.6,
                                height: "auto",
                            }
                            : {}
                    }
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                    <div className="flex flex-wrap gap-2">
                        {achievement.skills.map((skill: any, idx: any) => (
                            <motion.span
                                key={idx}
                                className="px-2 py-1 text-xs rounded-full"
                                style={{
                                    backgroundColor: `${achievement.color}20`,
                                    color: "white",
                                    border: `1px solid ${achievement.color}40`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={cardInView && isActive ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }}
                                transition={{ delay: 0.8 + 0.1 * idx }}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: `${achievement.color}40`,
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* View details button */}
                {/* <motion.button
                    className="mt-4 text-xs flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
                    style={{ color: "white" }}
                    initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 0.7 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                >
                    {isActive ? "Hide details" : "View details"}
                    <motion.span
                        animate={{ y: isActive ? -2 : 2 }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 0.5 }}
                    >
                        {isActive ? "↑" : "↓"}
                    </motion.span>
                </motion.button> */}
            </div>

            {/* Cosmic particle effect on hover */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
            >
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white"
                        style={{
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                            opacity: 0,
                        }}
                        animate={
                            isActive
                                ? {
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1, 0],
                                    y: [0, -Math.random() * 20 - 10],
                                    x: [0, (Math.random() - 0.5) * 20],
                                }
                                : {}
                        }
                        transition={{
                            duration: 1 + Math.random(),
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default AchievementsSection

