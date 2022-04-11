import React from 'react';

const PrevNavBtn = (props) => <button className={props.classes}
    onClick={ ()=> pageNumber.setPageNumber({type:PREVIOUS_PAGE_BTN_PRESSED })}>
        Previous Page
</button>

export default PrevNavBtn