import React from 'react'

function Element({ htmlElement, boilerplateElement}) {

  const styles =  {fontFamily: 'Grand Hotel'}

  const elements = {
      body : (
      <section className=" my-3 mr-0 ml-0 flex w-full   h-100" style={styles}>
      <section className="flex items-center flex-col  text-xs h-75">
      <span className=' text-xs' style={styles}>&#60;body&#62;</span>
      <div className='border border-[#707070] border-l flex grow '></div>
      <span className=' text-xs' style={styles}>&#60;/body&#62;</span>
      </section>

   </section>
   ),

      html: (
          <section className="items-center mr-0 ml-0 flex flex-col p-0 mb-2  h-screen">
          <span className=' text-xs' style={styles}>&#60;html&#62;</span>
          <div className='border border-[#707070] border-l flex grow'></div>
          <span className=' text-xs' style={styles}>&#60;/html&#62;</span>
         </section>
      ),
      
      [htmlElement]: (
      <section className='flex-col flex items-center mr-0 ml-0' style={styles}>
      <span className='htmltag text-xs'>&#60;{htmlElement}&#62;</span>
      <div className='border border-[#707070] border-l flex grow'></div>
      <span className='htmltag text-xs'>&#60;/{htmlElement}&#62;</span>
      </section>
      )
        
  }
  
  return elements[boilerplateElement] || elements[htmlElement]
  
}

export default Element