import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Christian Lance Miranda, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>An individual with strong analytical skills, a team player, quick learner and 
              am detail-oriented; I'm  passionate about web and mobile development. 
              I'm known for having good communication skills and enthusiasm that can
              contribute to the team. I am seeking a position in a reliable company where 
              I can apply my knowledge and skills that produces high quality output and 
              having experience for continuous improvement. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About