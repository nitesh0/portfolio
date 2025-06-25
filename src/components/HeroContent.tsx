
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid';
// import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box flex flex-row py-[8px] px-[7px] border w-fit border-[#7042f88b] rounded-full opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Engineer
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Welcome{" "}
                        </span>
                        to my Portfolio
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        Nitesh{" "}
                    </span>
                    , a Full-Stack Software Engineer who loves crafting blazing-fast web apps, automating workflows with seamless API integrations, and building my own AI-powered tools. I thrive on creating stunning user experiences that don’t just look great—they make you go WOW! 🚀
                </motion.p>
                <motion.a
  variants={slideInFromLeft(1)}
  href="mailto:niteshsinghal9@gmail.com"
  className="py-1 button-primary text-center text-white border border-[#7042f88b] cursor-pointer rounded-lg max-w-[200px]"
>
  Let’s Connect!
</motion.a>

            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="hidden sm:flex w-full h-full justify-center items-center"
            >
                <img
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
