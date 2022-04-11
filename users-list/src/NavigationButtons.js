import React from 'react';
import {PageNumber} from './App';
import {PREVIOUS_PAGE_BTN_PRESSED,NEXT_PAGE_BTN_PRESSED} from './redux/actionTypes';

const NavigationButtons = (props) => {
    const pageNumber = React.useContext(PageNumber);
    return (<div className="changePage">
    <button className="nextButton"
            onClick={ ()=> pageNumber.setPageNumber({type:PREVIOUS_PAGE_BTN_PRESSED })}>Previous Page </button>
    <button className="nextButton"
            onClick={ ()=> pageNumber.setPageNumber({type:NEXT_PAGE_BTN_PRESSED })}>Next Page</button>
  </div>)
}

export default NavigationButtons