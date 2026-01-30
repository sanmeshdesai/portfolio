import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className=' flex justify-center pt-24 pb-32 relative overflow-hidden '>


        <div className='max-w-6xl flex gap-12 px-6 '> 
            <div className='flex items-center flex-col text-center '>
                <p className='text-xl font-medium '>Hii, I'm</p>
                <h1 className='text-7xl mt-2 font-bold'>Sanmesh Desai</h1>
                <h2 className='text-4xl font-bold mt-4'>Full Stack Developer</h2>
                <p className='mt-4 text-lg'>I enjoy building clean, fast web apps and learing how real products scale.</p>
                <p>Currently working with React, Next JS, Node and Mongo DB.</p>

                <div className='mt-6 flex gap-8'>
                    <button className='bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-md'>View Projects</button>
                    <button className='border rounded-md p-3 border-blue-600 text-blue-600 hover:bg-blue-800 text-base hover:text-white'>Contact Me</button>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Hero
