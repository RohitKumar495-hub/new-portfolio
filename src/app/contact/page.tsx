'use client'
import EmailService from '@/components/EmailService'
import { FaAddressCard , FaGithub } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiDownload } from "react-icons/fi"; 
import React from 'react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  const data = [
    {title : 'address point' , icon : FaAddressCard , description : 'Mahilong, Ranchi, 835103'},
    {title : 'mail me' , icon : IoIosMailOpen , description : 'kumarguptarohit2005@gmail.com'},
    {title : 'call me' , icon : BiSolidPhoneCall , description : '+916201819104'},
  ]

  const iconData = [
    {icon : FaGithub, url : 'https://github.com/RohitKumar495-hub'},
    {icon : RiLinkedinFill, url : 'https://www.linkedin.com/in/rohit-kumar-4a170328a/'}
  ]

  return (
    <div className='grid mt-8 p-4'>

      {/* heading */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='text-center'
      >
        <h1 className='uppercase text-3xl lg:text-5xl font-bold'>
          get in <span className='text-[#ffb503]'>touch</span>
        </h1>
      </motion.div>

      {/* text-area */}
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-20 lg:mt-20 mt-10'>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className='lg:w-xs grid gap-6'
        >
          <motion.h2 
            variants={{ hidden:{opacity:0, x:-20}, visible:{opacity:1, x:0} }}
            transition={{ duration:0.6 }}
            className='uppercase font-bold text-2xl'
          >
            don&apos;t be shy !
          </motion.h2>

          <motion.p
            variants={{ hidden:{opacity:0, x:-20}, visible:{opacity:1, x:0} }}
            transition={{ duration:0.6 }}
            className='text-justify font-semibold text-xs lg:text-base'
          >
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>

          {/* contact info */}
          <motion.div 
            variants={{ hidden:{opacity:0, x:-20}, visible:{opacity:1, x:0} }}
            transition={{ duration:0.6 }}
            className='grid items-start gap-8'
          >
            {
              data.map((item , index) => (
                <motion.div
                  key={index}
                  variants={{ hidden:{opacity:0, y:20}, visible:{opacity:1, y:0} }}
                  transition={{ duration:0.5 }}
                  className='flex gap-6'
                >
                  <item.icon color='#ffb503' size={40}/>
                  <div className='grid gap-2'>
                    <p className='uppercase font-semibold text-gray-400'>{item.title}</p>
                    <p className='font-semibold text-xs lg:text-base'>{item.description}</p>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>

          {/* social icons */}
          <motion.div 
            variants={{ hidden:{opacity:0, y:20}, visible:{opacity:1, y:0} }}
            transition={{ duration:0.5, delay:0.2 }}
            className='flex gap-4 mt-4'
          >
            {
              iconData.map((icon , index) => (
                <div key={index} className='w-10 h-10 bg-gray-200/20 flex items-center justify-center hover:bg-amber-400 rounded-full cursor-pointer'>
                  <a href={icon.url} target="_blank" rel="noopener noreferrer">
                    <icon.icon size={20}/>
                  </a>
                </div>
              )) 
            }
          </motion.div>

        </motion.div>

        {/* Email Service */}
        <motion.div 
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.7, delay:0.3 }}
        >
          <EmailService />
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
