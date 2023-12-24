import React from 'react'
import Logo from '../assets/Logo.png'

const NavBar = () => {
    return (
        <div class='md:max-w-[1480px] max-w-[600px] m-auto mt-6 w-full h-full flex justify-between items-center md:px-0 px-4'>
            <img src={Logo} alt='logo' class='ml-8'></img>
            <div class='hidden md:flex item-center'>
                <ul class='flex gap-4 font-light text-lg'>
                    <li class='pr-8'>Why Open Enterprise</li>
                    <li class='pr-8'>Features</li>
                    <li class='pr-8'>Contribute</li>
                    <li class='text-[#71A894] pr-8'>Request Early access</li>
                </ul>
            </div>
            
        </div>
    )
    
}


export default NavBar