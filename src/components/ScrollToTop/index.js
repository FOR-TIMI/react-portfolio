import React,{useEffect, useState} from 'react';
import {BiArrowFromBottom} from 'react-icons/bi'

function ScrollToTop() {

  const [isScrolled, setIsScrolled] = useState(false);


  const toggleVisibility = () => {
    if(window.pageYOffset > 300){
      setIsScrolled(true)
    } else{
      setIsScrolled(false)
    }
  }

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={handleClick}
        className={`
        ${isScrolled ? 'opacity-100' : 'opacity-0'}
        bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2
        `
         
        }
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop