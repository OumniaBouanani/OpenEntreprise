import React from 'react';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Contribute from './pages/Contribute';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Features/>
      <Contribute/>
      <Footer/>
    </div>
    
  )
}

export default App
