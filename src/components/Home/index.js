import React from 'react'
import About from '../About'
import Hero from '../Hero'
import Contact from '../Contact'
import Portfolio from '../Portfolio'
import HtmlTag from '../HtmlTag'



function Home() {
  

  return (
    <section>
    
      <section className='mt-36  md:mt-0 h-screen  w-full flex justify-start items-center'>
      {/* HTML and body tag  */}
      <HtmlTag/>  
      {/* Hero Section  */}
      <Hero/>
      </section>
    
      {/* About section  */}
      <About/>

      {/* Portfolio section */}
      <Portfolio/>
    
      {/* Contact section  */}
      <Contact/>  
    </section>
  )
}

export default Home