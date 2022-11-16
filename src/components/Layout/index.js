import React from 'react'
import Banner from '../Banner'
import Element from '../Element'

function Layout() {
  
  const styles = {fontFamily: 'Grand Hotel'}

  return (
    <section className='mt-36  md:mt-2 h-screen w-full flex justify-start items-center'>
        
    <section className="flex  justify-start">
            <section className=" flex md:mt-36">      
              {/* html */}
                    <section className="items-center w-10 mr-0 ml-0 flex flex-col p-0  h-screen">
                        <span className=' text-xs' style={styles}>&#60;html&#62;</span>
        
                        <div className='border border-[#707070] border-l flex grow'></div>
        
                        <span className=' text-xs' style={styles}>&#60;/html&#62;</span>
                    </section>
        
        
    
               {/* body */}
               <section className=" my-3 mr-0 ml-0 flex w-full   h-100" style={styles}>
                   <section className="flex items-center flex-col  text-xs h-75">
                      <span className=' text-xs' style={styles}>&#60;body&#62;</span>
                        <div className='border text-xs border-[#707070] border-l flex grow '></div>
                        <span className=' text-xs' style={styles}>&#60;/body&#62;</span>
                   </section>

                </section>

           </section>

  </section>


  <section className="flex my-6 flex-col h-100 md:mt-36 pb-72 md:pb-6 items-start justify-center">
      
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
      <a href='#' className='ml-7 mt-4 duration-500 transition-all ease-in border py-2 px-5 hover:bg-transparent  border-blue-500 hover:text-blue-500 bg-blue-500 text-white'>
       Contact me
      </a>
 


    </section>

    
     


        



       
</section>
  )
}

export default Layout