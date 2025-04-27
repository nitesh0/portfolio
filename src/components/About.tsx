import React from 'react'
import { Award, Briefcase, ChevronRight } from "lucide-react";
const About = () => {
    const uses = [
        "Building scalable applications",
        "Contributing to open-source projects",
        "Mentoring and collaborating in teams",
    ];
    return (
        <div  className='text-blue-400 text-wrap m-10 mr-40'>
            
            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:max-w-lg space-y-4">
                    <h2 className="text-2xl font-bold text-blue-400">Full Stack Developer</h2>
                    <div className="flex gap-2 mb-3">
                        <span className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded-lg text-sky-200">
                            Team Work
                        </span>
                        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                            Adaptability
                        </span>
                        <span className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-lg">
                            Reading
                        </span>
                        <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                            Self-learning
                        </span>
                        <span className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-lg">
                            Workout
                        </span>
                    </div>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed">
                            I'm a passionate Full Stack Developer with over 3 years of experience crafting robust digital
                            solutions. My expertise spans building scalable backend systems and creating intuitive,
                            user-friendly frontend experiences.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With a strong foundation in <span className="text-blue-400">Python</span>, {" "}
                            <span className="text-blue-400">Javascript</span>, {" "}
                            <span className="text-blue-400">React.js</span>, {" "}
                            Adept at designing scalable, high-performance solutions and collaborating
                            across teams to deliver innovative projects.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I thrive in collaborative environments where I can contribute to innovative solutions and
                            mentor junior developers. My approach combines technical excellence with a keen eye for user
                            experience and business needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-[#161b22] p-4 rounded-md border border-gray-800">
                            <div className="flex items-center gap-2 mb-2">
                                <Award className="h-5 w-5 text-yellow-400" />
                                <h3 className="font-semibold text-blue-300">Education</h3>
                            </div>
                            <p className="text-sm text-gray-300">B-tech Computer Science</p>
                            <p className="text-xs text-gray-400">MSIT, 2021</p>
                        </div>
                        <div className="bg-[#161b22] p-4 rounded-md border border-gray-800">
                            <div className="flex items-center gap-2 mb-2">
                                <Briefcase className="h-5 w-5 text-green-400" />
                                <h3 className="font-semibold text-blue-300">Experience</h3>
                            </div>
                            <p className="text-sm text-gray-300">3 Years Professional</p>
                            <p className="text-xs text-gray-400">Full Stack Developer</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About
