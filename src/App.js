import './App.css';
import Nav from '../src/components/Nav'
import React from 'react'
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';



function App() {
  
  // When the user scrolls down 20px from the top of the document, show the button
  return (
    <section>
      {/* Header */}
      <Nav/>
      <main className='md:container mx-auto md:w-4/5'>

      {/* html tags */}
      <Home/>

      {/* Banner */}

      {/* Portfolio */}
     
    

      {/* About */}

      {/* Scroll to top */}
      <ScrollToTop/>
        
      </main>
      {/* footer */}

    </section>
  );
}

export default App;
