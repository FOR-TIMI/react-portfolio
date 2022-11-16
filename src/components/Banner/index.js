import React from 'react'


function Banner() {

  const styles = { fontFamily : 'jetBrains Mono' }
  const logoFont =  {fontFamily: 'Grand Hotel'}
  return (
    <section className='w-full py-3 text-white flex flex-col font-semibold flex-grow'>
    <h1 className='text-4xl md:text-7xl ' style={styles}>
      Hello,
    </h1>
    <h1 className='text-4xl md:text-7xl   ' style={styles}>
     I'm Timi,
    </h1>
    <h1 className='text-4xl md:text-7xl  text-[#A9A6A6]' style={styles}>
     Full stack developer
    </h1>

 </section>
  )
}

export default Banner