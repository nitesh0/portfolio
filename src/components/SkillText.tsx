"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      {/* <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Next js 13
        </h1>
      </motion.div> */}
      {/* <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Making apps with modern technologies
      </motion.div> */}
      {/* <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Never miss a task, deadline or idea
      </motion.div> */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex mb-10 flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <span>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            My Skills{" "}
          </span>

        </span>
      </motion.div>
    </div>
  )
}

export default SkillText