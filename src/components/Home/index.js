import React from 'react'
import About from '../About'
import Banner from '../Banner'
import Element from '../Element'
import Portfolio from '../Portfolio'



function Home() {
  

  return (
    <section>
    
    <section className='mt-36  md:mt-0 h-screen  w-full flex justify-start items-center'>
        <section className="flex  justify-start">
        <section className=" flex md:mt-36 h-screen">      
          {/* html */}
          <Element  boilerplateElement='html'/>

          {/* body */}
          <Element  boilerplateElement='body'/>
      </section>

    </section>


    <section className="flex my-6 flex-col h-100 md:mt-72 md:pb-6 items-start justify-center">

      <section className="flex  flex-grow w-100 h-100">
        {/* h1Tag  */}
        <Element htmlElement='h1'/>
        {/* Banner */}
        <Banner/>
      </section>  

      <section className="flex  h-100  space-x-3 ">
        <Element htmlElement='p'/>
        <p className=' py-3'>Front-End/Back-End Developer</p>
      </section> 

    {/* Resume Button  */}
    <a href='#' className='ml-7 mt-8 duration-500 transition-all ease-in border py-2 px-5 hover:bg-transparent  border-blue-500 hover:text-blue-500 bg-blue-500 text-white'>
    Contact me
    </a>

    
    </section>
    
    
  </section>

    
  {/* About  */}
  <About/>

  {/* Portfolio  */}
  <Portfolio/>

     


        



       
</section>
  )
}

export default Home