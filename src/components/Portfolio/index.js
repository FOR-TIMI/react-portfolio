import React from 'react'
import Project from '../Project'
import Element from '../Element'


function Portfolio() {
  const projects = [ 
    { 
      name: 'Berg Maps'
    , tools: 'HTML/CSS/JavaScript',
    link: 'https://for-timi.github.io/BERG-Maps/'
   },
    { name: 'Quiz app',
     tools: 'HTML/CSS/JavaScript',
     link: 'https://for-timi.github.io/Quiz-Project/'
   },
    { name: 'weather app', 
     tools: 'HTML/CSS/Jquery',
     link: 'https://for-timi.github.io/weather-App/'
   },
    { name: 'weBlog', 
     tools: 'Hbs/SQL/Express/NodeJs',
     link: 'https://bloggersintech.herokuapp.com/login'
   },
    { name: 'AutoAuto', 
     tools: 'Hbs/JavaScript/SQL/Express/NodeJs',
     link: 'https://stormy-wildwood-35895.herokuapp.com/'
   }, 
]
  return (
    <section className='h-full pt-44 md:pt-24 mb-10' id='portfolio'>
      <section className='flex'>
      <Element  htmlElement='h2'/>
      <h2 className='p-4 text-blue-500 text-2xl font-semibold '>Portfolio</h2>
      </section>

      <section className='flex'>
        <Element htmlElement='p'/>
        <p className='max-w-full md:w-9/12 text-sm md:text-lg text-white pl-4 py-4'>Only a small selection of my latest work is displayed here. 
          Together with a few incredible individuals, I worked on all.
          In relation to the complete list, it is but a drop in the bucket.
          To see some more, checkout my <a target="_blank" 
                      rel="noopener noreferrer" 
            className='text-blue-500 hover:text-blue-300 transition-all duration-300' href="https://github.com/FOR-TIMI?tab=repositories">Github</a> page
        </p>

      </section>

      <section>
        <section className="flex p">
          <Element htmlElement='section'/>
          <section className="row py-10 flex flex-col w-full h-full">
            <section className='row w-full flex flex-wrap'>

              {projects.map(({name,tools,link}) => (
                <section key={name}>
                  <Project name={name} link={link} tools={tools}/>
                </section>
              ))
              }

            </section>
                   {/* View more Button  */}
            <a  href='https://github.com/FOR-TIMI?tab=repositories' 
            className='ml-3 text-blue-500 w-36 mt-5  px-5 py-2 duration-500 transition-all ease-in border  border-blue-500 hover:bg-blue-500 hover:text-white'
            target="_blank" 
            rel="noopener noreferrer"
            >
                view more
              </a>
                      
          </section>
      </section>
           

      </section>
      
    </section>
  )
}

export default Portfolio