import React from 'react'
import './Body.css'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.svg';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.svg';
import img17 from '../assets/img17.svg';
import img18 from '../assets/img18.svg';
import img19 from '../assets/img19.svg';
import { Margin, Padding } from '@mui/icons-material';

function Body() {
  return (
    <div>
      <div className='container1'>
        <h1 className='container1_h1'><span className='container1_span'>Easy</span> & Infinite Exchange routes</h1>
        <div className='container1_middle'>
          <img className='container1-img' src={img1} />
          <div className='container1_p'>
            <p className='container1_p'>We automatically find the fastest & cheapest trade routes for you.</p><br />
            <p className='container1_p'>With 50+ Blockchains supported,and 1000s of coins, there are no limits to what you can trade.</p>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='container2_middle'>
          <div className='container2_p'>
            <h1 className='container2_h1'><span className='container2_span'>Privacy</span> comes first</h1>
            <p className='container2_p'>At Dexifier, we believe in the unalienable right to privacy and freedom in the financial world. In a landscape cluttered with mandatory sign-ups and invasive KYC checks, we stand apart. Dexifier is your gateway to a decentralized exchange experience that fiercely protects your anonimity and financial privacy.<br /><br /><span className='container2_span2'>No Logins, No Cookies, No KYC -- EVER.</span></p>
          </div>
          <div className='container2_buttons'>
            <div className='container2_button'>No logins/ signups</div>
            <div className='buttonn'>
              <h1 className='container2_button1'>No cookies</h1>
              <h1 className='container2_button2'>No kyc</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container3'>
        <div className='container3_middle'>
          <div className='container3_first'>
            <h1 className='container3_h1'><span className='container3_span'>24/7</span> Customer Support</h1>
            <p className='container3_p'>Having trouble with a ap? Head to our Discord, open a ticket or ask a question. Our international team & community are ready to help, around the clock.</p><br /><br /><br />
            <button className='container3_button'>Join Discord</button>
          </div>
          <img className='container3-img' src={img2} />
        </div>
      </div>

      <div className='container4'>
        <div className='container4_middle'>
          <div className='container4_first'>
            <h1 className='container4_h1'><span className='container3_span'>Wallets</span> & Projects supported</h1>
            <img className='container4-img1' src={img3} />
          </div>
          <div className='images'>
            <img className='container4-img' src={img4} />
            <img className='container4-img' src={img5} />
            <img className='container4-img imggggg' src={img6} />
            <img className='container4-img' src={img7} />
            <img className='container4-img' src={img8} />
            <img className='container4-imgg' src={img9} />
            <img className='container4-img2' src={img10} />
            <img className='container4-img2' src={img11} />
            <img className='container4-img2 imgg' src={img12} />
            <img className='container4-img2' src={img13} />
            <img className='container4-img2' src={img14} />
            <p className='container4-p'>Many More...</p>
          </div>
        </div>
      </div>

      <div className='container5'>
        <div className='container5_middle'>
          <div className='container5_first'>
            <div className='container5_second'>
              <h1 className='container5_h1'><span className='container5_span'>Join</span> Our Community!</h1>
              <p className='container3_p'>Discover the latest insights on Discord, engage with fellow crypto enthusiasts on Telegram, follow our pulse on Twitter, catch our informative and entertaining videos on YouTube.</p><br /><br /><br />
              <div className='images1'>
              <img className='container5-img' src={img16} />
              <img className='container5-img' src={img17} />
              <img className='container5-img' src={img18} />
              <img className='container5-img' src={img19} />
              </div>
            </div>
          </div>
          <img className='container5-img1' src={img15} />
        </div>
      </div>

    </div>
  )
}

export default Body
