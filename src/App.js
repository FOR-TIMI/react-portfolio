import './App.css';
import Nav from '../src/components/Nav'
import React,{useState} from 'react'
import ScrollToTop from './components/ScrollToTop';

function App() {
  
  // When the user scrolls down 20px from the top of the document, show the button
  return (
    <main>
      {/* Header */}
      <Nav/>
      {/* Banner */}
      {/* Portfolio */}
      {/* About */}
      {/* Scroll to top */}
      <ScrollToTop/>
      {/* footer */}
    </main>
  );
}

export default App;
