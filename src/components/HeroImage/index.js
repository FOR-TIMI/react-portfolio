import React from 'react'
import heroImage from '../../assets/Images/hero.svg'

function HeroImage() {
  return (
    <div className=' w-[30%] hidden h-full xl:w-[60%] md:flex justify-center items-center'>
        <img  className='float-right mt-20' src={heroImage} alt="logo" />
    </div>
  )
}

export default HeroImage