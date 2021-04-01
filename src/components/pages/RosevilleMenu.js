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
import Rol from '../menu-items/Roseville/Rolls';
import Side from '../menu-items/Roseville/Sides';
import Spe from '../menu-items/Roseville/SpecialRolls';
import Com from '../menu-items/Roseville/SushiCombo';

const RosevilleMenu = () => (
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
    <Category name='Appetizer'><App/></Category>
    <Category name='Nigiri'><Nigi/></Category>
    <Category name='Street Food'><Street/></Category>
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

export default RosevilleMenu;
