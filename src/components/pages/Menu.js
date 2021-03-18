import React from 'react';
import { Link, Route } from 'react-router-dom';


const Menu = ( props ) => (
  <div className="pages">
    <div className="location-page">
      <div className="location-selector" id="menu-page/locations">
        <Link id="menu-selector-btn" to='/menu/eldoradohills'>
          <button>
            El Dorado Hills
          </button>
        </Link>

        <Link id="menu-selector-btn" to='/menu/roseville'>
          <button>
            Roseville
          </button>

        </Link>
      </div>
    </div>
  </div>
);

export default Menu;
