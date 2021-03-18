import React, { useState, useEffect } from 'react';
import './HeaderNavBtn.css';
import { Link } from "react-router-dom";

const clickHandler = ( onClick, setClicked, btnClicked, btnName ) => {
  onClick();
  setClicked(isClicked => true);
  btnClicked[1](btnName)
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
    if (address == 'roseville' || address == 'eldoradohills') address = 'menu';
    if (address == props.value.toLowerCase().replace(/ /g, '')) {
      clickHandler(props.onClick, setClicked, props.btnClicked, props.value);
    }
  });

  return (
    <Link style={{margin: '0px 10px'}} to={btnVal}>
      <button id='headerNavBtn'
        className={classNames}
        onClick={() => clickHandler(props.onClick, setClicked, props.btnClicked, props.value)} >
          {props.value}
      </button>
    </Link>
  );
    
}

export default Navbtn;
