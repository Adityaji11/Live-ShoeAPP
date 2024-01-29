import React from 'react'

import "../Footer/Footer.css";
import { Link } from 'react-router-dom';
import footersvg from "../../../Images/footersvg.png"

const Footer = () => {
  return (
    <>
    <div className='footer-main'>
    <div className='footer-container'>
      <h1>JOIN THE CORE CLUB</h1>
      <div className='footer-subscribe'>
        <div className='footer-form'><input type="email" placeholder='Enter your email address' /></div>
        <div className='footer-form'><button><span>Subscribe</span></button></div>
      </div>
    </div>
    <div className='footer-conatiner-1'>
      <div className='footer-1 f1'>
        <div><h1>Shoe'sGear</h1></div>
        <div><p>Super class, cute, comfortable. You can wear them with just about anything.</p></div>
      </div>
      <div className='footer-2 f1'>
        <div><h3>COMPANY</h3></div>
        <div><p>184 Main Rd E, St Albans VIC 3021, Australia.</p></div>
        <div><p>+84 (0)387 392 056Hello@domain.com</p></div>
      </div>
      <div className='footer-3 f1 ful'>
        <div><h3>INFORMATION</h3></div>
        <div>
          <ul>
            <li><Link className="link-without-underline">About us</Link></li>
            <li><Link className="link-without-underline">Contact us</Link></li>
            <li><Link className="link-without-underline">FAQs</Link></li>
            <li><Link className="link-without-underline">Blog</Link></li>
          </ul>
          </div>
      </div>
      <div className='footer-4 f1 ful'>
        <div><h3>QUICK LINKS</h3></div>
        <div>
          <ul>
            <li><Link className="link-without-underline">My Account</Link></li>
            <li><Link className="link-without-underline">Cart</Link></li>
            <li><Link className="link-without-underline">Wishlist</Link></li>
            <li><Link className="link-without-underline">Product Compare</Link></li>
          </ul>
          </div>
      </div>
      <div className='footer-5 f1 ful'>
        <div><h3>COLLECTIONS</h3></div>
        <div>
          <ul>
            <li><Link className="link-without-underline">All Products </Link></li>
            <li><Link className="link-without-underline">Best Sellers</Link></li>
            <li><Link className="link-without-underline">New Arrivals</Link></li>
            <li><Link className="link-without-underline">Accessories</Link></li>
          </ul>
          </div>
      </div>
    </div>
    <div className='footersvg'>
      <div  >
        <img src={footersvg} alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer