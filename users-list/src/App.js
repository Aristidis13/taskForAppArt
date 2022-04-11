import React from 'react';
import './App.css';
import Boxes from './Common/Boxes';
import Header from './Common/Header';
import Menu from './Common/Menu';
import {initialState} from './redux/initialState';
import reducer from './redux/reducer';
import UsersList from './UsersList';
import ChartComponent from './Chart/ChartComponent';
import NavigationButtons from './NavigationButtons';

export const MenuState = React.createContext();
export const PageNumber = React.createContext();

const App = () => {
  const [menuIsOpen,setMenuIsOpen] = React.useReducer(reducer, initialState);
  const [pageNum,setPageNum] = React.useReducer(reducer, initialState);
  return ( <MenuState.Provider value={{stateOfMenu:menuIsOpen,setMenuStateObj:setMenuIsOpen}}>
    <div className="App">
      <Header />
      <main id="main">
        <Menu />
        <Boxes />
        <PageNumber.Provider value={{stateOfPageNumber:pageNum,setPageNumber:setPageNum}}>
          <UsersList />
          <NavigationButtons />
          <ChartComponent />
        </PageNumber.Provider>
      </main>
    </div>
  </MenuState.Provider>)
};

export default App;
