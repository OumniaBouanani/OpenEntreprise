import React from "react";
import Logo from '../assets/Logo.png'




const Footer = () => {
    return (
        <div class='md:max-w-[1480px] max-w-[600px] mb-8 m-auto mt-6 w-full h-full flex justify-between items-center md:px-0 px-4'>
    <img src={Logo} alt='logo' className='hidden md:flex md:ml-8 md:w-[200px]'></img>
    <div class='flex items-center'>
        <ul className='flex gap-4 font-light sm:text-sm md:text-lg'>
            <li class='pr-8 hover:text-[#376655]'><a href="#">Documentation</a></li>
            <li class='pr-8 hover:text-[#376655]'><a href="https://github.com/">Github</a></li>
            <li class='pr-8 hover:text-[#376655]'><a href="http://twitter.com/">Twitter</a></li>
            <li class='text-[#71A894] pr-8 hover:text-[#376655]'><a href="">Contact us</a></li>
        </ul>
    </div> 
</div>

    )

}


export default Footer