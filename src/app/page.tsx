'use client'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='grid lg:grid-cols-2 gap-4 p-4 lg:p-0 lg:w-[95%] mb-20 lg:mb-0 lg:mt-30'>
<div className='lg:flex justify-center hidden'>
  <div className='w-90 h-full rounded-md shadow-md relative'>
    <Image
      src="/rohit.jpg"
      alt="Rohit"
      fill
      className='object-center object-cover rounded-md'
    />
  </div>
</div>

<div className='w-40 h-40 rounded-full border-2 border-gray-600 shadow lg:hidden mx-auto overflow-hidden relative'>
  <Image
    src="/rohit.jpg"
    alt="Rohit"
    fill
    className='object-cover object-center'
  />
</div>

      <div className='grid place-content-center gap-8 lg:px-10'>
        <div className='grid gap-4'>
          <h1 className='text-amber-300 uppercase font-bold text-2xl lg:text-4xl'>- I&apos;m rohit kumar.</h1>
          <h2 className='lg:text-xl font-semibold uppercase ml-6'>mern stack javascript developer</h2>
        </div>
        <p className='text-justify leading-9'>I&apos;m a Bengaluru-based MERN-stack JavaScript web developer, specializing in creating clean and user-friendly digital experiences. My passion is crafting top-notch software that enriches users&apos; lives. I excel in designing highly responsive UI components and writing high-quality, reusable code. I&apos;m skilled in monitoring and optimizing performance, as well as troubleshooting and debugging to enhance quality.</p>
        <Link
          href={'/about'}
          className='border border-amber-500 rounded-4xl w-fit flex items-center justify-between hover:bg-amber-500'
        >
          {/* Text with padding */}
          <span className="px-6 py-2 text-xs lg:text-base">MORE ABOUT ME</span>

          {/* Arrow circle touching border */}
          <span className='bg-amber-500 rounded-full lg:w-14 lg:h-14 flex items-center justify-center'>
            <FiArrowRight size={25} />
          </span>
        </Link>
      </div>
    </div>
  )
}
