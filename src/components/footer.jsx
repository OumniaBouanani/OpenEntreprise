import React from "react";
import Logo from '../assets/Logo.png'




const Footer = () => {
    return (
        <div class='md:max-w-[1480px] max-w-[600px] mb-8 m-auto mt-6 w-full h-full flex justify-between items-center md:px-0 px-4'>
            <img src={Logo} alt='logo' class='ml-8 h-[32px]'></img>
            <div class='hidden md:flex item-center'>
                <ul class='flex gap-4 font-light text-lg'>
                    <li class='pr-8'>Documentation</li>
                    <li class='pr-8'>Github</li>
                    <li class='pr-8'>Twitter</li>
                    <li class='text-[#71A894] pr-8'>Contact us</li>
                </ul>
            </div> 
        </div>
    )

}


export default Footer