import reducer from './reducer';
import {createStore} from 'redux'

export const reduxStore = createStore(reducer);