import React from 'react'
import InternshipImg from '../assets/syllabus1.png'
import InternshipImg1 from '../assets/syllabus2.png'
import CapstoneImg1 from '../assets/wehelpets2.png'
import CapstoneImg2 from '../assets/wehelpets1.png'
import CapstoneImg3 from '../assets/wehelpets3.png'
import CapstoneImg4 from '../assets/wehelpets4.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>Work</p>
          <p className='py-6'>// Check out some of my recent work of out Capstone and Intenship.  </p>
        </div>

        {/* Container */}

        <p className='pb-2'>Internship React JS Project</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

          {/* Grid Item */}
          
          <div style={{backgroundImage:`url(${InternshipImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Web-based Syllabus <br /> <center>Sign Up Page</center> 
              </span>

              <div className='pt-8 text-center'>
                <a href="https://gleaming-zabaione-0886f4.netlify.app" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/LanceMrnd/react-syllabus-project.git" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${InternshipImg1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Web-based Syllabus <br /> <center>Dashboard Page</center> 
              </span>

              <div className='pt-8 text-center'>
                <a href="https://gleaming-zabaione-0886f4.netlify.app" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/LanceMrnd/react-syllabus-project.git" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>


        <p className='pb-2 py-5'>Capstone Project Android Studio</p>
        <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4'>

          {/* Grid Item */}
          
          <div style={{backgroundImage:`url(${CapstoneImg1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                <center>WeHelPets Application</center>  <br /> <center>Log In Page</center> 
              </span>

              <div className='pt-8 text-center'>
                <a href="https://drive.google.com/file/d/1yTT_MttyjcPuJaaYIf-Bqra7Dog-LK95/view?usp=sharing" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/LanceMrnd/wehelppets-app.git" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${CapstoneImg2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              <center>WeHelPets Application</center>  <br /> <center>Home Page</center> 
              </span>

              <div className='pt-8 text-center'>
                <a href="https://drive.google.com/file/d/1yTT_MttyjcPuJaaYIf-Bqra7Dog-LK95/view?usp=sharing" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/LanceMrnd/wehelppets-app.git" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${CapstoneImg3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                <center>WeHelPets Application</center>  <br /> <center>Profile Page</center> 
              </span>

              <div className='pt-8 text-center'>
                <a href="https://drive.google.com/file/d/1yTT_MttyjcPuJaaYIf-Bqra7Dog-LK95/view?usp=sharing" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/LanceMrnd/wehelppets-app.git" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${CapstoneImg4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div1'>
            
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              <center>WeHelPets Application</center>  <br /> <center>Messagi Page</center> 
              </span>

              <div className='pt-8 text-center'>
                <a href="https://drive.google.com/file/d/1yTT_MttyjcPuJaaYIf-Bqra7Dog-LK95/view?usp=sharing" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/LanceMrnd/wehelppets-app.git" target="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work