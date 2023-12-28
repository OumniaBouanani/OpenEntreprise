import React from 'react'
import image from '../assets/Landing.png'


const Hero = () => {
    return(
        <div className='w-full'>
            <div className='md:max-w-[1480px] md:m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0'>
                <div className='flex flex-col justify-start gap-4 ml-8 md:ml-16 py-24'>
                    <h1 className='text-4xl md:text-6xl font-extrabold mt-8 md:mt-16 leading-tight'>A new model for open collaboration</h1>
                    <p className='text-[20px] text-left text-[#66645E]'>Run an organization where members get rewarded for their contributions with fractional ownership.</p>
                    <button className='bg-[#71A894] text-white text-xl w-64 h-16 rounded-lg mt-24 md:mt-12'>Request early access</button>
                </div>
                <div>
                    <img src={image} className='hidden md:flex'></img>
                </div>
            </div>
            

        </div>
    )
}



export default Hero