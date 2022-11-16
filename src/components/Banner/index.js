import React from 'react'


function Banner() {

  const styles = { fontFamily : 'jetBrains Mono' }
  return (
      <section className='w-full py-3'>
        <section className=' text-white flex flex-col font-semibold flex-grow'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl ' style={styles}>
              Hello,
            </h1>
            <h1 className='text-4xl md:text-5xl lg:text-7xl   ' style={styles}>
            I'm Timi,
            </h1>
            <h1 className='text-3xl  lg:text-6xl' style={styles}>
            web developer
            </h1>

        </section>
    </section>
  )
}

export default Banner