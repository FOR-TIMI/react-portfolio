import React from 'react'
import Element from '../Element'
import { Link } from 'react-scroll';
import name from '../../assets/Images/name.svg'


function Hero() {

  const styles = { fontFamily : 'jetBrains Mono' }
  return (
    <section>
          <section className="flex my-6 flex-col h-100 md:mt-72 md:pb-6 items-start justify-center">
              {/* Hero section  */}
              <section className="flex  flex-grow w-100 h-100">
                {/* h1Tag  */}
                <Element htmlElement='h1'/>

                {/* Hero */}
                <section className='w-full py-3'>
                  <section className=' text-white flex flex-col font-semibold flex-grow'>
                      <h1 className='text-5xl md:text-6xl' style={styles}>
                        Hello,
                      </h1>
                      <h1 className='text-5xl   md:text-6xl flex items-center m-0 p-0  ' style={styles}>
                      I'm <img className='pl-3  w-[60px] md:w-20 overflow-hidden m-0 p-0' src={name} alt="logo" />imi,
                      </h1>
                      <h1 className='text-4xl  lg:text-5xl' style={styles}>
                      web developer
                      </h1>

                  </section>
              </section>
              </section>  

              <section className="flex  h-100  space-x-3 ">
                <Element htmlElement='p'/>
                <p className=' py-3'>Front-End/Back-End Developer</p>
              </section> 

              {/* contact Button  */}
              <Link 
              to='contact' 
              className='ml-7 cursor-pointer mt-8 duration-500 transition-all ease-in border py-2 px-5 hover:bg-transparent  border-blue-500 hover:text-blue-500 bg-blue-500 text-white'
              spy={true}
              smooth={true}
              duration={500}
              >

              Contact me
              </Link>
          </section>

    </section>

  )
}

export default Hero