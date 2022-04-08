import * as actions from './actionTypes'
import {initialState} from './initialState'

const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actions.BURGER_MENU_CLICKED:
        return { ...state, menuIsOpen: !state.menuIsOpen}
      default: return state;
    }
};

export default reducer;