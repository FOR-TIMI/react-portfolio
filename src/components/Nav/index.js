import React,{useState,useEffect} from 'react';
import './index.css'


function Nav(){
   const links = [
     { name: 'About', link : '#'},
     {name: 'Portfolio' ,link: '#porfolio'},
     {name: 'Contact', link: '#contact'}
   ] 

   const [isScrolled, setIsScrolled] = useState(false);


   const toggleNavBar = () => {
     if(window.pageYOffset > 200){
       setIsScrolled(true)
     } else{
       setIsScrolled(false)
     }
   }
 

   useEffect(() => {
    window.addEventListener('scroll', toggleNavBar)

    return () => {
      window.removeEventListener('scroll', toggleNavBar)
    }
  }, [])
 
   


   return (
    <header className={`header transition-all duration-300 ease-in ${isScrolled ? 'md:drop-shadow-2xl' : 'py-1 '} fixed w-full flex` }>
        <nav className='flex items-center flex-col  md:flex-row  md:justify-around container p-3 md:p-0 '>
            {/* logo */}
            <section className="nav-brand">
              <a href='#' className='logo duration-500 text-white text-4xl hover:text-blue-500 transition-all '>Timi</a>

            </section>
            
            {/* nav links */}
            <ul className='flex justify-center items-center md:space-x-7 sm:w-100 p-3 md:p-0'>
                  {links.map(link => (
                       <li key={link.name}>
                         <a href={link.link} className='cursor-pointer p-3 duration-500 hover:text-blue-500'>{link.name}</a>
                       </li>
                  ))}
            </ul>
            
            {/* Resume Button  */}
            <button className='hover:text-blue-500 sm:my-3 duration-500 transition-all ease-in md:border md:py-2 md:px-5 md:border-blue-500 md:text-blue-500 md:hover:bg-blue-500 md:hover:text-white'>
                Resume
            </button>
        </nav>
    </header>
   )

}

export default Nav