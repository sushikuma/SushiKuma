import React from 'react';
import './Page.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FindUs from './pages/FindUs';
import Reservation from './pages/Reservation';
import EdhMenu from './pages/EldoradoMenu';
import RosevilleMenu from './pages/RosevilleMenu';
import {
  Switch,
  Route
} from "react-router-dom";

const Page = ( props ) => (
  <Switch>
    <div id='page'>
      <Route path='/' exact component={Home} />
      <Route path='/menu' exact component={Menu} />
      <Route path='/findus' component={FindUs} />
      <Route path='/reservation' component={Reservation} />
      <Route path='/eldoradohills' component={EdhMenu} />
      <Route path='/roseville' component={RosevilleMenu} />
    </div>
  </Switch>
);

export default Page;
