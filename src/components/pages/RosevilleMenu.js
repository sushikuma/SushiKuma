import React, { useState } from 'react';
import Category from '../menu-items/Category';
import './Menu.css';
import { Link } from 'react-router-dom';

import App from '../menu-items/Roseville/Appetizer';
import Bev from '../menu-items/Roseville/Beverage';
import Des from '../menu-items/Roseville/Dessert';
import Ent from '../menu-items/Roseville/Entree';
import Kid from '../menu-items/Roseville/Kids';
import Nigi from '../menu-items/Roseville/Nigiri';
import Street from '../menu-items/Roseville/StreetFood';
import Roll from '../menu-items/Roseville/Rolls';
import Side from '../menu-items/Roseville/Sides';
import Spe from '../menu-items/Roseville/SpecialRolls';
import Com from '../menu-items/Roseville/SushiCombo';

const RosevilleMenu = () => {
  // categori name : page element
  const cateDict = {
    'Appetizer': <App />, 
    'Nigiri': <Nigi />, 
    'Street Food': <Street />, 
    'Entrée': <Ent />, 
    "Kids' Menu": <Kid />, 
    'Sushi & Sashimi Combo': <Com />, 
    'Rolls': <Roll />, 
    'Kuma Special Rolls': <Spe />, 
    'Side': <Side />, 
    'Alcoholic Beverage': <Bev />, 
    'Beverage & Dessert': <Des />, 
  }

  //jsx container
  const categories = [];

  for (const [catName, page] of Object.entries(cateDict)) {
    categories.push(<Category name={catName}>{page}</Category>);
  }  

  return (
    <>
      <div id='title'>
        <h3>
          Roseville
        </h3>
      </div>

      <div className='menu-div'>
        <div className='warning'>
          <p>*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.<br />*Our menu and prices are subject to change.<br />*18% gratuity will be added for parties of six or more.</p>
        </div>
        {categories}
      </div>

      <Link to='/menu'>
        <button id='back-btn'>Back</button>
      </Link>
    </>
  );
}

export default RosevilleMenu;
