import React from 'react';
import './App.css';
import Boxes from './Common/Boxes';
import Header from './Common/Header';
import Menu from './Common/Menu';
import {initialState} from './redux/initialState'
import reducer from './redux/reducer';

export const MenuState = React.createContext();

const App = () => {
  const [menuIsOpen,setMenuIsOpen] = React.useReducer(reducer, initialState);
  return ( <MenuState.Provider value={{stateOfMenu:menuIsOpen,setMenuStateObj:setMenuIsOpen}}>
    <div className="App">
      <Header />
      <main id="main">
        <Menu />
        <Boxes />
      </main>
    </div>
  </MenuState.Provider>)
};

export default App;
