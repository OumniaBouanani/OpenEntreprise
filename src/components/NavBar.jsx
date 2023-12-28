import React from 'react'
import Logo from '../assets/Logo.png'
import { useState } from 'react'
import Contribute from '../pages/Contribute';
import Features from '../pages/Features';
import Hero from '../pages/Hero';

function NavBar()  {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <div className='md:max-w-[1480px] max-w-[600px] m-auto mt-6 w-full h-full flex justify-between items-center md:px-0 px-4 '>
            <img src={Logo} alt='logo' class='md:ml-8 mb-4 md:mb-0 w-[200px]'></img>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}
                className='block text-gray-500 hover:text-[#71A894] focus:outline-none'>
                    <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
                </button>

            </div>
            <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} items-center`}>
                <ul class='flex flex-col md:flex-row gap-4 font-light text-lg '>
                <li class='md:pr-8 mb-2 md:mb-0 hover:text-[#376655]'><a href="#">Why Open Enterprise</a></li>
                <li class='md:pr-8 mb-2 md:mb-0 hover:text-[#376655]'><a href="#">Features</a></li>
                <li class='md:pr-8 mb-2 md:mb-0 hover:text-[#376655]'><a href="#">Contribute</a></li>
                <li class='text-[#71A894] md:pr-8 mb-2 md:mb-0 hover:text-[#376655]'><a href="#">Request Early access</a></li>
                </ul>
            </div>
</div>

    )
    
}


export default NavBar