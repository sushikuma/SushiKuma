import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import HeaderNav from './navbar/HeaderNav';
import './Header.css';
import {
  Link
} from "react-router-dom";

const activeHandler = () => {
  if (window.location.pathname =! "/") {

  }
}

const Header = ( ) => {
  const [isActive, setActive] = useState(false);
  const [activeDir, setActiveDir] = useState('');

  useEffect(() => {
    if (window.location.pathname != "/" && isActive == false) {
      setActive(true);
    }
  });

  return (
    <>
      <Link to='/'>
        <div id='header-logo' className={isActive? 'active' : null}>
          <a>
            <img
              id="logo-img"
              className={isActive? 'active' : null}
              src="images/kuma-logo.png"
              alt="logo"
              onClick={()=>setActive(isActive => false)}
            />
          </a>
        </div>
      </Link>
      <Navbar setLogoActive={setActive} isLogoActive={isActive} setActiveMenu={setActiveDir} />
    </>
  );
}

export default Header;
