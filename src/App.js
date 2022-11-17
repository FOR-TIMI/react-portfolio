import './App.css';
import Nav from '../src/components/Nav'
import React,{useState} from 'react'
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Footer from './components/Footer';



function App() {
  
  // When the user scrolls down 20px from the top of the document, show the button
  return (
    <section>
      {/* Header */}
      <Nav/>
      <main className='md:container mx-auto md:w-4/5'>
        {/* Home */}
        <Home/>
        {/* ScrollToTop button  */}
        <ScrollToTop/>  
      </main>

      {/* footer */}
      <Footer/>
       
    </section>
  );
}

export default App;
