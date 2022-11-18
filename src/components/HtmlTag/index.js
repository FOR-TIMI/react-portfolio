import React from 'react'
import Element from '../Element'

function HtmlTag() {
  return (
    <section className="flex  justify-start">
      <section className=" flex md:mt-36 h-screen">      
        {/* html */}
        <Element  boilerplateElement='html'/>

        {/* body */}
        <Element  boilerplateElement='body'/>
      </section>
</section>
  )
}

export default HtmlTag