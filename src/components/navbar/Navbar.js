import React, { useState, useEffect } from 'react';
import Navbtn from './Navbtn';
import './Navbar.css';
import HeaderNavBtn from './HeaderNavBtn';

const activeHandler = ( btn, logo ) => {
  btn(isBtnActive => true);
  logo(isActive => true);
}

const Navbar = ( props ) => {
  const [isBtnActive, setBtnActive] = useState(false);
  const [btnClicked, setBtnClicked] = useState([]);

  useEffect(() => {
    if ( !props.isLogoActive ) setBtnActive(isBtnActive => false);
    if (window.location.pathname != "/" && isBtnActive == false) {
      setBtnActive(true);
    }
  });

  return (
    <>
      {/* header navbar */}
      <div className={isBtnActive? 'header-nav active' : 'header-nav' }>
        <HeaderNavBtn
          value='Menu'
          isLogoActive={props.isLogoActive}
          btnActiveStatus={isBtnActive}
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler(setBtnActive, props.setLogoActive)}
        />
        <HeaderNavBtn
          value='Find Us'
          isLogoActive={props.isLogoActive}
          btnActiveStatus={isBtnActive}
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler(setBtnActive, props.setLogoActive)}
        />
        <HeaderNavBtn
          value='Reservation'
          isLogoActive={props.isLogoActive}
          btnActiveStatus={isBtnActive}
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler(setBtnActive, props.setLogoActive)}
        />
      </div>

      {/* bottom nav */}
      <div className={isBtnActive? 'main-nav active' : 'main-nav' }>
        <Navbtn
          value='Menu'
          isLogoActive={props.isLogoActive}
          btnActiveStatus={isBtnActive}
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler(setBtnActive, props.setLogoActive)}
        />
        <Navbtn
          value='Find Us'
          isLogoActive={props.isLogoActive}
          btnActiveStatus={isBtnActive}
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler(setBtnActive, props.setLogoActive)}
        />
        <Navbtn
          value='Reservation'
          isLogoActive={props.isLogoActive}
          btnActiveStatus={isBtnActive}
          setActiveDir={props.setActiveDir} 
          btnClicked={[btnClicked, setBtnClicked]}
          onClick={()=>activeHandler(setBtnActive, props.setLogoActive)}
        />
      </div>
    </>
  );
}

export default Navbar;
