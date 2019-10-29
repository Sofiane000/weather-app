import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware } from 'redux';

import weatherReducer from './weatherReducer';

export default combineReducers({
    weatherReducer,
}, applyMiddleware(thunk));