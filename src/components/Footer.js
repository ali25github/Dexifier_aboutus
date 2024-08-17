import React from 'react'
import './Footer.css'
import img16 from '../assets/img16.svg';
import img17 from '../assets/img17.svg';
import img18 from '../assets/img18.svg';
import img19 from '../assets/img19.svg';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer-p'>Copyright © 2024,Dexifier.  |</p>
      <div className='footer-img'>
        <img className='footer1-img' src={img16} />
        <img className='footer1-img' src={img17} />
        <img className='footer1-img' src={img18} />
        <img className='footer1-img' src={img19} />
      </div>
    </div>
  )
}

export default Footer
