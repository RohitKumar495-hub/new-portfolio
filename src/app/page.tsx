'use client'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='grid lg:grid-cols-2 gap-4 p-4 lg:p-0 lg:w-[95%] mb-20 lg:mb-0 lg:mt-30'>
      
      {/* Desktop Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className='lg:flex justify-center hidden'
      >
        <div className='w-90 h-full rounded-md shadow-md relative'>
          <Image
            src="/rohit.jpg"
            alt="Rohit"
            fill
            className='object-center object-cover rounded-md'
          />
        </div>
      </motion.div>

      {/* Mobile Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='w-40 h-40 rounded-full border-2 border-gray-600 shadow lg:hidden mx-auto overflow-hidden relative'
      >
        <Image
          src="/rohit.jpg"
          alt="Rohit"
          fill
          className='object-cover object-center'
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='grid place-content-center gap-8 lg:px-10'
      >
        <div className='grid gap-4'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-amber-300 uppercase font-bold text-2xl lg:text-4xl'
          >
            - I&apos;m rohit kumar.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='lg:text-xl font-semibold uppercase ml-6'
          >
            mern stack developer
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='text-justify leading-9'
        >
          I&apos;m , a dedicated MERN Stack Developer with a passion for building
          dynamic and responsive web applications. I specialize in MongoDB,
          Express.js, React, and Node.js, Next.js, developing both engaging
          frontends and efficient, scalable backends.
          <br />
          <br />
          I enjoy transforming ideas into real-world digital solutions,
          optimizing performance, and creating user-friendly interfaces.
          Constantly learning and experimenting with new technologies, I thrive
          on challenges and aim to deliver high-quality, impactful applications.
          Collaboration, clean code, and problem-solving are at the core of my
          work philosophy.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link href="/about">
            <button className="group border border-amber-500 rounded-full w-fit flex items-center overflow-hidden hover:bg-amber-500 transition duration-300 cursor-pointer">
              <span className="px-6 py-2 text-xs lg:text-base text-amber-500 group-hover:text-black font-medium">
                MORE ABOUT ME
              </span>
              <span className="bg-amber-500 text-black rounded-full lg:w-14 lg:h-14 w-10 h-10 flex items-center justify-center group-hover:bg-black group-hover:text-amber-500 transition duration-300">
                <FiArrowRight size={22} />
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
