import EmailService from '@/components/EmailService'
import { FaAddressCard , FaGithub } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";

import React from 'react'

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
      <div className='text-center'>
        <h1 className='uppercase text-3xl lg:text-5xl font-bold'>get in <span className='text-[#ffb503]'>touch</span></h1>
      </div>

      {/* text-area */}
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-20 lg:mt-20 mt-10'>
        <div className='lg:w-xs grid gap-6'>
          <h2 className='uppercase font-bold text-2xl'>don&apos;t be shy !</h2>
          <p className='text-justify font-semibold text-xs lg:text-base'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

          {/* about , contact-no , email */}
          <div className='grid items-start gap-8'>
              {
                data.map((item , index) => {
                  return (
                    <div className='flex gap-6' key={index}>
                      <item.icon color='#ffb503' size={40}/>
                      <div className='grid gap-2'>
                        <p className='uppercase font-semibold text-gray-400'>{item.title}</p>
                        <p className='font-semibold text-xs lg:text-base'>{item.description}</p>
                      </div>
                    </div>
                  )
                })
              }
            
          </div>

          {/* links for github and linkedin */}
          <div className='flex gap-4 mt-4'>
            {
              iconData.map((icon , index) => {
                return (
                  <div key={index} className='w-10 h-10 bg-gray-200/20 flex items-center justify-center hover:bg-amber-400 rounded-full cursor-pointer'>
                    <a href={icon.url}>
                      <icon.icon size={20}/>
                    </a>
                  </div>
                )
              }) 

            }
          </div>
        </div>

        {/* email js for sending email */}
        <div>
          <EmailService />
        </div>
      </div>
    </div>
  )
}

export default ContactPage