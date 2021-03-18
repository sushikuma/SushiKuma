import React, { useState, useEffect } from 'react';
import './Navbtn.css';
import { Link } from "react-router-dom";

const clickHandler = ( onClick, setClicked, btnClicked, btnName, setActiveDir ) => {
  onClick();
  setClicked(isClicked => true);
  btnClicked[1](btnName);
  // setActiveDir(btnName);
}

const Navbtn = ( props ) => {
  const [isClicked, setClicked] = useState(false);
  const [classNames, setClassNames] = useState('');

  let btnVal = '/' + props.value.toLowerCase().replace(/ /g, '');

  useEffect(() => {
    if (props.isLogoActive) {
      setClassNames(`${props.btnActiveStatus? "active" : null} ${(isClicked && props.value == props.btnClicked[0])? "clicked" : null}`);
    } else {
      setClassNames('');
    }

    let address = window.location.pathname.slice(1);
    if (address == props.value.toLowerCase().replace(/ /g, '')) {
      clickHandler(props.onClick, setClicked, props.btnClicked, props.value);
    }
  });

  return (
    <Link style={{margin: '0px 10px'}} to={btnVal}>
      <button id='navBtn'
        className={classNames}
        onClick={() => clickHandler(props.onClick, setClicked, props.btnClicked, props.value, props.setActiveDir)} >
          {props.value}
      </button>
    </Link>
  );
    
}

export default Navbtn;
