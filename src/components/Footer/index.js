import React from 'react'
import { AiOutlineLink, AiOutlineInstagram} from 'react-icons/ai';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {MdMail} from 'react-icons/md'

function Footer() {
  return (
    <footer className='container border-l-0 border-r-0 border-t-2 py-5 border-[#282828] border w-full mx-auto'>
        <section className="flex md:flex-row flex-col md:justify-around w-full   mx-auto justify-between items-center">
            {/* icons */}
            <section className="flex justify-center items-center mb-3 md:mb-0 first:px-0 space-x-9 md:space-x-3">
                {/* Instagram */}
               <a href="https://www.instagram.com/for_timi/" 
                className='hover:text-blue-500  text-white transition-all duration-300 text-2xl ease-in'
                target="_blank" 
                rel="noopener noreferrer"
                >
                <AiOutlineInstagram/>
               </a>
               {/* GitHub */}
               <a href="https://github.com/FOR-TIMI" 
                className='hover:text-blue-500  text-white transition-all duration-300 text-xl ease-in'
                target="_blank" 
                rel="noopener noreferrer"
                >
                <BsGithub/>
               </a>
               {/* linkedin */}
               <a href="https://www.linkedin.com/in/erifeoluwa-femi-ladiran/" 
                 className='hover:text-blue-500  text-white transition-all duration-300 text-lg ease-in'
                 target="_blank" 
                 rel="noopener noreferrer"
                 >
                <BsLinkedin/>
               </a>
               {/* mail */}
               <a href="mailto:femiladiranerife24@gmail.com" 
                 className='hover:text-blue-500  text-white transition-all duration-300 text-2xl ease-in'
                 target="_blank" 
                 rel="noopener noreferrer"
                 >
                <MdMail/>
               </a>
               {/* Resume */}
               <a href="https://1drv.ms/b/s!AjKXavfHzDrCcUu_D3pOjSFcq5M?e=C1xscl" 
                 className='hover:text-blue-500 text-white  transition-all duration-300 text-2xl ease-in'
                 target="_blank" 
                 rel="noopener noreferrer"
                 >
                <AiOutlineLink/>
               </a>
      
            </section>

            {/* Copyright  */}
            <section className="icon text-center text-xs md:w-1/2 md:text-end">
              <p className='text-white'>Copyright 2022 &copy; Femi-Ladiran Erifeoluwa</p>
              <a 
              className='text-[#333333]' href="https://github.com/FOR-TIMI/react-porfolio"
              target="_blank" 
              rel="noopener noreferrer"
              >Created by Femi-Ladiran Erifeoluwa</a>
            </section>
        </section>
    </footer>
  )
}

export default Footer