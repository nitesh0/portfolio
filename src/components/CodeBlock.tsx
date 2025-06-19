
import React from "react";
import { motion } from "framer-motion";
import About from "./About";

const CodeBlock = () => {
    return (
        <div id='about' className="flex flex-col md:flex-row justify-between w-full">

            <motion.div
                initial={{ opacity: 1, y: 1 }} // Start position
                animate={{ opacity: 1, y: [0, -6, 0] }} // Moves up and down
                transition={{
                    duration: 2, // Time for one full float cycle
                    repeat: Infinity, // Infinite loop
                    repeatType: "reverse", // Smooth back and forth
                    ease: "easeInOut" // Smooth animation
                }} className="flex ml-20 flex-col items-start bg-[#161b22] text-gray-200 rounded-lg p-4 w-full max-w-xl shadow-lg">
                {/* Top Colored Labels */}

                <div className="bg-[#161b22] p-3 border-b border-gray-800 flex items-center">
                    <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-gray-400 text-sm">/about.tsx</p>
                </div>
                {/* Code Block */}
                <div className="relative w-full bg-[#0d1117] rounded-md p-4 font-mono text-sm border border-gray-700">
                    {/* File path bar */}
                    <div className="text-gray-400 text-xs mb-2">/about.tsx</div>

                    {/* Code */}
                    <pre className="text-gray-300 whitespace-pre-wrap">
                        <span className="text-pink-400">import</span> {"{ FC }"}{" "}
                        <span className="text-pink-400">from</span>{" "}
                        <span className="text-green-400">'react'</span>;
                        {"\n\n"}
                        <span className="text-blue-400">type</span> WelcomeProps = {"{"}
                        {"\n  "}
                        <span className="text-purple-400">uses:</span>
                        {"\n    | "}
                        <span className="text-green-400">'explore new tech'</span>
                        {"\n    | "}
                        <span className="text-green-400">'display my skills'</span>
                        {"\n    | "}
                        <span className="text-green-400">'build my professional network'</span>
                        {"\n    | "}
                        <span className="text-green-400">'challenge myself with new technologies'</span>;
                        {"\n};\n\n"}
                        <span className="text-pink-400">export const</span> Welcome: FC
                        {"<WelcomeProps>"} = ({"{ uses }"}) {"=> {"}
                        {"\n  return ("}
                        {"\n    <> "}
                        {"\n      "}
                        <span className="text-yellow-400">&lt;h1&gt;</span>
                        This is my little slice of the internet.
                        <span className="text-yellow-400">&lt;/h1&gt;</span>
                        {"\n      "}
                        <span className="text-yellow-400">&lt;p&gt;</span>
                        {"\n        I use this site to "}
                        <span className="text-yellow-400">&lt;em&gt;</span>
                        {"{uses}"}
                        <span className="text-yellow-400">&lt;/em&gt;</span>.
                        {"\n      "}
                        <span className="text-yellow-400">&lt;/p&gt;</span>
                        {"\n    </>"}
                        {"\n  );"}
                        {"\n};"}
                    </pre>
                </div>
            </motion.div>
            
            <About />
        </div>

    );
};

export default CodeBlock;
