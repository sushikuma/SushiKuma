import React, { setState, useState, useEffect } from 'react';


const clickHandler = ( names, setIsMenuActive ) => {
  if (names[0] == 'menu-category') {
    names[1]('menu-category active');
    setIsMenuActive(true);
  } else {
    names[1]('menu-category');
    setIsMenuActive(false);

  }
}

const Category = ( props ) => {
  const [classNames, setClassNames] = useState('menu-category');
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div>
      <button className={classNames} onClick={() => clickHandler([classNames, setClassNames], setIsMenuActive)}>
        {props.name}
      </button>

        {isMenuActive? props.children : null}

    </div>
  );
}

export default Category;
