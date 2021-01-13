import {combineReducers, createStore} from 'redux';
import authorReducer from './AuthorPage-reducer';
import mainReducer from './MainPage-reducer';
import searchReducer from './SearchPage-reducer';

let reducer =  combineReducers({
   authorPage: authorReducer,
   mainPage: mainReducer,
   searchPage: searchReducer,

});

let store = createStore(reducer);

window.store = store;

export default store;
