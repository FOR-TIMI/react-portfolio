import React from 'react'
import Element from '../Element'
import Skill from '../Skill'

function About() {

  return (
    <section className='h-screen pt-36 md:pt-24' id='about'>
        {/* Title  */}
        <section className='flex'>
            <Element  htmlElement='h2'/>
            <h2 className='p-4 text-blue-500 text-2xl font-semibold '>About me</h2>
        </section>

        {/* About text  */}
        <section className='flex flex-wrap justify-between'>
           <section className="flex flex-start h-full md:w-1/2 my-3">
            <Element htmlElement='p'/>
            <p className='px-4 py-28  text-white'>Hello, There. I'm Femi-Ladiran Erifeoluwa but everyone calls me Timi.
                I am a Web Developer that specializes 
                in building creative and intuitive 
                full stack web applications . 
                Detail-oriented, independent problem
                solver who is well-organized. 
                Soccer, piano, and outdoor activity 
                enthusiast.
                interested in building full stack applications
                and working on ambitious projects and 
                positive people.
                Let's build something useful together
            </p>
           </section>

           {/* skill globe  */}
           <section className='md:w-1/2 content'>
              <Skill/>
           </section>
        </section>
    </section>
  )
}

export default About