"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    value: string;
}

const SkillDataProvider = ({ value, src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className='flex flex-col justify-center items-center'
        >
            <img
                src={src}
                width={width}
                height={height}
                alt='skill image'
            />
            <span className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                {value}
            </span>

        </motion.div>
    )
}

export default SkillDataProvider