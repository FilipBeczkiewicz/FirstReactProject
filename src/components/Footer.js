import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP, FaInstagram } from "react-icons/fa";

function Footer({ logo }) {
  return (
    <div id='footer'>
      <div className='footer__container'>
        <nav className='footer__nav'>
          <div className='footer__logo'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <ul className='footer__links'>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/careers'>Careers</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/support'>Support</Link>
            </li>
          </ul>
        </nav>
        <div className='footer__icons'>
          <div className='icons'>
            <AiOutlineFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <FaPinterestP className='icon' />
            <FaInstagram className='icon' />
          </div>
          <div className='copyright'>
            2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
