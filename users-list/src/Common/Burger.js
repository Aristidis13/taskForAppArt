import React from 'react';
import {MenuState} from '../App'
import {BURGER_MENU_CLICKED} from '../redux/actionTypes'

const Burger = () => {
  const menuState = React.useContext(MenuState);
  return( 
  <div className="menu-btn" onClick={()=> menuState.setMenuStateObj({type:BURGER_MENU_CLICKED })}>
    <div className="line line0"></div>
    <div className="line line1"></div>
    <div className="line line2"></div>
  </div>);
}

export default Burger