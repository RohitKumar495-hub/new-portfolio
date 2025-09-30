import SkillsSection from '@/components/SkillsSection'
import Timeline from '@/components/Timeline'
import React from 'react'

const AboutPage = () => {
  const experiencesData = [
    {years : '1' , name : 'Next js'},
    {years : '2' , name : 'React'},
    {years : '2' , name : 'Express.js'},
    {years : '2' , name : 'MongoDb'},

  ]
  return (
    <div className='mt-10 mb-20'>
      <h1 className='uppercase font-bold text-4xl text-center'>About <span className='text-amber-300'>Me</span></h1>
      {/* profile only show on mobile */}
      <div className='w-40 h-40 rounded-full border-2 border-gray-600 shadow lg:hidden mx-auto overflow-hidden mt-10'>
        <img 
          src="/rohit.jpg" 
          alt="Rohit"
          className='w-full h-full object-cover object-center'
        />
      </div>

      {/* personal info + experiences */}
      <div className='grid lg:grid-cols-2 gap-4 lg:mt-20 mt-10 place-items-center p-2 lg:p-0'>
        <div className='grid gap-6'>
          <h2 className='uppercase font-semibold'>personal infos</h2>
            {/* personal info */}
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className='grid gap-3'>
                  <p className=''>First Name: <span className='font-medium'>Rohit</span></p>
                  <p className=''>Age: <span className='font-medium'>20 Years</span></p>
                  <p className=''>City: <span className='font-medium'>Ranchi, Jharkhand</span></p>
                  <p className=''>Email: <span className='font-medium'>kumarguptarohit2005@gmail.com</span></p>
                </div>
                <div className='grid gap-3'>
                  <p className=''>Last Name: <span className='font-medium'>Kumar</span></p>
                  <p className=''>Nationality: <span className='font-medium'>Indian</span></p>
                  <p className=''>Phone: <span className='font-medium'>+916201819104</span></p>
                  <p className=''>Languages: <span className='font-medium'>Hindi , English</span></p>
              </div>
            </div>
        </div>
            {/* experiences */}
            <div className='grid grid-cols-2 gap-8 p-2'>
              {
                experiencesData.map((data , index) => {
                  return (
                    <div className='border-2 p-4 lg:w-60 border-[#1f1f1f] shadow-md rounded' key={index}>
                      <div className='flex items-center gap-5'>
                        <p className='text-amber-300 lg:text-4xl font-semibold'>{data.years} +</p> 
                        <span className='text-amber-300 font-bold'>{data.name}</span>
                      </div>
                      <div className='flex items-center gap-4'>
                        <hr className='w-8'/>
                        <p className='uppercase lg:text-base text-xs'>years of <br />experience</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>

        <div>

        </div>
      </div>

      <div className='lg:mt-20 mt-5'>
        <SkillsSection />
      </div>

      <div>
        <Timeline />
      </div>


    </div>
  )
}

export default AboutPage