import React from 'react';
import './About_us.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

function About_us() {
  return (
    <div className='homepage'>
      <Navbar />
      <div className='body'>
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default About_us