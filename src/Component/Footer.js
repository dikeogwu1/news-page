import React from 'react'
import { FaRss, FaFacebook, FaTwitter, FaRedditAlien } from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='footer'>
      <section className='footer-container'>
        <div className='footer-logo-box'>
          <img src='./footerLogo.svg' alt='logo' />
        </div>
        <div className='footer-text'>
          <div className='footer-item1'>
            <p>Privacy Policy </p>
            <p>Do not sell my personal info</p>
            <p>Terms of Service</p>
            <p>nbcnews.com Site Map</p>
          </div>
          <div className='footer-item2'>
            <p>About</p>
            <p>Contact</p>
            <p>Careers</p>
            <p>Coupons</p>
          </div>
        </div>
        <div className='footer-icon-wrapper'>
          <div>
            <FaRss className='footer-icon' />
          </div>
          <div>
            <FaTwitter className='footer-icon' />
          </div>
          <div>
            <FaFacebook className='footer-icon' />
          </div>
          <div>
            <FaRedditAlien className='footer-icon' />
          </div>
        </div>
        <div className='footer-underline'></div>
        <p className='copyright'>copyright &copy; 2020 | NBC NEWS</p>
      </section>
    </div>
  )
}

export default Footer
