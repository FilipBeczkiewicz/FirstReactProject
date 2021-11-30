import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ logo, hamburger, close }) {
  const [menu, setMenu] = useState(false);

  const openMenuHandle = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className='nav__container'>
      <nav className='nav'>
        <div className='nav__logo'>
          <img src={logo} alt='' />
        </div>
        <ul className='nav__links' style={{ height: menu ? "100%" : "0" }}>
          <li style={{ opacity: menu ? "1" : "0" }}>
            <Link to='/about'>About</Link>
          </li>
          <li style={{ opacity: menu ? "1" : "0" }}>
            <Link to='/careers'>Careers</Link>
          </li>
          <li style={{ opacity: menu ? "1" : "0" }}>
            <Link to='/events'>Events</Link>
          </li>
          <li style={{ opacity: menu ? "1" : "0" }}>
            <Link to='/products'>Products</Link>
          </li>
          <li style={{ opacity: menu ? "1" : "0" }}>
            <Link to='/support'>Support</Link>
          </li>
        </ul>
        <div className='nav__buttons'>
          <img
            src={menu ? close : hamburger}
            alt=''
            className='button'
            onClick={openMenuHandle}
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
