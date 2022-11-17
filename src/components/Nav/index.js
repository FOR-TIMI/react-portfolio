import React,{useState,useEffect} from 'react';
import { Link } from 'react-scroll';


function Nav(){
   const links = [
     { name: 'About', link : 'about'},
     {name: 'Portfolio' ,link: 'portfolio'},
     {name: 'Contact', link: 'contact'}
   ] 

   const [isScrolled, setIsScrolled] = useState(false);


   const toggleNavBar = () => {
     if(window.pageYOffset > 50){
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
 
   
  const styles = {fontFamily: 'Grand Hotel'}
  



   return (
    <header className={`w-full z-50 transition-all duration-300 ease-in ${isScrolled ? 'md:drop-shadow-2xl bg-[#181818]' : 'py-1 '} fixed top-0 w-full block` }>
        <nav className='flex  items-center flex-col w-full  md:flex-row  md:justify-around p-3 md:p-0 '>
            {/* logo */}
            <section className="nav-brand">
              <Link
              className=' duration-500 cursor-pointer text-white text-4xl hover:text-blue-500 transition-all ' 
              style={styles}
              spy={true}
              smooth={true}
            
              duration={500}
              >
              Timi
              </Link>
            </section>
            
            {/* nav links */}
            <ul className='flex justify-center items-center md:space-x-7 sm:w-100 p-3 md:p-0'>
            {links.map(({name,link}) => (
                <li key={name}>                   
                  <Link
                  className='cursor-pointer p-3 duration-500 hover:text-blue-500'
                  activeClass="text-blue-500"
                  to={link} 
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >{name}</Link>
                </li>
            ))}
            </ul>
            
            {/* Resume Button  */}
            <a href='https://1drv.ms/b/s!AjKXavfHzDrCcUu_D3pOjSFcq5M?e=3HuJse' 
            className='hover:text-blue-500 sm:my-3 duration-500 transition-all ease-in md:border md:py-2 md:px-5 md:border-blue-500 md:text-blue-500 md:hover:bg-blue-500 md:hover:text-white'
            target="_blank" 
            rel="noopener noreferrer"
            >
                Resume
            </a>
        </nav>
    </header>
   )

}

export default Nav