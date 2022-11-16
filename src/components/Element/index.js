import React from 'react'

function Element({ htmlElement}) {

  const styles =  {fontFamily: 'Grand Hotel'}
  
  return (
    <section className='flex-col flex items-center' style={styles}>
        <span className='htmltag text-xs'>&#60;{htmlElement}&#62;</span>
        <div className='border border-[#707070] border-l flex grow'></div>
        <span className='htmltag text-xs'>&#60;/{htmlElement}&#62;</span>
  </section>
  )
}

export default Element