import * as actions from './actionTypes'
import {initialState} from './initialState'

const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actions.BURGER_MENU_CLICKED:
        return { ...state, menuIsOpen: !state.menuIsOpen}
      case actions.NEXT_PAGE_BTN_PRESSED:
        return { ...state, pageNum: state.pageNum + 1 <=9 ? state.pageNum +1 : 9}
      case actions.PREVIOUS_PAGE_BTN_PRESSED:
        return { ...state, pageNum: state.pageNum -1 >= 0 ? state.pageNum -1 : 0}
      default: return state;
    }
};

export default reducer;