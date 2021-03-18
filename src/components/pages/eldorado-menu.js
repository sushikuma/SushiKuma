import React, { useState } from 'react';
import Category from '../menu-items/Category';
import ReactDOMServer from 'react-dom/server';
import { Link } from 'react-router-dom';

import App from '../menu-items/Eldorado/Appetizer';
import Bev from '../menu-items/Eldorado/Beverage';
import Des from '../menu-items/Eldorado/Dessert';
import Ent from '../menu-items/Eldorado/Entree';
import Kid from '../menu-items/Eldorado/Kids';
import Nigi from '../menu-items/Eldorado/Nigiri';
import Rol from '../menu-items/Eldorado/Rolls';
import Side from '../menu-items/Eldorado/Sides';
import Spe from '../menu-items/Eldorado/SpecialRolls';
import Com from '../menu-items/Eldorado/SushiCombo';


const EldoradoMenu = () => {
  const [isCatActive, setCatActive] = useState('menu-content');

  return (
    <>
      <div id='title'>
        <h3>
          El Droado Hills
        </h3>
      </div>

      <div className='menu-div'>
        <Category name='Appetizer'><App/></Category>
        <Category name='Nigiri'><Nigi/></Category>
        <Category name='Entrée'><Ent/></Category>
        <Category name="Kids' Menu"><Kid/></Category>
        <Category name='Sushi & Sashimi Combo'><Com/></Category>
        <Category name='Rolls'><Rol/></Category>
        <Category name='Kuma Special Rolls'><Spe/></Category>
        <Category name='Side'><Side/></Category>
        <Category name='Alcoholic Beverage'><Bev/></Category>
        <Category name='Beverage & Dessert'><Des/></Category>
      </div>

      <Link to='/menu'>
        <button id='back-btn'>Back</button>
      </Link>
    </>
  );
}

export default EldoradoMenu;
